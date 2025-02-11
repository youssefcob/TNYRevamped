<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminAtuhController extends Controller
{
    //
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Find the admin by email
        $admin = Admin::where('email', $request->email)->first();

        // Check password manually since Passport does not use Auth::attempt()
        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        // Generate a Passport token
        $token = $admin->createToken('AdminToken')->accessToken;

        return response()->json([
            'status' => 'success',
            'token' => $token,
            'user' => $admin,
        ], 200);
    }
}
