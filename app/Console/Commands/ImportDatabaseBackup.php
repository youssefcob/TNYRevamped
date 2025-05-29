<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;

class ImportDatabaseBackup extends Command
{
    protected $signature = 'db:import {filename}';
    protected $description = 'Import a database backup SQL file';

    public function handle()
    {
        try {
            $filename = $this->argument('filename');
            $path = storage_path('app/backups/' . $filename);

            if (!File::exists($path)) {
                $this->error("Backup file not found: {$filename}");
                return 1;
            }

            // Disable foreign key checks before dropping tables
            DB::statement('SET FOREIGN_KEY_CHECKS=0');

            // Get all tables and drop them
            $tables = DB::select('SHOW TABLES');
            foreach ($tables as $table) {
                $tableName = array_values((array)$table)[0];
                Schema::drop($tableName);
                $this->info("Dropped table: {$tableName}");
                
            }

            // Read the SQL file
            $sql = File::get($path);

            // Split the SQL file into individual queries and sort them
            $queries = array_filter(array_map('trim', explode(';', $sql)));
            
            // Separate CREATE TABLE and INSERT queries
            $createQueries = [];
            $insertQueries = [];
            
            foreach ($queries as $query) {
                if (!empty($query)) {
                    if (stripos($query, 'CREATE TABLE') === 0) {
                        $createQueries[] = $query;
                    } else {
                        $insertQueries[] = $query;
                    }
                }
            }

            // DB::beginTransaction();

            try {
                // First run all CREATE TABLE queries
                foreach ($createQueries as $query) {
                    DB::unprepared($query . ';');
                    // $this->info("create {$query}");
                }

                // Then run all INSERT queries
                foreach ($insertQueries as $query) {
                    DB::unprepared($query . ';');
                }

                // DB::commit();
                
                // Re-enable foreign key checks
                DB::statement('SET FOREIGN_KEY_CHECKS=1');
                
                $this->info('Database backup imported successfully!');
                return 0;
            } catch (\Exception $e) {
                DB::rollBack();
                DB::statement('SET FOREIGN_KEY_CHECKS=1');
                $this->error('Error importing backup: ' . $e->getMessage());
                return 1;
            }
        } catch (\Exception $e) {
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
            $this->error('Error: ' . $e->getMessage());
            return 1;
        }
    }
}