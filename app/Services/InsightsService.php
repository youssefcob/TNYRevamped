<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Employer;
use App\Models\Position;
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
            // return['success' =>false, 'message'=>'Errors were '];
            return ['success' => true, 'data' => compact('employersCount','servicesCount','serviceRequestsCount','applicationsCount')];
        } catch (Exception $e) {
        
            //throw $th;
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
    public function getPositionsCount($request){
        try {
            $positionStats = Application::join('positions', 'applications.position_id', '=', 'positions.id')
                ->select('positions.title')
                ->selectRaw('COUNT(*) as count')
                ->groupBy('positions.title')
                ->get();

            // Convert to simple arrays of labels and values
            $labels = $positionStats->pluck('title')->values()->toArray();
            $values = $positionStats->pluck('count')->values()->toArray();
            
            return [
                'success' => true, 
                'data' => [
                    'labels' => $labels,
                    'values' => $values
                ]
            ];
            
        } catch (Exception $e) {
            return [
                'success' => false, 
                'message' => $e->getMessage()
            ];
        }
    }
}
