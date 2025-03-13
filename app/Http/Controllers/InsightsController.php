<?php

namespace App\Http\Controllers;

use App\Services\InsightsService;
use Illuminate\Http\Request;

class InsightsController extends Controller
{
    //
    protected $service; 
    public function __construct(InsightsService $service){
        $this->service = $service;
    }
    public function getMainMetrics(Request $request){
        $response = $this->service->getMainMetrics($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
