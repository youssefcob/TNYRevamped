<script setup lang="ts">
import { serviceState } from '@/state/state';
import SingleService from '@/Components/Services/SingleService.vue';
import { Service } from '@/interface/Types';
import { onMounted, ref } from 'vue';

const props = defineProps({
    services: {
        type: Object as () => Service[]
    },
});

const serviceRef = ref<Service[]>([]);

onMounted(() => {
    if (props.services) {
        serviceRef.value = props.services;
    } else {
        serviceRef.value = serviceState.value;
    }
});
</script>

<template>
    <div class="container">
        <div class="header">
            <h2 class="title">Services</h2>
            <br>
            <h2 class="subtitle">Therapy of New York</h2>
            <h2 class="subtitle">Your Gateway to Top-tier Talent and Seamless Integration</h2>
        </div>
        <SingleService v-for="service in serviceRef" :key="service.id" :service="service" />
    </div>
</template>


<style lang="scss" scoped>
.container {
    @include pagePadding();
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title,
    .subtitle {
        text-align: center;
    }
}
</style>