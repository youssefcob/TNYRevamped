<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Alert recipients are matched on a model's table name. "applications"
     * recipients were meant for the apply form, which writes to
     * `position_applications`. Uses the query builder, not the model, so the
     * model's observer doesn't email the mail list for every row.
     */
    public function up(): void
    {
        DB::table('mail_lists')->where('form', 'applications')->update(['form' => 'position_applications']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('mail_lists')->where('form', 'position_applications')->update(['form' => 'applications']);
    }
};
