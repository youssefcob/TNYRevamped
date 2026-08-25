<script setup lang="ts">
import NavBar from '@/Components/NavBar/NavBar.vue';
import Footer from '@/Components/Footer/Foot.vue';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';

import { Service, PageContentMap } from '@/interface/Types';
import ServicesView from '@/Views/Services.vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';

const props = defineProps({
    services: {
        type: Object as () => Service[]
    },
});

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});

</script>

<template>
    <PageMeta page="services" path="/services"
        default-title="Our Services | TNY Staffing Corporation"
        default-description="Explore TNY Staffing Corporation's healthcare staffing services, connecting NYC facilities with credentialed therapy professionals." />

    <MainOverLay>
        <ServicesView :services="services" />
    </MainOverLay>

</template>