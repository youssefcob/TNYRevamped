<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class RequestLogger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);
        // Log::debug('Request: ' . $request->fullUrl().' - '.$response->getStatusCode());
        
        $requestData = $request->all();

        $sensetiveFields = ['password', 'password_confirmation', 'token'];
        foreach ($sensetiveFields as $field) {
            if (isset($requestData[$field])) {
                $requestData[$field] = '*******';
            }
        }
        // dd($user);
        $log = [
            'request_payload' => $requestData,
            'request_method' => $request->method(),
            'request_url' => $request->fullUrl(),
            'stauts' => $response->getStatusCode(),
        ];

        Log::debug(json_encode($log));
        return $response;
    }
}
