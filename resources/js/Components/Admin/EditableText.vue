<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed, inject, ref, watch } from 'vue';
import { editModeEnabled } from '@/state/state';
import { snack } from '@/mixins/toast';

const props = defineProps({
    contentKey: { type: String, required: true },
    page: { type: String, required: true },
    tag: { type: String, default: 'span' },
    default: { type: String, default: '' },
});

const pageContent = inject<Record<string, string | null>>('pageContent', {});

const text = ref(pageContent[props.contentKey] ?? props.default);

// contentKey/default can change at runtime when a parent reuses the same
// EditableText instance for a different underlying field (e.g. a carousel
// swapping which item is "active") — resync in that case.
watch(() => props.contentKey, () => {
    text.value = pageContent[props.contentKey] ?? props.default;
});

const inertiaPage = usePage();
const isAdmin = computed(() => !!(inertiaPage.props.auth as any)?.admin);
const canEdit = computed(() => isAdmin.value && editModeEnabled.value);

const saving = ref(false);

function onClick(event: MouseEvent) {
    if (canEdit.value) {
        event.preventDefault();
    }
}

async function onBlur(event: FocusEvent) {
    if (!canEdit.value) return;

    const newValue = (event.target as HTMLElement).innerText.trim();
    if (newValue === text.value) return;

    text.value = newValue;
    saving.value = true;
    try {
        await window.axios.post('/content/page-content', {
            key: props.contentKey,
            page: props.page,
            value: newValue,
        });
        snack.success('Saved.');
    } catch (e) {
        snack.error('Failed to save content.');
    } finally {
        saving.value = false;
    }
}
</script>

<template>
    <component :is="tag" :contenteditable="canEdit" :class="{ 'editable-text': canEdit }" @blur="onBlur"
        @click="onClick">{{ text }}</component>
</template>

<style scoped lang="scss">
.editable-text {
    outline: 1px dashed transparent;
    cursor: text;
    transition: outline-color 0.15s;

    &:hover,
    &:focus {
        outline-color: rgba(255, 155, 55, 0.8);
    }
}
</style>
