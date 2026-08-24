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
        Schema::table('page_contents', function (Blueprint $table) {
            $table->string('image_public_id')->nullable()->after('tag');
            $table->string('object_fit')->nullable()->after('image_public_id');
            $table->string('object_position')->nullable()->after('object_fit');
            $table->string('alt')->nullable()->after('object_position');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('page_contents', function (Blueprint $table) {
            $table->dropColumn(['image_public_id', 'object_fit', 'object_position', 'alt']);
        });
    }
};
