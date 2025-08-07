<template>
    <div class="about-section">
        <h1 class="title">About Us</h1>

        <div class="about-content">
            <div class="about-text">
                <p>
                    Therapy of New York is a well-recognized leader in physical therapy staffing solutions for medical
                    facilities
                    in New York and New Jersey City. We strive to recruit highly-trained, compassionate medical
                    professionals
                    who possess exceptional skills and a strong work ethic to meet the high standards of healthcare
                    facilities. We're
                    dedicated to providing the highest-quality medical staffing solutions that are customized to the
                    needs of
                    each client. Taking this into action, over the past years we have placed hundreds of clinical staff
                    with several
                    clients across New York and Jersey City.
                </p>
            </div>

            <div class="img" 
            :style="`background-image:url(/images/aboutus/aboutus.png)`"></div>

        </div>

        <h2 class="opportunity-title">Matching Talent with Tomorrow's Opportunities!</h2>

        <h3 class="provide-title">We Provide Professionals</h3>

        <ul class="professionals-list">
            <li>Licensed Physical Therapists, Licensed Physical Therapy Assistants, and Licensed Limited Permits</li>
            <li>Certified Occupational Therapists, and Certified Occupational Therapy Assistants</li>
            <li>Certified Speech-Language Pathologists</li>
        </ul>

        <!-- <div class="cta-buttons">
            <button class="btn">Apply Now</button>
            <button class="btn transparent">Request Service</button>
        </div> -->
    </div>
</template>



<style lang="scss" scoped>
.about-section {
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    color: #333;
    @include pagePadding();
    padding-top: 15vh;

    .title {
        text-align: center;
        color: $navy;
        margin-bottom: 1.5rem;
    }

    .about-content {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
        align-items: center;

        .img {
            background-size: cover;
            background-position:top;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            min-height: 40vh;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .about-text {
            flex: 1;

            p {
                line-height: 1.6;
                font-size: 1rem;
            }
        }



    }

    .opportunity-title {
        font-size: 1.5rem;
        margin: 2rem 0 1rem;
        color: #333;
    }

    .provide-title {
        color: #2ba9e0;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .professionals-list {
        padding-left: 1.4rem;

        li {
            margin-bottom: 0.7rem;
            position: relative;
            padding-left: 5px;
            list-style-type: disc;
            color: #444;
            line-height: 1.5;
        }
    }

    .cta-buttons {
        display: flex;
        gap: 1.5rem;
        margin-top: 2rem;

        @media (max-width: 480px) {
            flex-direction: column;
        }


    }
}
</style>