<?php

namespace App\Services\Content;

use App\Models\News;
use App\Services\Cloudinary;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class NewsService
{
    private function generateUniqueUrl(string $source, ?int $ignoreId = null): string
    {
        $base = Str::slug($source) ?: 'resource';
        $url = $base;
        $suffix = 2;

        while (News::where('url', $url)->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))->exists()) {
            $url = $base.'-'.$suffix++;
        }

        return $url;
    }

    /**
     * The `url` of an article is the slug of its counterpart in Studio, which
     * is where the body is fetched from. A supplied url is therefore stored
     * exactly as given (and rejected if taken) rather than being suffixed to
     * make it unique; only a url derived from the title is auto-uniqued.
     */
    private function resolveUrl(Request $request, string $title, ?int $ignoreId = null): string
    {
        if (! $request->filled('url')) {
            return $this->generateUniqueUrl($title, $ignoreId);
        }

        $request->validate([
            'url' => ['string', 'max:255', 'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/', Rule::unique('news', 'url')->ignore($ignoreId)],
        ]);

        return $request->url;
    }

    public static function get()
    {
        return News::all();
    }

    public static function getWithFormattedResponse()
    {
        try {
            // code...
            return [
                'success' => true,
                'data' => News::all(),
                'message' => 'News fetched successfully',
            ];
        } catch (Exception $e) {
            // throw $th;
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function post($request)
    {
        try {
            $request->validate([
                'title' => ['required', 'string'],
                'description' => ['nullable', 'string'],
                'url' => ['nullable', 'string', 'max:255'],
                'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
                // 'link' => ['required', 'string'],
                // The body lives in Studio; content is only kept for old rows.
                'content' => ['nullable', 'string'],
            ]);

            $cloudinary = new Cloudinary;
            $imageId = $cloudinary->uploadImage($request->file('image'));

            $news = News::create([
                'title' => $request->title,
                'description' => $request->description,
                'url' => $this->resolveUrl($request, $request->title),
                'image' => $imageId,

                'content' => $request->content,
            ]);

            Cache::forget(SitemapService::CACHE_KEY);

            return [
                'success' => true,
                'data' => $news,
                'message' => 'News created successfully',
            ];
        } catch (Exception $e) {
            // throw $th;
            return [
                'success' => false,
                'message' => 'Error creating news: '.$e->getMessage(),
                'error' => $e->getMessage(),
            ];
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            // 'link' => ['required', 'string', 'url'],
        ]);

        $news = News::find($id);

        if (! $news) {
            return response()->json(['message' => 'news not found'], 404);
        }

        $cloudinary = new Cloudinary;
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $news->update([
            'title' => $request->title,
            'image' => $imageId,
            // 'link' => $request->link,
        ]);
    }

    public function updateWithFormattedResponse(Request $request, $id)
    {
        try {
            $news = News::find($id);

            if (! $news) {
                return [
                    'success' => false,
                    'message' => 'News not found',
                ];
            }

            $updateData = [];

            if ($request->hasFile('image')) {
                $oldImage = $news->image;
                $request->validate([
                    'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
                ]);

                $cloudinary = new Cloudinary;
                $imageId = $cloudinary->uploadImage($request->file('image'));
                $updateData['image'] = $imageId;
                $cloudinary->deleteImage($oldImage);
            }

            if ($request->has('title')) {
                $request->validate(['title' => ['string']]);
                $updateData['title'] = $request->title;
            }

            if ($request->has('description')) {
                $request->validate(['description' => ['nullable', 'string']]);
                $updateData['description'] = $request->description;
            }

            if ($request->has('url')) {
                $request->validate(['url' => ['nullable', 'string', 'max:255']]);
                $updateData['url'] = $this->resolveUrl($request, $news->title, $news->id);
            }

            // if ($request->has('link')) {
            //     $request->validate(['link' => ['string', 'url']]);
            //     $updateData['link'] = $request->link;
            // }
            if ($request->has('content')) {
                // $request->validate(['content' => ['string']]);
                $updateData['content'] = $request->content;
            }

            if (empty($updateData)) {
                return [
                    'success' => false,
                    'message' => 'No data provided for update',
                ];
            }

            $news->update($updateData);

            Cache::forget(SitemapService::CACHE_KEY);

            return [
                'success' => true,
                'data' => $news,
                'message' => 'News updated successfully',
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function delete($id)
    {
        try {
            $news = News::find($id);

            if (! $news) {
                return [
                    'success' => false,
                    'message' => 'News not found',
                    'code' => 404,
                ];
            }

            $cloudinary = new Cloudinary;
            $cloudinary->deleteImage($news->image);

            $news->delete();

            Cache::forget(SitemapService::CACHE_KEY);

            return [
                'success' => true,
                'message' => 'News deleted successfully',
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
