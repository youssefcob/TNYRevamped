<?php

namespace App\Services\Content;

use Illuminate\Http\Request;
use App\Models\Team;
use App\Services\Cloudinary;

class TeamService
{
    public static function get()
    {
        return Team::all();
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
        $request->validate([
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'image' => ['required', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
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

    public function delete($id)
    {
        $teamMember = Team::find($id);

        if (!$teamMember) {
            return response()->json(['message' => 'team member not found'], 404);
        }

        $teamMember->delete();

        return [
            'success' => true,
        ];
    }
    
}
