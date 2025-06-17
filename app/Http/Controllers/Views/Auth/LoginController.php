<?php

namespace App\Http\Controllers\Views\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\GeneratesToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class LoginController extends Controller
{

    use GeneratesToken;

    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */

    public function index()
    {
        return inertia('Auth/Login');
    }

    function login(Request $request)
    {
        try {
            $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return inertia('Auth/Login', [
                    'errors' => ['Invalid credentials provided.']
                ]);
            }

            $token = '';

            switch ($user->user_type) {
                case 'employer':
                    $token = $this->generateEmployerToken($user);
                    $user->load('employer');
                    break;
                case 'job_seeker':
                    $token = $this->generateJobSeekerToken($user);
                    $user->load('jobSeeker');
                    break;
            }

            cookie()->queue('token', $token['access_token'], 60 * 24, '/', null, true, false, false, 'strict');
            return redirect()->route('home');
        } catch (\Throwable $e) {
            return inertia('Auth/Login', [
                'errors' => [$e->getMessage()]
            ]);
        }
    }


        function Apilogin(Request $request)
    {
        try {
            $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return inertia('Auth/Login', [
                    'errors' => ['Invalid credentials provided.']
                ]);
            }

            $token = '';

            switch ($user->user_type) {
                case 'employer':
                    $token = $this->generateEmployerToken($user);
                    $user->load('employer');
                    break;
                case 'job_seeker':
                    $token = $this->generateJobSeekerToken($user);
                    $user->load('jobSeeker');
                    break;
            }
            return response()->json([
            'user' => $user,
            'tokens' => $token
            ]);
            // cookie()->queue('token', $token['access_token'], 60 * 24, '/', null, true, false, false, 'strict');
            // return redirect()->route('home');
        } catch (\Throwable $e) {
            return inertia('Auth/Login', [
                'errors' => [$e->getMessage()]
            ]);
        }
    }
}
