<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Job, JobSeeker, PaginatedResponse } from '@/interface/Types';
import JobSeekerCard from '@/SharedComponents/JobSeekerCard.vue';
import Paginator from '@/SharedComponents/Paginator.vue';
import { Link, router } from '@inertiajs/vue3';
import { onMounted, reactive, watch } from 'vue';


const props = defineProps({
    job_seekers: {
        type: Object as () => PaginatedResponse<JobSeeker>,
        required: true
    },
    positions: {
        type: Array as () => Job[],
        required: true
    }
})

const goToPage = (page: number) => {
    router.get(`/talents`, { page }, {
        preserveState: true,
        replace: true
    });
};

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
            router.get(`/talents?${params.toString()}`, {}, { preserveState: true, replace: true });
        }, 400);
    },
    { deep: true }
);
</script>

<template>
    <MainOverLay>
        <div class="container">
            <h2 class="title">Talents</h2>
            <br>

            <div class="paginator">
                <Paginator :current_page="job_seekers.current_page" :last_page="job_seekers.last_page"
                    @page-changed="goToPage($event)" />
            </div>
            <div class="filters-container">

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
            </div>
            <JobSeekerCard v-for="talent in props.job_seekers.data" :key="talent.id" :jobSeeker="talent" />
            <div class="paginator">
                <Paginator :current_page="job_seekers.current_page" :last_page="job_seekers.last_page"
                    @page-changed="goToPage($event)" />
            </div>
        </div>
    </MainOverLay>

</template>
<style scoped lang="scss">
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    @include pagePadding;

    .title,
    .paginator {
        margin: auto;
    }
}
</style>