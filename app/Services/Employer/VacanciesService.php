<?php

namespace App\Services\Employer;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class VacanciesService
{
    public function create(Request $request)
    {
        $request->validate([
            'position_id'      => 'required|integer|exists:positions,id',
            'borough'          => 'required|string',
            'address'          => 'required|string',
            'shift_details'    => 'required|string',
            'experience'       => 'required|numeric',
            'facility_type'    => 'required|string',
            'payment_type'     => 'required|string',
            'rate_per_hour'    => 'required|numeric',
            'license_required' => 'required|string',
            'legal_status'     => 'required|string',
            'status'           => 'nullable|string',
            'gender_pref'      => 'nullable|string',
            'work_days'        => 'required|array',
            'availability'     => 'nullable|string',
        ]);

        /** @var \App\Models\User $user */
        $user = Auth::user();

        $employer = $user->employer()->first();
        if (!$employer) {
            return [
                'success' => false,
                'message' => 'Employer not found. Please create an employer profile first.'
            ];
        }
        $vacancyData = [
            'employer_id'      => $employer->id,
            'position_id'      => $request->input('position_id'),
            'borough'          => $request->input('borough'),
            'address'          => $request->input('address'),
            'shift_details'    => $request->input('shift_details'),
            'experience'       => $request->input('experience'),
            'facility_type'    => $request->input('facility_type'),
            'payment_type'     => $request->input('payment_type'),
            'rate_per_hour'    => $request->input('rate_per_hour'),
            'license_required' => $request->input('license_required'),
            'legal_status'     => $request->input('legal_status'),
            'status'           => $request->input('status'),
            'gender_pref'      => $request->input('gender_pref', null),
            'work_days'        => $request->input('work_days'),
            'availability'     => $request->input('availability')
        ];
        try {
            $vacancy = $employer->vacancies()->create($vacancyData);
            $vacancy->load('position');
            return [
                'success' => true,
                'data' => $vacancy,
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function employerGetVacancies()
    {
        /** @var \App\Models\User $user */

        $user = Auth::user();
        $employer = $user->employer()->first();
        if (!$employer) {
            return [
                'success' => false,
                'message' => 'Employer not found. Please create an employer profile first.'
            ];
        }
        $vacancies = $employer->vacancies()->with('position')->get();
        return [
            'success' => true,
            'data' => $vacancies,
        ];
    }

    public function employerUpdateVacancy(Request $request, $id)
    {
        $request->validate([
            'borough'          => 'nullable|string',
            'address'          => 'nullable|string',
            'shift_details'    => 'nullable|string',
            'experience'       => 'nullable|numeric',
            'facility_type'    => 'nullable|string',
            'payment_type'     => 'nullable|string',
            'rate_per_hour'    => 'nullable|numeric',
            'license_required' => 'nullable|string',
            'legal_status'     => 'nullable|string',
            'status'           => 'nullable|string',
            'gender_pref'      => 'nullable|string',
            'work_days'        => 'nullable|array',
            'availability'     => 'nullable|string',
        ]);

        $vacancy_data = [
            'borough',
            'address',
            'shift_details',
            'experience',
            'facility_type',
            'payment_type',
            'rate_per_hour',
            'license_required',
            'legal_status',
            'status',
            'gender_pref',
            'work_days',
            'availability',
        ];
        $vacancy_data = array_filter($request->only($vacancy_data), function ($value) {
            return !is_null($value) && $value !== '';
        });
        if (empty($vacancy_data)) {
            return [
                'success' => false,
                'message' => 'No valid fields provided for update.'
            ];
        }
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $employer = $user->employer()->first();
        if (!$employer) {
            return [
                'success' => false,
                'message' => 'Employer not found. Please create an employer profile first.'
            ];
        }
        $vacancy = $employer->vacancies()->find($id);
        if (!$vacancy) {
            return [
                'success' => false,
                'message' => 'Vacancy not found.'
            ];
        }
        try {
            $vacancy->update($vacancy_data);
            $vacancy->load('position');
            return [
                'success' => true,
                'data' => $vacancy,
                'message' => 'Vacancy updated successfully.'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function employerDeleteVacancy($id)
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $employer = $user->employer()->first();
        if (!$employer) {
            return [
                'success' => false,
                'message' => 'Employer not found. Please create an employer profile first.'
            ];
        }
        $vacancy = $employer->vacancies()->find($id);
        if (!$vacancy) {
            return [
                'success' => false,
                'message' => 'Vacancy not found.'
            ];
        }
        try {
            $vacancy->delete();
            return [
                'success' => true,
                'message' => 'Vacancy deleted successfully.'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function adminViewVacanciesPerEmployer($id)
    {
        try {
            $user = \App\Models\User::find($id);
            if (!$user || !$user->hasRole('employer')) {
                return [
                    'success' => false,
                    'message' => 'Employer not found or user is not an employer.'
                ];
            }
            $employer = $user->employer()->first();
            
            if (!$employer) {
                return [
                    'success' => false,
                    'message' => 'Employer not found.'
                ];
            }
            
            $vacancies = $employer->vacancies()->with('position')->get();
            
            return [
                'success' => true,
                'data' => [
                    'employer' => $employer,
                    'vacancies' => $vacancies
                ]
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function adminUpdateVacancyStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string'
        ]);

        $vacancy = \App\Models\Vacancy::find($id);
        if (!$vacancy) {
            return [
                'success' => false,
                'message' => 'Vacancy not found.'
            ];
        }

        try {
            $vacancy->update(['status' => $request->input('status')]);
            return [
                'success' => true,
                'data' => $vacancy,
                'message' => 'Vacancy status updated successfully.'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }


    public function filterVacancies(Request $request)
    {
        $query = \App\Models\Vacancy::query();

        if ($request->has('position_id')) {
            $query->where('position_id', $request->input('position_id'));
        }
        if ($request->has('borough')) {
            $query->where('borough', 'like', '%' . $request->input('borough') . '%');
        }
       

        $vacancies = $query->with('position')->get();

        return [
            'success' => true,
            'data' => $vacancies
        ];
    }
}
