<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Position;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProfileController extends Controller
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
                $data['token'] = ['access_token'=>$token, 'token_type' => 'Bearer'];

                if ($user->hasRole('employer')) {
                    $data['employer'] = $user->employer;
                    return Inertia::render('Employers/EmployersProfile', $data);
                } elseif ($user->hasRole('job_seeker')) {
                    $data['job_seeker'] = $user->jobSeeker;
                    if(!$user->jobSeeker){
                        return redirect()->route('job-seeker.profile.edit');
                    }
                    return Inertia::render('JobSeekers/JobSeekerProfile', $data);
                }
            }
        }
        return redirect()->route('home');
    }

    public function editView(Request $request)
    {
        $token = $request->cookie('token');
        if ($token) {
            $request->headers->set('Authorization', 'Bearer ' . $token);
            /** @var \App\Models\User $user */
            $user = Auth::guard('user')->user();
            if ($user) {
                $data['user'] = $user;
                $data['token'] = ['access_token'=>$token, 'token_type' => 'Bearer'];
            }
            if($user->hasRole('employer')){
                $data['employer'] = $user->employer;
                return Inertia::render('Employers/EmployersProfileEdit', $data);
            }elseif($user->hasRole('job_seeker')){
                $data['job_seeker'] = $user->jobSeeker;
                $data['positions'] = Position::all()->pluck('title')->toArray();
                return Inertia::render('JobSeekers/JobSeekerProfileEdit', $data);
            }
        }
        return redirect()->route('home');
    }
}
