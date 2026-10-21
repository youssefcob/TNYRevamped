<?php

namespace App\Services\Content;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use RuntimeException;

class StudioService
{
    /**
     * Bumped to invalidate every cached envelope at once — the database
     * cache store has no tags, so the generation is part of each key instead.
     */
    const GENERATION_KEY = 'studio.generation';

    /**
     * How long an envelope is kept as a fallback for when Studio / the CDN
     * is unreachable, well past the point it stops counting as fresh.
     */
    const STALE_DAYS = 7;

    protected static function cacheKey(string $slug): string
    {
        return 'studio.article.'.Cache::get(static::GENERATION_KEY, 0).'.'.$slug;
    }

    /**
     * Where envelopes come from, in the order they are tried: the stored
     * file written at publish time, then (if configured) Studio's render API.
     *
     * @return array<string, string> source name => url
     */
    protected static function sources(string $slug): array
    {
        $templates = [
            'stored-file' => config('services.studio.envelope_url'),
            'render-api' => config('services.studio.fallback_url'),
        ];

        return array_map(
            fn (string $template) => str_replace('{slug}', rawurlencode($slug), $template),
            array_filter($templates),
        );
    }

    /**
     * The published article for a slug, shaped for the Articles/StudioArticle
     * page, or null when it doesn't exist / isn't published.
     *
     * Fetched server-side (Studio sends no CORS headers) and cached; the
     * Studio webhook drops the cache on publish/unpublish. The stored file is
     * tried first and the render API only when that gives nothing, with a
     * warning, since it means the publish never reached storage. If every
     * source is down, the last good copy is served rather than failing.
     *
     * @throws RuntimeException when a source fails and nothing is cached
     */
    public static function article(string $slug): ?array
    {
        $key = static::cacheKey($slug);
        $cached = Cache::get($key);

        if ($cached && now()->timestamp < $cached['fetched_at'] + ($cached['ttl'] ?? 0)) {
            return $cached['article'];
        }

        $errors = [];

        foreach (static::sources($slug) as $source => $url) {
            try {
                $envelope = static::fetch($url);
            } catch (\Exception $e) {
                $errors[] = "$source: ".$e->getMessage();

                continue;
            }

            if ($envelope === null) {
                continue;
            }

            $fallback = $source !== 'stored-file';
            if ($fallback) {
                Log::warning("Studio article \"$slug\" was served by the render API, not the stored file.", [
                    'problems' => $errors ?: ['stored-file: not found'],
                ]);
            }

            $article = [...static::shape($envelope), 'source' => $source];

            Cache::put($key, [
                'article' => $article,
                'fetched_at' => now()->timestamp,
                'ttl' => config($fallback ? 'services.studio.fallback_cache_ttl' : 'services.studio.cache_ttl'),
            ], now()->addDays(static::STALE_DAYS));

            return $article;
        }

        // Every source answered "not found": it isn't published.
        if (! $errors) {
            Cache::forget($key);

            return null;
        }

        if ($cached) {
            Log::warning('Studio unreachable, serving stale article: '.implode('; ', $errors));

            return $cached['article'];
        }

        throw new RuntimeException('Failed to fetch Studio article: '.implode('; ', $errors));
    }

    /**
     * One envelope from one source, or null when the source says it isn't
     * there.
     *
     * @throws \Exception when the source is unreachable or answers nonsense
     */
    protected static function fetch(string $url): ?array
    {
        $response = Http::timeout(5)->acceptJson()->get($url);

        // A bucket without list permission answers 403 for a missing
        // object, so both mean "not found or not published".
        if (in_array($response->status(), [403, 404])) {
            return null;
        }

        $envelope = $response->json();
        if (! $response->successful() || ! is_string($envelope['html'] ?? null)) {
            throw new RuntimeException("unexpected response ({$response->status()}) from $url");
        }

        return $envelope;
    }

    /**
     * Reduce the envelope to what the page renders. head.canonical is
     * deliberately dropped: it is Studio's own origin, not the TNY URL.
     */
    protected static function shape(array $envelope): array
    {
        $isUrl = fn ($value) => is_string($value) && preg_match('#^https?://#i', $value);

        return [
            'html' => $envelope['html'],
            'css' => $isUrl($envelope['assets']['css'] ?? null) ? $envelope['assets']['css'] : null,
            'js' => $isUrl($envelope['assets']['js'] ?? null) ? $envelope['assets']['js'] : null,
            'fontStylesheets' => array_values(array_filter($envelope['theme']['fontStylesheets'] ?? [], $isUrl)),
            'title' => $envelope['head']['title'] ?? null,
            'description' => $envelope['head']['description'] ?? null,
            'meta' => array_values(array_filter(
                $envelope['head']['meta'] ?? [],
                fn ($tag) => is_string($tag['name'] ?? null) && is_string($tag['value'] ?? null),
            )),
            'jsonLd' => array_values(array_filter($envelope['head']['jsonLd'] ?? [], 'is_array')),
        ];
    }

    public static function forget(string $slug): void
    {
        Cache::forget(static::cacheKey($slug));
    }

    public static function forgetAll(): void
    {
        Cache::forever(static::GENERATION_KEY, Cache::get(static::GENERATION_KEY, 0) + 1);
    }
}
