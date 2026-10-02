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
    | Studio (headless CMS) — published articles arrive as one JSON "envelope"
    | per document. Both URLs are templates with a {slug} placeholder.
    |
    | `envelope_url` is the stored file, written at publish time and tried first:
    |   local: http://127.0.0.1:9000/studio-render/render/textEditor/tny/articles/{slug}.json
    |   CDN:   https://<cdn>/render/textEditor/tny/articles/{slug}.json
    | `fallback_url` is Studio's render API, which renders on every request and
    | is only tried when the stored file gives nothing. Leave empty for none:
    |   local: http://localhost:3000/api/render/textEditor/tny/articles/{slug}
    */
    'studio' => [
        'envelope_url' => env('STUDIO_ENVELOPE_URL'),
        'fallback_url' => env('STUDIO_FALLBACK_URL'),
        'webhook_secret' => env('STUDIO_WEBHOOK_SECRET'),
        // Seconds an envelope is served from cache before it is refetched.
        'cache_ttl' => (int) env('STUDIO_CACHE_TTL', 300),
        // Shorter for an article served by the fallback, so a later publish
        // to the stored file takes over quickly.
        'fallback_cache_ttl' => (int) env('STUDIO_FALLBACK_CACHE_TTL', 30),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

];
