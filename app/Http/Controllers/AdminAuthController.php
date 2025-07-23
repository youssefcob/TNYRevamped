<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    //
    protected $service;
    public function __construct(AuthService $service){
        $this->service = $service;
    }
    public function adminLogin(Request $request)
    {
        $response = $this->service->adminLogin($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
    public function updatePassword(Request $request)
    {
        $response = $this->service->updatePassword($request);
        if (!$response['success'])
            return $this->sendError($response);
        return $this->sendResponse($response);
    }
}
