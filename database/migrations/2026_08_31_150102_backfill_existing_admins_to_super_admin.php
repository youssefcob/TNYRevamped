<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Every admin created before roles existed had unrestricted access,
        // so promote them all to super_admin rather than locking anyone out.
        DB::table('admins')->update(['role' => 'super_admin']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('admins')->update(['role' => 'admin']);
    }
};
