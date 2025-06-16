<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';


const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    token: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <MainOverLay>
    <p>Job Seekers Home</p>
    {{ user }}
    {{ token }}
    </MainOverLay>
</template>
