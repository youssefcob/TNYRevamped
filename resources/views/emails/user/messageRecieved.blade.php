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

        html {
            font-size: clamp(10px, 1vw, 17px);
        }

        .container {
            padding: 1rem;
            padding-top: 2.5rem;
            background-color: #EEECED;
            gap: 1.25rem;
        }

        h1 {
            font-family: 'Helvetica Neue', sans-serif;
            font-weight: 600;
            font-size: 3rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            letter-spacing: 0px;
            color: #236681;

        }

        p {
            font-family: 'Montserrat', sans-serif;

            font-size: 1.125rem;
            font-style: normal;
            font-weight: 500;
            line-height: 200%;
        }

        .message-body {
            background-color: white;
            padding: 1.25rem;
            border-radius: 1.125rem;
            color: black;
            font-family: 'Montserrat', sans-serif;

            font-size: 1.125rem;
            font-style: normal;
            font-weight: 500;
            line-height: 200%;
        }

        .invisibile {
            opacity: 0;
        }

        .clinic-container {
            margin-top: 1.5rem;

        }

        .map-wrapper {
            width: 100%;
            margin: auto;
        }

        .map-wrapper img {
            width: 70%;
            height: auto;
        }
    </style>

</head>

<body>
    <div class="container">
        <h1>Message Recieved</h1>

        <p>Dear {{ $data->name }},</p>
        <p>We have received your message and it's currently being reviewed</p>
        <p class='invisibile'>{{$data->now}}</p>

    </div>
</body>

</html>