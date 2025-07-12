<template>
    <MainOverlay>
        <section id="home">
            <Hero />
        </section>
     
        <section id="about">
            <AboutUs />
        </section>
        <section>
            <Numbers />
        </section>
   <section>
            <Talents />
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
import Hero from '@/Components/Home/Hero/Hero.vue';
import Numbers from '@/Components/Home/Numbers/Numbers.vue';
import WhatSetsUs from '@/Components/Home/WhatSetsUs/WhatSetsUs.vue';
import Jobs from '@/Components/Home/Jobs/Jobs.vue';
import NewsAndEvents from '@/Components/Home/News/NewsAndEvents.vue';
import Testimonials from '@/Components/Home/Testimonials/Testimonials.vue';
import Clients from '@/Components/Home/Clients/Clients.vue';
import ContactUs from '@/Components/Home/ContactUs/ContactUs.vue';
import AboutUs from '@/Components/Home/AboutUs/AboutUs.vue';
import Map from '@/Components/Home/Map/Map.vue';

import type { Client, Employer, Job, JobSeeker, News, Service, Team, Testimonial, Hero as typeHero } from '@/interface/Types.ts';
import { Vue3Snackbar } from "vue3-snackbar";
import { assignClient, assignEmployer, assignHero, assignJob, assignNews, assignService, assignTalent, assignTeam, assignTestimonial } from '@/state/state';
import { onMounted } from 'vue';

import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import user, { Token, User } from '@/mixins/user';
import Services from '@/Components/Home/Services/Services.vue';
import TeamComp from '@/Components/Home/Team/Team.vue';
import Talents from '@/Components/Home/Talents/Talents.vue';
const props = defineProps({

    hero: {
        type: Object as () => typeHero[]
    },
    services: {
        type: Object as () => Service[]
    },
    talent : {
        type: Object as () => JobSeeker[]
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
 
    
    if( props.talent) {
        assignTalent(props.talent);
    }
});
</script>