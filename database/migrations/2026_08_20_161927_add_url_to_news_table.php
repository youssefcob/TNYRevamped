<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('news', function (Blueprint $table) {
            $table->string('url')->nullable()->after('title');
        });

        foreach (DB::table('news')->whereNull('url')->get() as $row) {
            $base = Str::slug($row->title) ?: 'resource-' . $row->id;
            $slug = $base;
            $suffix = 2;
            while (DB::table('news')->where('url', $slug)->where('id', '!=', $row->id)->exists()) {
                $slug = $base . '-' . $suffix++;
            }
            DB::table('news')->where('id', $row->id)->update(['url' => $slug]);
        }

        Schema::table('news', function (Blueprint $table) {
            $table->unique('url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('news', function (Blueprint $table) {
            $table->dropUnique(['url']);
            $table->dropColumn('url');
        });
    }
};
