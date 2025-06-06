<?php

namespace App\Traits;

use App\Models\User;
use App\Models\JobSeeker;
use Illuminate\Http\Request;

trait JobSeekerHelperFunctions
{
    private function findUserOrFail($userId)
    {
        return User::find($userId);
    }

    private function validateJobSeekerRequest(Request $request)
    {
        try {
            $request->validate([
                'phone_number' => 'required|string',
                'position_id' => 'required|integer|exists:positions,id',
                'experience' => 'required|integer',
                'facility_type' => 'required|in:Outpatient,Inpatient,SNF,Home Therapy',
                'payment_type' => 'required|in:W2,1099',
                'preferred_location' => 'required|in:Manhattan,The Bronx,Brooklyn,Queens,Staten Island,Long Island',
                'employment_status' => 'required|in:Currently Employed,Unemployed',
                'availability_to_start' => 'required|integer',
                'rate_per_hour' => 'nullable|numeric',
                'licensing' => 'required|boolean',
                'legal_status' => 'required|in:US Citizen,Green Card Holder,H-1B,B1B2,F1 Student,other',
                'resume' => 'nullable|file|mimes:pdf,doc,docx',
                'is_talent' => 'nullable|boolean',
                'status' => 'nullable|string|in:pending,approved,rejected',
                'gender' => 'nullable|string',
                'languages' => 'array',
                'languages.*' => 'integer|exists:languages,id',
            ]);
            return true;
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
                'errors' => $e->errors(),
            ];
        }
    }

    private function handleResumeUpload(Request $request)
    {
        if ($request->hasFile('resume')) {
            $googleDrive = new \App\Services\GoogleDrive();
            return $googleDrive->upload($request->file('resume'));
        }
        return null;
    }

    private function jobSeekerExists($userId)
    {
        return JobSeeker::where('user_id', $userId)->exists();
    }

    private function createJobSeekerRecord(Request $request, $userId, $resumePath)
    {
        return JobSeeker::create([
            'user_id' => $userId,
            'phone_number' => $request->phone_number,
            'position_id' => $request->position_id,
            'experience' => $request->experience,
            'facility_type' => $request->facility_type,
            'payment_type' => $request->payment_type,
            'preferred_location' => $request->preferred_location,
            'employment_status' => $request->employment_status,
            'availability_to_start' => $request->availability_to_start,
            'rate_per_hour' => $request->rate_per_hour,
            'licensing' => $request->licensing,
            'legal_status' => $request->legal_status,
            'resume' => $resumePath,
            'is_talent' => $request->is_talent ?? false,
            'status' => $request->status ?? 'pending',
            'gender' => $request->gender,
        ]);
    }

    private function syncLanguages(Request $request, $jobSeeker)
    {
        if ($request->has('languages')) {
            $jobSeeker->languages()->sync($request->languages);
        }
    }
} 