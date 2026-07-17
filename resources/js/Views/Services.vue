<script setup lang="ts">
import { serviceState } from '@/state/state';
import { Service } from '@/interface/Types';
import { onMounted, ref } from 'vue';
import SingleService from '@/Components/Home/Services/SingleService.vue';

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
        <h2 class="title">Services</h2>
        <br>
        <h2 class="subtitle">TNY Staffing Corporation - redefining staffing solutions</h2>
        <br>
        <h2 class="subtitle blue">Why TNY Staffing Corporation ?</h2>

        <div class="services-wrapper">
            <SingleService v-for="service in serviceState" :key="service.id" :service="service" />
        </div>

    </div>
</template>


<style lang="scss" scoped>
.container {
    @include pagePadding();


    .title {
        color: $navy;
        margin-bottom: 1.5rem;
    }

    .title,
    .subtitle {
        text-align: center;
    }

    .subtitle.blue {
        color: $blue;
        text-align: left;
    }

    .services-wrapper {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        @include media-max(tablet) {
            grid-template-columns: 1fr;
        }
    }

}
</style>