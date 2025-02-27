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

    private function reorderHeroes()
    {
        // $heroes = Hero::orderBy('order')->get();
    }
}
