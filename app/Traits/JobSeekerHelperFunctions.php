<?php

namespace App\Traits;

use App\Models\User;
use App\Models\JobSeeker;
use App\Models\Position;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;

trait JobSeekerHelperFunctions
{
    private static array $allowedGenders = ['male', 'female','other'];
    private static array $allowedFacilityTypes = ['Outpatient', 'Inpatient', 'SNF', 'Home Therapy'];
    private static array $allowedPaymentTypes = ['W2', '1099'];
    private static array $allowedPreferredLocations = ['Manhattan', 'The Bronx', 'Brooklyn', 'Queens', 'Staten Island', 'Long Island'];
    private static array $allowedEmploymentStatuses = ['Currently Employed', 'Unemployed'];
    private static array $allowedLegalStatuses = ['US Citizen', 'Green Card Holder', 'H-1B', 'B1B2', 'F1 Student', 'other'];
    private static array $allowedStatuses = ['pending', 'approved', 'rejected'];
    private static array $allowedWorkDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    private static array $allowedShiftTypes = ['Hours', 'Full Time', 'Part Time', 'Coverage', 'Per Diem', 'Coverage', 'Ongoing'];
    private static array $allowedBouroughs = ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island', 'Long Island'];
    
    private function findUserOrFail($userId)
    {
        return User::find($userId);
    }

    private function validateJobSeekerRequest(Request $request)
    {
        try {
            // is_talent and status should have a different validation and insertion functions, as they should not be accessible or updatable as a regular user <3

            
            $request->merge([
            //     'experience' => (int) $request->input('experience'),
            //     'rate_per_hour' => $request->has('rate_per_hour') ? (int) $request->input('rate_per_hour') : null,
            //     'availability_to_start' => (int) $request->input('availability_to_start'),
                'is_employed' => $request->has('is_employed') ? (bool) $request->input('is_employed') : false,
                'is_licensed' => $request->has('is_licensed') ? (bool) $request->input('is_licensed') : false,
                'is_talent' => $request->has('is_talent') ? (bool) $request->input('is_talent') : false,

                "work_days" => Json::decode($request->input('work_days', [])),
                "languages" => Json::decode($request->input('languages', [])),
                ]);

            $request->validate([
                'phone_number' => 'sometimes|numeric',
                'dob' => 'sometimes|date',
                'facility_type' => 'sometimes|in:' . implode(',', self::$allowedFacilityTypes),
                'position_id' => 'sometimes|numeric|exists:positions,id',
                'experience' => 'sometimes|numeric',
                'rate_per_hour' => 'sometimes|numeric',
                'payment_type' => 'sometimes|in:' . implode(',', self::$allowedPaymentTypes),
                'preferred_location' => 'sometimes|in:' . implode(',', self::$allowedPreferredLocations),
                'availability_to_start' => 'sometimes|numeric',
                'is_licensed' => 'sometimes|boolean',
                'is_employed' => 'sometimes|boolean',

                'legal_status' => 'sometimes|in:' . implode(',', self::$allowedLegalStatuses),
                'resume' => 'sometimes|file|mimes:pdf,doc,docx',
                'is_talent' => 'sometimes|boolean',
                'status' => 'sometimes|string|in:' . implode(',', self::$allowedStatuses),
                'gender' => 'sometimes|string|in:' . implode(',', self::$allowedGenders),
                'languages' => 'array',
                'languages.*' => 'integer|exists:languages,id',
                'work_days' => 'array',
                'work_days.*' => 'string|in:'. implode(',', self::$allowedWorkDays),
                'shift_type' => 'sometimes|string|in:' . implode(',', self::$allowedShiftTypes),
                'name' => 'sometimes|string|max:255',
                'bourough' => 'sometimes|string|in:' . implode(',', self::$allowedBouroughs),
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
            'is_employed' => $request->is_employed,
            'availability_to_start' => $request->availability_to_start,
            'rate_per_hour' => $request->rate_per_hour,
            'is_licensed' => $request->is_licensed,
            'legal_status' => $request->legal_status,
            'resume' => $resumePath,
            'is_talent' => $request->is_talent ?? false,
            'status' => $request->status ?? 'pending',
            'gender' => $request->gender,
            'dob' => $request->dob,
            'shift_type' => $request->shift_type,
            'borough' => $request->bourough,
            'work_days' => $request->work_days,
            
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
                $request->merge([
            //     'experience' => (int) $request->input('experience'),
            //     'rate_per_hour' => $request->has('rate_per_hour') ? (int) $request->input('rate_per_hour') : null,
            //     'availability_to_start' => (int) $request->input('availability_to_start'),
                'is_employed' => $request->has('is_employed') ? (bool) $request->input('is_employed') : false,
                'is_licensed' => $request->has('is_licensed') ? (bool) $request->input('is_licensed') : false,
                'is_talent' => $request->has('is_talent') ? (bool) $request->input('is_talent') : false,

                "work_days" => Json::decode($request->input('work_days', [])),
                "languages" => Json::decode($request->input('languages', [])),
                ]);
            $request->validate([
                'phone_number' => 'sometimes|string',
                'dob' => 'nullable|date',
                'facility_type' => 'sometimes|in:' . implode(',', self::$allowedFacilityTypes),
                'position_id' => 'sometimes|string|exists:positions,id',
                'experience' => 'sometimes|numeric',
                'rate_per_hour' => 'nullable|numeric',
                'payment_type' => 'sometimes|in:' . implode(',', self::$allowedPaymentTypes),
                'preferred_location' => 'sometimes|in:' . implode(',', self::$allowedPreferredLocations),
                'is_employed' => 'sometimes|boolean',
                'availability_to_start' => 'sometimes|integer',
                'is_licensed' => 'sometimes|boolean',
                'legal_status' => 'sometimes|in:' . implode(',', self::$allowedLegalStatuses),
                'resume' => 'nullable|file|mimes:pdf,doc,docx',
                'is_talent' => 'nullable|boolean',
                'status' => 'nullable|string|in:' . implode(',', self::$allowedStatuses),
                'gender' => 'nullable|string|in:' . implode(',', self::$allowedGenders),
                'languages' => 'array',
                'languages.*' => 'integer|exists:languages,id',
                'work_days' => 'array',
                'work_days.*' => 'string|in:'. implode(',', self::$allowedWorkDays),
                'shift_type' => 'nullable|string|in:' . implode(',', self::$allowedShiftTypes),
                'name' => 'sometimes|string|max:255',
                'bourough' => 'sometimes|string|in:' . implode(',', self::$allowedBouroughs),
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
            'preferred_location', 'is_employed', 'availability_to_start', 'rate_per_hour',
            'is_licensed', 'legal_status', 'gender', 'dob', 'shift_type', 'bourough','work_days'
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