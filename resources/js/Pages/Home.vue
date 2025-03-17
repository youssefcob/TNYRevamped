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
        <section>
            <NewsAndEvents/>
        </section>
        <section>
            <Clients/>
        </section>
        <section>
            <Testimonials/>
        </section>
        <section>
            <TeamComp/>
        </section>


        <!-- <Link href="/about" method="get">Click here to go to the about page</Link> -->

        <!-- {{ hero }} -->
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Navbar from '@/Components/NavBar/NavBar.vue';

import type { Client, Employer, Job, News, Service, Team, Testimonial, Hero as typeHero } from '@/interface/Types.ts';

import { assignClient, assignEmployer, assignHero, assignJob, assignNews, assignService, assignTeam, assignTestimonial } from '@/state/state';
import { onMounted } from 'vue';
import Hero from '@/Components/Hero/Hero.vue';
import Numbers from '@/Components/Numbers/Numbers.vue';
import Services from '@/Components/Services/Services.vue';
import WhatSetsUs from '@/Components/WhatSetsUs/WhatSetsUs.vue';
import Employers from '@/Components/Employers/Employers.vue';
import Jobs from '@/Components/Jobs/Jobs.vue';
import NewsAndEvents from '@/Components/News/NewsAndEvents.vue';
import Testimonials from '@/Components/Testimonials/Testimonials.vue';
import TeamComp from '@/Components/Team/Team.vue';
import Clients from '@/Components/Clients/Clients.vue';


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
    },
    news: {
        type: Object as () => News[]
    },
    clients: {
        type: Object as () => Client[]
    },
    testimonials: {
        type: Object as () => Testimonial[]
    },
    team: {
        type: Object as () => Team[]
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
        assignEmployer(props.employers);
    }
    if (props.jobs) {
        assignJob(props.jobs);
    }
    if (props.news) {
        assignNews(props.news);
    }
    if (props.clients) {
        assignClient(props.clients);
    }
    if(props.testimonials){
        assignTestimonial(props.testimonials);
    }
    if(props.team){
        assignTeam(props.team);
    }
});



</script>