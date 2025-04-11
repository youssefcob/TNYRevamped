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
use App\Services\HeroService;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function view()
    {
        $data = [];

        $data['hero'] = HeroService::get();
        $data['services'] = ServicesService::get();
        $data['employers'] = EmployersService::get();
        $data['jobs'] = JobsService::get();
        $data['news'] = NewsService::get();
        $data['clients'] = ClientsService::get();
        $data['testimonials'] = TestimonialsService::get();
        $data['team'] = TeamService::get();
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
        return Inertia::render('Apply', $data);
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
}
