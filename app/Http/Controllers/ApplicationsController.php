<?php

namespace App\Http\Controllers;

use App\Services\ApplicationsService;
use Illuminate\Http\Request;

class ApplicationsController extends Controller
{
    //
    protected $service;
    public function __construct(ApplicationsService $service){
        $this->service = $service;
    }
    public function getApplications(Request $request)
    {
        $response = $this->service->getApplications($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updateApplicationStatus(Request $request){
        $response = $this->service->updateApplicationStatus($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function deleteApplication(Request $request){
        $response = $this->service->deleteApplication($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function submit(Request $request)
    {
        $response = $this->service->createApplication($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
