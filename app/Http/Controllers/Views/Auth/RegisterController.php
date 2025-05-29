<?php

namespace App\Http\Controllers\Views\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\GeneratesToken;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;



class RegisterController extends Controller
{
    use GeneratesToken;
    function submit(Request $request)
    {

        // return"hello";
        try {
            //validate request
            $request->validate([
                'name' => ['required', 'string', 'max:30'],
                'password' => ['required', 'confirmed'],
                'email' => ['required', 'email', 'unique:users,email'],
                'type' => ['required', 'in:employer,job_seeker']
            ]);

            //create user
                $user = User::create([
                    'name' => $request->name,
                    'password' => Hash::make($request->password),
                    'email' => $request->email,
                    'user_type' => $request->type
                ]);

                $token = '';



                switch( $request->type) {
                    case 'employer':
                        $token = $this->generateEmployerToken($user);
                        break;
                    case 'job_seeker':
                        $token = $this->generateJobSeekerToken($user);
                        break;
                }

                // return response()->json([
                    // 'user' => $user,
                    // 'tokens' => $token
                // ]);

                $user = [
                    'user'=> $user,
                    'token' => $token
                ];
                return response()->json($user, 200);
        }
        catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['error' => 'Database error: ' . $e->getMessage()], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 409);
        };
    }
    
}
