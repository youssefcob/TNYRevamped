<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class ViewController extends Controller
{
    public function __construct(Request $request)
    {
        // Set the Authorization header if the token is present in the cookies
        $this->setAuthorizationHeader($request);
    }
    protected function setAuthorizationHeader(Request $request)
    {
        $token = $request->cookie('token');
        if ($token) {
            $request->headers->set('Authorization', 'Bearer ' . $token);
        }
    }
}
