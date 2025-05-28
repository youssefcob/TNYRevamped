<?php

namespace App\Http\Controllers\Views\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\GeneratesToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthenticatedUserController extends Controller
{

    use GeneratesToken;
    
    function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = '';

        switch ($request->type) {
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
    }
}
