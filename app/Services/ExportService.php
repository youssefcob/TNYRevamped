<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Employer;
use App\Models\JobSeeker;
use App\Models\PositionApplication;
use App\Models\ServiceRequest;
use App\TableFiltersHelperFunctions;
use Exception;
use Illuminate\Support\Facades\DB;

class ExportService
{
    use TableFiltersHelperFunctions;
    // Your service logic goes here

    public function toCSV($request)
    {
        try {
            $request->validate([
                'table' => 'required|in:job_seekers,employers,bids,position_applications,service_requests',
            ]);

            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $table = $request->input('table');
            $status = $request->input('status');

            if($table === 'bids'){
                $query = DB::table('bids')
                    ->join('job_seekers', 'bids.job_seeker_id', '=', 'job_seekers.id')
                    ->join('users', 'job_seekers.user_id', '=', 'users.id')
                    ->join('employers', 'bids.employer_id', '=', 'employers.id')
                    ->join('users as employer_users', 'employers.user_id', '=', 'employer_users.id')
                    ->select(
                        'bids.id',
                        'bids.rate_per_hour',
                        'bids.status as bid_status',
                        'bids.created_at',
                        'bids.updated_at',
                        'users.name as job_seeker_name',
                        'users.email as job_seeker_email',
                        'job_seekers.rate_per_hour as job_seeker_rate_per_hour',
                        'employer_users.name as employer_name',
                        'employer_users.email as employer_email',
                        'employers.facility_name'
                    );
            }
            else if($table === 'job_seekers'){
                $query =JobSeeker::with(['user' => function ($q) {
                    $q->select('id', 'name', 'email');
                }, 'position' => function ($q) {
                    $q->select('id', 'title');
                }]);
            }
            else if($table === 'employers'){
                $query = Employer::with(['user' => function ($q) {
                    $q->select('id', 'name', 'email');
                }]);
            }
            else if($table === 'position_applications'){
                $query = PositionApplication::with(['position' => function ($q) {
                    $q->select('id', 'title');
                }])->latest();
            }
            else if($table === 'service_requests'){
                $query = ServiceRequest::with(['service' => function ($q) {
                    $q->select('id', 'title');
                }])->latest();
            }

            // dd($query);
            
                
            if ($startDate) {
                $filteredQuery = $this->startDateFilter($query, $startDate);
                if (!$filteredQuery['success']) return $filteredQuery;
                $query = $filteredQuery['data'];
            }

            if ($endDate) {
                $filteredQuery = $this->endDateFilter($query, $endDate);
                if (!$filteredQuery['success']) return $filteredQuery;
                $query = $filteredQuery['data'];
            }
            if($status){
                $filteredQuery = $this->statusFilter($query, $status);
                if (!$filteredQuery['success']) {
                    return $filteredQuery;
                }
                $query = $filteredQuery['data'];
            }


            // Fetch data
            $data = $query->get();
            
            if ($data->isEmpty()) {
                return [
                    'success' => false,
                    'message' => 'No data found for the given filters.',
                ];
            }
            
            $rows = [];

            foreach ($data as $row) {
                if ($table !== 'bids') {
                    $row = $row->toArray();
                } else {
                    $row = (array)$row;
                }
            
                // Flatten relationship based on table
                if ($table === 'job_seekers') {
                    $row['name'] = $row['user']['name'];
                    $row['email'] = $row['user']['email'];
                    $row['position'] = $row['position']['title'];
                    unset($row['user_id']);
                    unset($row['position_id']);
                    unset($row['user']);
                }

                if ($table === 'employers') {
                    $row['name'] = $row['user']['name'];
                    $row['email'] = $row['user']['email'];
                    unset($row['user_id']);
                    unset($row['user']);
                }
            
                if ($table === 'position_applications') {
                    $row = [
                        'id' => $row['id'],
                        'name' => $row['name'],
                        'email' => $row['email'],
                        'phone' => $row['phone'],
                        'city' => $row['city'],
                        'state' => $row['state'],
                        'zip' => $row['zip'],
                        'position' => $row['position']['title'] ?? '',
                        'license_status' => $row['license_status'],
                        'years_experience' => $row['years_experience'],
                        'preferred_setting' => $row['preferred_setting'],
                        'employment_type' => $row['employment_type'],
                        'start_date' => $row['start_date'],
                        'status' => $row['status'],
                        'message' => $row['message'],
                        'resume' => $row['resume'],
                        'created_at' => $row['created_at'],
                    ];
                }

                if ($table === 'service_requests') {
                    $row = [
                        'id' => $row['id'],
                        'name' => $row['name'],
                        'email' => $row['email'],
                        'phone' => $row['phone'],
                        'address' => $row['address'],
                        'company_name' => $row['company_name'],
                        'service' => $row['service']['title'] ?? '',
                        'requirements' => $row['requirements'],
                        'status' => $row['status'],
                        'created_at' => $row['created_at'],
                    ];
                }
            
                $rows[] = array_map(function ($value) {
                    // Handle array values by converting to JSON string
                    return is_array($value) ? json_encode($value) : $value;
                }, $row);
            }

            // The CSV is returned in the response body, nothing is written to disk
            return [
                'success' => true,
                'csv' => CSV::write($rows),
                'filename' => $table . '_' . now()->format('Y-m-d') . '.csv',
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
