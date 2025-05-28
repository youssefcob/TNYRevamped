<?php

namespace Database\Factories;

use App\Models\Application;
use App\Models\Vacancy;
use App\Models\JobSeeker;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicationFactory extends Factory
{
    protected $model = Application::class;

    public function definition(): array
    {
        // Get or create a vacancy
        $vacancy = Vacancy::inRandomOrder()->first() ?? Vacancy::factory()->create();
        
        // Get or create a job seeker
        $jobSeeker = JobSeeker::inRandomOrder()->first() ?? JobSeeker::factory()->create();

        return [
            'vacancy_id' => $vacancy->id,
            'job_seeker_id' => $jobSeeker->id,
            'status' => $this->faker->randomElement([
                'Hired',
                'Rejected',
                'Pending',
                'Needs Assignment',
                'Missing Documents',
                'Missing Preferences',
                'In Training',
                'Interview'
            ])
        ];
    }
}
