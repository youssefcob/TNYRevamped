<?php

namespace App\Services;

class CSV
{
    /**
     * Builds a CSV string from an array of associative arrays.
     * The keys of the first row become the header. Returns null when empty.
     */
    public static function write($data)
    {
        if (count($data) == 0) {
            return null;
        }
        ob_start();
        $df = fopen('php://output', 'w');
        fputcsv($df, array_keys(reset($data)), ',', '"', '');
        foreach ($data as $row) {
            fputcsv($df, $row, ',', '"', '');
        }
        fclose($df);

        return ob_get_clean();
    }
}
