<?php

namespace App\Mail;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ApplicationRecieved extends Mailable
{
    use Queueable, SerializesModels;

     /**
     * Create a new message instance.
     */
    public $data;
    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $timezone = 'America/New_York';

        $data->date = Carbon::createFromTimestamp($data->date_in_unix / 1000, $timezone)->toDateString();
        $data->time = Carbon::createFromTimestamp($data->date_in_unix / 1000, $timezone)->format('h:i A');
        $data->now = Carbon::now($timezone)->toDateString();

        // \Log::info('Unix Timestamp: ' . $data->date_in_unix);
        // \Log::info('Formatted Date: ' . $data->date);
        // \Log::info('Formatted Time: ' . $data->time);
        // \Log::info('Current Date: ' . $data->now);
    
        $this->data = $data;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Message Recieved',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.user.applicationRecieved',
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
