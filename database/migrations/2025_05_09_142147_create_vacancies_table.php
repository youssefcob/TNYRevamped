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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employer_id')->constrained('employers')->onDelete('cascade');
            $table->foreignId('position_id')->constrained('positions')->onDelete('cascade');
            $table->string('borough')->nullable();
            $table->text('address')->nullable();
            $table->text('shift_details')->nullable();
            $table->integer('experience')->nullable();
            $table->string('facility_type')->nullable();
            $table->string('payment_type')->nullable();
            $table->decimal('rate_per_hour', 8, 2)->nullable();
            $table->boolean('license_required')->nullable();
            $table->string('legal_status')->nullable();
            $table->string('status')->nullable();
            $table->string('gender_pref')->nullable();
            $table->string('work_days')->nullable();
            $table->string('availability_to_start')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
