@extends('emails.observer.layout')

@section('content')
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #ddd;">
        <h2 style="color: #007bff; text-align: center; margin-bottom: 20px;">Updated {{ $form }} Notification</h2>

        <!-- Status Label -->
        <div style="
            display: inline-block;
            padding: 8px 15px;
            border-radius: 20px;
            background-color: #ffc107; /* Yellow for Updated */
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
        ">
            Updated Record
        </div>

        <p style="font-size: 14px; color: #333; margin-top: 20px;">
            This email is sent to you as you have been added to the mailing list of 
            <strong>Therapy of New York (TNY)</strong>. 
            <br><br>
            As a reviewer for the <strong>{{ $form }}</strong>, and in your role as <strong>{{ $role }}</strong>, we want to notify you that a record has been updated.
        </p>

        @if(!empty($changes))
            <h3 style="margin-top: 20px; color: #333; border-bottom: 2px solid #007bff; padding-bottom: 5px;">Changes</h3>
            <ul style="list-style: none; padding: 0;">
                @foreach($changes as $column => $values)
                    <li style="background: #fff; padding: 10px; margin-bottom: 5px; border-radius: 4px; border: 1px solid #ddd;">
                        <strong style="color: #dc3545;">{{ ucfirst(str_replace('_', ' ', $column)) }}:</strong> 
                        <span style="color: #dc3545; text-decoration: line-through;">{{ $values['old'] ?? 'N/A' }}</span> → 
                        <span style="color: #28a745;">{{ $values['new'] ?? 'N/A' }}</span>
                    </li>
                @endforeach
            </ul>
        @else
            <p style="color: #666; text-align: center;">No changes detected.</p>
        @endif

        <p style="margin-top: 20px; font-size: 14px; color: #666; text-align: center;">
            This is an automated email from <strong>TNY</strong>. If you have any questions, please contact support.
        </p>
    </div>
@endsection