<?php

namespace App\Jobs;

use App\Services\GoogleSheets;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Throwable;

class AppendRowToGoogleSheet implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 3;

    public $backoff = [30, 120];

    /**
     * @param string $sheet Key under services.google.sheets.ranges.
     * @param array $row The cell values, in column order.
     */
    public function __construct(public string $sheet, public array $row) {}

    public function handle(GoogleSheets $sheets): void
    {
        $sheets->appendRow(
            config('services.google.sheets.spreadsheet_id'),
            config('services.google.sheets.ranges.' . $this->sheet),
            $this->row
        );
    }

    public function failed(?Throwable $exception): void
    {
        Log::error('Failed to append row to Google Sheet', [
            'sheet' => $this->sheet,
            'row' => $this->row,
            'error' => $exception?->getMessage(),
        ]);
    }
}
