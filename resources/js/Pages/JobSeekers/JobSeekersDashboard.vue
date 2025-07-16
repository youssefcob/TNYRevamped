<script setup lang="ts">
import JobSeekers from '@/Components/Dashboard/Employer/JobSeekers.vue';
import JobSeekerVacancies from '@/Components/Dashboard/Employer/Vacancies.vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Application, Employer, User, Vacancy } from '@/interface/Types';
import VacancyCard from '@/SharedComponents/VacancyCard.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';



const props = defineProps({

    vacancies: {
        type: Array as () => Vacancy[],
        default: () => []
    },
    bids: {
        type: Array as () => any[],
        default: () => []
    },
    snack: {
        type: Object as () => { type: string, message: string } | null,
        default: null
    },
    applications: {
        type: Array as () => Application[],
        default: () => []
    }

});

console.log(props.applications)

const path = window.location.pathname.split('/').pop();



</script>

<template>

    <MainOverLay>
        <div class="container">

            <h1 class="title">Dashboard</h1>
            <br>
            <br>
            <br>
            <ul class="nav">
                <li>
                    <Link href="/dashboard/applications" :class="{ active: path === 'applications' }">
                    Applications
                    </Link>
                </li>
                <li>
                    <!-- <Link href="/dashboard/bids" :class="{ active: path === 'bids' }">Bids</Link> -->
                </li>
            </ul>

            <br>
            <br>
            <div class="vacancies-wrapper">
            <VacancyCard  v-for="application in applications" :vacancy="application.vacancy" applied :applicationStatus="application.status" ></VacancyCard>
            </div>
            <!-- <JobSeekerVacancies :applications="applications.map(a=>a.vacancy)" /> -->
            <!-- <EmployerVacancies v-if="path === 'vacancies'" :vacancies="vacancies" />
            <JobSeekers v-else-if="path === 'bids'" :bids="bids" /> -->

        </div>



    </MainOverLay>
</template>
<style scoped lang="scss">
.container {
    // align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 4vh;
    @include pagePadding();
    min-height: 50vh;

    .title {
        margin: 0 auto;
    }

    .nav {
        display: flex;
        gap: 2rem;

        >li {
                list-style-type: none;

            >a {
                padding: 0.5rem 1rem;
                background-color: $undefined-grey;
                border: 1px solid black;
                border-radius: 2rem;
                color: black;
                text-decoration: none;
                    transition: all 0.3s ease-in-out;

                &:hover, &.active {
                    background-color: $grey;
                    color: white;
                    transition: all 0.3s ease-in-out;
                }

            }
        }
    }
    .vacancies-wrapper > * {
        margin-top:1rem;
    }
}
</style>