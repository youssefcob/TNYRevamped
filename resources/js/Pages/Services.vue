<script setup lang="ts">
import NavBar from '@/Components/NavBar/NavBar.vue';
import Footer from '@/Components/Footer/Foot.vue';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';

import { Service } from '@/interface/Types';
import ServicesView from '@/Views/Services.vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';

const props = defineProps({
    services: {
        type: Object as () => Service[]
    },
});

provide('pageContent', (usePage().props.pageContent as Record<string, string | null>) ?? {});

</script>

<template>
    <MainOverLay>
        <ServicesView :services="services" />
    </MainOverLay>

</template>