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

        .details-section {
            background-color: #f8f9fa;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Hello, <span class="mainColoredText"><strong>{{ $employerName }}</strong></span></h1>

        <p>A new application has been submitted for your vacancy:</p>

        <!-- <div class="details-section">
            <p>
                Job Title: <span class="bold mainColoredText">"{{ $vacancy->title }}"</span>
                <br>
                Position: <span class="mainColoredText">"{{ $vacancy->position->name }}"</span>
            </p>
        </div> -->

        <!-- <div class="details-section">
            <p class="bold">Applicant Information:</p>
            <p>
                Name: <span class="mainColoredText">{{ $jobSeeker->user->name }}</span>
                <br>
                Email: <span class="mainColoredText">{{ $jobSeeker->user->email }}</span>
                <br>
                Phone: <span class="mainColoredText">{{ $jobSeeker->phone }}</span>
            </p>
        </div> -->

        @if($application->cover_letter)
        <div class="details-section">
            <p class="bold">Cover Letter:</p>
            <p class="mainColoredText">{{ $application->cover_letter }}</p>
        </div>
        @endif

        <p>You can review this application in detail through your employer dashboard.</p>

        <p>For any inquiries, please contact us at:
            <br>
            <span class="mainColoredText">(347)441-4283</span>
        </p>

        <p>Best regards,</p>

        <div class="footer-logo">
            <img src="{{ asset('images/logo.png') }}" alt="TNY Logo" width="100">
        </div>
    </div>
</body>

</html>
