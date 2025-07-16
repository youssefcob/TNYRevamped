<?php

namespace Database\Seeders;

use App\Models\Employer;
use App\Models\JobSeeker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BidsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get some random employers and job seekers
        $employers = Employer::inRandomOrder()->limit(5)->get();
        $jobSeekers = JobSeeker::inRandomOrder()->limit(10)->get();
        
        // Create bids between them
        foreach ($employers as $employer) {
            // Each employer makes 2-3 bids to different job seekers
            $numBids = rand(2, 3);
            $selectedJobSeekers = $jobSeekers->random($numBids);
            
            foreach ($selectedJobSeekers as $jobSeeker) {
                DB::table('bids')->insert([
                    'employer_id' => $employer->id,
                    'job_seeker_id' => $jobSeeker->id,
                    'rate_per_hour' => rand(15, 50) + (rand(0, 99) / 100),
                    'status' => ['pending', 'approved', 'rejected'][rand(0, 2)],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
