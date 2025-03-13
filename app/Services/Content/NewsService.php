<?php

namespace App\Services\Content;

use Illuminate\Http\Request;
use App\Models\News;
use App\Services\Cloudinary;

class NewsService
{
    public static function get()
    {
        return News::all();
    }

    public function post($request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'link' => ['required', 'string', 'url'],
        ]);

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $news = News::create([
            'title' => $request->title,
            'image' => $imageId,
            'link' => $request->link ,
        ]);

        return [
            'success' => true,
            'data' => $news,
        ];
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'link' => ['required', 'string', 'url'],
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
            'link' => $request->link,
        ]);
    }

    public function delete($id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'news not found'], 404);
        }

        $news->delete();
    }
    
}
