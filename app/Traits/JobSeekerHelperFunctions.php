<?php

namespace App\Traits;

use App\Models\User;
use App\Models\JobSeeker;
use Illuminate\Http\Request;

trait JobSeekerHelperFunctions
{
    private static array $allowedGenders = ['male', 'female'];
    private static array $allowedFacilityTypes = ['Outpatient', 'Inpatient', 'SNF', 'Home Therapy'];
    private static array $allowedPaymentTypes = ['W2', '1099'];
    private static array $allowedPreferredLocations = ['Manhattan', 'The Bronx', 'Brooklyn', 'Queens', 'Staten Island', 'Long Island'];
    private static array $allowedEmploymentStatuses = ['Currently Employed', 'Unemployed'];
    private static array $allowedLegalStatuses = ['US Citizen', 'Green Card Holder', 'H-1B', 'B1B2', 'F1 Student', 'other'];
    private static array $allowedStatuses = ['pending', 'approved', 'rejected'];

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
                'facility_type' => 'required|in:' . implode(',', self::$allowedFacilityTypes),
                'payment_type' => 'required|in:' . implode(',', self::$allowedPaymentTypes),
                'preferred_location' => 'required|in:' . implode(',', self::$allowedPreferredLocations),
                'employment_status' => 'required|in:' . implode(',', self::$allowedEmploymentStatuses),
                'availability_to_start' => 'required|integer',
                'rate_per_hour' => 'nullable|numeric',
                'licensing' => 'required|boolean',
                'legal_status' => 'required|in:' . implode(',', self::$allowedLegalStatuses),
                'resume' => 'nullable|file|mimes:pdf,doc,docx',
                'is_talent' => 'nullable|boolean',
                'status' => 'nullable|string|in:' . implode(',', self::$allowedStatuses),
                'gender' => 'nullable|string|in:' . implode(',', self::$allowedGenders),
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

    private function validateUpdateJobSeekerRequest(Request $request)
    {
        try {
            $request->validate([
                'phone_number' => 'sometimes|string',
                'position_id' => 'sometimes|integer|exists:positions,id',
                'experience' => 'sometimes|integer',
                'facility_type' => 'sometimes|in:' . implode(',', self::$allowedFacilityTypes),
                'payment_type' => 'sometimes|in:' . implode(',', self::$allowedPaymentTypes),
                'preferred_location' => 'sometimes|in:' . implode(',', self::$allowedPreferredLocations),
                'employment_status' => 'sometimes|in:' . implode(',', self::$allowedEmploymentStatuses),
                'availability_to_start' => 'sometimes|integer',
                'rate_per_hour' => 'sometimes|numeric|nullable',
                'licensing' => 'sometimes|boolean',
                'legal_status' => 'sometimes|in:' . implode(',', self::$allowedLegalStatuses),
                'resume' => 'sometimes|file|mimes:pdf,doc,docx|nullable',
                'is_talent' => 'sometimes|boolean|nullable',
                'status' => 'sometimes|string|in:' . implode(',', self::$allowedStatuses) . '|nullable',
                'gender' => 'sometimes|string|in:' . implode(',', self::$allowedGenders) . '|nullable',
                'languages' => 'sometimes|array',
                'languages.*' => 'integer|exists:languages,id',
                'name' => 'sometimes|string|max:255',
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

    private function updateJobSeekerFields(Request $request, $jobSeeker, $resumePath = null)
    {
        $fields = [
            'phone_number', 'position_id', 'experience', 'facility_type', 'payment_type',
            'preferred_location', 'employment_status', 'availability_to_start', 'rate_per_hour',
            'licensing', 'legal_status', 'gender'
        ];

        // dd($request->all());
        foreach ($fields as $field) {
            if ($request->has($field)) {
                $jobSeeker->$field = $request->$field;
            }
        }
        if ($resumePath !== null) {
            $jobSeeker->resume = $resumePath;
        }
        $jobSeeker->save();
        return $jobSeeker;
    }

    private function updateUserName(Request $request, $jobSeeker)
    {
        if ($request->has('name')) {
            // dd('s');
            $user = $jobSeeker->user;
            if ($user) {
                $user->name = $request->name;
                $user->save();
            }
        }
    }
} 