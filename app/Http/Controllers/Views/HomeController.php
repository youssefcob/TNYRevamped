<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Services\HeroService;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function view()
    {
        $data = [];

        $data['hero'] = HeroService::get();
        return Inertia::render('Welcome', $data);
    }
 
}
