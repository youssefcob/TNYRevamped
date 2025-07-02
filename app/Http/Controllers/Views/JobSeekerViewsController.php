<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Services\Employer\VacanciesService;
use App\Services\JobSeekerService;
use App\Services\PositionService;
use App\Services\ViewServices\HomeService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobSeekerViewsController extends Controller
{
    protected $service;

    public function __construct(JobSeekerService $service){
        $this->service = $service;
    }

    // function home()
    // {
    //     $data = HomeService::get();
    //     return Inertia::render('JobSeekers/JobSeekersHome', $data);
    // }

    function vacancies(Request $request)
    {
        $data['vacancies'] = VacanciesService::get($request);
        $data['positions'] = PositionService::get();
        // dd($data);
        return Inertia::render('JobSeekers/Vacancies', $data);

    }

    public function createOrUpdateJobSeekerProfile(Request $request)
    {
        dd($request->all());
        $response = $this->service->createOrUpdateJobSeeker($request, $userId);
        return $response['success'] ? $this->sendResponse($response) : $this->sendError($response);
    }
}
