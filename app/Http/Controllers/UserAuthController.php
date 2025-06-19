<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserAuthController extends Controller
{
    //
    protected $service;
    public function __construct(AuthService $service){
        $this->service = $service;
    }
    public function register(Request $request)
    {
        $response = $this->service->userRegister($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function login(Request $request)
    {
        $response = $this->service->userLogin($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function loginWeb(Request $request){
        $response = $this->service->loginWeb($request);
        return $response;
    }

    public function getUser(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();

        if($user === null) {
            return response()->json([
                'success' => false,
                'message' => 'User not authenticated',
            ], 401);
        }
        if($user->hasRole('employer')) {
            $user->load('employer');
        } elseif($user->hasRole('job_seeker')) {
            $user->load('jobSeeker');
        }
        return response()->json([
            'success' => true,
            'user' => $user,
        ]);

    }
}
