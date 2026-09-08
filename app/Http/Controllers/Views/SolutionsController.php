<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Services\Content\PageContentService;
use App\Services\Content\PageMetaService;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SolutionsController extends Controller
{
    /**
     * The editable-content / meta bucket a solution page stores against.
     * Dashes become underscores to match how HandleInertiaRequests
     * normalizes route names elsewhere.
     */
    public static function pageKey(string $slug): string
    {
        return str_replace('-', '_', "solutions.$slug");
    }

    /**
     * Admin-facing list of every solution page, shaped for the
     * "Manage Meta Tags" panel.
     */
    public static function metaPages(): array
    {
        return collect(config('solutions'))
            ->map(fn (array $solution, string $slug) => [
                'page' => static::pageKey($slug),
                'label' => $solution['name'],
                'path' => "/solutions/$slug",
                'defaultTitle' => $solution['meta_title'],
                'defaultDescription' => $solution['meta_description'],
            ])
            ->values()
            ->all();
    }

    /**
     * Standalone detail page for a single staffing solution,
     * e.g. /solutions/occupational-therapy.
     *
     * Each solution gets its own editable-content and meta bucket keyed
     * "solutions.<slug_with_underscores>", so admins can tailor every page
     * independently.
     */
    public function show(string $slug)
    {
        $solutions = config('solutions');

        // Canonicalize any non-slug variant (mixed case, spaces, %20) to the
        // dash-slug form, matching the apply()/news() behaviour elsewhere.
        if (($canonical = Str::slug($slug)) !== $slug) {
            return redirect('/solutions/'.$canonical, 301);
        }

        abort_unless(isset($solutions[$slug]), 404);

        $pageKey = static::pageKey($slug);

        return Inertia::render('Solutions/SolutionDetail', [
            'solution' => array_merge($solutions[$slug], ['slug' => $slug]),
            'pageKey' => $pageKey,
            'path' => "/solutions/$slug",
            'pageContent' => array_merge(
                PageContentService::getForPage('global'),
                PageContentService::getForPage($pageKey),
            ),
            'pageMeta' => PageMetaService::getForPage($pageKey),
        ]);
    }
}
