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
            // Drop the unique constraint on the 'email' column
            $table->dropUnique(['email']);

            // Drop the unique constraint on the 'phone' column
            $table->dropUnique(['phone']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('applications', function (Blueprint $table) {
            // Add the unique constraint back to the 'email' column
            $table->unique('email');

            // Add the unique constraint back to the 'phone' column
            $table->unique('phone');
        });
    }
};