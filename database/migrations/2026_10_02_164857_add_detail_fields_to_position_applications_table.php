<?php

use App\Support\LegacyApplicationFields;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('position_applications', function (Blueprint $table) {
            $table->string('city')->nullable()->after('zip');
            $table->string('state')->nullable()->after('city');
            $table->string('license_status')->nullable()->after('state');
            $table->string('years_experience')->nullable()->after('license_status');
            $table->string('preferred_setting')->nullable()->after('years_experience');
            $table->string('employment_type')->nullable()->after('preferred_setting');
            $table->date('start_date')->nullable()->after('employment_type');

            $table->text('message')->nullable()->change();
            $table->string('zip')->nullable()->change();
        });

        // Move the answers the apply form used to pack into `message` and `zip`
        // into their own columns. Uses the query builder, not the model, so the
        // model's observer doesn't email the mail list for every row.
        DB::table('position_applications')->orderBy('id')->chunkById(200, function ($applications) {
            foreach ($applications as $application) {
                $fields = LegacyApplicationFields::parse($application->message, $application->zip);

                if ($fields) {
                    DB::table('position_applications')->where('id', $application->id)->update($fields);
                }
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * The new columns are dropped; their values are not packed back into
     * `message`/`zip`, which stay nullable because rows may now hold null.
     */
    public function down(): void
    {
        Schema::table('position_applications', function (Blueprint $table) {
            $table->dropColumn([
                'city',
                'state',
                'license_status',
                'years_experience',
                'preferred_setting',
                'employment_type',
                'start_date',
            ]);
        });
    }
};
