<?php

namespace App\Services;

use App\Mail\ResetPasswordMail;
use App\Models\Admin;
use App\Models\User;
use App\Traits\GeneratesToken;
use Exception;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AuthService
{
    use GeneratesToken;
    // Your service logic goes here
    protected $cache;
    public function __construct(CacheService $cache) {
        $this->cache = $cache;
    }

    /**
     * Authenticate an admin and generate an access token.
     *
     * @param \Illuminate\Http\Request $request Contains 'email' and 'password'.
     * @return array Authentication status, token (if successful), user data, or error messages.
     */
    public function adminLogin($request): array
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

            // Note: Youssef changed the token generation method to include a scope and use a trait instead
            // $token = $admin->createToken('AdminToken')->accessToken;

            $token = $this->generateAdminToken($admin);

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

    public function userRegister($request): array
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:8|confirmed',
                'user_type' => 'required|string|in:employer,job_seeker'
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'user_type' => $request->user_type
            ]);

            // $token = $user->createToken('UserToken')->accessToken;
            $token = '';
            switch ($request->user_type) {
                case 'employer':
                    $token = $this->generateEmployerToken($user);
                    $user->load('employer');
                    break;
                case 'job_seeker':
                    $token = $this->generateJobSeekerToken($user);
                    $user->load('jobSeeker');
                    break;
            }

            return [
                'success' => true,
                'token' => $token,
                'data' => $user
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ];
        }
    }

    public function userLogin($request): array
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ]);

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return [
                    'success' => false,
                    'message' => 'Invalid credentials',
                    'code' => 401
                ];
            }

            $token = '';

            switch ($user->user_type) {
                case 'employer':
                    $token = $this->generateEmployerToken($user);
                    $user->load('employer');
                    break;
                case 'job_seeker':
                    $token = $this->generateJobSeekerToken($user);
                    $user->load('jobSeeker');
                    break;
            }

            return [
                'success' => true,
                'token' => $token,
                'data' => $user
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ];
        }
    }


    public function loginWeb(Request $request)
    {
        // dd($request->all());
        try {
            //code...
            $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
                // 'ssdstoken' => ['required'],
            ]);

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                dd('Invalid credentials');
                // return Inertia::render('Auth/Login', [
                //     'error' => 'Invalid credentials'
                // ]);
            }

            $token = '';

            switch ($user->user_type) {
                case 'employer':
                    $token = $this->generateEmployerToken($user);
                    $user->load('employer');
                    break;
                case 'job_seeker':
                    $token = $this->generateJobSeekerToken($user);
                    $user->load('jobSeeker');
                    break;
            }

            // $data = HomeService::get();
            // return Inertia::render('Home');
            // dd($token);
            cookie()->queue('token', $token['access_token'], 60 * 24, '/', null, true, false, false, 'strict');

            return Inertia::render('Home');
        } catch (\Throwable $e) {
            //throw $th;
            dd($e->getMessage());
            // return Inertia::render('Auth/Login', [
            //     'error' => '$e->message()'
            // ]);
        }
    }

    public function updatePassword($request)
    {
        try {
            //code...
            $request->validate([
                'password' => 'required|min:8',
            ]);

            // dd(Auth::guard('user')->user()->id);
            $admin = Admin::find(Auth::guard('user')->user()->id);
            $admin->tokens()->delete();

            $admin->password = Hash::make($request->password);
            $admin->save();
            return [
                'success' => true,
                'message' => 'Password updated successfully'
            ];
        } catch (\Throwable $th) {
            //throw $th;
            return [
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $th->getMessage()
            ];
        }
    }
    public function forgetPassword($request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);
        try {
            //code...
            $user = User::where('email', $request->email)->first();
            if (!$user) {
                return [
                    'success' => false,
                    'message' => 'User not found',
                    'code' => 404
                ];
            }
            $resetToken = $this->generateResetToken($user->email);

            Mail::to($user->email)->send(new ResetPasswordMail(
                $resetToken['otp'],
                $resetToken['expiresAt'],
                $user->name,
                $resetToken['mintues']
            ));
            return [
                'success' => true,
                'message' => 'Password reset link sent to email'
            ];
        } catch (\Throwable $th) {
            //throw $th;
            return [
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $th->getMessage()
            ];
        }
    }

    public function resetPassword($request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required',
            'password' => 'required|min:8',
        ]);
        try {
            //code...
            $user = User::where('email', $request->email)->first();
            if (!$user) {
                return [
                    'success' => false,
                    'message' => 'User not found',
                    'code' => 404
                ];
            }
            $chaceKey = $this->cache->generateCacheKey('reset_password', $user->email);
            $cacheData = Cache::get($chaceKey);
            if (!$cacheData) {
                return [
                    'success' => false,
                    'message' => 'OTP expired',
                    'code' => 400
                ];
            }
            if ($cacheData['otp'] != $request->otp) {
                return [
                    'success' => false,
                    'message' => 'Invalid OTP',
                    'code' => 400
                ];
            }
            $user->password = Hash::make($request->password);
            $user->save();
            Cache::forget($chaceKey);
            return [
                'success' => true,
                'message' => 'Password reset successfully'
            ];
        } catch (\Throwable $th) {
            //throw $th;
            return [
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $th->getMessage()
            ];
        }
    }
    private function generateResetToken($email)
    {
        $chaceKey = $this->cache->generateCacheKey('reset_password', $email);

        if (Cache::has($chaceKey)) {
            return [
                'otp' => Cache::get($chaceKey)['otp'],
                'expiresAt' => Cache::get($chaceKey)['expiresAt'],
                'mintues' => Cache::get($chaceKey)['mintues']
            ];
        }
        $otp = rand(100000, 999999);
        $mintues = 15;
        $expiresAt = now()->addMinutes($mintues);
        Cache::put($chaceKey, [
            'otp' => $otp,
            'expiresAt' => $expiresAt,
            'mintues' => $mintues
        ], $expiresAt);
        return [
            'otp' => $otp,
            'expiresAt' => $expiresAt,
            'mintues' => $mintues
        ];
    }
}
