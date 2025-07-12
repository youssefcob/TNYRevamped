<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Position;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;

class VacancyController extends Controller
{


    public function postVacancy(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = Auth::guard('user')->user();
        if (!$user || !$user->hasRole('employer')) {
            return redirect()->route('login');
        }

        try {
            $request->validate([
                'address' => 'required|string|max:255',
                'facility_type' => 'nullable|string|max:255',
                'position_id' => 'required|exists:positions,id',
                'availability_to_start' => 'nullable|numeric|min:0',
                'gender_pref' => 'nullable|string|max:50',
                'shift_details' => 'nullable|string|max:255',
                'experience' => 'required|string|max:255',
                'borough' => 'required|string|max:255',
                'language_pref' => 'nullable|string|max:255',
                'payment_type' => 'nullable|string|max:50',
                'legal_status' => 'nullable|string|max:255',
                'rate_per_hour' => 'nullable|numeric|min:0',
                'license_required' => 'nullable|string|max:255',
                'status' => 'nullable|string|max:50',
                'work_days' => 'required|array',
                'work_days.*' => 'string|max:20',
            ]);

            $vacancyData = [
                'address' => $request->input('address'),
                'facility_type' => $request->input('facility_type'),
                'position_id' => $request->input('position_id'),
                'availability_to_start' => $request->input('availability_to_start'),
                'gender_pref' => $request->input('gender_pref'),
                'shift_details' => $request->input('shift_details'),
                'experience' => $request->input('experience'),
                'borough' => $request->input('borough'),
                'language_pref' => $request->input('language_pref'),
                'payment_type' => $request->input('payment_type'),
                'legal_status' => $request->input('legal_status'),
                'rate_per_hour' => $request->input('rate_per_hour'),
                'license_required' => $request->input('license_required'),
                'status' => $request->input('status', 'open'),
                'work_days' => $request->input('work_days'),
            ];



            $user->employer->vacancies()->create($vacancyData);


            return redirect()->route('dashboard');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Employers/PostVacancy', [
                'positions' => Position::all(),
                'languages' => Language::all(),
                'errors' => $e->validator->errors()->toArray(),
            ]);
        }
    }

    public function editVacancy(Request $request, $id)
    {
        /** @var \App\Models\User $user */
        $user = Auth::guard('user')->user();
        $vacancy = $user->employer->vacancies()->find($id);
        if (!$vacancy) {
            return redirect()->route('dashboard');
        }
        try {
            $request->validate([
                'address' => 'required|string|max:255',
                'facility_type' => 'nullable|string|max:255',
                'position_id' => 'required|exists:positions,id',
                'availability_to_start' => 'nullable|numeric|min:0',
                'gender_pref' => 'nullable|string|max:50',
                'shift_details' => 'nullable|string|max:255',
                'experience' => 'required|string|max:255',
                'borough' => 'required|string|max:255',
                'language_pref' => 'nullable|string|max:255',
                'payment_type' => 'nullable|string|max:50',
                'legal_status' => 'nullable|string|max:255',
                'rate_per_hour' => 'nullable|numeric|min:0',
                'license_required' => 'nullable|string|max:255',
                'status' => 'nullable|string|max:50',
                'work_days' => 'required|array',
                'work_days.*' => 'string|max:20',
            ]);

            $vacancyData = [
                'address' => $request->input('address'),
                'facility_type' => $request->input('facility_type'),
                'position_id' => $request->input('position_id'),
                'availability_to_start' => $request->input('availability_to_start'),
                'gender_pref' => $request->input('gender_pref'),
                'shift_details' => $request->input('shift_details'),
                'experience' => $request->input('experience'),
                'borough' => $request->input('borough'),
                'language_pref' => $request->input('language_pref'),
                'payment_type' => $request->input('payment_type'),
                'legal_status' => $request->input('legal_status'),
                'rate_per_hour' => $request->input('rate_per_hour'),
                'license_required' => $request->input('license_required'),
                'status' => $request->input('status', 'open'),
                'work_days' => $request->input('work_days'),
            ];

            $vacancy->update($vacancyData);
            return redirect()->route('dashboard')->with('snack', [
                'type' => 'success',
                'message' => 'Vacancy updated successfully.',
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Employers/EditVacancy', [
                'positions' => Position::all(),
                'languages' => Language::all(),
                'vacancy' => $vacancy,
                'errors' => $e->validator->errors()->toArray(),
            ]);
        }
    }

    public function EditVacancyView(Request $request, $id)
    {
        $token = $request->cookie('token');
        if (!$token) return redirect()->route('login');


        $request->headers->set('Authorization', 'Bearer ' . $token);
        /** @var \App\Models\User $user */
        $user = Auth::guard('user')->user();
        if (!$user || !$user->hasRole('employer')) {
            return redirect()->route('login');
        }
        $vacancy = $user->employer->vacancies()->with('position')->find($id);
        if (!$user->employer || !$vacancy) {
            return redirect()->route('dashboard');
        }
        return Inertia::render('Employers/EditVacancy', [
            'positions' => Position::all(),
            'languages' => Language::all(),
            'vacancy' => $vacancy,
        ]);
    }
}
