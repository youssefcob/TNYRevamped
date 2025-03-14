<?php

namespace App\Services\Content;

use App\Models\Client;
use App\Services\Cloudinary;
use Illuminate\Http\Request;

class ClientsService 
{
    public static function get()
    {
        return Client::all();
    }

    public function post($request)
    {
        $request->validate([
            'image' => ['required','file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            
        ]);
        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $client = Client::create([
            'image' => $imageId,
        ]);

        return $client;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'image' => ['required','file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],

        ]);

        $client = Client::find($id);

        if (!$client) {
            return response()->json(['message' => 'client not found'], 404);
        }

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $client->update([
            'image' => $imageId,
        ]);

        return $client;
    }

    public function delete($id)
    {


        $service = Client::find($id);

        if (!$service) {
            return ['message' => 'Service not found', 'success' => false];
        }
        $cloudinary = new Cloudinary();
        $cloudinary->deleteImage($service->image);

      

        $service->delete();

        return ['message' => 'Service deleted', 'success' => true];
    }
}
