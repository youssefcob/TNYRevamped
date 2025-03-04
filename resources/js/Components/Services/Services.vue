<script setup lang="ts">
import { ref } from 'vue';
import SingleService from './SingleService.vue';

import { serviceState } from '@/state/state';



</script>

<template>
    <div class="container">
        <h1>Services</h1>
        <br>
        <h2>Therapy of New York</h2>
        <p>Your Gateway to Top-tier Talent and Seamless Integration</p>

        <div class="services-wrapper">
            <template v-for="service in serviceState">
                <SingleService v-if="service.onMainPage" :service="service" />
            </template>
        </div>
        <router-link to="/services" class="more">Show More Services</router-link>
    </div>
</template>

<style scoped lang="scss">
.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    >h1 {
        margin-bottom: 2rem;
        color: $navy;
    }

    >p {
        @extend h2;
        font-weight: 400;
    }

    >h2,
    >p {
        color: $grey;
    }

    .services-wrapper {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .more {
        margin-top: 2rem;
        color: $blue;
        font-weight: 500;
        align-self: flex-end;
    }
}
</style>