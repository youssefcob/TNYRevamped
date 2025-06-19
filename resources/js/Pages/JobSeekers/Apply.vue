<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Job } from '@/interface/Types';
import { assignJob } from '@/state/state';
import Apply from '@/Views/Apply.vue';

const props = defineProps({
    jobs: {
        type: Object as () => Job[]
    },
    position: {
        type: String,
        default: ''
    },
});
if (props.jobs) {
    assignJob(props.jobs);
}
</script>

<template>
    <MainOverLay>
        <Apply :position="position" />
    </MainOverLay>
</template>