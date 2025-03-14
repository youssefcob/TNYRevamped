<script setup lang="ts">
import { Client } from '@/interface/Types';
import InfiniteCarousel from '@/SharedComponents/InfiniteCarousel.vue';
import { clientState } from '@/state/state';


</script>

<template>
    <div class="container">
        <InfiniteCarousel :animationDuration="15">
            <div class="card" v-for="c in clientState" :style="`background-image:url(${c.image})`"></div>
            <div class="card" v-for="c in clientState" :style="`background-image:url(${c.image})`"></div>

        </InfiniteCarousel>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    padding: 0 3rem;

    .card {
        background-color: $grey;
        height: 10rem;
        width: 10rem;
        background-size: cover;
        background-position: center;
        margin-right:2rem;
        border-radius: $border-radius;
    }
}
</style>