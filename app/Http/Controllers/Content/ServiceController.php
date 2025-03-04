<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\Services\Content\ServicesService;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    protected $services;
    public function __construct(ServicesService $services)
    {
        $this->services = $services;
    }
    public function submit(Request $request)
    {
        $response = $this->services->post($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }

    public function delete($id)
    {
        $response = $this->services->delete($id);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
