<?php

namespace App\Services\Employer;

use App\Models\Employer;
use App\TableFiltersHelperFunctions;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class EmployerService
{
    use TableFiltersHelperFunctions;
    const PAGINATION_LIMIT = 10;
    public function updateEmployer(Request $request)
    {
        try {
            $validated = $request->validate([
                'facility_name' => 'required|string|max:255',
                'phone_number' => 'required|string|max:20',
                'borough' => 'nullable|string|max:100',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'success' => false,
                'errors' => $e->errors(),
            ];
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();

        $employerData = [
            'facility_name' => $request->input('facility_name'),
            'phone_number' => $request->input('phone_number'),
            'borough' => $request->input('borough'),
        ];

        $employer = $user->employer()->updateOrCreate(
            ['user_id' => $user->id],
            $employerData
        );

        return [
            'success' => true,
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
    public  function getWithFormattedResponse(Request $request, $perPage = Self::PAGINATION_LIMIT)
    {
        try {
            //code...
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            // $status = $request->input('status');
            $query = Employer::with('user');
            if($startDate){
                $filteredEmployers = $this->startDateFilter($query, $startDate);
                if (!$filteredEmployers['success']) {
                    return $filteredEmployers;
                }
                $query = $filteredEmployers['data'];
            }
            if($endDate){
                $filteredEmployers = $this->endDateFilter($query, $endDate);
                if (!$filteredEmployers['success']) {
                    return $filteredEmployers;
                }
                $query = $filteredEmployers['data'];
            }
            // if($status){
            //     $filteredEmployers = $this->statusFilter($query, $status);
            //     if (!$filteredEmployers['success']) {
            //         return $filteredEmployers;
            //     }
            //     $query = $filteredEmployers['data'];
            // }
            $employers = $query->paginate($perPage);
            // $employers = Employer::with('user')->paginate(self::PAGINATION_LIMIT);

            return [
                'success' => true,
                'data' => $employers,
                'message' => 'News fetched successfully',
            ];
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
