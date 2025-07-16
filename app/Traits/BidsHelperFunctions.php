<?php

namespace App\Traits;

use App\Models\Employer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

trait BidsHelperFunctions
{
    const PAGINATION_LIMIT = 5;
    //
    public function fetchEmployerBids($employerId)
    {
        return Employer::find($employerId)
            ->bids()
            ->with(['position']);
    }

    public function employerBidsResponse($bids)
    {
        $bids->getCollection()->each->makeHidden(['phone_number', 'status', 'user_id']);
        return [
            'success' => true,
            'message' => 'Bids fetched successfully',
            'data' => $bids
        ];
    }

    public function fetchAdminBids()
    {

        $bids = DB::table('bids')
            ->join('job_seekers', 'bids.job_seeker_id', '=', 'job_seekers.id')
            ->join('users', 'job_seekers.user_id', '=', 'users.id')
            ->join('employers', 'bids.employer_id', '=', 'employers.id')
            ->join('users as employer_users', 'employers.user_id', '=', 'employer_users.id')
            // ->join('users', 'bids.employer_id', '=', 'employers.id')
            ->select(
                // job_seekers
                'job_seekers.id',
                'job_seekers.position_id',
                'job_seekers.user_id',
                'job_seekers.experience',
                'job_seekers.facility_type',
                'job_seekers.payment_type',
                'job_seekers.preferred_location',
                'job_seekers.is_employed',
                'job_seekers.availability_to_start',
                'job_seekers.rate_per_hour',
                'job_seekers.is_licensed',
                'job_seekers.legal_status',
                'job_seekers.resume',
                'job_seekers.is_talent',
                'job_seekers.status',
                'job_seekers.phone_number',
                'job_seekers.gender',
                'job_seekers.created_at',
                'job_seekers.updated_at',
                'users.id as user_id',
                'users.name as user_name',
                'users.email as user_email',
                // employers
                'employers.id as employer_id',
                'employers.facility_name as employer_facility_name',
                'employers.phone_number as employer_phone_number',
                'employers.created_at as employer_created_at',
                'employers.updated_at as employer_updated_at',
                // users
                'employer_users.id as employer_user_id',
                'employer_users.name as employer_user_name',
                'employer_users.email as employer_user_email',
                // bids
                'bids.id as bid_id',
                'bids.employer_id',
                'bids.job_seeker_id',
                'bids.rate_per_hour as bid_rate_per_hour',
                'bids.status as bid_status',
                'bids.created_at as bid_created_at',
                'bids.updated_at as bid_updated_at'
            );
        //  ->paginate(self::PAGINATION_LIMIT);
        // dd($bids->items());
        return $bids;
    }

    public function adminBidsResponse($bids)
    {
        // Map the items into the format you want
        $mappedData = collect($bids->items())->map(function ($row) {
            return [
// <<<<<<< job_seekers
//                 'id' => $row->id,
//                 'position_id' => $row->position_id,
//                 'user_id' => $row->user_id,
//                 'experience' => $row->experience,
//                 'facility_type' => $row->facility_type,
//                 'payment_type' => $row->payment_type,
//                 'preferred_location' => $row->preferred_location,
//                 'is_employed' => $row->is_employed,
//                 'availability_to_start' => $row->availability_to_start,
//                 'rate_per_hour' => $row->rate_per_hour,
//                 'is_licensed' => $row->is_licensed,
//                 'legal_status' => $row->legal_status,
//                 'resume' => $row->resume,
//                 'is_talent' => $row->is_talent,
//                 'status' => $row->status,
//                 'gender' => $row->gender,
//                 'created_at' => $row->created_at,
//                 'updated_at' => $row->updated_at,
//                 'user' => [
//                     'id' => $row->user_id,
// =======
                'job_seeker' => [
                    'id' => $row->id,
// >>>>>>> master
                    'name' => $row->user_name,
                    'email' => $row->user_email,
                    'experience' => $row->experience,
                    'facility_type' => $row->facility_type,
                    'payment_type' => $row->payment_type,
                    'preferred_location' => $row->preferred_location,
                    // 'employment_status' => $row->employment_status,
                    'availability_to_start' => $row->availability_to_start,
                    'rate_per_hour' => $row->rate_per_hour,
                    'is_licensed' => $row->is_licensed,
                    'legal_status' => $row->legal_status,
                    'resume' => $row->resume,
                    'is_talent' => $row->is_talent,
                    'status' => $row->status,
                    'gender' => $row->gender,
                ],
                'employer' => [
                    'id' => $row->employer_id,
                    'facility_name' => $row->employer_facility_name,
                    'phone_number' => $row->employer_phone_number,
                    'name' => $row->employer_user_name,
                    'email' => $row->employer_user_email,
                    'created_at' => $row->employer_created_at,
                    'updated_at' => $row->employer_updated_at,
                ],
                'bid' => [
                    'id' => $row->bid_id,
                    'employer_id' => $row->employer_id,
                    'job_seeker_id' => $row->job_seeker_id,
                    'rate_per_hour' => $row->bid_rate_per_hour,
                    'status' => $row->bid_status,
                    'created_at' => $row->bid_created_at,
                    'updated_at' => $row->bid_updated_at,
                ]
            ];
        })->all();

        // Now include pagination metadata inside the same `data` array
        $responseData = [
            'success' => true,
            'message' => 'Bids fetched successfully',
            'data' => $mappedData,
            'pagination' => [
                'total' => $bids->total(),
                'per_page' => $bids->perPage(),
                'current_page' => $bids->currentPage(),
                'last_page' => $bids->lastPage(),
                'from' => $bids->firstItem(),
                'to' => $bids->lastItem(),
            ]
        ];

        return $responseData;
    }

    public function validateCreateBidRequest(Request $request)
    {
        $request->validate([
            'job_seeker_id' => 'required|exists:job_seekers,id',

            'rate_per_hour' => 'required|numeric',
        ]);
    }
    public function validateUpdateBidRequest(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:bids,id',
            'rate_per_hour' => 'required|numeric',
        ]);
    }
    public function updateBidRatePerHour($bidId, $employerId, $ratePerHour)
    {
        return DB::table('bids')
            ->where('id', $bidId)
            ->where('employer_id', $employerId)
            ->update([
                'rate_per_hour' => $ratePerHour,
                'updated_at' => now()
            ]);
    }
    public function updateBidStatus($bidId, $status)
    {
        return DB::table('bids')
            ->where('id', $bidId)
            ->update(['status' => $status]);
    }
    public function validateUpdateBidStatusRequest(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:bids,id',
            'status' => 'required|string',
        ]);
    }
    
    public function jobSeekerIdFilter($bids, $jobSeekerId, $joinedTable = '')
    {
        // $column = $joinedTable ? $joinedTable . '.job_seeker_id' : 'job_seeker_id';
        $data = $bids->where('bids.job_seeker_id', $jobSeekerId);
        return [
            'success' => true,
            'message' => 'Bids fetched successfully',
            'data' => $data
        ];
    }
}
