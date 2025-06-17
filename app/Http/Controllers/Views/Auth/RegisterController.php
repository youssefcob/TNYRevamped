<?php

namespace App\Http\Controllers\Views\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\GeneratesToken;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    use GeneratesToken;


    public function index()
    {
        return Inertia::render('Auth/Register');
    }
    function submit(Request $request)
    {
        // dd('hello');

        // return"hello";
        try {
            //validate request
            $request->validate([
                'name' => ['required', 'string', 'max:30'],
                'password' => ['required', 'confirmed'],
                'email' => ['required', 'email', 'unique:users,email'],
                'type' => ['required', 'in:employer,job_seeker']
            ]);

            //create user
            $user = User::create([
                'name' => $request->name,
                'password' => Hash::make($request->password),
                'email' => $request->email,
                'user_type' => $request->type
            ]);

            $token = '';



            switch ($request->type) {
                case 'employer':
                    $token = $this->generateEmployerToken($user);
                    $user->load('employer');
                    break;
                case 'job_seeker':
                    $token = $this->generateJobSeekerToken($user);
                    $user->load('jobSeeker');
                    break;
            }

            // return response()->json([
            // 'user' => $user,
            // 'tokens' => $token
            // ]);

            cookie()->queue('token', $token['access_token'], 60 * 24, '/', null, true, false, false, 'strict');
            return redirect()->route('home');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return inertia('Auth/Register', [
                'errors' => [$e->getMessage()]
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            return inertia('Auth/Register', [
                'errors' => [$e->getMessage()]
            ]);
        } catch (\Exception $e) {
            return inertia('Auth/Register', [
                'errors' => [$e->getMessage()]
            ]);
        };
    }

    function ApiSubmit(Request $request)
    {
        try {
            //validate request
            $request->validate([
                'name' => ['required', 'string', 'max:30'],
                'password' => ['required', 'confirmed'],
                'email' => ['required', 'email', 'unique:users,email'],
                'type' => ['required', 'in:employer,job_seeker']
            ]);

            //create user
            $user = User::create([
                'name' => $request->name,
                'password' => Hash::make($request->password),
                'email' => $request->email,
                'user_type' => $request->type
            ]);

            $token = '';



            switch ($request->type) {
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
        } catch (\Illuminate\Validation\ValidationException $e) {
            return inertia('Auth/Register', [
                'errors' => [$e->getMessage()]
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            return inertia('Auth/Register', [
                'errors' => [$e->getMessage()]
            ]);
        } catch (\Exception $e) {
            return inertia('Auth/Register', [
                'errors' => [$e->getMessage()]
            ]);
        };
    }

}
