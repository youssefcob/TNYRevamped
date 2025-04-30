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

        .highlight {
            background-color: yellow;
            font-weight: bold;
        }

        a {
            color: #236681;
            text-decoration: none;
        }

        .footer-logo {
            margin-top: 2rem;
        }

        h1 {
            /* color: #236681; */
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.8;
            margin-bottom: 1rem;
        }

        .contact {
            margin-top: 1rem;
        }

        .bold {
            font-weight: bold;
        }

        .footer {
            margin-top: 2rem;
        }
        .mainColoredText{
            color: #135672;
        }

    </style>
</head>

<body>
    <div class="container">
        <h1>Hello, <span class="mainColoredText"><strong>{{ $data->name }}</strong></span></h1>

        <p>We received your Application by filling out the form</p>

        <p>
            Job Title: <span class="bold mainColoredText" >“{{ $data->position }}”</span>,
            <p>Address : </p><span class="mainColoredText">“{{ $data->address }}”</span>
        </p>

        <p>
            Your CV will be reviewed when it meets the required requirements,
            and if the information changes, you can contact us
            <!-- ({{ $data->phone1 }}) – ({{ $data->phone2 }}) -->
            (347)441-4283 – (917)985-8327
        </p>

        <p>Thanks,</p>

        <div class="footer-logo">
            <!-- <span></span> -->
             <!-- the src should be {{ asset('images/logo.svg') }}, but Gmail doesn't allow showing images from localhost, so I'll uplaod the image on Cloudinary -->
              <!-- IMPORTNAT: we need to make sure that the logo image is uploaded to Cloudinary when going to production or staging  -->
            <img src="{{ asset('images/logo.png') }}" alt="TNY Logo" width="100">
            <!-- <img src="https://res-console.cloudinary.com/dokukdshb/thumbnails/v1/image/upload/v1745947682/bG9nb19mdnBnNjU" alt="TNY Logo" width="100"> -->
        </div>
    </div>
</body>

</html>