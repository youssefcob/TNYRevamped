<?php

namespace Database\Seeders;

use App\Models\Application;
use App\Models\Employer;
use App\Models\Message;
use App\Models\Position;
use App\Models\Service;
use App\Models\ServiceRequest;
use App\Models\User;
use Database\Factories\EmployerFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan; // Import the Artisan facade


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(AdminsTableSeeder::class);
        $this->call(MailListSeeder::class);
        $this->call(JobSeekersTableSeeder::class);
        $this->call(PositionsTableSeeder::class);
        $this->call(ServicesTableSeeder::class);
        $this->call(VacanciesSeeder::class);

        Artisan::call('passport:client', [
            '--personal' => true,
            '--no-interaction' => true,
        ]);

        // Position::factory(10)->create();
        // Application::factory(40)->create();
        // Message::factory(10)->create();
        // Service::factory(10)->create();
        // ServiceRequest::factory(20)->create();
        // Employer::factory(10)->create();
        // User::factory(10)->create();
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
