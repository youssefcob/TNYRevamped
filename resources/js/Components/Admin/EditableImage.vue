<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed, inject, ref, watch, type CSSProperties } from 'vue';
import { activeEditableField, editModeEnabled } from '@/state/state';
import { snack } from '@/mixins/toast';
import type { PageContentMap } from '@/interface/Types';

defineOptions({ inheritAttrs: false });

const props = defineProps({
    contentKey: { type: String, required: true },
    page: { type: String, required: true },
    defaultSrc: { type: String, required: true },
    defaultObjectFit: { type: String, default: null },
    defaultObjectPosition: { type: String, default: null },
    defaultAlt: { type: String, default: '' },
});

const pageContent = inject<PageContentMap>('pageContent', {});

const src = ref(pageContent[props.contentKey]?.value ?? props.defaultSrc);
const objectFit = ref<string | null>(pageContent[props.contentKey]?.objectFit ?? props.defaultObjectFit);
const objectPosition = ref<string | null>(pageContent[props.contentKey]?.objectPosition ?? props.defaultObjectPosition);
const alt = ref<string | null>(pageContent[props.contentKey]?.alt ?? props.defaultAlt);

// contentKey can change at runtime when a parent reuses the same instance
// for a different underlying field — resync in that case (same pattern as
// EditableText).
watch(() => props.contentKey, () => {
    const entry = pageContent[props.contentKey];
    src.value = entry?.value ?? props.defaultSrc;
    objectFit.value = entry?.objectFit ?? props.defaultObjectFit;
    objectPosition.value = entry?.objectPosition ?? props.defaultObjectPosition;
    alt.value = entry?.alt ?? props.defaultAlt;
});

const inertiaPage = usePage();
const isAdmin = computed(() => !!(inertiaPage.props.auth as any)?.admin);
const canEdit = computed(() => isAdmin.value && editModeEnabled.value);

const computedStyle = computed<CSSProperties>(() => ({
    objectFit: (objectFit.value || undefined) as CSSProperties['objectFit'],
    objectPosition: objectPosition.value || undefined,
}));

const saving = ref(false);

async function saveField() {
    saving.value = true;
    try {
        await window.axios.post('/content/page-content', {
            key: props.contentKey,
            page: props.page,
            value: src.value,
            object_fit: objectFit.value,
            object_position: objectPosition.value,
            alt: alt.value,
        });
        snack.success('Saved.');
    } catch (e) {
        snack.error('Failed to save image settings.');
    } finally {
        saving.value = false;
    }
}

async function uploadFile(file: File) {
    saving.value = true;
    try {
        const form = new FormData();
        form.append('key', props.contentKey);
        form.append('page', props.page);
        form.append('image', file);

        const { data } = await window.axios.post('/content/page-image', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        src.value = data.response.data.value;
        snack.success('Image updated.');
    } catch (e) {
        snack.error('Failed to upload image.');
    } finally {
        saving.value = false;
    }
}

const fieldEl = ref<HTMLImageElement | null>(null);

function onClick(event: MouseEvent) {
    if (!canEdit.value) return;
    event.preventDefault();

    const rect = fieldEl.value?.getBoundingClientRect();
    activeEditableField.value = {
        kind: 'image',
        key: props.contentKey,
        page: props.page,
        objectFit: objectFit.value,
        objectPosition: objectPosition.value,
        alt: alt.value,
        rect: rect ? { top: rect.top, left: rect.left } : { top: 0, left: 0 },
        setObjectFit: (value) => {
            objectFit.value = value;
            if (activeEditableField.value) activeEditableField.value.objectFit = value;
            saveField();
        },
        setObjectPosition: (value) => {
            objectPosition.value = value;
            if (activeEditableField.value) activeEditableField.value.objectPosition = value;
            saveField();
        },
        setAlt: (value) => {
            alt.value = value;
            if (activeEditableField.value) activeEditableField.value.alt = value;
            saveField();
        },
        setImageFile: (file) => {
            uploadFile(file);
        },
    };
}
</script>

<template>
    <img ref="fieldEl" v-bind="$attrs" :src="src" :alt="alt ?? ''" :class="{ 'editable-image': canEdit }" :style="computedStyle"
        @click="onClick" />
</template>

<style scoped lang="scss">
.editable-image {
    outline: 2px dashed transparent;
    cursor: pointer;
    transition: outline-color 0.15s;

    &:hover {
        outline-color: rgba(255, 155, 55, 0.8);
    }
}
</style>
