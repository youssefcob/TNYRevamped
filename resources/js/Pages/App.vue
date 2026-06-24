<script setup lang="ts">
import Navbar from '@/Components/HomeV2/NavBarV2.vue';
import Footer from '@/Components/Footer/Foot.vue';
import type { Client, Employer, Job, News, Service, Team, Testimonial, Hero as typeHero } from '@/interface/Types.ts';
// import { Vue3Snackbar } from "vue3-snackbar";
import { assignClient, assignEmployer, assignHero, assignJob, assignNews, assignService, assignTeam, assignTestimonial } from '@/state/state';
import { onMounted } from 'vue';
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
    if (props.testimonials) {
        assignTestimonial(props.testimonials);
    }
    if (props.team) {
        assignTeam(props.team);
    }
});

const checkMobile = () => {
    let onMobile = false;
    if (window.innerWidth < 600) {
        onMobile = true;
    }
    return onMobile;
}


</script>


<template>
    <Navbar/>
    
    <main>
        <router-view></router-view>
    </main>
        <Footer/>
<!-- 
    <vue3-snackbar :iconPresets="{
        path: ` M10 18L8 12L10 6L14 12L10 18Z`
    }" :bottom="!checkMobile()" :top="checkMobile()" :duration="1500" :limit="1" /> -->
</template>

