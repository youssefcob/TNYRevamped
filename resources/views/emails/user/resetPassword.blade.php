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

        .mainColoredText {
            color: #135672;
        }

        .reset-token {
            background-color: #f5f5f5;
            padding: 1rem;
            border-radius: 8px;
            font-family: monospace;
            font-size: 1.2rem;
            text-align: center;
            margin: 1.5rem 0;
            letter-spacing: 2px;
        }

        .warning {
            color: #d9534f;
            font-size: 0.9rem;
        }

        .info-box {
            background-color: #f8f9fa;
            padding: 1rem;
            border-left: 4px solid #135672;
            margin: 1.5rem 0;
            border-radius: 4px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Hello, <span class="mainColoredText"><strong>{{ $name }}</strong></span></h1>

        <p>We received a request to reset your password for your TNY account.</p>

        <p>Please use the following OTP to reset your password:</p>

        <div class="reset-token">
            <span class="bold mainColoredText">{{ $otp }}</span>
        </div>

        <div class="info-box">
            <p class="bold">Important Information:</p>
            <!-- <p>• This OTP will expire after: <span class="bold mainColoredText">{{ $expiresAt }} ({{ $mintues }} minutes)</span></p> -->
             <!-- I Commented this because it might be a security issue to let user know the system time zone  -->
            <p>• This OTP will expire after:  ({{ $mintues }} minutes)</span></p>
            <p>• If you didn't request this password reset, please ignore this email or contact us immediately.</p>
            <p>• For security reasons, never share this OTP with anyone.</p>
        </div>

        <p>
            If you need assistance, feel free to contact us at:
            (347)441-4283
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

