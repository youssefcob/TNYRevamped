<?php

namespace App\Http\Controllers\Views\Auth;

use App\Http\Controllers\Controller;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ForgetPasswordController extends Controller
{
    //
    protected $service;
    public function __construct(AuthService $service){
        $this->service = $service;
    }
    public function index()
    {
        return Inertia::render('Auth/Forget');
    }

    public function submitForgetPassword(Request $request)
    {
        try {
            //code...
            
            $request->validate([
                'email' => 'required|email',
            ]);
            $response = $this->service->forgetPassword($request);
            if (!$response['success']) {
                return Inertia::render('Auth/Forget', [
                    'errors' => [$response['message']],
                ]);
            }
            return Inertia::render('Auth/Forget', [
                'type'=>'success',
                'message' => $response['message'],
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return Inertia::render('Auth/Forget', [
                'errors' => [$th->getMessage()],
            ]);
        }
        
    }
    public function submitResetPassword(Request $request)
    {
        try {
            //code...
            $request->validate([
                'email' => 'required|email',
                'otp' => 'required',
                'password' => 'required|min:8',
            ]);
            $response = $this->service->resetPassword($request);
            if (!$response['success']) {
                return Inertia::render('Auth/Forget', [
                    'errors' => [$response['message']],
                ]);
            }
            return Inertia::render('Auth/Login', [
                'type'=>'success',
                'message' => $response['message'],
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return Inertia::render('Auth/Forget', [
                'errors' => [$th->getMessage()],
            ]);
        }
    }
}
