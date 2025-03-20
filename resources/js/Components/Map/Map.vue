<template>
    <div class="container">
        <h1 class="title">TNY Location</h1>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14923.099327552874!2d-74.00558361520827!3d40.75457454790991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24500b8df1303%3A0xde9c6d7d8d5ad416!2sTherapy%20of%20New%20York!5e0!3m2!1sen!2seg!4v1742267792358!5m2!1sen!2seg"
            width="800" height="350" style="border:0;"  loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p><svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.8339 21.5605V25.5605C27.8354 25.9318 27.7593 26.2993 27.6106 26.6396C27.4618 26.9798 27.2436 27.2852 26.97 27.5363C26.6964 27.7873 26.3733 27.9784 26.0216 28.0974C25.6698 28.2164 25.2971 28.2605 24.9272 28.2271C20.8243 27.7813 16.8832 26.3793 13.4206 24.1338C10.199 22.0867 7.46768 19.3554 5.42056 16.1338C3.1672 12.6554 1.76489 8.69511 1.32723 4.57379C1.29391 4.20508 1.33773 3.83347 1.4559 3.48262C1.57406 3.13177 1.76399 2.80937 2.01358 2.53595C2.26318 2.26253 2.56697 2.04407 2.90562 1.89448C3.24426 1.7449 3.61035 1.66747 3.98056 1.66712H7.98056C8.62764 1.66075 9.25495 1.88989 9.74558 2.31183C10.2362 2.73377 10.5567 3.31972 10.6472 3.96045C10.8161 5.24054 11.1292 6.49742 11.5806 7.70712C11.76 8.18435 11.7988 8.70301 11.6924 9.20163C11.5861 9.70025 11.339 10.1579 10.9806 10.5205L9.28723 12.2138C11.1853 15.5518 13.9492 18.3157 17.2872 20.2138L18.9806 18.5205C19.3431 18.162 19.8008 17.9149 20.2994 17.8086C20.798 17.7022 21.3167 17.7411 21.7939 17.9205C23.0036 18.3719 24.2605 18.685 25.5406 18.8538C26.1883 18.9452 26.7798 19.2714 27.2026 19.7704C27.6254 20.2695 27.8501 20.9066 27.8339 21.5605Z"
                    stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Call Us  (347)441-4283 – (917)985-8327</p>

    </div>
</template>

<style lang="scss" scoped>
.container {
    @include pagePadding();

    a {
        cursor: pointer;
    }

    .title {
        text-align: center;
        color: $navy;
        margin-bottom: 2rem;
    }

    .map-img {
        border-radius: 1rem;
        background-size: cover;
        background-position: center;
        height: 70vh;
        width: 100%;
        background-image: url("https://maps.googleapis.com/maps/api/staticmap?center=40.755193241872846,-73.991697532572&zoom=12&size=700x300&scale=2&key=AIzaSyDolB5zXSKaL7Y3e08W9WLSwQYWaXVfYIQ");
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        >svg {
            height: 30%;
            width: 30%;
            transform: translate(0, -41%);
        }



    }

    iframe {
        width: 100%;
        height: 70vh;
        border-radius: $border-radius;
    }

    p {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;

        svg {
            margin-right: 1rem;
        }
    }
}
</style>
