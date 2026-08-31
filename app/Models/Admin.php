<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    //
    use HasApiTokens;

    const ROLES = ['admin', 'super_admin'];

    protected $fillable = ['name', 'email', 'password', 'role'];

    protected $hidden = [
        'password',
    ];

    public function isSuperAdmin(): bool
    {
        return $this->role === 'super_admin';
    }
}
