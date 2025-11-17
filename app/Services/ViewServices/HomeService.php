<?php

namespace App\Services\ViewServices;

use App\Services\Content\ClientsService;
use App\Services\Content\EmployersService;
use App\Services\Content\JobsService;
use App\Services\Content\NewsService;
use App\Services\Content\ServicesService;
use App\Services\Content\TeamService;
use App\Services\Content\TestimonialsService;
use App\Services\HeroService;

class HomeService
{
    public static function get()
    {
        $data = [];

        $data['hero'] = HeroService::get();
        $data['services'] = ServicesService::get();
        // $data['employers'] = EmployersService::get();
        // $data['jobs'] = JobsService::get();
        $data['news'] = NewsService::get();
        $data['clients'] = ClientsService::get();
        $data['testimonials'] = TestimonialsService::get();
        $data['team'] = TeamService::get();

        return $data;
    }
}