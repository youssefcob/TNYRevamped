<?php

namespace Database\Seeders;

use App\Models\JobSeeker;
use Illuminate\Database\Seeder;

class JobSeekersTableSeeder extends Seeder
{
    public function run(): void
    {
        JobSeeker::factory()
            ->count(20) 
            ->create();
    }
}