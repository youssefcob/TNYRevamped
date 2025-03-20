<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('applications', function (Blueprint $table) {
            $table->index('position_id', 'idx_applications_position_id');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('applications', function (Blueprint $table) {
            $table->dropIndex('idx_applications_position_id');
        });
    }
};
