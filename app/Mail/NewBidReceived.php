<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Bid;

class NewBidReceived extends Mailable
{
    use Queueable, SerializesModels;

    public $jobSeekerName;
    public $employerName;
    public $bid;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $jobSeekerName)
    {
        
        $this->jobSeekerName = $jobSeekerName;
        
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('New Bid Received from ' . $this->employerName)
                    ->view('emails.jobseeker.new-bid-received');
    }
} 