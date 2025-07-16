<?php

namespace App\Http\Controllers\Vacancies;

use App\Http\Controllers\Controller;
use App\Services\Employer\VacanciesService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VacanciesController extends Controller
{
    protected $service;

    public function __construct(VacanciesService $service)
    {
        $this->service = $service;
    }

    public function filterVacancies(Request $request)
    {
        $response = $this->service->filterVacancies( $request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function create(Request $request)
    {
        $response = $this->service->create($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function employerGetVacancies()
    {
        $response = $this->service->employerGetVacancies();
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function employerUpdateVacancy(Request $request, $id)
    {
        $response = $this->service->employerUpdateVacancy($request, $id);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function employerDeleteVacancy($id)
    {
        $response = $this->service->employerDeleteVacancy($id);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }
    
    public function adminViewVacanciesPerEmployer($id)
    {
        $response = $this->service->adminViewVacanciesPerEmployer($id);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function adminUpdateVacancyStatus(Request $request, $id)
    {
        $response = $this->service->adminUpdateVacancyStatus($request, $id);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function adminGetVacancies(Request $request)
    {
        $response = $this->service->adminGetVacancies($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }

    public function getVacancyFilters(Request $request)
    {
        $response = $this->service->getVacancyFilters($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }
}
