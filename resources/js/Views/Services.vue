<script setup lang="ts">
    import { serviceState } from '@/state/state';
    import SingleService from '@/Components/Services/SingleService.vue';
</script>

<template>
    <div class="container">
    <SingleService v-for="service in serviceState" :key="service.id" :service="service" />
    </div>
</template>


<style lang="scss" scoped>
.container {
    @include pagePadding();
    padding-top:20vh;
    display:flex;
    flex-direction:column;
    gap:2rem;
}
</style>