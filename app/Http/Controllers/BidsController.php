<?php

namespace App\Http\Controllers;

use App\Services\BidsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BidsController extends Controller
{
    protected $service;

    public function __construct(BidsService $service){
        $this->service = $service;
    }

    public function listBidsForEmployer(Request $request){
        $employerId = Auth::guard('user')->user()->employer->id;
        $response = $this->service->listEmployerBids($request, $employerId);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function listAdminBids(Request $request){
        $response = $this->service->listAdminBids($request);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function countJobSeekerBids(Request $request){
        $jobSeekerId = Auth::guard('user')->user()->jobSeeker->id;
        $response = $this->service->countJobSeekerBids($request, $jobSeekerId);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
    public function createBid(Request $request){
        $employerId = Auth::guard('user')->user()->employer->id;
        // dd('s');
        $response = $this->service->createBid($request, $employerId);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function updateBid(Request $request){
        $employerId = Auth::guard('user')->user()->employer->id;
        $response = $this->service->updateBid($request, $employerId);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function updateBidStatus(Request $request){
        $response = $this->service->adminUpdateBidStatus($request);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
    
}
