<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('Address')->nullable();
            $table->string('phone')->unique();
            $table->string('resume');
            $table->foreignId('position_id')->constrained();
            //Same as this 
            // $table->unsignedBigInteger('position_id');
            // $table->foreign('position_id')->references('id')->on('positions');

           
            $table->enum('status', [
                'Hired',
                'Rejected', 
                'Pending',
                'Needs Assignment',
                'Missing Documents',
                'Missing Preferences',
                'In Training',
                'Interview'
            ])->default('Pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
