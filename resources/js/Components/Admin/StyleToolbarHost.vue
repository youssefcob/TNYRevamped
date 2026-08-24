<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed, onMounted, onUnmounted } from 'vue';
import { activeEditableField, setActiveEditableField } from '@/state/state';
import type { TextStyle } from '@/interface/Types';

const TAG_OPTIONS = ['h1', 'h2', 'h3', 'h4', 'p', 'span'];

const inertiaPage = usePage();
const textStyles = computed(() => ((inertiaPage.props.textStyles as TextStyle[]) ?? []));

const pos = computed(() => {
    const f = activeEditableField.value;
    if (!f) return { top: '0px', left: '0px' };
    return {
        top: `${Math.max(8, f.rect.top - 48)}px`,
        left: `${Math.max(8, Math.min(f.rect.left, window.innerWidth - 260))}px`,
    };
});

function onStyleChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    activeEditableField.value?.setStyleId(val ? Number(val) : null);
}

function onTagChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    activeEditableField.value?.setTag(val || null);
}

function onDocMouseDown(e: MouseEvent) {
    const target = e.target as HTMLElement;
    // A click on any editable field is handled by that field's own click
    // handler (it may be opening a different field, or re-opening this one)
    // — don't fight it here.
    if (target.closest('.editable-text')) return;
    if (target.closest('.style-toolbar-host')) return;
    setActiveEditableField(null);
}

onMounted(() => document.addEventListener('mousedown', onDocMouseDown));
onUnmounted(() => document.removeEventListener('mousedown', onDocMouseDown));
</script>

<template>
    <div v-if="activeEditableField" class="style-toolbar-host" :style="pos">
        <select class="style-toolbar-host__select" :value="activeEditableField.styleId ?? ''" @change="onStyleChange">
            <option value="">Default style</option>
            <option v-for="s in textStyles" :key="s.id" :value="s.id">{{ s.name }}</option>
        </select>
        <select class="style-toolbar-host__select" :value="activeEditableField.tag ?? ''" @change="onTagChange">
            <option value="">Default tag</option>
            <option v-for="t in TAG_OPTIONS" :key="t" :value="t">{{ t.toUpperCase() }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.style-toolbar-host {
    position: fixed;
    z-index: 2000;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    background: #0f2b3d;
    border-radius: 0.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

    &__select {
        font-size: 0.85rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: #16344a;
        color: #fff;
    }
}
</style>
