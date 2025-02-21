<template>
    <div>
        <Navbar />
        <section>
            <Hero/>
        </section>
        <!-- <h1>Welcome to Laravel 11 with Inertia.js and Vue.js</h1> -->

        <!-- <Link href="/about" method="get">Click here to go to the about page</Link> -->

        <!-- {{ hero }} -->
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Navbar from '@/Components/NavBar/NavBar.vue';

import type { Hero as typeHero } from '@/interface/Types.ts';

import { assignHero } from '@/state/state';
import { onMounted } from 'vue';
import Hero from '@/Components/Hero/Hero.vue';

const props = defineProps({
    hero: {
        type: Object as () => typeHero[]
    },
});

onMounted(() => {
    if (props.hero) {
        assignHero(props.hero);
    }
});
console.log(typeof props.hero);



</script>