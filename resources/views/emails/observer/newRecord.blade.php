@extends('emails.observer.layout')

@section('content')

<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #ddd;">
    <h2 style="color: #007bff; text-align: center; margin-bottom: 20px;">New {{ $form }} Notification</h2>
    <div style="
    display: inline-block;
    padding: 8px 15px;
    border-radius: 20px;
    background-color: #28a745; /* Green for Create */
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
">
        New Submission
    </div>
    <p style="font-size: 14px; color: #333;">
        This email is sent to you as you have been added to the mailing list of
        <strong>Therapy of New York (TNY)</strong>.
        <br><br>
        As a reviewer for the <strong>{{ $form }}</strong>, and in your website-role as <strong>{{ $role }}</strong>, we want to notify you about a new submission in the system.
    </p>

    <div style="background: #fff; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); margin-top: 15px;">
        <p><strong>Name:</strong> {{ $name }}</p>
        <p><strong>Role:</strong> {{ $role }}</p>
        <p><strong>Form:</strong> {{ $form }}</p>
    </div>

    <h3 style="margin-top: 20px; color: #333; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Record Details</h3>
    <ul style="list-style: none; padding: 0;">
        @foreach($record as $key => $value)
        <li style="background: #fff; padding: 10px; margin-bottom: 5px; border-radius: 4px; border: 1px solid #ddd;">
            <strong style="color: #007bff;">{{ ucfirst($key) }}:</strong> {{ $value }}
        </li>
        @endforeach
    </ul>

    <p style="margin-top: 20px; font-size: 14px; color: #666; text-align: center;">
        This is an automated email from <strong>TNY</strong>. If you have any questions, please contact support.
    </p>
</div>
@endsection