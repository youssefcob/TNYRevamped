<?php

namespace App\Http\Controllers;

use App\Services\JobSeekerService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JobSeekerController extends Controller
{
    protected $service;

    public function __construct(JobSeekerService $service){
        $this->service = $service;
    }

    public function getJobSeekers(Request $request){
        $response = $this->service->getJobSeekers($request);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function updateStatus(Request $request)
    {
        $response = $this->service->updateStatus($request);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function destroy($id)
    {
        $response = $this->service->deleteJobSeeker($id);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function createJobSeeker(Request $request)
    {
        // dd('s');
        $userId = Auth::guard('user')->user()->id;
        // dd($userId);
        $response = $this->service->createJobSeeker($request, $userId);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
    public function updateTalent(Request $request, $id)
    {
        $response = $this->service->updateTalent($request, $id);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }

    public function updateJobSeeker(Request $request)
    {
        $userId = Auth::guard('user')->user()->id;
             /** @var \App\Models\User $user */
        // $user = Auth::user()->id;
        $response = $this->service->updateJobSeeker($request, $userId);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
}
