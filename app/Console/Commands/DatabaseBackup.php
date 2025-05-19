<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DatabaseBackup extends Command
{
    protected $signature = 'db:backup';
    protected $description = 'Create a backup of the database';

    public function handle()
    {
        try {
            // Get all tables
            $tables = DB::select('SHOW TABLES');
            $output = '';

            foreach ($tables as $table) {
                $tableName = array_values((array)$table)[0];
                
                // Get Create Table Syntax
                $createTableSql = DB::select("SHOW CREATE TABLE `$tableName`");
                $createTableSyntax = array_values((array)$createTableSql[0])[1] . ";\n\n";
                $output .= $createTableSyntax;
                
                // Get Table Data
                $rows = DB::table($tableName)->get();
                if ($rows->count() > 0) {
                    $columns = array_keys((array)$rows[0]);
                    
                    foreach ($rows as $row) {
                        $rowData = array_map(function($value) {
                            if (is_null($value)) return 'NULL';
                            return is_numeric($value) ? $value : "'" . addslashes($value) . "'";
                        }, (array)$row);
                        
                        $output .= "INSERT INTO `$tableName` (`" . implode('`, `', $columns) . "`) VALUES (" . implode(', ', $rowData) . ");\n";
                    }
                    $output .= "\n";
                }
            }

            // Create backups directory if it doesn't exist
            $backupPath = storage_path('app/backups');
            if (!File::exists($backupPath)) {
                File::makeDirectory($backupPath, 0755, true);
            }

            // Save the SQL file
            $filename = 'backup_' . date('Y_m_d_His') . '.sql';
            File::put($backupPath . '/' . $filename, $output);

            $this->info("Backup created successfully: $filename");
            return 0;
        } catch (\Exception $e) {
            $this->error("Backup failed: " . $e->getMessage());
            return 1;
        }
    }
}
