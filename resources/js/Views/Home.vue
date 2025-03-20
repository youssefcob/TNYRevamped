<template>
    <section id="home">
        <Hero />
    </section>
    <section id="about">
        <AboutUs />
    </section>
    <section>
        <Numbers />
    </section>
    <section id="services">
        <Services />
    </section>
    <section>
        <WhatSetsUs />
    </section>
    <section id="employers">
        <Employers />
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



    <!-- <Link href="/about" method="get">Click here to go to the about page</Link> -->

    <!-- {{ hero }} -->


</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
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
import ContactUs from '@/Components/ContactUs/ContactUs.vue';
import AboutUs from '@/Components/AboutUs/AboutUs.vue';
import Map from '@/Components/Map/Map.vue';





</script>