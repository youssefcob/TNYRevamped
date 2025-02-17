<?php

namespace App\Http\Controllers;

use App\Services\PositionService;
use Illuminate\Http\Request;

class PositionController extends Controller
{
    //
    protected $service;

    public function __construct(PositionService $service){
        $this->service = $service;
    }

    public function getPositions(Request $request){
        $response = $this->service->getPositions($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updatePosition(Request $request){
        $response = $this->service->updatePosition($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function deletePosition(Request $request){
        $response = $this->service->deletePosition($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function createPosition(Request $request){
        $response = $this->service->createPosition($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
