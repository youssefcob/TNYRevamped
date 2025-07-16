<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class CompleteProfile
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the user is authenticated
        $token = $request->cookie('token');
        if (!$token) {
            return redirect()->route('login')->with('snack', [
                'type' => 'error',
                'message' => 'You need to log in first.',
            ]);
        }

        $request->headers->set('Authorization', 'Bearer ' . $token);

        /** @var \App\Models\User $user */
        $user = Auth::guard('user')->user();
        if( !$user) {
            return redirect()->route('login')->with('snack', [
                'type' => 'error',
                'message' => 'User not found. Please log in again.',
            ]);
        }

        if($user->hasRole('employer') && !$user->employer) {
            return redirect()->route('profile.edit')->with('snack', [
                'type' => 'error',
                'message' => 'Please complete your profile first.',
            ]);
        }
        if($user->hasRole('job_seeker') && !$user->jobSeeker) {
            return redirect()->route('profile.edit')->with('snack', [
                'type' => 'error',
                'message' => 'Please complete your profile first.',
            ]);
        }

        return $next($request);
    }
}
