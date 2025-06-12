<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;

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
}
