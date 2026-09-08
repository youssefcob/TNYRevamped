<?php

namespace App\Services\Content;

use App\Models\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class RedirectService
{
    const CACHE_KEY = 'redirects.map';

    const STATUS_CODES = [301, 302];

    /**
     * Normalize a path the same way on both sides (stored source + incoming
     * request) so "/Foo/", "/foo" and "/foo?x=1" all resolve to "/foo".
     */
    public static function normalizePath(string $path): string
    {
        $path = strtok($path, '?');
        $path = '/'.ltrim(trim($path), '/');
        $path = rtrim($path, '/');

        return $path === '' ? '/' : $path;
    }

    /**
     * source => ['destination' => ..., 'status_code' => ...] for every enabled
     * rule. Cached since it's consulted on every front-end request.
     */
    public static function map(): array
    {
        return Cache::rememberForever(static::CACHE_KEY, function () {
            return Redirect::query()
                ->where('enabled', true)
                ->get()
                ->keyBy('source')
                ->map(fn (Redirect $r) => [
                    'id' => $r->id,
                    'destination' => $r->destination,
                    'status_code' => $r->status_code,
                ])
                ->all();
        });
    }

    public static function resolve(string $path): ?array
    {
        $rule = static::map()[static::normalizePath($path)] ?? null;

        // Guard against a rule that points a path straight back at itself.
        if ($rule && static::normalizePath($rule['destination']) === static::normalizePath($path)) {
            return null;
        }

        return $rule;
    }

    public static function recordHit(int $id): void
    {
        Redirect::where('id', $id)->increment('hits');
    }

    /**
     * The full admin-facing list, newest first.
     */
    public static function all(): array
    {
        return Redirect::query()
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (Redirect $r) => [
                'id' => $r->id,
                'source' => $r->source,
                'destination' => $r->destination,
                'status_code' => $r->status_code,
                'enabled' => $r->enabled,
                'hits' => $r->hits,
            ])
            ->all();
    }

    public function upsert(Request $request)
    {
        try {
            $validated = $request->validate([
                'id' => ['nullable', 'integer', 'exists:redirects,id'],
                'source' => ['required', 'string', 'max:255', 'starts_with:/'],
                'destination' => ['required', 'string', 'max:255'],
                'status_code' => ['required', 'integer', Rule::in(static::STATUS_CODES)],
                'enabled' => ['boolean'],
            ]);

            $source = static::normalizePath($validated['source']);
            $destination = Str::startsWith($validated['destination'], ['http://', 'https://'])
                ? $validated['destination']
                : static::normalizePath($validated['destination']);

            if ($source === static::normalizePath($destination)) {
                return [
                    'success' => false,
                    'message' => 'Source and destination cannot be the same path.',
                ];
            }

            $duplicate = Redirect::where('source', $source)
                ->when(! empty($validated['id']), fn ($q) => $q->where('id', '!=', $validated['id']))
                ->exists();

            if ($duplicate) {
                return [
                    'success' => false,
                    'message' => 'A redirect for that source path already exists.',
                ];
            }

            $redirect = empty($validated['id'])
                ? new Redirect
                : Redirect::findOrFail($validated['id']);

            $redirect->fill([
                'source' => $source,
                'destination' => $destination,
                'status_code' => $validated['status_code'],
                'enabled' => $validated['enabled'] ?? true,
            ])->save();

            Cache::forget(static::CACHE_KEY);

            return [
                'success' => true,
                'data' => [
                    'id' => $redirect->id,
                    'source' => $redirect->source,
                    'destination' => $redirect->destination,
                    'status_code' => $redirect->status_code,
                    'enabled' => $redirect->enabled,
                    'hits' => $redirect->hits,
                ],
                'message' => 'Redirect saved',
            ];
        } catch (ValidationException $e) {
            return [
                'success' => false,
                'message' => $e->validator->errors()->first(),
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function destroy(Redirect $redirect)
    {
        try {
            $redirect->delete();
            Cache::forget(static::CACHE_KEY);

            return [
                'success' => true,
                'message' => 'Redirect removed',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
