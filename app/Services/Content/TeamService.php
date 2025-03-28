<?php

namespace App\Services\Content;

use Illuminate\Http\Request;
use App\Models\Team;
use App\Services\Cloudinary;
use Exception;

class TeamService
{
    public static function get()
    {
        return Team::all();
    }
    public static function getWithFormattedResponse(){
       try {
        //code...
        return [
            'success' => true,
            'data' => Team::all(),
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
        $request->validate([
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'image' => ['required', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ]);

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $teamMember = Team::create([
            'name' => $request->name,
            'position' => $request->position,
            'image' => $imageId,
        ]);

        return [
            'success' => true,
            'data' => $teamMember,
        ];
    }

    public function update(Request $request, $id)
    {
        //TODO: Remove this method if it's not in use.
        $request->validate([
            'name' => ['sometimes', 'string'],
            'position' => ['sometimes', 'string'],
            'image' => ['sometimes', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
        ]);

        $teamMember = Team::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'job not found'], 404);
        }

        $cloudinary = new Cloudinary();
        $imageId = $cloudinary->uploadImage($request->file('image'));

        $teamMember->update([
            'name' => $request->name,
            'position' => $request->position,
            'image' => $imageId,
        ]);

        return [
            'success' => true,
            'data' => $teamMember,
        ];
    }
    public function updateWithFormattedResponse(Request $request, $id)
    {
        try {
            $request->validate([
                'name' => ['sometimes', 'string'],
                'position' => ['sometimes', 'string'],
                'image' => ['sometimes', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            ]);

            $teamMember = Team::find($id);

            if (!$teamMember) {
                return [
                    'success' => false,
                    'message' => 'Team member not found'
                ];
            }

            $updateData = [];

            if ($request->has('name')) {
                $updateData['name'] = $request->name;
            }

            if ($request->has('position')) {
                $updateData['position'] = $request->position;
            }

            if ($request->hasFile('image')) {
                $oldImage = $teamMember->image;
                
                $cloudinary = new Cloudinary();
                $imageId = $cloudinary->uploadImage($request->file('image'));
                $updateData['image'] = $imageId;
                $cloudinary->deleteImage($oldImage);
            }

            $teamMember->update($updateData);

            return [
                'success' => true,
                'data' => $teamMember,
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
        $teamMember = Team::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'team member not found'], 404);
        }
        $cloudinary = new Cloudinary();
        $cloudinary->deleteImage($teamMember->image);
        $teamMember->delete();

        return [
            'success' => true,
            'message' => 'team member deleted successfully'
        ];
    }
    
}
