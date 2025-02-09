<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            ]
        ];
        foreach ($admins as $admin) {
            \App\Models\Admin::create($admin);
        }
    }
}
