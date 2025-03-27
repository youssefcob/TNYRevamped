<script setup lang="ts">
import { Client } from '@/interface/Types';
import InfiniteCarousel from '@/SharedComponents/InfiniteCarousel.vue';
import { clientState } from '@/state/state';


</script>

<template>
    <div class="container">
        <h2 class="title">Our Clients</h2>
        <br>
        <h2 class="subtitle">Simplifying Staffing For Maximum Results</h2>
        <br>
        <br>
        <InfiniteCarousel :animationDuration="10">
            <div class="card" v-for="c in clientState" :style="`background-image:url(${c.image})`"></div>

        </InfiniteCarousel>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    padding: 0 3rem;

    .title,
    .subtitle {
        align-self: center;
    }

    .subtitle.blue {
        color: $blue;
        align-self: center;
    }

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