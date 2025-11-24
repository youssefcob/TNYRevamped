<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $otp;
    public $expiresAt;
    public $name;
    public $mintues;
    public function __construct($otp, $expiresAt, $name, $mintues)
    {
        $this->otp = $otp;
        $this->expiresAt = $expiresAt;
        $this->name = $name;
        $this->mintues = $mintues;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Reset Password Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.user.resetPassword',
            with: [
                'otp' => $this->otp,
                'expiresAt' => $this->expiresAt->format('Y-m-d H:i:s'),
                'name' => $this->name,
                'mintues' => $this->mintues,
            ]
        );
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
