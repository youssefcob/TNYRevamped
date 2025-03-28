<?php

namespace App\Services\Content;

use App\Models\Client;
use App\Services\Cloudinary;
use Exception;
use Illuminate\Http\Request;

class ClientsService 
{
    public static function get()
    {
        return Client::all();
    }

    public static function getWithFormattedResponse()
    {
        try {
            return [
                'success' => true,
                'data' => Client::all(),
            ];
        } catch (Exception $e) {
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
                'image' => ['required', 'file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
                'name' => ['required', 'string'],
            ]);

            $cloudinary = new Cloudinary();
            $imageId = $cloudinary->uploadImage($request->file('image'));

            $client = Client::create([
                'image' => $imageId,
                'name' => $request->name,
            ]);

            return [
                'success' => true,
                'data' => $client,
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $client = Client::find($id);

            if (!$client) {
                return [
                    'success' => false,
                    'message' => 'Client not found',
                ];
            }

            $updateData = [];

            if ($request->hasFile('image')) {
                $request->validate([
                    'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
                ]);

                $cloudinary = new Cloudinary();
                $imageId = $cloudinary->uploadImage($request->file('image'));
                $updateData['image'] = $imageId;

                // Delete old image
                $cloudinary->deleteImage($client->image);
            }

            if ($request->has('name')) {
                $request->validate(['name' => ['string']]);
                $updateData['name'] = $request->name;
            }

            if (!empty($updateData)) {
                $client->update($updateData);
            }

            return $client;
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function updateWithFormattedResponse(Request $request, $id)
    {
        try {
            $client = Client::find($id);

            if (!$client) {
                return [
                    'success' => false,
                    'message' => 'Client not found',
                ];
            }

            $updateData = [];

            if ($request->hasFile('image')) {
                $request->validate([
                    'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
                ]);

                $cloudinary = new Cloudinary();
                $imageId = $cloudinary->uploadImage($request->file('image'));
                $updateData['image'] = $imageId;

                // Delete old image
                $cloudinary->deleteImage($client->image);
            }

            if ($request->has('name')) {
                $request->validate(['name' => ['string']]);
                $updateData['name'] = $request->name;
            }

            if (empty($updateData)) {
                return [
                    'success' => false,
                    'message' => 'No data provided for update',
                ];
            }

            $client->update($updateData);

            return [
                'success' => true,
                'data' => $client,
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
            $client = Client::find($id);

            if (!$client) {
                return [
                    'success' => false,
                    'message' => 'Client not found',
                ];
            }

            $cloudinary = new Cloudinary();
            $cloudinary->deleteImage($client->image);
            $client->delete();

            return [
                'success' => true,
                'message' => 'Client deleted successfully',
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}