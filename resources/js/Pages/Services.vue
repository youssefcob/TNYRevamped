<script setup lang="ts">
import NavBar from '@/Components/NavBar/NavBar.vue';
import Footer from '@/Components/Footer/Foot.vue';

import { Service } from '@/interface/Types';
import ServicesView from '@/Views/Services.vue';

const props = defineProps({
    services: {
        type: Object as () => Service[]
    },
});

</script>

<template>
    <NavBar active="services" />
    <main>
        <ServicesView :services="services" />
    </main>
    <Footer />

</template>