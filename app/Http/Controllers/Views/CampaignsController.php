<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CampaignsController extends Controller
{
    public function campaigns()
    {
        return Inertia::render('Campaigns');
    }
}
