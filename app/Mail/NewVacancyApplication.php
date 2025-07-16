<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Application;

class NewVacancyApplication extends Mailable
{
    use Queueable, SerializesModels;

    public $application;
    public $vacancy;
    public $jobSeeker;
    public $employerName;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Application $application, $employerName)
    {
        $this->application = $application;
        $this->vacancy = $application->vacancy;
        $this->jobSeeker = $application->jobSeeker;
        $this->employerName = $employerName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('New Application Received - ' . $this->vacancy->title)
                    ->view('emails.employer.new-vacancy-application')
                    ->with([
                        'employerName' => $this->employerName,
                    ]);
    }
} 