<script setup lang="ts">
import { ref } from 'vue';
import SingleService from './SingleService.vue';


const services = ref([
    {
        title: 'Outpatient Facilities',
        description: `Partner with Therapy Of New York and experience the benefits of our optimal recruitment solutions. Our team will help you screen candidates, bearing in mind your facility’s values and goals. With Therapy Of New York assistance, your outpatient center will be able to enhance the overall care of your patients.`,
        img: "images/services/outpatientFacilities.png",
        isMain: true
    },
    {
        title: 'Outpatient Facilities',
        description: `Partner with Therapy Of New York and experience the benefits of our optimal recruitment solutions. Our team will help you screen candidates, bearing in mind your facility’s values and goals. With Therapy Of New York assistance, your outpatient center will be able to enhance the overall care of your patients.`,
        img: "images/services/outpatientFacilities.png",
        isMain: true
    },
    {
        title: 'Outpatient Facilities',
        description: `Partner with Therapy Of New York and experience the benefits of our optimal recruitment solutions. Our team will help you screen candidates, bearing in mind your facility’s values and goals. With Therapy Of New York assistance, your outpatient center will be able to enhance the overall care of your patients.`,
        img: "images/services/outpatientFacilities.png",
        isMain: true
    },
])

</script>

<template>
    <div class="container">
        <h1>Services</h1>
        <br>
        <h2>Therapy of New York</h2>
        <p>Your Gateway to Top-tier Talent and Seamless Integration</p>

        <div class="services-wrapper">
            <template v-for="service in services">
                <SingleService v-if="service.isMain" :service="service" />
            </template>
        </div>
        <router-link to="/services" class="more">Show More Services</router-link>
    </div>
</template>

<style scoped lang="scss">
.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    >h1 {
        margin-bottom: 2rem;
        color: $navy;
    }

    >p {
        @extend h2;
        font-weight: 400;
    }

    >h2,
    >p {
        color: $grey;
    }

    .services-wrapper {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .more {
        margin-top: 2rem;
        color: $blue;
        font-weight: 500;
        align-self: flex-end;
    }
}
</style>