<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAuthenticate
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::guard('user')->check()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::guard('user')->user();
        
        if (!$user || !$user->user_type) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid user type',
            ], 403);
        }

        return $next($request);
    }
}