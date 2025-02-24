@extends('emails.observer.layout')

@section('content')
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #ddd;">
        <h2 style="color: #dc3545; text-align: center; margin-bottom: 20px;">Deleted {{ $form }} Notification</h2>

        <!-- Status Label -->
        <div style="
            display: inline-block;
            padding: 8px 15px;
            border-radius: 20px;
            background-color: #dc3545; /* Red for Deleted */
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
        ">
            Deleted Record
        </div>

        <p style="font-size: 14px; color: #333; margin-top: 20px;">
            This email is sent to you as you have been added to the mailing list of 
            <strong>Therapy of New York (TNY)</strong>. 
            <br><br>
            As a reviewer for the <strong>{{ $form }}</strong>, and in your role as <strong>{{ $role }}</strong>, we want to notify you that a record has been deleted.
        </p>

        <h3 style="margin-top: 20px; color: #333; border-bottom: 2px solid #dc3545; padding-bottom: 5px;">Deleted Record Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
                <tr>
                    <th style="text-align: left; padding: 8px; background-color: #dc3545; color: #fff; border: 1px solid #ddd;">Field</th>
                    <th style="text-align: left; padding: 8px; background-color: #dc3545; color: #fff; border: 1px solid #ddd;">Value</th>
                </tr>
            </thead>
            <tbody>
                @foreach($deletedRecord as $key => $value)
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; background-color: #fff; font-weight: bold;">{{ ucfirst(str_replace('_', ' ', $key)) }}</td>
                        <td style="padding: 8px; border: 1px solid #ddd; background-color: #fff;">{{ $value }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <p style="margin-top: 20px; font-size: 14px; color: #666; text-align: center;">
            This is an automated email from <strong>TNY</strong>. If you have any questions, please contact support.
        </p>
    </div>
@endsection