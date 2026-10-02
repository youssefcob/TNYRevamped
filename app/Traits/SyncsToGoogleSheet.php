<?php

namespace App\Traits;

use App\Jobs\AppendRowToGoogleSheet;
use Illuminate\Support\Facades\Log;

trait SyncsToGoogleSheet
{
    /**
     * Queue a row to be appended to one of the submissions sheet's tabs.
     * Never throws: a Sheets problem must not fail the submission itself.
     *
     * @param string $sheet Key under services.google.sheets.ranges.
     * @param array $row The cell values, in column order.
     */
    protected function syncToGoogleSheet(string $sheet, array $row): void
    {
        if (!config('services.google.sheets.spreadsheet_id')) {
            return;
        }

        try {
            AppendRowToGoogleSheet::dispatch($sheet, $row);
        } catch (\Throwable $th) {
            Log::error('Failed to queue Google Sheet row', [
                'sheet' => $sheet,
                'error' => $th->getMessage(),
            ]);
        }
    }
}
