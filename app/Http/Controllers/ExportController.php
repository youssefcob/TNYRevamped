<?php

namespace App\Http\Controllers;

use App\Services\ExportService;
use Illuminate\Http\Request;

class ExportController extends Controller
{
    //
    protected $service; 
    public function __construct(ExportService $service){
        $this->service = $service;
    }
    public function toCSV(Request $request){
        $response = $this->service->toCSV($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
