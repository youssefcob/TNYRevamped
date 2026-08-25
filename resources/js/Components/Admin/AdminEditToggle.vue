<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { editModeEnabled, setEditMode } from '@/state/state';
import { FEATURES } from '@/config/features';

const page = usePage();
const isAdmin = computed(() => !!(page.props.auth as any)?.admin);
const canToggleEditMode = computed(() => FEATURES.textEditing || FEATURES.imageEditing);

function toggle() {
    setEditMode(!editModeEnabled.value);
}
</script>

<template>
    <div v-if="isAdmin" class="admin-edit-toolbar">
        <Link v-if="FEATURES.textStyles" href="/admin/text-styles" class="admin-edit-toolbar__link">Manage Styles</Link>
        <Link v-if="FEATURES.metaTags" href="/admin/meta-tags" class="admin-edit-toolbar__link">Manage Meta Tags</Link>
        <Link v-if="FEATURES.sitemap" href="/admin/sitemap" class="admin-edit-toolbar__link">Manage Sitemap</Link>
        <button v-if="canToggleEditMode" type="button" class="admin-edit-toggle" :class="{ 'admin-edit-toggle--active': editModeEnabled }"
            @click="toggle">
            {{ editModeEnabled ? 'Editing: On' : 'Edit Page' }}
        </button>
    </div>
</template>

<style scoped lang="scss">
.admin-edit-toolbar {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.admin-edit-toolbar__link {
    padding: 0.75rem 1.25rem;
    border-radius: 999px;
    background: #16344a;
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.admin-edit-toggle {
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
