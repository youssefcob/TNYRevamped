<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Employer;
use App\Models\Position;
use App\Models\Service;
use App\Models\ServiceRequest;
use App\TableFiltersHelperFunctions;
use Exception;

class InsightsService
{
    use TableFiltersHelperFunctions;
    // Your service logic goes here
    public function getMainMetrics($request)
    {
        try {
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');

            $models = [
                'employersCount' => Employer::query(),
                'servicesCount' => Service::query(),
                'serviceRequestsCount' => ServiceRequest::query(),
                'applicationsCount' => Application::query(),
            ];

            $counts = [];

            foreach ($models as $key => $query) {
                if ($startDate) {
                    $startFiltered = $this->startDateFilter($query, $startDate);
                    if (!$startFiltered['success']) {
                        return $startFiltered;
                    }
                    $query = $startFiltered['data'];
                }

                if ($endDate) {
                    $endFiltered = $this->endDateFilter($query, $endDate);
                    if (!$endFiltered['success']) {
                        return $endFiltered;
                    }
                    $query = $endFiltered['data'];
                }

                $counts[$key] = $query->count();
            }

            return ['success' => true, 'data' => $counts];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
    public function getPositionsCount($request)
    {
        try {
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $applications = Application::query();
            if ($startDate) {
                $startFiltered = $this->startDateFilter($applications, $startDate,'applications');
                if (!$startFiltered['success']) {
                    return $startFiltered;
                }
                $query = $startFiltered['data'];
            }
            if ($endDate) {
                $endFiltered = $this->endDateFilter($applications, $endDate , 'applications');
                if (!$endFiltered['success']) {
                    return $endFiltered;
                }
                $query = $endFiltered['data'];
            }
            
            $query = $applications->join('positions', 'applications.position_id', '=', 'positions.id')
                ->select('positions.title')
                ->selectRaw('COUNT(*) as count')
                ->groupBy('positions.title');

            $positionStats = $query->get();

            $labels = $positionStats->pluck('title')->values()->toArray();
            $values = $positionStats->pluck('count')->values()->toArray();


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
