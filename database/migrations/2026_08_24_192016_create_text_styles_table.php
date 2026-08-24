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
        Schema::create('text_styles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('font_family')->default('inherit');
            $table->unsignedSmallInteger('font_weight')->default(400);
            $table->boolean('italic')->default(false);
            $table->boolean('underline')->default(false);
            $table->string('color')->nullable();
            $table->float('min_font_size');
            $table->float('max_font_size');
            $table->float('font_size_vw');
            $table->float('line_height')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('text_styles');
    }
};
