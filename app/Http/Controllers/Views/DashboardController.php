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
        // dd('hello');
        $token = $request->cookie('token');
        if ($token) {
            $request->headers->set('Authorization', 'Bearer ' . $token);
            /** @var \App\Models\User $user */
            $user = Auth::guard('user')->user();
            if ($user) {
                $data['user'] = $user;
                $data['token'] = ['access_token' => $token, 'token_type' => 'Bearer'];

                if ($user->hasRole('employer')) {
                    $data['employer'] = $user->employer;
                    if (!$user->employer) {
                        return redirect()->route('profile.edit');
                    }
                    $data['employer'] = $user->employer;
                    $data['vacancies'] = $user->employer->vacancies()->with('position')->withCount('applications')->get();
                    return Inertia::render('Employers/EmployersDashboard', $data);
                } elseif ($user->hasRole('job_seeker')) {
                    $job_seeker = $user->jobSeeker;
                    $data['job_seeker'] = $job_seeker;
                    if (!$user->jobSeeker) {
                        return redirect()->route('profile.edit');
                    }
                    $data['applications'] = $job_seeker->applications()->with('vacancy.position')->get();
                    return Inertia::render('JobSeekers/JobSeekersDashboard', $data);
                }
            }
        }
        return redirect()->route('login');
    }
        
}
