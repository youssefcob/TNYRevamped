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
            // Rename the 'Address' column to 'zip'
            $table->renameColumn('Address', 'zip');

            // Add a new 'messages' column
            $table->text('messages')->nullable()->after('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('applications', function (Blueprint $table) {
            // Revert the 'zip' column back to 'Address'
            $table->renameColumn('zip', 'Address');

            // Drop the 'messages' column
            $table->dropColumn('messages');
        });
    }
};