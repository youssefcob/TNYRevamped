<?php

namespace App\Support;

/**
 * Before service requests had their own columns, the hire-staff form packed
 * the extra answers into `requirements`, after the description and a blank
 * line ("Requested Positions: ...\nOpen Roles: 3\n..."). This turns that
 * legacy value back into separate fields.
 */
class LegacyServiceRequestFields
{
    private const LABELS = [
        'Requested Positions' => 'requested_positions',
        'Open Roles' => 'open_roles',
        'Start Date' => 'start_date',
        'Urgency' => 'urgency',
    ];

    /**
     * @return array Only the columns that should change, keyed by column name.
     *               `requested_positions` is a list of position names.
     */
    public static function parse(?string $requirements): array
    {
        $text = str_replace(["\r\n", "\r"], "\n", (string) $requirements);

        // The packed answers are always the last block, after a blank line.
        $split = strrpos($text, "\n\n");
        if ($split === false) {
            return [];
        }

        $fields = [];
        $unknown = [];
        $pattern = '/^(' . implode('|', array_map('preg_quote', array_keys(self::LABELS))) . '): ?(.*)$/';

        foreach (explode("\n", substr($text, $split + 2)) as $line) {
            if (preg_match($pattern, $line, $match) && !isset($fields[self::LABELS[$match[1]]])) {
                $fields[self::LABELS[$match[1]]] = trim($match[2]);
            } else {
                // Not one of ours (e.g. "Pay Range: ..." from an older form): keep it as text.
                $unknown[] = $line;
            }
        }

        if (!$fields) {
            return [];
        }

        if (isset($fields['requested_positions'])) {
            $fields['requested_positions'] = self::splitPositions($fields['requested_positions']);
        }

        if (isset($fields['open_roles'])) {
            if (ctype_digit($fields['open_roles'])) {
                $fields['open_roles'] = (int) $fields['open_roles'];
            } else {
                $unknown[] = 'Open Roles: ' . $fields['open_roles'];
                unset($fields['open_roles']);
            }
        }

        if (isset($fields['start_date']) && !self::isDate($fields['start_date'])) {
            $unknown[] = 'Start Date: ' . $fields['start_date'];
            unset($fields['start_date']);
        }

        $description = rtrim(substr($text, 0, $split));
        $rest = trim(implode("\n", $unknown));
        $fields['requirements'] = $rest === '' ? $description : $description . "\n\n" . $rest;

        return $fields;
    }

    /**
     * Splits "A, B (x, y), C" on the commas between names, not the ones
     * inside parentheses — some position names contain commas.
     */
    private static function splitPositions(string $positions): array
    {
        $names = preg_split('/,\s*(?![^()]*\))/', $positions);

        return array_values(array_filter(array_map('trim', $names), fn($name) => $name !== ''));
    }

    private static function isDate(string $value): bool
    {
        $date = \DateTime::createFromFormat('!Y-m-d', $value);

        return $date !== false && $date->format('Y-m-d') === $value;
    }
}
