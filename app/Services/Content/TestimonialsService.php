<?php

namespace App\Services\Content;

use App\Models\Testimonial;
use App\Services\Cloudinary;
use Illuminate\Http\Request;

class TestimonialsService 
{
    public static function get()
    {
        return Testimonial::all();
    }

    public function post($request)
    {
        $request->validate([
            'image' => ['required', 'file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'review' => ['required', 'string'],
        ]);

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $testimonial = Testimonial::create([
            'image' => $imageId,
            'name' => $request->name,
            'position' => $request->position,
            'review' => $request->review,
        ]);
        

        return [
            'success' => true,
            'data' => $testimonial,
        ];
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'image' => ['required', 'file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'review' => ['required', 'string'],

        ]);

        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $testimonial->update([
            'image' => $imageId,
            'name' => $request->name,
            'position' => $request->position,
            'review' => $request->review,
        ]);

        return [
            'success' => true,
            'data' => $testimonial,
        ];
    }

    public function delete($id)
    {


        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return ['message' => 'Testimonial not found', 'success' => false];
        }

        $testimonial->delete();

        return ['message' => 'Testimonial deleted', 'success' => true];
    }
}
