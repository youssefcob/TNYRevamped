<?php

namespace App\Services\Content;

use App\Models\Testimonial;
use App\Services\Cloudinary;
use Exception;
use Illuminate\Http\Request;

class TestimonialsService 
{
    public static function get()
    {
        return Testimonial::all();
    }
    public static function getWithFormattedResponse(){
        try {
            //code...
            return [
                'success' => true,
                'data' => Testimonial::all(),
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
            //code...
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
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
        
    }

    public function update(Request $request, $id)
    {
        //TODO: Remove this method if it's not in use.
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
    public function updateWithFormattedResponse(Request $request, $id)
    {
        try {
            $testimonial = Testimonial::find($id);

            if (!$testimonial) {
                return [
                    'success' => false,
                    'message' => 'Testimonial not found'
                ];
            }

            $updateData = [];

            if ($request->hasFile('image')) {
                $oldImage = $testimonial->image;
                $request->validate([
                    'image' => ['file', 'mimes:jpeg,png,jpg,gif', 'max:2048']
                ]);
                
                $cloudinary = new Cloudinary();
                $imageId = $cloudinary->uploadImage($request->file('image'));
                $updateData['image'] = $imageId;
                $cloudinary->deleteImage($oldImage);
            }

            if ($request->has('name')) {
                $request->validate(['name' => ['string']]);
                $updateData['name'] = $request->name;
            }

            if ($request->has('position')) {
                $request->validate(['position' => ['string']]);
                $updateData['position'] = $request->position;
            }

            if ($request->has('review')) {
                $request->validate(['review' => ['string']]);
                $updateData['review'] = $request->review;
            }

            if (empty($updateData)) {
                return [
                    'success' => false,
                    'message' => 'No data provided for update'
                ];
            }

            $testimonial->update($updateData);

            return [
                'success' => true,
                'data' => $testimonial
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


        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return ['message' => 'Testimonial not found', 'success' => false];
        }

        $testimonial->delete();

        return ['message' => 'Testimonial deleted', 'success' => true];
    }
}
