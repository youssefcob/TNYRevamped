<?php

namespace App\Services\Content;

use App\Models\Employer;
use App\Services\Cloudinary;
use Illuminate\Http\Request;

class EmployersService 
{
    public static function get()
    {
        return Employer::all();
    }

    public function post($request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'onMainPage' => ['boolean'],
        ]);

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $employer = Employer::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageId,
        ]);

        return $employer;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'onMainPage' => ['boolean'],

        ]);

        $employer = Employer::find($id);

        if (!$employer) {
            return response()->json(['message' => 'employer not found'], 404);
        }

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $employer->update([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageId,
        ]);

        return $employer;
    }

    public function delete($id)
    {


        $employer = Employer::find($id);

        if (!$employer) {
            return response()->json(['message' => 'employer not found'], 404);
        }

        $employer->delete();

        return response()->json(['message' => 'employer deleted']);
    }
}
