<?php

namespace App\Services\Content;

use Illuminate\Http\Request;
use App\Models\JobPositions;

class JobsService
{
    public static function get()
    {
        return JobPositions::all();
    }

    public function post($request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'available' => ['boolean'],
        ]);

        $job = JobPositions::create([
            'title' => $request->title,
            'description' => $request->description,
            'available' => $request->available || true,
        ]);

        return [
            'success' => true,
            'data' => $job,
        ];
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'available' => ['boolean'],
        ]);

        $job = JobPositions::find($id);

        if (!$job) {
            return response()->json(['message' => 'job not found'], 404);
        }

        $job->update([
            'title' => $request->title,
            'description' => $request->description,
            'available' => $request->available,
        ]);
    }

    public function delete($id)
    {
        $job = JobPositions::find($id);

        if (!$job) {
            return response()->json(['message' => 'job not found'], 404);
        }

        $job->delete();
    }
    
}
