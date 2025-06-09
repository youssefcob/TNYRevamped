<?php

namespace App\Traits;

use App\Models\Admin;
use App\Models\User;

trait GeneratesToken
{

    public function generateJobSeekerToken(User $user)
    {
        // For Passport - scopes must be pre-defined
        $token = $user->createToken('JobSeeker-' . $user->id, ['job-seeker']);

        // Set custom expiration
        $tokenModel = $token->token;
        $tokenModel->expires_at = now()->addDays(30);
        $tokenModel->save();

        return [
            'access_token' => $token->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $tokenModel->expires_at,
            'scopes' => ['job-seeker']
        ];
    }

    public function generateEmployerToken(User $user)
    {

        $token = $user->createToken('Employer-' . $user->id, ['employer']);

        $tokenModel = $token->token;
        $tokenModel->expires_at = now()->addDays(30);
        $tokenModel->save();

        return [
            'access_token' => $token->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $tokenModel->expires_at,
            'scopes' => ['employer']
        ];
    }

    public function generateAdminToken(Admin $admin)
    {
        $token = $admin->createToken('Admin-' . $admin->id, ['admin']);

        $tokenModel = $token->token;
        $tokenModel->expires_at = now()->addDays(30);
        $tokenModel->save();

        return [
            'access_token' => $token->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $tokenModel->expires_at,
            'scopes' => ['admin']
        ];
    }
}
