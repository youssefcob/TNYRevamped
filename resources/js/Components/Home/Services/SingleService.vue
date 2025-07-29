
<script setup lang="ts">
import { Service } from '@/interface/Types';

const props = defineProps({
    service: {
        type: Object as () => Service,
        required: true
    },

});
</script>

<template>
    <div class="service-card">
        <div class="img" :style="`background-image:url(${service?.image})`"></div> 
        <!-- <div class="img" :style="`background-image:url(https://placehold.co/600x400)`"></div> -->

        
        <div class="info">
            <h2 class="title blue">{{ service?.title }}</h2>
            <p class="big">{{ service?.description }}</p>
        </div>
    </div>
</template>


<style scoped lang="scss">
.service-card {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: $border-radius;
    border: 3px solid $navy;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    // @include media-max(desktop) {
    //     aspect-ratio: 1/1;
    // }
    @include media-min(desktop) {
        aspect-ratio: 1/0.8;
    }

    @include media-max(phone){
        aspect-ratio: 1/1.5;
    }

    .img {
        // width: 100%;
        height: 40%;
        background-size: cover;
        background-position: center;
        // border-radius: 40px;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;

        >h2.title.blue {
            color: $blue;
            align-self: center;
        }

  
    }

    }</style>