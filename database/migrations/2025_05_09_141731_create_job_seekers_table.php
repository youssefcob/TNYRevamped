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
            $table->foreignId('position_id')->constrained('positions')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->unique()->onDelete('cascade');
            $table->string('experience')->nullable();
            $table->string('facility_type')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('dob')->nullable();
            $table->string('preferred_location')->nullable();
            $table->boolean('is_employed')->nullable();
            $table->string('availability_to_start')->nullable();
            $table->decimal('rate_per_hour', 8, 2)->nullable();
            $table->boolean('is_licensed')->nullable();
            $table->string('legal_status')->nullable();
            $table->string('shift_type')->nullable();
            $table->string('resume')->nullable();
            $table->boolean('is_talent')->default(false);
            $table->string('status')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('gender')->nullable();
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
