<?php

namespace App\Http\Controllers\Vacancies;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VacanciesController extends Controller
{
    protected $service;

    public function __construct(\App\Services\VacanciesService $service)
    {
        $this->service = $service;
    }

    public function create(Request $request)
    {
        $response = $this->service->createVacancy($request);
        if (!$response['success']) {
            return $this->sendError($response);
        }
        return $this->sendResponse($response);
    }
}
