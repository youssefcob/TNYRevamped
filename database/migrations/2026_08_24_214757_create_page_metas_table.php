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
        Schema::create('page_metas', function (Blueprint $table) {
            $table->id();
            $table->string('page')->unique();
            $table->string('title')->nullable();
            $table->string('description', 500)->nullable();
            $table->string('canonical')->nullable();
            $table->string('og_image')->nullable();
            $table->string('og_image_public_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_metas');
    }
};
