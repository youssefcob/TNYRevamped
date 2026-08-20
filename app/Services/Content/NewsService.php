<?php

namespace App\Services\Content;

use Illuminate\Http\Request;
use App\Models\News;
use App\Services\Cloudinary;
use Illuminate\Support\Str;
use Exception;

class NewsService
{
    private function generateUniqueUrl(string $source, ?int $ignoreId = null): string
    {
        $base = Str::slug($source) ?: 'resource';
        $url = $base;
        $suffix = 2;

        while (News::where('url', $url)->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))->exists()) {
            $url = $base . '-' . $suffix++;
        }

        return $url;
    }

    public static function get()
    {
        return News::all();
    }
    public static function getWithFormattedResponse()
    {
        try {
            //code...
            return [
                'success' => true,
                'data' => News::all(),
                'message' => 'News fetched successfully',
            ];
        } catch (Exception $e) {
            //throw $th;
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
                'content' => ['required', 'string'],
            ]);

            $cloudinary = new Cloudinary();
            $imageId = $cloudinary->uploadImage($request->file('image'));

            $news = News::create([
                'title' => $request->title,
                'description' => $request->description,
                'url' => $this->generateUniqueUrl($request->filled('url') ? $request->url : $request->title),
                'image' => $imageId,

                'content' => $request->content,
            ]);

            return [
                'success' => true,
                'data' => $news,
                'message' => 'News created successfully',
            ];
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false,
                'message' => 'Error creating news: ' . $e->getMessage(),
                'error' => $e->getMessage()
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

        if (!$news) {
            return response()->json(['message' => 'news not found'], 404);
        }

        $cloudinary = new Cloudinary();
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

            if (!$news) {
                return [
                    'success' => false,
                    'message' => 'News not found'
                ];
            }

            $updateData = [];

            if ($request->hasFile('image')) {
                $oldImage = $news->image;
                $request->validate([
                    'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048']
                ]);

                $cloudinary = new Cloudinary();
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
                $source = $request->filled('url') ? $request->url : $news->title;
                $updateData['url'] = $this->generateUniqueUrl($source, $news->id);
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
                    'message' => 'No data provided for update'
                ];
            }

            $news->update($updateData);

            return [
                'success' => true,
                'data' => $news,
                'message' => 'News updated successfully'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function delete($id)
    {
        try {
            $news = News::find($id);

            if (!$news) {
                return [
                    'success' => false,
                    'message' => 'News not found',
                    "code" => 404
                ];
            }

            $cloudinary = new Cloudinary();
            $cloudinary->deleteImage($news->image);

            $news->delete();

            return [
                'success' => true,
                'message' => 'News deleted successfully'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
