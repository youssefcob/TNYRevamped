<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

</script>

<template>
    <div class="container">
        <h2 class="title">About us</h2>
        <div class="wrapper">
        <div class="text-wrapper">
            <p>Therapy of New York is a well-recognized leader in physical therapy staffing solutions for medical
                facilities in New York and New Jersey City. We strive to recruit highly-trained, compassionate medical
                professionals who possess exceptional skills and a strong work ethic to meet the high standards of
                healthcare facilities. We’re dedicated to providing the highest-quality medical staffing solutions that
                are customized to the needs of each client. Taking this into action, over the past years we have placed
                hundreds of clinical staff with several clients across New York and Jersey City.

            </p>
        </div>

            <div class="img" :style="`background-image:url(/images/aboutus/aboutus.png)`"></div>

        </div>

        <Link href="/about" class="more">Read More</Link>


    </div>
</template>

<style lang="scss" scoped>
$gap: 2rem;

.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $gap;
    background-color: $light-grey;

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: $gap;
        align-items: center;

        @include media-max(tablet) {
            grid-template-columns: 1fr;
        }
        p {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            position: relative;
            font-size:1rem;
            line-height: 170%;
          
        }
        
    }

    .img{
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        min-height: 30vh;
    }

    .more{
        margin-top:0rem;
    }


}
</style>