<?php

namespace App\Services\Employer;

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
        $user = Auth::user();

        $employerData = [
            'facility_name' => $request->input('facility_name'),
            'phone_number' => $request->input('phone_number'),
        ];

        $employer = $user->employer()->updateOrCreate(
            ['user_id' => $user->id],
            $employerData
        );

        
        

        // return $user;

        return [
            'success' => true,
            'user' => $employer,
        ];


        
    }
}
