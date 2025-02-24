<?php

namespace App;

use App\Mail\ObserverDeletedRecordMail;
use App\Mail\ObserverNewRecordMail;
use App\Mail\ObserverUpdatedRecordMail;
// use App\Mail\ObserverUpdatedRecordMail;
use App\Models\MailList;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

trait GenericObserverTrait
{
    //! The function must be called "boot(name of the trait)".
    // To use this trait, just use the trait inside the DB Model.

    private $contentTables = [
        'hero_slides',
        'about',
        'clients',
        'employees'
    ];

    /**
     * Get the matched mail list based on table name.
     *
     * @param string $tableName The table name or "content" for content tables.
     * @return \Illuminate\Database\Eloquent\Collection The matched mail list.
     */
    private function getMatchedMailList($tableName)
    {
        return in_array($tableName, $this->contentTables)
            ? MailList::where('form', 'content')->get()
            : MailList::where('form', $tableName)->get();
    }

    /**
     * Send emails when a new record is created.
     *
     * @param Model $model The model instance.
     * @return void
     */
    private function sendCreatedMail(Model $model)
    {
        $mailList = $this->getMatchedMailList($model->getTable());

        foreach ($mailList as $mail) {
            try {
                Mail::to($mail->email)->queue(
                    new ObserverNewRecordMail(
                        $mail->name,
                        $mail->role,
                        $model->getTable(),
                        $model->toArray()
                    )
                );

                Log::alert('Created Mail Sent:', [
                    'mail' => $mail->email,
                    'action' => 'Created record'
                ]);
            } catch (\Throwable $th) {
                Log::alert('Error sending created mail:', [
                    'mail' => $mail->email,
                    'error' => $th->getMessage()
                ]);
            }
        }
    }

    /**
     * Send emails when a record is updated, highlighting only changed fields.
     *
     * @param Model $model The model instance.
     * @return void
     */
    private function sendUpdatedMail(Model $model)
    {
        $mailList = $this->getMatchedMailList($model->getTable());

        $oldData = $model->getOriginal();
        $newData = $model->toArray();

        // Get only the changed columns
        $changes = [];
        foreach ($newData as $column => $newValue) {
            if (array_key_exists($column, $oldData) && $oldData[$column] != $newValue) {
                $changes[$column] = [
                    'old' => $oldData[$column] ?? 'N/A',
                    'new' => $newValue ?? 'N/A'
                ];
            }
        }

        if (empty($changes)) {
            Log::info('No changes detected, skipping update mail.');
            return; // No changes, so no need to send an email.
        }

        foreach ($mailList as $mail) {
            try {
                Mail::to($mail->email)->queue(
                    new ObserverUpdatedRecordMail(
                        $mail->name,
                        $mail->role,
                        $model->getTable(),
                        $changes // Send only the changed fields
                    )
                );

                Log::alert('Updated Mail Sent:', [
                    'mail' => $mail->email,
                    'action' => 'Updated record',
                    'changes' => $changes
                ]);
            } catch (\Throwable $th) {
                Log::alert('Error sending updated mail:', [
                    'mail' => $mail->email,
                    'error' => $th->getMessage()
                ]);
            }
        }
    }

    /**
     * Send emails when a record is deleted.
     *
     * @param Model $model The model instance.
     * @return void
     */
    private function sendDeletedMail(Model $model)
{
    $mailList = $this->getMatchedMailList($model->getTable());

    // Convert the deleted model instance into an array to capture all fields
    $deletedRecord = $model->toArray();

    foreach ($mailList as $mail) {
        try {
            Mail::to($mail->email)->queue(
                new ObserverDeletedRecordMail(
                    $mail->name,
                    $mail->role,
                    $model->getTable(),
                    $deletedRecord // Pass full deleted record details
                )
            );

            Log::alert('Deleted Mail Sent:', [
                'mail' => $mail->email,
                'action' => 'Deleted record',
                'record' => $deletedRecord
            ]);
        } catch (\Throwable $th) {
            Log::alert('Error sending deleted mail:', [
                'mail' => $mail->email,
                'error' => $th->getMessage()
            ]);
        }
    }
}

    /**
     * Boot the observer trait for model events.
     */
    public static function bootGenericObserverTrait()
    {
        static::created(function (Model $model) {
            Log::info('Created:', ['table' => $model->getTable(), 'data' => $model->toArray()]);
            $model->sendCreatedMail($model);
        });

        static::updated(function (Model $model) {
            Log::info('Updated:', ['table' => $model->getTable(), 'data' => $model->toArray()]);
            $model->sendUpdatedMail($model);
        });

        static::deleted(function (Model $model) {
            Log::info('Deleted:', ['table' => $model->getTable(), 'data' => $model->toArray()]);
            $model->sendDeletedMail($model);
        });
    }
}
