<?php

use App\Support\LegacyServiceRequestFields;
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
        Schema::table('service_requests', function (Blueprint $table) {
            $table->json('requested_positions')->nullable()->after('requirements');
            $table->unsignedInteger('open_roles')->nullable()->after('requested_positions');
            $table->date('start_date')->nullable()->after('open_roles');
            $table->string('urgency')->nullable()->after('start_date');
        });

        // Move the answers the hire-staff form used to pack into `requirements`
        // into their own columns. Uses the query builder, not the model, so the
        // model's observer doesn't email the mail list for every row.
        DB::table('service_requests')->orderBy('id')->chunkById(200, function ($serviceRequests) {
            foreach ($serviceRequests as $serviceRequest) {
                $fields = LegacyServiceRequestFields::parse($serviceRequest->requirements);

                if (!$fields) {
                    continue;
                }

                if (isset($fields['requested_positions'])) {
                    $fields['requested_positions'] = json_encode($fields['requested_positions']);
                }

                DB::table('service_requests')->where('id', $serviceRequest->id)->update($fields);
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * The new columns are dropped; their values are not packed back into
     * `requirements`.
     */
    public function down(): void
    {
        Schema::table('service_requests', function (Blueprint $table) {
            $table->dropColumn(['requested_positions', 'open_roles', 'start_date', 'urgency']);
        });
    }
};
