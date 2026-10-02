<?php

namespace App\Services;

use Google\Client;
use Google\Service\Sheets;
use Google\Service\Sheets\ValueRange;

class GoogleSheets
{
    private $client;
    private $service;

    /**
     * GoogleSheets constructor.
     * Uses the same service account as GoogleDrive.
     */
    public function __construct()
    {
        $credentialsPath = base_path(env('GOOGLE_APPLICATION_CREDENTIALS'));

        // On platforms with an ephemeral filesystem (e.g. Heroku), the credentials
        // file won't exist on disk. Materialize it from a base64 config var instead.
        if (!file_exists($credentialsPath) && env('GOOGLE_CREDENTIALS_BASE64')) {
            $credentialsPath = storage_path('app/tny-service-account.json');
            file_put_contents($credentialsPath, base64_decode(env('GOOGLE_CREDENTIALS_BASE64')));
        }

        putenv('GOOGLE_APPLICATION_CREDENTIALS=' . $credentialsPath);

        $this->client = new Client();
        $this->client->useApplicationDefaultCredentials();
        $this->client->addScope(Sheets::SPREADSHEETS);

        $this->service = new Sheets($this->client);
    }

    /**
     * Appends a single row to the end of the given spreadsheet range.
     *
     * @param string $spreadsheetId The spreadsheet ID (from its URL).
     * @param string $range The tab to append to, e.g. "Applications!A:A".
     * @param array $row The cell values, in column order.
     */
    public function appendRow(string $spreadsheetId, string $range, array $row): void
    {
        // The API client drops null array entries when serializing, which turns
        // a sequential row into a sparse one and Sheets rejects it as malformed.
        $row = array_map(fn($value) => $value ?? '', $row);

        $body = new ValueRange([
            'values' => [$row],
        ]);

        // RAW, not USER_ENTERED: the values come from public forms, and a
        // value starting with "=" would otherwise be run as a formula.
        $this->service->spreadsheets_values->append(
            $spreadsheetId,
            $range,
            $body,
            ['valueInputOption' => 'RAW']
        );
    }
}
