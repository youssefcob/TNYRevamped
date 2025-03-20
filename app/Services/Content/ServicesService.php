<?php

namespace App\Services\Content;

use App\Models\Service;
use App\Services\Cloudinary;
use Illuminate\Http\Request;

class ServicesService 
{
    public static function get()
    {
        return Service::all();
    }

    public function post($request)
    {
        $request->merge([
            'onMainPage' => filter_var($request->onMainPage, FILTER_VALIDATE_BOOLEAN),
            'available' => filter_var($request->available, FILTER_VALIDATE_BOOLEAN),
        ]);


        $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'onMainPage' => ['boolean'],
            'available' => ['boolean'],
        ]);


        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImageWithId($request->file('image'));

        $service = Service::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageId['file'],
            'imageCloudId' => $imageId['id'],
            'onMainPage' => $request->onMainPage | false,
            'available' => $request->available | true,
        ]);

        return $service;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'onMainPage' => ['boolean'],

        ]);

        $service = Service::find($id);

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $service->update([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageId,
        ]);

        return $service;
    }

    public function delete($id)
    {


        $service = Service::find($id);
        
        

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $service->delete();

        return response()->json(['message' => 'Service deleted']);
    }
}
