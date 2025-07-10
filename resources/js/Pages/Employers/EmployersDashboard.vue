<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Employer, User, Vacancy } from '@/interface/Types';

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

        {{ user }}

        <br>

        {{ employer }}

        <br>

        {{ vacancies }}

    </MainOverLay>
</template>