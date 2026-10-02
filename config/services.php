<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    /*
    | Google Sheets — every position application and service request is
    | appended as a row to one spreadsheet, one tab per type.
    | Leave `spreadsheet_id` empty to turn the sync off. The spreadsheet must
    | be shared (Editor) with the service account's client_email, and each
    | tab must exist; a range is "<tab name>!A:A".
    */
    'google' => [
        'sheets' => [
            'spreadsheet_id' => env('GOOGLE_SUBMISSIONS_SHEET_ID'),
            'ranges' => [
                'applications' => env('GOOGLE_SHEET_APPLICATIONS_RANGE', 'Applications!A:A'),
                'service_requests' => env('GOOGLE_SHEET_SERVICE_REQUESTS_RANGE', 'ServiceRequests!A:A'),
            ],
        ],
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

];
