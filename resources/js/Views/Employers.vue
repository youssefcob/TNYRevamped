<script setup lang="ts">
import { employerState } from '@/state/state';

import EmployerCard from '@/Components/Employers/EmployerCard.vue';
</script>

<template>
    <div class="container">
        <h2 class="title">Employers</h2>
        <br>
        <h2 class="subtitle">Therapy of New York- redefining staffing solutions</h2>
        <br>
        <h2 class="subtitle blue">Why Therapy of New York?</h2>

        <div class="employers-wrapper">
            <EmployerCard v-for="employer in employerState" :key="employer.id" :employer="employer" />
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    @include pagePadding();
    padding-top: 20vh;


    .title {
        color: $navy;
        margin-bottom: 1.5rem;
    }

    .title,
    .subtitle {
        text-align: center;
    }

    .subtitle.blue {
        color: $blue;
        text-align: left;
    }

    .employers-wrapper {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        @include media-max(tablet) {
            grid-template-columns: 1fr;
        }
    }

}
</style>