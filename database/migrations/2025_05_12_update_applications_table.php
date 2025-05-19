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
        Schema::table('applications', function (Blueprint $table) {
            // Drop the foreign key constraint first
            $table->dropForeign(['position_id']);
            
            // Now we can safely drop the index
            $table->dropIndex('idx_applications_position_id');
            
            // Drop existing columns except id and status
            $table->dropColumn([
                'name',
                'email',
                'messages',
                // 'status',
                'phone',
                'resume',
                'position_id',
                'zip'
            ]);

            // Add new columns
            $table->foreignId('vacancy_id')->after('id')->constrained()->onDelete('cascade');
            $table->foreignId('job_seeker_id')->after('vacancy_id')->constrained()->onDelete('cascade');
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