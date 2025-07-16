<script setup lang="ts">
import { Vacancy } from '@/interface/Types';
import { snack } from '@/mixins/toast';
import Btn from '@/SharedComponents/btn.vue';
import Modal from '@/SharedComponents/modal.vue';
import VacancyCard from '@/SharedComponents/VacancyCard.vue';
import axios, { AxiosError } from 'axios';
import { ref } from 'vue';


const props = defineProps({
    vacancies: {
        type: Array as () => Vacancy[],
        default: () => []
    }
});
const vacanciesState = ref<Vacancy[]>(props.vacancies);

const editableVacancy = ref<Vacancy | null>(null);

const deletableVacancy = ref<Vacancy | null>(null);

const editModal = ref<InstanceType<typeof Modal> | null>(null);
const deleteModal = ref<InstanceType<typeof Modal> | null>(null);

const deleteLoading = ref(false);

const openEditModal = (vacancyId: number) => {
    editableVacancy.value = vacanciesState.value.find(v => v.id === vacancyId) || null;
    if (editableVacancy.value) {
        editModal.value?.openModal();
    }
};
const openDeleteModal = (vacancyId: number) => {
    // Handle delete logic here
    deletableVacancy.value = vacanciesState.value.find(v => v.id === vacancyId) || null;
    if (deletableVacancy.value) {
        deleteModal.value?.openModal();
    }
};

const deleteVacancy = async (vacancyId: number | undefined) => {
    if (!vacancyId) return;
    if (!deletableVacancy.value) return;

    deleteLoading.value = true;
    try {
        // Send DELETE request to API
        const token = localStorage.getItem('token');
        await axios.delete(`/api/vacancies/delete/${vacancyId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        vacanciesState.value = vacanciesState.value.filter(v => v.id !== vacancyId);
        deletableVacancy.value = null;
        deleteModal.value?.closeModal();
    } catch (error: AxiosError | any) {
        console.error('Error deleting vacancy:', error);
        deleteModal.value?.closeModal();
        snack.error('Failed to delete vacancy. Please try again.');
    } finally {
        deleteLoading.value = false;
    }
};
</script>
<template>
    <Modal ref="deleteModal">

        <div class="delete-wrapper">
            {{ deletableVacancy?.position.title }} - Delete Vacancy
            <p>Are you sure you want to delete this vacancy?</p>
            <Btn :loading="deleteLoading" class="btn delete" @click="deleteVacancy(deletableVacancy?.id)">Delete</Btn>
        </div>
    </Modal>

    <div class="vacancies-wrapper">
                <VacancyCard v-for="vacancy in vacanciesState" :key="vacancy.id" :vacancy="vacancy" employer
                    @edit="openEditModal($event)" @delete="openDeleteModal($event)"></VacancyCard>
            </div>
</template>