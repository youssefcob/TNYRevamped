<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { JobSeeker, PaginatedResponse } from '@/interface/Types';
import JobSeekerCard from '@/SharedComponents/JobSeekerCard.vue';
import { Link } from '@inertiajs/vue3';


const props = defineProps({
    job_seekers: {
        type: Object as () => PaginatedResponse<JobSeeker>,
        required: true
    }
})

console.log(props.job_seekers.data)

</script>

<template>
    <MainOverLay>
        <div class="container">
            <h2 class="title">Talents</h2>
            <ul>
                <li v-for="page in job_seekers.last_page" :key="page">
                    <Link :href="`/talents?page=${page}`" class="page-link">{{ page }}</Link>
                </li>
            </ul>

            <!-- {{props.job_seekers?.data}} -->
            <JobSeekerCard v-for="talent in props.job_seekers.data" :key="talent.id" :jobSeeker="talent" />

            <!-- <div class="pagination"> -->
            
        </div>
    </MainOverLay>

</template>