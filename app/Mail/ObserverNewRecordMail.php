<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ObserverNewRecordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $role;
    public $form;
    public $record;

    /**
     * Create a new message instance.
     */
    public function __construct($name, $role, $form,  $record)
    {
        $this->name = $name;
        $this->role = $role;
        $this->form = $form;
        $this->record = $record;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Record: ' . $this->form,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.observer.newRecord',
            with: [
                'name' => $this->name,
                'role' => $this->role,
                'form' => $this->form,
                'data' => $this->record,
            ]
        );
    }

    /**
     * Format the data to ensure all values are strings.
     */
    private function formatData($data)
    {
        // Ensure it's an array
        $dataArray = is_array($data) ? $data : json_decode($data, true);

        // Convert nested arrays to JSON strings
        if (is_array($dataArray)) {
            array_walk_recursive($dataArray, function (&$value) {
                if (is_array($value)) {
                    $value = json_encode($value, JSON_PRETTY_PRINT);
                }
            });
        }

        return $dataArray;
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
