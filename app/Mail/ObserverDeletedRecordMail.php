<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ObserverDeletedRecordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $role;
    public $form;
    public $deletedRecord;

    /**
     * Create a new message instance.
     *
     * @param string $name
     * @param string $role
     * @param string $form
     * @param array $deletedRecord
     */
    public function __construct($name, $role, $form, $deletedRecord)
    {
        $this->name = $name;
        $this->role = $role;
        $this->form = $form;
        $this->deletedRecord = $deletedRecord;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Deleted Record: ' . $this->form,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.observer.deleteRecord',
            with: [
                'name' => $this->name,
                'role' => $this->role,
                'form' => $this->form,
                'deletedRecord' => $this->deletedRecord,
            ]
        );
    }

    /**
     * Get the attachments for the message.
     */
    public function attachments(): array
    {
        return [];
    }
}