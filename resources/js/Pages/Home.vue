<template>
    <div>
        <Navbar />
        <section>
            <Hero/>
        </section>
        <section>
            <Numbers/>
        </section>
        <section>
            <Services/>
        </section>
        <section>
            <WhatSetsUs/>
        </section>
        <section>
            <Employers/>
        </section>
        <section>
            <Jobs/>
        </section>
        <!-- <h1>Welcome to Laravel 11 with Inertia.js and Vue.js</h1> -->

        <!-- <Link href="/about" method="get">Click here to go to the about page</Link> -->

        <!-- {{ hero }} -->
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Navbar from '@/Components/NavBar/NavBar.vue';

import type { Employer, Job, Service, Hero as typeHero } from '@/interface/Types.ts';

import { assignEmployer, assignHero, assignJob, assignService } from '@/state/state';
import { onMounted } from 'vue';
import Hero from '@/Components/Hero/Hero.vue';
import Numbers from '@/Components/Numbers/Numbers.vue';
import Services from '@/Components/Services/Services.vue';
import WhatSetsUs from '@/Components/WhatSetsUs/WhatSetsUs.vue';
import Employers from '@/Components/Employers/Employers.vue';
import Jobs from '@/Components/Jobs/Jobs.vue';

const props = defineProps({
    hero: {
        type: Object as () => typeHero[]
    },
    services: {
        type: Object as () => Service[]
    },
    employers: {
        type: Object as () => Employer[]
    },
    jobs: {
        type: Object as () => Job[]
    }
});

onMounted(() => {
    if (props.hero) {
        assignHero(props.hero);
    }
    if (props.services) {
        assignService(props.services);
    }
    if (props.employers) {
        console.log(props.employers);
        assignEmployer(props.employers);
    }
    if (props.jobs) {
        assignJob(props.jobs);
    }
});



</script>