<?php

namespace App\Http\Controllers;

use App\Services\DataMigrationService;
use Illuminate\Http\Request;

class DataMigrationController extends Controller
{
    //
    protected $service;
    public function __construct(DataMigrationService $service)
    {
        $this->service = $service;
    }
    public function migrateData(Request $request)
    {
        $response = $this->service->migrateData($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }
}
