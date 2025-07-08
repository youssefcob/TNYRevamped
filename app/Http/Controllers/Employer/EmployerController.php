<?php

namespace App\Http\Controllers\Employer;

use App\Http\Controllers\Controller;
use App\Services\Employer\EmployerService;
use Illuminate\Http\Request;

class EmployerController extends Controller
{
    protected $service;
    public function __construct(EmployerService $service)
    {
        $this->service = $service;
    }
    public function update(Request $request)
    {
        $response = $this->service->updateEmployer($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function getEmployerFilters(Request $request)
    {
        $response = $this->service->getEmployerFilters($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
