<script setup lang="ts">
import { ref } from 'vue';
import SingleService from './SingleService.vue';

import { serviceState } from '@/state/state';
import { Link } from '@inertiajs/vue3';



</script>

<template>
    <div class="container">
        <h2 class="title">Services</h2>
        <!-- <br> -->
        <h2 class="subtitle">Therapy of New York</h2>
        <p>Your Gateway to Top-tier Talent and Seamless Integration</p>

        <div class="services-wrapper">
            <template v-for="service in serviceState">
                <SingleService v-if="service.onMainPage" :service="service" />
            </template>
        </div>
        <Link href="/services" class="more">Show More Services</Link>
    </div>
</template>

<style scoped lang="scss">
.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    >.title {
        // margin-bottom: 1rem;
        // color: $navy;
    }

    >p {
        @extend h2;
        font-weight: 400;
    }

    // >.subtitle,
    // >p {
    //     // color: $grey;
    // }

    .services-wrapper {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

  
}
</style>