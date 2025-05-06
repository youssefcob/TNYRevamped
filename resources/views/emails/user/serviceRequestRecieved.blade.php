<!DOCTYPE html>
<html>

<head>
    <title>TNY Email</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            border: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #ffffff;
            padding: 2rem;
            color: #000;
        }

        .container {
            max-width: 600px;
            margin: auto;
            padding: 2rem;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }

        h1 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.8;
            margin-bottom: 1rem;
        }

        .mainColoredText {
            color: #135672;
        }

        .bold {
            font-weight: bold;
        }

        .footer {
            margin-top: 2rem;
        }

        .footer-logo {
            margin-top: 2rem;
        }

        a {
            color: #135672;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Hello, <span class="bold">{{ $data->name }}</span></h1>

        <p>We received your service by filling out the form</p>

        <p>
            Service name : <span class="bold mainColoredText">“{{ $data->service_name }}”</span>,
            Address : <span class="mainColoredText">“{{ $data->address }}”</span>,
            Facility name : <span class="bold mainColoredText">“{{ $data->facility_name }}”</span>
        </p>

        <p>
            Please note that this information will be uploaded to the website and if the information changes,
            you can contact us (347)441-4283 – (917)985-8327
        </p>

        <p>Thanks,</p>

        <div class="footer-logo">
            <img src="{{ config('app.url') . '/images/logo.svg' }}" alt="TNY Logo" width="100">
        </div>
    </div>
</body>

</html>