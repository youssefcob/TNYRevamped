<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Service } from '@/interface/Types';
import {  assignService } from '@/state/state';
import Apply from '@/Views/Apply.vue';
import Request from '@/Views/Request.vue';

const props = defineProps({
    services: {
        type: Object as () => Service[]
    },
    service: {
        type: String,
        default: ''
    },
});
if (props.services) {
    assignService(props.services);
}
</script>

<template>
    <MainOverLay>
        <Request :service="service" />
    </MainOverLay>
</template>