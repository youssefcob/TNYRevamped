<?php

namespace App\Services\Employer;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class EmployerService
{
    public function updateEmployer(Request $request)
    {
        $request->validate([
            'facility_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
        ]);

        /** @var \App\Models\User $user */
        $user = Auth::user();

        $employerData = [
            'facility_name' => $request->input('facility_name'),
            'phone_number' => $request->input('phone_number'),
        ];

        $employer = $user->employer()->updateOrCreate(
            ['user_id' => $user->id],
            $employerData
        );

        return [
            'success' => true,
            'user' => $employer,
        ];

    }
    public function getEmployerFilters(Request $request){
        try {
            $employers = \App\Models\Employer::select('employers.id as employer_id', 'users.name')
                ->join('users', 'employers.user_id', '=', 'users.id')
                ->get();

            return [
                'success' => true,
                'data' => $employers
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
