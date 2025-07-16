<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Position;
use App\Services\JobSeekerService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TalentsController extends Controller
{
      public function talents(Request $request)
    {
        $data = [];
        $data['positions'] = Position::all();

        $jobSeekers = JobSeekerService::get($request);
        if ($jobSeekers['success']) {
            $data['job_seekers'] = $jobSeekers['data'];
        } else {
            $data['job_seekers'] = [];
        }
        return Inertia::render('Talents', $data);
    }
}
