<script setup lang="ts">
import Vacancies from '@/Components/JobSeeker/Home/Vacancies/Vacancies.vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Job, JobSeeker, PaginatedResponse, Vacancy } from '@/interface/Types';
import JobSeekerCard from '@/SharedComponents/JobSeekerCard.vue';
import VacancyCard from '@/SharedComponents/VacancyCard.vue';
import { Link } from '@inertiajs/vue3';
import { onMounted, reactive } from 'vue';
import { watch } from 'vue';
import { router } from '@inertiajs/vue3';
import Paginator from '@/SharedComponents/Paginator.vue';

const props = defineProps({
    vacancies: {
        type: Object as () => PaginatedResponse<Vacancy>,
        required: true
    },
    positions: {
        type: Array as () => Job[],
        required: true
    }
})

const filters = reactive({
    position: '',
    borough: '',
    search: '',
    page: 1
})

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    filters.position = urlParams.get('position') || '';
    filters.borough = urlParams.get('borough') || '';
    filters.search = urlParams.get('search') || '';
    filters.page = parseInt(urlParams.get('page') || '1', 10);
});



let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

watch(
    filters,
    (newFilters) => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const params = new URLSearchParams();
            if (newFilters.position) params.append('position', newFilters.position);
            if (newFilters.borough) params.append('borough', newFilters.borough);
            if (newFilters.search) params.append('search', newFilters.search);
            // if (newFilters.page && newFilters.page !== 1) params.append('page', String(newFilters.page));
            newFilters.page = 1; // Reset to page 1 on filter change
            router.get(`/vacancies?${params.toString()}`, {}, { preserveState: true, replace: true });
        }, 400);
    },
    { deep: true }
);

const goToPage = (page: number) => {
router.get(`/vacancies`, { page }, {
    preserveState: true,
    replace: true
});
};

</script>

<template>
    <MainOverLay>
        <div class="container">
            <h2 class="title">Vacancies</h2>
            <div class="paginator">
            <Paginator :current_page="vacancies.current_page" :last_page="vacancies.last_page" @page-changed="goToPage($event)"/>
            </div>
            <select class="form-select mb-4" v-model="filters.position">
                <option value="">All Positions</option>
                <option v-for="position in positions" :key="position.id" :value="position.title">
                    {{ position.title }}
                </option>
            </select>
            <select class="form-select mb-4" v-model="filters.borough">
                <option value="">All Boroughs</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="Bronx">Bronx</option>
                <option value="Staten Island">Staten Island</option>

            </select>

            <input type="text" class="form-control mb-4" placeholder="Search Vacancies" v-model="filters.search" />
            <!-- {{props.vacancies?.data}} -->
            <VacancyCard v-for="vacancy in props.vacancies.data" :key="vacancy.id" :vacancy="vacancy" />
            
        </div>
    </MainOverLay>

</template>