<?php

namespace App\Http\Controllers;

use App\Services\ServiceRequestService;
use Illuminate\Http\Request;

class ServiceRequestController extends Controller
{
    protected $service;

    public function __construct(ServiceRequestService $service){
        $this->service = $service;
    }

    public function getServiceRequests(Request $request){
        $response = $this->service->getServiceRequests($request);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
    
    public function updateServiceRequestStatus(Request $request){
        $response = $this->service->updateServiceRequestStatus($request);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
    
    public function deleteServiceRequest(Request $request){
        $response = $this->service->deleteServiceRequest($request);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
    
    
}
