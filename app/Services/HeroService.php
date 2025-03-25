<?php

namespace App\Services;

use App\Models\Hero;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class HeroService
{

    public static function get()
    {
        return Hero::with('buttons')->orderBy('order')->get();
    }

    public static function getWithFormattedResponse()
    {
        try {
            $heroes = Hero::with('buttons')->orderBy('order')->get();
            return [
                'success' => true,
                'data' => $heroes
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function post(Request $request)
    {

        try {

            $request->validate([
                'title' => ['required', 'string'],
                'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            ]);

            $buttonsData = json_decode($request->buttons, true);

            // Create a validator manually for the decoded data
            $validator = Validator::make(['buttons' => $buttonsData], [
                'buttons' => ['array'],
                'buttons.*.text' => ['required', 'string'],
                'buttons.*.link' => ['required', 'string'],
                'buttons.*.color' => ['required', 'in:primary,secondary'],
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            DB::beginTransaction();

            $cloudinary = new Cloudinary();
            $imageId = $cloudinary->uploadImage($request->file('image'));


            $order = Hero::max('order') + 1;

            $hero = Hero::create([
                'title' => $request->title,
                'image' => $imageId,
                'order' => $order,
            ]);

            $hero->buttons()->createMany($buttonsData);
            DB::commit();
            $hero->load('buttons');

            // return $hero;
            return [
                'success' => true,
                'data' => $hero,
                'message' => 'Hero Slide created successfully'
            ];
        } catch (\Exception $e) {
            DB::rollBack();

            // Delete the uploaded image from Cloudinary
            if (isset($imageId)) {
                $cloudinary->deleteImage($imageId);
            }
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }


    public function delete($heroId)
    {
        try {
            DB::beginTransaction();

            $hero = Hero::with('buttons')->findOrFail($heroId);
            $imgId = $hero->image;

            $hero->buttons()->delete();
            $hero->delete();

            $cloudinary = new Cloudinary();
            $cloudinary->deleteImage($imgId);

            DB::commit();

            return [
                'success' => true,
                'message' => 'Hero and its buttons deleted successfully.'
            ];
        } catch (\Exception $e) {
            DB::rollBack();

            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
    public function edit(Request $request)
    {
        try {
            $request->validate([
                'id' => ['required', 'exists:heroes,id'],
                'title' => ['nullable', 'string'],
                'image' => ['nullable', 'file', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
                'buttons' => ['nullable', 'json'], // Ensure it's a valid JSON string if provided
            ]);

            // Decode buttons only if it's provided
            $buttonsData = $request->buttons ? json_decode($request->buttons, true) : null;

            if ($buttonsData !== null) {
                $validator = Validator::make(['buttons' => $buttonsData], [
                    'buttons' => ['array'],
                    'buttons.*.text' => ['required', 'string'],
                    'buttons.*.link' => ['required', 'string'],
                    'buttons.*.color' => ['required', 'in:primary,secondary'],
                ]);

                if ($validator->fails()) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Validation failed',
                        'errors' => $validator->errors()
                    ], 422);
                }
            }

            DB::beginTransaction();

            $hero = Hero::with('buttons')->findOrFail($request->id);
            $oldImageId = $hero->image;

            // Store the fields to update
            $updateData = [];

            if ($request->has('title')) {
                $updateData['title'] = $request->title;
            }

            if ($request->hasFile('image')) {
                $cloudinary = new Cloudinary();
                $newImageId = $cloudinary->uploadImage($request->file('image'));

                $updateData['image'] = $newImageId;
            }

            // Update the hero record only if there are fields to update
            if (!empty($updateData)) {
                $hero->update($updateData);
            }

            // Handle image deletion if a new image was uploaded
            if (isset($newImageId)) {
                $cloudinary->deleteImage($oldImageId);
            }

            // Handle buttons only if provided
            if ($buttonsData !== null) {
                $hero->buttons()->delete();
                $hero->buttons()->createMany($buttonsData);
            }

            DB::commit();
            $hero->load('buttons');

            return [
                'success' => true,
                'data' => $hero,
                'message' => 'Hero Slide updated successfully'
            ];
        } catch (\Exception $e) {
            DB::rollBack();

            // Delete the uploaded image from Cloudinary if an error occurs
            if (isset($newImageId)) {
                $cloudinary = new Cloudinary();
                $cloudinary->deleteImage($newImageId);
            }

            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    private function reorderHeroes()
    {
        // $heroes = Hero::orderBy('order')->get();
    }
}
