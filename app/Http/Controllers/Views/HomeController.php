<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Services\Content\ClientsService;
use App\Services\Content\EmployersService;
use App\Services\Content\JobsService;
use App\Services\Content\NewsService;
use App\Services\Content\ServicesService;
use App\Services\Content\TeamService;
use App\Services\Content\TestimonialsService;
use App\Services\Employer\VacanciesService;
use App\Services\HeroService;
use App\Services\JobSeekerService;
use App\Services\ViewServices\HomeService;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class HomeController extends Controller
{
    public function view(Request $request)
    {
        $data = HomeService::get();

        $token = $request->cookie('token');
        if ($token) {
            $request->headers->set('Authorization', 'Bearer ' . $token);
            /** @var \App\Models\User $user */
            $user = Auth::guard('user')->user();
            if ($user) {
                $data['user'] = $user;
                $data['token'] = ['access_token'=>$token, 'token_type' => 'Bearer'];

                if ($user->hasRole('employer')) {
                    $data['employer'] = $user->employer;
                    $data['talent'] = JobSeekerService::getTalent();
                    return Inertia::render('Employers/EmployersHome', $data);
                } elseif ($user->hasRole('job_seeker')) {
                    $data['job_seeker'] = $user->jobSeeker;
                    $data['vacancies'] = VacanciesService::featured();
                    return Inertia::render('JobSeekers/JobSeekersHome', $data);
                }
            }
        }
        $data['talent'] = JobSeekerService::getTalent();

        return Inertia::render('Home', $data);
    }

  

    public function services()
    {
        $data = [];

        $data['services'] = ServicesService::get();
        return Inertia::render('Services', $data);
    }

    public function about()
    {
        $data = [];

        // $data['team'] = TeamService::get();
        return Inertia::render('About', $data);
    }

    public function employers()
    {
        $data = [];

        $data['employers'] = EmployersService::get();
        return Inertia::render('Employers', $data);
    }

    public function apply($position = null)
    {
        $data = [];

        $data['jobs'] = JobsService::get();
        $data['position'] = $position;
        return Inertia::render('JobSeekers/Apply', $data);
    }


    public function requestService($service = null)
    {
        $data = [];

        $data['services'] = ServicesService::get();
        $data['service'] = $service;
        return Inertia::render('RequestService', $data);
    }

    public function news($id = null)
    {
        $data = [];

        $data['news'] = News::findOrFail($id);
        return Inertia::render('News', $data);
    }


    public function talents(Request $request)
    {
        $data = [];

        $jobSeekers = JobSeekerService::get($request);
        if ($jobSeekers['success']) {
            $data['job_seekers'] = $jobSeekers['data'];
        } else {
            Log::error('Failed to fetch job seekers: ' . $jobSeekers['message']);
            $data['job_seekers'] = [];
        }
        return Inertia::render('Talents', $data);
    }



    public function jobSeekers()
    {
        return Inertia::render('JobSeekers/JobSeekersHome');
    }
}
