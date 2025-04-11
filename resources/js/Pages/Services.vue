<script setup lang="ts">
import NavBar from '@/Components/NavBar/NavBar.vue';
import Footer from '@/Components/Footer/Foot.vue';

import { Service } from '@/interface/Types';
import ServicesView from '@/Views/Services.vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';

const props = defineProps({
    services: {
        type: Object as () => Service[]
    },
});

</script>

<template>
    <MainOverLay>
        <ServicesView :services="services" />
    </MainOverLay>

</template>