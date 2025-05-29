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
        Schema::create('job_seekers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            //Already have in users table
            // $table->string('name');
            // $table->string('email');
            $table->string('phone_number');
            $table->date('bod'); // birth of date
            $table->string('notice_period');
            $table->integer('salary');
            $table->string('facility_type');
            $table->string('shift_type');
            $table->integer('experience');
            $table->text('address');
            $table->string('resume')->nullable();
            $table->string('status')->default('pending');
            $table->foreignId('position_id')->constrained('positions')->onDelete('cascade');
            $table->boolean('talent')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_seekers');
    }
};
