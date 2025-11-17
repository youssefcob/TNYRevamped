<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthView
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        // dd($role);
        $token = $request->cookie('token');
        // dd($token);
        if (! $token) {
            return redirect()->route('login');
        }
        $request->headers->set('Authorization', 'Bearer '.$token);

        /** @var \App\Models\User $user */
        $user = Auth::guard('user')->user();

        if (! $user) {
            return redirect()->route('login');
        }

        // dd($user->toArray());
        if ($user->hasRole($role) || $role == 'any') {
            $request->attributes->set('user', $user);

            return $next($request);

        }

        return redirect()->route('login');
        // return
    }
}
