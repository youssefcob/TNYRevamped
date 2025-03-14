<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Services\Content\ClientsService;
use App\Services\Content\EmployersService;
use App\Services\Content\JobsService;
use App\Services\Content\NewsService;
use App\Services\Content\ServicesService;
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
        return Inertia::render('Home', $data);
    }
 
}
