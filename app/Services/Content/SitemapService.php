<?php

namespace App\Services\Content;

use App\Models\News;
use App\Models\Position;
use App\Models\SitemapEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class SitemapService
{
    const CACHE_KEY = 'sitemap.xml.entries';

    /**
     * Static marketing pages, with sensible SEO defaults.
     */
    protected static function staticPages(): array
    {
        return [
            ['url' => '/', 'priority' => 1.0, 'changefreq' => 'weekly'],
            ['url' => '/about', 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['url' => '/solutions', 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['url' => '/employers', 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['url' => '/candidates', 'priority' => 0.8, 'changefreq' => 'monthly'],
            ['url' => '/apply', 'priority' => 0.8, 'changefreq' => 'weekly'],
            ['url' => '/requestService', 'priority' => 0.7, 'changefreq' => 'monthly'],
            ['url' => '/contact', 'priority' => 0.6, 'changefreq' => 'yearly'],
            ['url' => '/resources', 'priority' => 0.6, 'changefreq' => 'monthly'],
            ['url' => '/news', 'priority' => 0.7, 'changefreq' => 'weekly'],
        ];
    }

    protected static function newsPages(): array
    {
        return News::query()->whereNotNull('url')->get()->map(fn (News $news) => [
            'url' => '/news/'.$news->url,
            'priority' => 0.6,
            'changefreq' => 'monthly',
            'lastmod' => $news->updated_at,
        ])->all();
    }

    protected static function positionPages(): array
    {
        return Position::where('available', true)->get()->map(fn (Position $position) => [
            'url' => '/apply/'.Str::slug($position->title),
            'priority' => 0.7,
            'changefreq' => 'weekly',
            'lastmod' => $position->updated_at,
        ])->all();
    }

    /**
     * Every page the site actually has right now, keyed by URL — before any
     * admin overrides are applied.
     */
    protected static function autoDiscovered(): array
    {
        $pages = [...static::staticPages(), ...static::newsPages(), ...static::positionPages()];

        return collect($pages)->keyBy('url')->all();
    }

    /**
     * The full admin-facing list: every auto-discovered page merged with its
     * override (if one exists), plus any purely manual entries the admin
     * added that don't correspond to a real page.
     */
    public static function all(): array
    {
        $auto = static::autoDiscovered();
        $overrides = SitemapEntry::all()->keyBy('url');

        $rows = collect($auto)->map(function (array $page, string $url) use ($overrides) {
            $override = $overrides->get($url);

            return [
                'id' => $override?->id,
                'url' => $url,
                'source' => 'auto',
                'priority' => $override?->priority ?? $page['priority'],
                'changefreq' => $override?->changefreq ?? $page['changefreq'],
                'excluded' => $override?->excluded ?? false,
                'lastmod' => $override?->lastmod ?? $page['lastmod'] ?? null,
            ];
        });

        $manual = $overrides->whereNotIn('url', array_keys($auto))->map(fn (SitemapEntry $entry) => [
            'id' => $entry->id,
            'url' => $entry->url,
            'source' => 'manual',
            'priority' => $entry->priority,
            'changefreq' => $entry->changefreq,
            'excluded' => $entry->excluded,
            'lastmod' => $entry->lastmod,
        ]);

        return $rows->concat($manual)->sortByDesc('priority')->values()->all();
    }

    /**
     * The final list of URLs that belong in sitemap.xml, cached since it's
     * rebuilt from a handful of DB queries on every crawl otherwise.
     */
    public static function generate(): array
    {
        return Cache::remember(static::CACHE_KEY, now()->addHour(), function () {
            return collect(static::all())->reject(fn (array $entry) => $entry['excluded'])->values()->all();
        });
    }

    public function upsert(Request $request)
    {
        try {
            $validated = $request->validate([
                'url' => ['required', 'string', 'max:255', 'starts_with:/'],
                'priority' => ['nullable', 'numeric', 'min:0', 'max:1'],
                'changefreq' => ['nullable', 'string', Rule::in(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'])],
                'excluded' => ['boolean'],
            ]);

            $isManual = ! array_key_exists($validated['url'], static::autoDiscovered());

            $entry = SitemapEntry::updateOrCreate(
                ['url' => $validated['url']],
                [
                    'is_manual' => $isManual,
                    'priority' => $validated['priority'] ?? null,
                    'changefreq' => $validated['changefreq'] ?? null,
                    'excluded' => $validated['excluded'] ?? false,
                ]
            );

            Cache::forget(static::CACHE_KEY);

            return [
                'success' => true,
                'data' => $entry,
                'message' => 'Sitemap entry saved',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function destroy(SitemapEntry $sitemapEntry)
    {
        try {
            $sitemapEntry->delete();
            Cache::forget(static::CACHE_KEY);

            return [
                'success' => true,
                'message' => 'Sitemap entry removed',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
