<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MailListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $mailsList = [
        [
            'name' => 'Moaaz Ibrahim',
            'email' => 'moaaz.ibrahimofficial@gmail.com',
            'form' => 'applications',
            'role' => 'Applications Reviewer'
        ],
        [
            'name' => 'John Smith',
            'email' => 'j@gmail.com',
            'form' => 'applications',
            'role' => 'Applications Reviewer'
        ],
        [
            'name' => 'Moaaz Ibrahim',
            'email' => 'moaazibrahim721@gmail.com',
            'form' => 'messages',
            'role' => 'Messages Reviewer'
        ],
        [
            'name' => 'Moaaz Ibrahim',
            'email' => 'moaazibrahim721@gmail.com',
            'form' => 'service_requests',
            'role' => 'Requests Reviewer'
        ],
        
    ];
    public function run(): void
    {
        //
        foreach ($this->mailsList as $mailList) {
            \App\Models\MailList::create($mailList);
        }
    }
}
