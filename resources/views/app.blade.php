<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    @routes

    @vite(['resources/js/app.ts', 'resources/css/app.css',"resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead

</head>

<body class="antialiased">
    @inertia
</body>

</html>