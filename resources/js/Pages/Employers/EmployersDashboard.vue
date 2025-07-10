<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Employer, User, Vacancy } from '@/interface/Types';
import EmployerVacancyCard from '@/SharedComponents/EmployerVacancyCard.vue';

const props = defineProps({
    user: {
        type: Object as () => User,
        required: true
    },
    employer: {
        type: Object as () => Employer,
        required: true
    },
    vacancies: {
        type: Array as () => Vacancy[],
        default: () => []
    }
});

</script>

<template>
    <MainOverLay>
        <div class="container">

            <h1 class="title">Dashboard</h1>
            <br>
            <br>
            <EmployerVacancyCard
                v-for="vacancy in vacancies"
                :key="vacancy.id"
                :vacancy="vacancy"
            ></EmployerVacancyCard>
        </div>

        {{ user }}

        <br>

        {{ employer }}

        <br>

        {{ vacancies }}

    </MainOverLay>
</template>
<style scoped lang="scss">

.container {
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top:3vh;
}
</style>