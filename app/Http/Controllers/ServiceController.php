<?php

namespace App\Http\Controllers;

use App\Services\SystemService;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //
    protected $service; 
    public function __construct(SystemService $service){
        $this->service = $service;
    }
    public function getSystemServices(Request $request){
        $response = $this->service->getSystemServices($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function createSystemService(Request $request){
        $response = $this->service->createSystemService($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updateSystemService(Request $request){
        // dd($request->all());
        $response = $this->service->updateSystemService($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function deleteSystemService(Request $request){
        $response = $this->service->deleteSystemService($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
