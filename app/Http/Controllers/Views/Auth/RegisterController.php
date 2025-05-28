<?php

namespace App\Http\Controllers\Views\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\GeneratesToken;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;



class RegisterController extends Controller
{
    use GeneratesToken;
    function submit(Request $request)
    {

        // return"hello";
        try {
            //validate request
            $request->validate([
                'name' => ['required', 'string', 'max:30'],
                'password' => ['required', 'confirmed'],
                'email' => ['required', 'email'],
                'type' => ['required', 'in:employer,job_seeker']
            ]);

            //create user
            $existingGuestUser = User::where('email', $request->email)->first();
            if (!$existingGuestUser) {
                $user = User::create([
                    'name' => $request->name,
                    'password' => Hash::make($request->password),
                    'email' => $request->email,
                    'user_type' => $request->type
                ]);

                $token = '';



                switch( $request->type) {
                    case 'employer':
                        $token = $this->generateEmployerToken($user);
                        break;
                    case 'job_seeker':
                        $token = $this->generateJobSeekerToken($user);
                        break;
                }

                return response()->json([
                    'user' => $user,
                    'tokens' => $token
                ]);
            } else {
                return response()->json([
                    'message' => 'This User Already Exists'
                ]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 409);
        };
    }
}
