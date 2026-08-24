<?php

namespace App\Http\Controllers\Views\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminLoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/AdminLogin');
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            if (!Auth::guard('web')->attempt($request->only('email', 'password'))) {
                return inertia('Auth/AdminLogin', [
                    'errors' => ['Invalid credentials provided.'],
                ]);
            }

            $request->session()->regenerate();
            $request->session()->flash('snack', [
                'type' => 'success',
                'message' => 'Login successful.',
            ]);

            // Session regeneration rotates the CSRF token, but Inertia normally
            // navigates client-side after a redirect, so the stale token cached
            // from the initial page load would stick around. Force a full
            // browser reload so the fresh token actually lands in the DOM.
            return Inertia::location(route('home'));
        } catch (\Throwable $e) {
            return inertia('Auth/AdminLogin', [
                'errors' => [$e->getMessage()],
            ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Inertia::location(route('home'));
    }
}
