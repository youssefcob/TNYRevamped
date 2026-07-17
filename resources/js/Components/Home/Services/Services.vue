<script setup lang="ts">
import { ref } from 'vue';
import SingleService from './SingleService.vue';

import { serviceState } from '@/state/state';
import { Link } from '@inertiajs/vue3';



</script>

<template>
 

    <div class="container">
        <h2 class="title">Services</h2>
        <br>
        <h2 class="subtitle">TNY Staffing Corporation - redefining staffing solutions</h2>
        <br>
        <h2 class="subtitle blue">Why TNY Staffing Corporation ?</h2>
        <div class="services-container">
            <template v-for="service in serviceState">
                <SingleService v-if="service.onMainPage" :service="service" />
            </template>
        </div>
        <Link href="/services" class="more">Read More</Link>

    </div>
</template>

<style scoped lang="scss">
.container{
    @include pagePadding();
    display: flex;
    flex-direction: column;
    
    .title,.subtitle{
        align-self: center;
    }
    .subtitle.blue{
        color: $blue;
        align-self: flex-start;
    }

    .services-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 2rem;
        margin-top: 2rem;
        @include media-max(tablet){
            grid-template-columns: 1fr;
        }
    }

 
}
</style>