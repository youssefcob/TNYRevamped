<script setup lang="ts">
import Clients from '@/Components/Home/Clients/Clients.vue';
import ContactUs from '@/Components/Home/ContactUs/ContactUs.vue';
import Hero from '@/Components/Home/Hero/Hero.vue';
import Jobs from '@/Components/Home/Jobs/Jobs.vue';
import Map from '@/Components/Home/Map/Map.vue';
import NewsAndEvents from '@/Components/Home/News/NewsAndEvents.vue';
import Team from '@/Components/Home/Team/Team.vue';
import Testimonials from '@/Components/Home/Testimonials/Testimonials.vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Client, Hero as HeroType, Job, JobSeeker, News, Service, Team as TeamType, Testimonial, User } from '@/interface/Types';
import user, { Token } from '@/mixins/user';
import { assignClient, assignHero, assignJob, assignNews, assignService, assignTalent, assignTeam, assignTestimonial } from '@/state/state';
import { onMounted } from 'vue';
import WhatSetsUs from '@/Components/Home/WhatSetsUs/WhatSetsUs.vue';
import Numbers from '@/Components/Home/Numbers/Numbers.vue';
import AboutUs from '@/Components/Home/AboutUs/AboutUs.vue';
import Services from '@/Components/Home/Services/Services.vue';


const props = defineProps({
    user: {
        type: Object as () => User,
    },
    token: {
        type: Object as () => Token
    },
    hero: {
        type: Object as () => HeroType[]
    },
    services: {
        type: Object as () => Service[]
    },
    talent: {
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
        type: Object as () => TeamType[]
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
    if (props.user) {
        user.set(props.user);
    }
    if (props.token) {
        user.setToken(props.token);
    }
    if (props.talent) {
        assignTalent(props.talent);
    }
});
</script>

<template>
    <MainOverLay>
        <section id="home">
            <Hero />
        </section>

        <section id="about">
            <AboutUs />
        </section>
        <section>
            <Numbers />
        </section>
        <!-- <section> -->
            <!-- <Talents /> -->
        <!-- </section> -->
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
            <Team />
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
