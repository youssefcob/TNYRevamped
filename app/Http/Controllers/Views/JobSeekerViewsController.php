<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Position;
use App\Services\Employer\VacanciesService;
use App\Services\JobSeekerService;
use App\Services\PositionService;
use App\Services\ViewServices\HomeService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class JobSeekerViewsController extends Controller
{
    protected $service;

    public function __construct(JobSeekerService $service)
    {
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
        // dd($request->all());
        $userId = Auth::guard('user')->user()->id;
        if (!$userId) {
            return ['success' => false, 'message' => 'no user present'];
        };
        // dd($request->toArray());

        $response = $this->service->createOrUpdateJobSeeker($request, $userId);
        // dd($response);
        if (!$response['success']) {
            $token = $request->cookie('token');
            if ($token) {
                $request->headers->set('Authorization', 'Bearer ' . $token);
                /** @var \App\Models\User $user */
                $user = Auth::guard('user')->user();
                if (!$user) {
                    redirect()->route('home');
                }
                $data['user'] = $user;
                $data['token'] = ['access_token' => $token, 'token_type' => 'Bearer'];

                $data['job_seeker'] = $user->jobSeeker;
                $data['positions'] = Position::all();
                $data['languages'] = Language::all();
                $data['errors'] = $response['errors'] ?? [];


                return Inertia::render('JobSeekers/JobSeekerProfileEdit', $data);
            }
        }
        return redirect()->route('job-seeker.profile');
    }
}
