<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Employer;
use App\Models\Service;
use App\Models\ServiceRequest;
use Exception;

class InsightsService
{
    // Your service logic goes here
    public function getMainMetrics($request){
        try {
            //code...
            $employersCount = Employer::count();
            $servicesCount = Service::count();
            $serviceRequestsCount = ServiceRequest::count();
            $applicationsCount = Application::count();
            return ['success' => true, 'data' => compact('employersCount','servicesCount','serviceRequestsCount','applicationsCount')];
        } catch (Exception $e) {
        
            //throw $th;
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
