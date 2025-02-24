<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ObserverUpdatedRecordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $role;
    public $form;
    public $changes;

    /**
     * Create a new message instance.
     *
     * @param string $name
     * @param string $role
     * @param string $form
     * @param array $changes
     */
    public function __construct($name, $role, $form, $changes)
    {
        $this->name = $name;
        $this->role = $role;
        $this->form = $form;
        $this->changes = $changes;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Updated Record: ' . ucfirst($this->form),
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.observer.updateRecord',
            with: [
                'name' => $this->name,
                'role' => $this->role,
                'form' => $this->form,
                'changes' => $this->changes,
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