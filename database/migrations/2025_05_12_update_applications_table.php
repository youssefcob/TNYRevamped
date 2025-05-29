<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::table('applications', function (Blueprint $table) {
        $table->dropForeign(['position_id']);
        $table->dropIndex('idx_applications_position_id');

        $table->dropColumn([
            'name',
            'email',
            'messages',
            'phone',
            'resume',
            'position_id',
            'zip'
        ]);
        DB::table('applications')->delete();

        // Step 1: Add nullable columns first
        $table->unsignedBigInteger('vacancy_id')->nullable()->after('id');
        $table->unsignedBigInteger('job_seeker_id')->nullable()->after('vacancy_id');
    });

    // Step 2: Populate those fields manually or with seeders

    // Step 3: Add foreign keys once data is clean
    Schema::table('applications', function (Blueprint $table) {
        $table->foreign('vacancy_id')->references('id')->on('vacancies')->onDelete('cascade');
        $table->foreign('job_seeker_id')->references('id')->on('job_seekers')->onDelete('cascade');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('applications', function (Blueprint $table) {
            // Drop new columns
            $table->dropForeign(['vacancy_id']);
            $table->dropForeign(['job_seeker_id']);
            $table->dropColumn(['vacancy_id', 'job_seeker_id']);
            
            // Restore original columns
            $table->string('name');
            $table->string('email');
            $table->string('address');
            $table->string('phone');
            $table->string('resume');
            $table->foreignId('position_id')->constrained()->onDelete('cascade');
            
            // Restore the index
            $table->index('position_id', 'idx_applications_position_id');
        });
    }
};