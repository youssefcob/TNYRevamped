<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Services\Content\StudioService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;
use RuntimeException;

class ArticlesController extends Controller
{
    /**
     * A single article, e.g. /articles/staffing-a-therapy-team-fast.
     *
     * The news table decides which articles exist and holds each one's
     * title, excerpt and cover image; its `url` is the slug of the article
     * in Studio (the headless CMS), which is where the body comes from.
     */
    public function show(string $slug)
    {
        // Canonicalize any non-slug variant (mixed case, spaces, %20) to the
        // dash-slug form, matching the apply() behaviour elsewhere.
        if (($canonical = Str::slug($slug)) !== $slug) {
            return redirect('/articles/'.$canonical, 301);
        }

        $entry = News::where('url', $slug)->firstOrFail();

        try {
            $article = StudioService::article($slug);
        } catch (RuntimeException $e) {
            Log::error($e->getMessage());
            abort(503);
        }

        abort_unless($article, 404);

        return Inertia::render('Articles/StudioArticle', [
            'article' => $article,
            'entry' => $entry->only(['title', 'description', 'image']),
            'path' => "/articles/$slug",
        ]);
    }
}
