<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->attributes->get('user');
        // dd($user->toArray());

        if ($user->hasRole('employer')) {

            return redirect()->route('employer.vacancies');
        }
        if ($user->hasRole('job_seeker')) {
            return redirect()->route('job-seeker.dashboard.applications');
        } 

        // return redirect()->route('login');
    }

    public function employerVacancies(Request $request)
    {
        $user = $request->attributes->get('user');
        $vacancies = $user->employer->vacancies()->with('position')->withCount('applications')->get();
        return Inertia::render('Employers/EmployersDashboard', ['vacancies' => $vacancies]);
    }

    public function employerBids(Request $request)
    {
        $user = $request->attributes->get('user');
        $bids = $user->employer->bids()->with('position')->get();
        return Inertia::render('Employers/EmployersDashboard', ['bids' => $bids]);
    }

    public function jobSeekerApplications(Request $request)
    {
        // dd('jobSeekerApplications called');
        $user = $request->attributes->get('user');

        if (!$user) {
        return redirect()->route('login')->with('snack', [
            'type' => 'error',
            'message' => 'Please login to continue.',
        ]);
    }
    
    // Check if jobSeeker relationship exists
    if (!$user->jobSeeker) {
        return redirect()->route('profile.edit')->with('snack', [
            'type' => 'error',
            'message' => 'Please complete your profile first.',
        ]);
    }
        $applications = $user->jobSeeker->applications()->with('vacancy.position')->get();
        return Inertia::render('JobSeekers/JobSeekersDashboard', ['applications' => $applications]);
    }
}
