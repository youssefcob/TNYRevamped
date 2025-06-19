<script lang="ts" setup>
import JobSeekerCard from '@/SharedComponents/JobSeekerCard.vue';
import VacancyCard from '@/SharedComponents/VacancyCard.vue';
import { vacanciesState } from '@/state/state';
</script>

<template>
    <div class="container" v-if="vacanciesState.length > 0">
        <h2 class="title">Vacancies</h2>
        <br>
        <h2 class="subtitle">Therapy of New York</h2>
        <h3>Your Gateway to Top-tier Talent and Seamless Integration</h3>

        <br>
        <br>
        <br>

        <div class="job-seeker-wrapper">
            <VacancyCard v-for="vacancy in vacanciesState" :key="vacancy.id" :vacancy="vacancy" />
        </div>
        <a href="vacancies" class="more">Show More Vacancies</a>
    </div>
</template>


<style lang="scss" scoped>
.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;

    .title {
        color: $navy;
        margin-bottom: 1.5rem;
    }

    .title,
    .subtitle,
    h3 {
        text-align: center;
    }

    .job-seeker-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .more {
        display: block;
        // margin-top:3rem;
        margin-left: auto;
    }



}
</style>