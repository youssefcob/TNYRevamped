<script setup lang="ts">
import { JobSeekerWithBid } from '@/interface/Types';
import JobSeekerCard from '@/SharedComponents/JobSeekerCard.vue';


const props = defineProps({
    bids: {
        type: Array as () => JobSeekerWithBid[],
        default: () => []
    }
});


</script>

<template>
    <JobSeekerCard v-for="bid in bids" :key="bid.id" :job-seeker="bid" />


</template>