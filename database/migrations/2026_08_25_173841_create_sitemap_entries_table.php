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
        Schema::create('sitemap_entries', function (Blueprint $table) {
            $table->id();
            $table->string('url')->unique();
            // Manual rows are pages the admin added by hand — they have no
            // corresponding real route, so they can be deleted outright.
            // Non-manual rows are overrides of an auto-discovered page
            // (static route, news article, open position) — deleting them
            // just resets that page back to its defaults.
            $table->boolean('is_manual')->default(false);
            $table->decimal('priority', 2, 1)->nullable();
            $table->string('changefreq')->nullable();
            $table->boolean('excluded')->default(false);
            $table->timestamp('lastmod')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sitemap_entries');
    }
};
