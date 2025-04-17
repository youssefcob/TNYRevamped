<?php
namespace App\Traits;

use App\Mail\ApplicationRecieved;
use App\Mail\MessageRecieved;
use App\Mail\ServiceRequestRecieved;
use Illuminate\Support\Facades\Mail;


trait SendsEmail
{

    protected function sendMessageSubmittedEmail($email,$data)
    {
        if (!empty($email)) {
            Mail::to($email)->send(new MessageRecieved($data));
        }
    }

    protected function sendApplicationSubmittedEmail($email,$data)
    {
        if (!empty($email)) {
            Mail::to($email)->send(new ApplicationRecieved($data));
        }
    }

    protected function sendServiceRequestSubmittedEmail($email,$data)
    {
        if (!empty($email)) {
            Mail::to($email)->send(new ServiceRequestRecieved($data));
        }
    }


    

}