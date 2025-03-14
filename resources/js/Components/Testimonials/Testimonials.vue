<script setup lang="ts">
import Carousel from '@/SharedComponents/Carousel.vue';
import { testimonialState } from '@/state/state';
import TestimonialCard from './TestimonialCard.vue';
import Comma from './Comma.vue';
</script>

<template>
    <div class="container">
        <h1 class="title">Testimonials</h1>
        <!-- {{ testimonialState }} -->

        <br>
        <br>
        <br>
        <div class="carousel-container">
            <Carousel :numberOfItems="1" snap indicator>
                <TestimonialCard v-for="testimonial in testimonialState" :key="testimonial.id"
                    :testimonial="testimonial" />
            </Carousel>
        </div>
        <svg width="465" height="504" viewBox="0 0 465 504" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M465 0H241.851C241.851 0 125.485 56.1522 74.8321 93.587C24.1787 131.022 8.66649 145.174 0.449209 217.761C-7.76807 290.348 99.4743 341.022 99.4743 341.022L465 504V0Z"
                fill="#A6DCF3" />
        </svg>
        <div class="fst-comma-group">
            <Comma class="comma" :rotation="-176.52"/>
            <Comma class="comma" :rotation="-176.52"/>

        </div>


    </div>
</template>

<style scoped lang="scss">
.container {
    margin-top: 4rem;
    background-color: $beige;
    position: relative;
    // height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include pagePadding();

    .fst-comma-group{
        position: absolute;
        top: 0;
        left: 0;
        z-index:0;
        .comma{
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    >svg {
        position: absolute;
        top: 0;
        right: 0;

    }

    >.title {
        align-self: center;
        color: $navy;
        z-index:1;
    }

    .carousel-container{
        z-index:1;
        @include media-min(tablet){
            width:40vw;
        }
        @include media-max(tablet){
            width:80vw;
        }
    }
}
</style>