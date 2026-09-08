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
        Schema::create('redirects', function (Blueprint $table) {
            $table->id();
            // The incoming path to catch, normalized to a leading slash with no
            // trailing slash and no query string, e.g. "/old-careers".
            $table->string('source')->unique();
            // Where to send the visitor: a site path ("/careers") or an
            // absolute URL ("https://example.com/x").
            $table->string('destination');
            // Only permanent (301) or temporary (302) are offered to admins.
            $table->unsignedSmallInteger('status_code')->default(301);
            $table->boolean('enabled')->default(true);
            // Bumped every time the redirect actually fires, so admins can see
            // which rules are still doing something.
            $table->unsignedBigInteger('hits')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('redirects');
    }
};
