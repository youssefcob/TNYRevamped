<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Employer;
use App\Models\JobSeeker;
use App\Models\ServiceRequest;
use App\TableFiltersHelperFunctions;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ExportService
{
    use TableFiltersHelperFunctions;
    // Your service logic goes here

    public function toCSV($request)
    {
        try {
            $request->validate([
                'table' => 'required|in:job_seekers,employers,bids',
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
            
            // Generate filename
            $filename = $table . '_' . now()->format('Ymd_His') . '_'  . '.csv';
            $path = '/' . $filename;
            
            // Create CSV
            $csvContent = '';
            $headersWritten = false;
            
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
            
                if ($table === 'service_requests' && isset($row['service'])) {
                    $row['service'] = $row['service']['title'];
                    unset($row['service_id']);
                }
            
                if (!$headersWritten) {
                    $csvContent .= implode(',', array_keys($row)) . "\n";
                    $headersWritten = true;
                }
            
                $csvContent .= implode(',', array_map(function ($value) {
                    // Handle array values by converting to JSON string
                    if (is_array($value)) {
                        $value = json_encode($value);
                    }
                    // Handle null values
                    if ($value === null) {
                        $value = '';
                    }
                    return '"' . str_replace('"', '""', $value) . '"';
                }, array_values($row))) . "\n";
            }
            
            // Store file
            // Storage::disk('public')->put($path, $csvContent);
            file_put_contents(public_path($path), $csvContent);

            // Return download URL
            return [
                'success' => true,
                'url' => url($path),
                'message'=>'Data exported as a CSV file successfully, the download will start automatically.'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
