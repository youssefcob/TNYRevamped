<?php

namespace App\Services;

use App\Models\Employer;
use App\TableFiltersHelperFunctions;
use App\Traits\BidsHelperFunctions;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class BidsService
{
    use TableFiltersHelperFunctions;
    use BidsHelperFunctions;
    // Your service logic goes here



    public function listEmployerBids(Request $request, $employerId)
    {
        try {
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $status = $request->input('status');
            $id = $request->input('id');
            $bids = $this->fetchEmployerBids($employerId);
            if ($id) {
                $bids = $bids->where('bids.id', $id)->first();
                if (!$bids) {
                    return [
                        'success' => false,
                        'message' => 'Bid not found',
                    ];
                }
                return [
                    'success' => true,
                    'message' => 'Bids fetched successfully',
                    'data' => $bids
                ];
            } else {


                if ($startDate) {
                    $filteredBids = $this->startDateFilter($bids, $startDate, 'bids');
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                if ($endDate) {
                    $filteredBids = $this->endDateFilter($bids, $endDate, 'bids');
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                if ($status) {
                    $filteredBids = $this->statusFilter($bids, $status, 'bids');
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                // dd($bids);
                $bids = $bids->paginate(self::PAGINATION_LIMIT);
                return $this->employerBidsResponse($bids);
            }
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function listAdminBids(Request $request)
    {
        try {
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $status = $request->input('status');
            $employerId = $request->input('employer_id');
            $jobSeekerId = $request->input('job_seeker_id');
            $id = $request->input('id');
            $bids = $this->fetchAdminBids();
            // dd($bids);
            if($id){
                $bids = $bids->where('bids.id', $id)->first();
                if (!$bids) {
                    return [
                        'success' => false,
                        'message' => 'Bid not found',
                    ];
                }
                return [
                    'success' => true,
                    'message' => 'Bid fetched successfully',
                    'data' => $bids
                ];
            }
            else{
                if($startDate){
                    $filteredBids = $this->startDateFilter($bids, $startDate, 'bids');
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                if($endDate){
                    $filteredBids = $this->endDateFilter($bids, $endDate, 'bids');
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                if($status){
                    $filteredBids = $this->statusFilter($bids, $status, 'bids');
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                if($employerId){
                    // dd('s');
                    $filteredBids = $this->employerIdFilter($bids, $employerId, 'bids');
                    // dd($filteredBids[]);
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                if($jobSeekerId){
                    $filteredBids = $this->jobSeekerIdFilter($bids, $jobSeekerId, 'bids');
                    if (!$filteredBids['success']) {
                        return $filteredBids;
                    }
                    $bids = $filteredBids['data'];
                }
                $bids = $bids->paginate(self::PAGINATION_LIMIT);
            }
            return $this->adminBidsResponse($bids);
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function countJobSeekerBids(Request $request, $jobSeekerId)
    {
        try {
            $count = DB::table('bids')
                ->where('job_seeker_id', $jobSeekerId)
                ->where('status', '!=', 'closed')
                ->count();

            return [
                'success' => true,
                'message' => 'Bids fetched successfully',
                'data' => ['count' => $count]
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function createBid(Request $request, $employerId)
    {
        try {
            $this->validateCreateBidRequest($request);
            // OK here we could make the employer bid on a job seeker for only once, 
            // and if the request is made again, we should update the bid.

            // Check if the bid already exists
            $existingBid = DB::table('bids')
                ->where('employer_id', $employerId)
                ->where('job_seeker_id', $request->job_seeker_id)
                ->first();

            if ($existingBid) {
                if ($existingBid->status == 'closed') {
                    return [
                        'success' => false,
                        'message' => 'Bid is closed',
                    ];
                }
                $bid = $this->updateBidRatePerHour($existingBid->id, $employerId, $request->rate_per_hour);
            } else {
                $bid = DB::table('bids')->insert([
                    'employer_id' => $employerId,
                    'job_seeker_id' => $request->job_seeker_id,
                    'rate_per_hour' => $request->rate_per_hour,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }

            return [
                'success' => true,
                'message' => 'Bid created successfully',
                'data' => $bid
            ];
        } catch (ValidationException $e) {
            return [
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function updateBid(Request $request, $employerId)
    {
        try {
            $this->validateUpdateBidRequest($request);
            // Check if the bid exists
            $bid = DB::table('bids')
                ->where('id', $request->id)
                ->where('employer_id', $employerId)
                ->first();

            if (!$bid) {
                return [
                    'success' => false,
                    'message' => 'Bid not found',
                ];
            }
            if ($bid->status == 'closed') {
                return [
                    'success' => false,
                    'message' => 'Bid is closed',
                ];
            }

            $updatedBid = $this->updateBidRatePerHour($request->id, $employerId, $request->rate_per_hour);
            // $bid->rate_per_hour = $request->rate_per_hour;
            // $bid->updated_at = now();
            // dd($updatedBid);

            return [
                'success' => true,
                'message' => 'Bid updated successfully',
                'data' => $updatedBid
            ];
        } catch (ValidationException $e) {
            return [
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ];
        } catch (\Throwable $th) {
            return [
                'success' => false,
                'message' => $th->getMessage(),
            ];
        }
    }
    public function adminUpdateBidStatus(Request $request){
        try {
            // dd('s');
            $this->validateUpdateBidStatusRequest($request);

            $bid = $this->updateBidStatus($request->id, $request->status);
            return [
                'success' => true,
                'message' => 'Bid status updated successfully',
                'data' => $bid
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }
}
