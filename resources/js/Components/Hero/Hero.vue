<script lang="ts" setup>

import { heroState } from '@/state/state';
import HeroCard from './HeroCard.vue';
import Carousel from '@/SharedComponents/Carousel.vue';

console.log(heroState);
</script>

<template>
    <Carousel snap>
        <template v-for="hero in heroState">
            <HeroCard :hero="hero" />
        </template>
    </Carousel>
</template>