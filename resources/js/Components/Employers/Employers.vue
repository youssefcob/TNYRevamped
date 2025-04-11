<script setup lang="ts">


import { employerState } from '@/state/state';
import EmployerCard from './EmployerCard.vue';
import { Link } from '@inertiajs/vue3';


</script>

<template>

    <div class="container">
        <h2 class="title">Employers</h2>
        <br>
        <h2 class="subtitle">Therapy of New York- redefining staffing solutions</h2>
        <br>
        <h2 class="subtitle blue">Why Therapy of New York?</h2>
        <div class="employers-container">
            <template v-for="employer in employerState">
                <EmployerCard v-if="employer.onMainPage" :employer="employer" />
            </template>
        </div>
        <Link href="/employers" class="more">Read More</Link>

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

    .employers-container{
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