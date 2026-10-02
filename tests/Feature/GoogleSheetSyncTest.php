<?php

namespace Tests\Feature;

use App\Jobs\AppendRowToGoogleSheet;
use App\Services\GoogleSheets;
use App\Traits\SyncsToGoogleSheet;
use Illuminate\Support\Facades\Queue;
use Mockery;
use Tests\TestCase;

class GoogleSheetSyncTest extends TestCase
{
    private function syncer(): object
    {
        return new class {
            use SyncsToGoogleSheet;

            public function sync(string $sheet, array $row): void
            {
                $this->syncToGoogleSheet($sheet, $row);
            }
        };
    }

    public function test_nothing_is_queued_when_no_spreadsheet_is_configured(): void
    {
        Queue::fake();
        config(['services.google.sheets.spreadsheet_id' => null]);

        $this->syncer()->sync('applications', [1, 'Jane']);

        Queue::assertNothingPushed();
    }

    public function test_a_row_is_queued_when_a_spreadsheet_is_configured(): void
    {
        Queue::fake();
        config(['services.google.sheets.spreadsheet_id' => 'sheet-id']);

        $this->syncer()->sync('service_requests', [1, 'Jane']);

        Queue::assertPushed(
            AppendRowToGoogleSheet::class,
            fn($job) => $job->sheet === 'service_requests' && $job->row === [1, 'Jane']
        );
    }

    public function test_the_job_appends_the_row_to_the_configured_tab(): void
    {
        config([
            'services.google.sheets.spreadsheet_id' => 'sheet-id',
            'services.google.sheets.ranges.applications' => 'Applications!A:A',
        ]);

        $sheets = Mockery::mock(GoogleSheets::class);
        $sheets->shouldReceive('appendRow')
            ->once()
            ->with('sheet-id', 'Applications!A:A', [1, 'Jane', null]);

        (new AppendRowToGoogleSheet('applications', [1, 'Jane', null]))->handle($sheets);
    }

    public function test_a_failure_to_queue_does_not_break_the_submission(): void
    {
        config(['services.google.sheets.spreadsheet_id' => 'sheet-id']);

        // The sync queue runs the job inline, so a Sheets error surfaces at dispatch.
        $sheets = Mockery::mock(GoogleSheets::class);
        $sheets->shouldReceive('appendRow')->andThrow(new \RuntimeException('403'));
        $this->app->instance(GoogleSheets::class, $sheets);

        $this->syncer()->sync('applications', [1, 'Jane']);

        $this->assertTrue(true);
    }
}
