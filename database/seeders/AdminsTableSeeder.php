<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $admins = [
            [
                'name' => 'Admin',
                'email' => 'admin@tny.com',
                'password' => bcrypt('123456'),
                'role' => 'super_admin',
            ],
        ];
        foreach ($admins as $admin) {
            Admin::updateOrCreate(
                ['email' => $admin['email']],
                $admin
            );
        }
    }
}
