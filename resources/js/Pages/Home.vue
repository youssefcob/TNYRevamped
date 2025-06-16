<template>
    <MainOverlay>
        <section id="home">
            <Hero />
        </section>
        <section>
            <!-- <Talents /> -->
        </section>
        <section id="about">
            <AboutUs />
        </section>
        <section>
            <Numbers />
        </section>

        <section>
            <WhatSetsUs />
        </section>
        

        <section id="services">
            <Services />
        </section>
        <section id="jobs">
            <Jobs />
        </section>
        <section id="news">
            <NewsAndEvents />
        </section>
        <section>
            <Clients />
        </section>
        <section>
            <Testimonials />
        </section>
        <section>
            <TeamComp />
        </section>
        <section id="contact">
            <ContactUs />
        </section>
        <section>
            <Map />
        </section>
    </MainOverlay>



    <!-- <Link href="/about" method="get">Click here to go to the about page</Link> -->

    <!-- {{ hero }} -->


</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Hero from '@/Components/Hero/Hero.vue';
import Numbers from '@/Components/Numbers/Numbers.vue';
import Services from '@/Components/Services/Services.vue';
import WhatSetsUs from '@/Components/WhatSetsUs/WhatSetsUs.vue';
import Jobs from '@/Components/Jobs/Jobs.vue';
import NewsAndEvents from '@/Components/News/NewsAndEvents.vue';
import Testimonials from '@/Components/Testimonials/Testimonials.vue';
import TeamComp from '@/Components/Team/Team.vue';
import Clients from '@/Components/Clients/Clients.vue';
import ContactUs from '@/Components/ContactUs/ContactUs.vue';
import AboutUs from '@/Components/AboutUs/AboutUs.vue';
import Map from '@/Components/Map/Map.vue';

import type { Client, Employer, Job, News, Service, Team, Testimonial, Hero as typeHero } from '@/interface/Types.ts';
import { Vue3Snackbar } from "vue3-snackbar";
import { assignClient, assignEmployer, assignHero, assignJob, assignNews, assignService, assignTeam, assignTestimonial } from '@/state/state';
import { onMounted } from 'vue';

import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import user, { Token, User } from '@/mixins/user';
const props = defineProps({
    user: {
        type: Object as () => User,
    },
    token:{
        type: Object as () => Token
    },
    hero: {
        type: Object as () => typeHero[]
    },
    services: {
        type: Object as () => Service[]
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
    if (props.jobs) {
        assignJob(props.jobs);
    }
    if (props.news) {
        assignNews(props.news);
    }
    if (props.clients) {
        assignClient(props.clients);
    }
    if (props.testimonials) {
        assignTestimonial(props.testimonials);
    }
    if (props.team) {
        assignTeam(props.team);
    }
    if( props.user) {
        user.set(props.user);
    }
    if (props.token) {
        user.setToken(props.token);
    }
});
</script>