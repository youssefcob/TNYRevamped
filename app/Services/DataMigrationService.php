<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\DB;

class DbConfig
{
    public $host;
    public $port;
    public $database;
    public $username;
    public $password;
    public $driver;
}

class DataMigrationService //! I'm looking for a fancy name for this service XD
//! Currently, I'll call it MIGRO
{
    // Your service logic goes here

    public function connectToDatabase(DbConfig $config): array
    {
        try {

            $connectionName = 'dynamic_mysql_' . uniqid();

            config([
                "database.connections.$connectionName" => [
                    'driver' => $config->driver ?? 'mysql',
                    'host' => $config->host,
                    'port' => $config->port,
                    'database' => $config->database,
                    'username' => $config->username,
                    'password' => $config->password,
                    'charset' => 'utf8mb4',
                    'collation' => 'utf8mb4_unicode_ci',
                    'prefix' => '',
                    'strict' => true,
                    'engine' => null,
                ]
            ]);

            DB::connection($connectionName)->getPdo();
            //  DB::purge($connectionName);
            //  DB::reconnect($connectionName);
            return [
                'success' => true,
                'message' => 'Connection successful',
                'connection_name' => $connectionName
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => 'Connection failed: ' . $e->getMessage()
            ];
        }
    }

    public function prepareDatabaseConfig(array $data): DbConfig
    {
        $dbConfig = new DbConfig();
        $dbConfig->driver = $data['driver'] ?? 'mysql';
        $dbConfig->host = $data['host'] ?? '';
        $dbConfig->port = $data['port'] ?? 3306;
        $dbConfig->database = $data['database'] ?? '';
        $dbConfig->username = $data['username'] ?? '';
        $dbConfig->password = $data['password'] ?? null;

        return $dbConfig;
    }

    public function processDataToInsert(array $data): array
    {
        $columnsToExclude = ['id'];
        $processedData = [];

        foreach ($data as $row) {
            // Convert object to array
            $rowArray = (array) $row;

            // Remove excluded columns
            foreach ($columnsToExclude as $column) {
                unset($rowArray[$column]);
            }

            $processedData[] = $rowArray;
        }

        return $processedData;
    }

    public function migrateData($request)
    {
        try {
            $request->validate([
                'source_db.driver' => 'nullable|string',
                'source_db.host' => 'required|string',
                'source_db.port' => 'required|integer',
                'source_db.database' => 'required|string',
                'source_db.username' => 'required|string',
                'source_db.password' => 'nullable|string',
                'table' => 'required|string',
                'offset' => 'nullable|integer|min:0',
                'limit' => 'required|integer|min:1',
                'destination_db.driver' => 'nullable|string',
                'destination_db.host' => 'required|string',
                'destination_db.port' => 'required|integer',
                'destination_db.database' => 'required|string',
                'destination_db.username' => 'required|string',
                'destination_db.password' => 'nullable|string',
            ]);

            $sourceDbConfig = $this->prepareDatabaseConfig($request->source_db);
            $sourceDbConnection = $this->connectToDatabase($sourceDbConfig);
            if (!$sourceDbConnection['success']) {
                return [
                    'success' => false,
                    'message' => 'Connect to souce DB failed',
                    'error' => $sourceDbConnection['error'],
                ];
            }
            // dd($sourceDbConnection);
            $sourceTable  = DB::connection($sourceDbConnection['connection_name'])->table($request->table);
            $data = $sourceTable
                ->limit($request->limit)
                ->offset($request->offset ?? 0)
                ->get();
            if ($data->isEmpty())
                return [
                    'success' => false,
                    'message' => 'No data found in source table with limit: ' . $request->limit . ' and offset: ' . ($request->offset ?? 0),
                ];

            $destinationDbConfig = $this->prepareDatabaseConfig($request->destination_db);
            $destDbConnection = $this->connectToDatabase($destinationDbConfig);

            if (!$destDbConnection['success'])
                return [
                    'success' => false,
                    'message' => 'Connect to destination DB failed',
                    'error' => $destDbConnection['error'],
                ];
            $destinationTable = DB::connection($destDbConnection['connection_name'])->table($request->table);
            // dd($data->toArray());
            $processedData =$this->processDataToInsert($data->toArray());

            $destinationTable->insert($processedData);
            return [
                'success' => true,
                'message' => 'Data migrated successfully',
                'source_db' => $sourceDbConnection['connection_name'],
                'destination_db' => $destDbConnection['connection_name'],
                'table' => $request->table,
                'migrated_rows' => $data->count(),
            ];
        } catch (\Illuminate\Validation\ValidationException $e) {
            return [
                'code' => 422,
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ];
        } catch (Exception $e) {
            //throw $th;
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
