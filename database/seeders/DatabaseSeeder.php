<?php

namespace Database\Seeders;

use App\Models\Application;
use App\Models\Message;
use App\Models\Position;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(AdminsTableSeeder::class);
        $this->call(MailListSeeder::class);
        Position::factory(10)->create();
        Application::factory(2)->create();
        Message::factory(10)->create();
        // User::factory(10)->create();
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
