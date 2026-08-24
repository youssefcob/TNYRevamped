<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { editModeEnabled, setEditMode } from '@/state/state';

const page = usePage();
const isAdmin = computed(() => !!(page.props.auth as any)?.admin);

function toggle() {
    setEditMode(!editModeEnabled.value);
}
</script>

<template>
    <button v-if="isAdmin" type="button" class="admin-edit-toggle" :class="{ 'admin-edit-toggle--active': editModeEnabled }"
        @click="toggle">
        {{ editModeEnabled ? 'Editing: On' : 'Edit Page' }}
    </button>
</template>

<style scoped lang="scss">
.admin-edit-toggle {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 1000;
    padding: 0.75rem 1.25rem;
    border-radius: 999px;
    border: none;
    background: #002147;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

    &--active {
        background: #FF9B37;
        color: #0f2b3d;
    }
}
</style>
