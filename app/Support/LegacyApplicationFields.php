<?php

namespace App\Support;

/**
 * Before position applications had their own columns, the apply form packed
 * the extra answers into `message` ("License Status: Licensed\n...", with the
 * applicant's own note as "Notes: ...") and sent "City, State" as `zip`.
 * This turns those two legacy values back into separate fields.
 */
class LegacyApplicationFields
{
    private const LABELS = [
        'License Status' => 'license_status',
        'Years of Experience' => 'years_experience',
        'Preferred Setting' => 'preferred_setting',
        'Employment Type' => 'employment_type',
        'Desired Start Date' => 'start_date',
        'Notes' => 'message',
    ];

    // What the form sent as `message` when the applicant filled in nothing.
    private const PLACEHOLDER = 'Application submitted via website.';

    /**
     * @return array Only the columns that should change, keyed by column name.
     */
    public static function parse(?string $message, ?string $zip): array
    {
        return self::parseMessage($message) + self::parseZip($zip);
    }

    private static function parseMessage(?string $message): array
    {
        if ($message === null) {
            return [];
        }

        if (trim($message) === self::PLACEHOLDER) {
            return ['message' => null];
        }

        $fields = [];
        $notes = [];
        $inNotes = false;
        $pattern = '/^(' . implode('|', array_map('preg_quote', array_keys(self::LABELS))) . '): ?(.*)$/';

        foreach (preg_split('/\r\n|\r|\n/', $message) as $line) {
            if (!$inNotes && preg_match($pattern, $line, $match)) {
                $column = self::LABELS[$match[1]];
                if ($column === 'message') {
                    // Notes is always last; everything after it is the applicant's text.
                    $inNotes = true;
                    $notes[] = $match[2];
                } else {
                    $fields[$column] = trim($match[2]);
                }
            } elseif (!$inNotes && !$fields) {
                // Free text from the older form: leave the row alone.
                return [];
            } else {
                $notes[] = $line;
            }
        }

        if (array_key_exists('start_date', $fields) && !self::isDate($fields['start_date'])) {
            unset($fields['start_date']);
        }

        $note = trim(implode("\n", $notes));
        $fields['message'] = $note === '' ? null : $note;

        return $fields;
    }

    private static function parseZip(?string $zip): array
    {
        $zip = trim((string) $zip);

        // Empty, or a real zip code from the older form: nothing to move.
        if ($zip === '' || preg_match('/^\d{5}(-\d{4})?$/', $zip)) {
            return [];
        }

        [$city, $state] = array_pad(array_map('trim', explode(',', $zip, 2)), 2, null);

        return [
            'city' => $city === '' ? null : $city,
            'state' => $state === '' ? null : $state,
            'zip' => null,
        ];
    }

    private static function isDate(string $value): bool
    {
        $date = \DateTime::createFromFormat('!Y-m-d', $value);

        return $date !== false && $date->format('Y-m-d') === $value;
    }
}
