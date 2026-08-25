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
        Schema::create('page_meta_tags', function (Blueprint $table) {
            $table->id();
            $table->string('page')->index();
            $table->string('attribute'); // 'name' or 'property'
            $table->string('meta_key');
            $table->string('content', 1000);
            $table->timestamps();

            $table->unique(['page', 'attribute', 'meta_key']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_meta_tags');
    }
};
