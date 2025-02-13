<?php

namespace App\Services;

use App\Models\Admin;
use Exception;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    // Your service logic goes here
    /**
     * Authenticate an admin and generate an access token.
     *
     * @param \Illuminate\Http\Request $request Contains 'email' and 'password'.
     * @return array Authentication status, token (if successful), user data, or error messages.
     */
    public function login($request) : array
    {
        try {
            //code...
            $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);
            // Find the admin by email
            $admin = Admin::where('email', $request->email)->first();

            // Check password manually since Passport does not use Auth::attempt()
            if (!$admin || !Hash::check($request->password, $admin->password)) {
                // return response()->json(['error' => 'Invalid credentials'], 401);
                return ['success' => false, 'message' => 'Invalid credentials', 'code' => 401];
            }

            // Generate a Passport token
            $token = $admin->createToken('AdminToken')->accessToken;

            return [
                'success' => true,
                'token' => $token,
                'data' => $admin,
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors() // This ensures errors are an array
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage(),
            ];
        }
    }
}
