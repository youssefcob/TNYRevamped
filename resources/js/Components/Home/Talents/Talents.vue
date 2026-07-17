<script lang="ts" setup>
import JobSeekerCard from '@/SharedComponents/JobSeekerCard.vue';
import { talentState } from '@/state/state';
</script>

<template>
    <div class="container" v-if="talentState.length > 0">
        <h2 class="title">Talents</h2>
        <br>
        <h2 class="subtitle">TNY Staffing Corporation </h2>
        <h3>Your Gateway to Top-tier Talent and Seamless Integration</h3>

        <br>
        <br>
        <br>

        <div class="job-seeker-wrapper">
            <!-- <p v-for="talent in talentState">{{ talent }}</p> -->
            <JobSeekerCard v-for="talent in talentState" :key="talent.id" :jobSeeker="talent" />
        </div>
        <a href="talents" class="more">Show More Talents</a>
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
        margin-left:auto;
    }



}
</style>