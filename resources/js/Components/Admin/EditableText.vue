<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed, inject, ref, watch } from 'vue';
import { activeEditableField, editModeEnabled } from '@/state/state';
import { snack } from '@/mixins/toast';
import { FEATURES } from '@/config/features';
import type { PageContentMap, TextStyle } from '@/interface/Types';

defineOptions({ inheritAttrs: false });

const props = defineProps({
    contentKey: { type: String, required: true },
    page: { type: String, required: true },
    tag: { type: String, default: 'span' },
    default: { type: String, default: '' },
});

const FONT_STACKS: Record<string, string> = {
    heading: "'Montserrat', sans-serif",
    body: "'Poppins', sans-serif",
    switzer: "'Switzer', sans-serif",
};

const pageContent = inject<PageContentMap>('pageContent', {});

const text = ref(pageContent[props.contentKey]?.value ?? props.default);
const styleId = ref<number | null>(pageContent[props.contentKey]?.textStyleId ?? null);
const tagOverride = ref<string | null>(pageContent[props.contentKey]?.tag ?? null);

// contentKey/default can change at runtime when a parent reuses the same
// EditableText instance for a different underlying field (e.g. a carousel
// swapping which item is "active") — resync in that case.
watch(() => props.contentKey, () => {
    const entry = pageContent[props.contentKey];
    text.value = entry?.value ?? props.default;
    styleId.value = entry?.textStyleId ?? null;
    tagOverride.value = entry?.tag ?? null;
});

const inertiaPage = usePage();
const isAdmin = computed(() => !!(inertiaPage.props.auth as any)?.admin);
const canEdit = computed(() => isAdmin.value && editModeEnabled.value && FEATURES.textEditing);

const textStyles = computed(() => ((inertiaPage.props.textStyles as TextStyle[]) ?? []));
const activeStyle = computed(() => textStyles.value.find((s) => s.id === styleId.value) ?? null);

const resolvedStyle = computed(() => {
    if (!FEATURES.textStyles) return {};
    const s = activeStyle.value;
    if (!s) return {};
    return {
        fontFamily: s.font_family !== 'inherit' ? FONT_STACKS[s.font_family] : undefined,
        fontWeight: s.font_weight,
        fontStyle: s.italic ? 'italic' : undefined,
        textDecoration: s.underline ? 'underline' : undefined,
        color: s.color || undefined,
        lineHeight: s.line_height || undefined,
        fontSize: `clamp(${s.min_font_size}rem, ${s.font_size_vw}vw, ${s.max_font_size}rem)`,
    };
});

const effectiveTag = computed(() => tagOverride.value || props.tag);

const saving = ref(false);

async function saveField() {
    saving.value = true;
    try {
        await window.axios.post('/content/page-content', {
            key: props.contentKey,
            page: props.page,
            value: text.value,
            text_style_id: styleId.value,
            tag: tagOverride.value,
        });
        snack.success('Saved.');
    } catch (e) {
        snack.error('Failed to save content.');
    } finally {
        saving.value = false;
    }
}

const fieldEl = ref<HTMLElement | null>(null);

function onClick(event: MouseEvent) {
    if (!canEdit.value) return;
    event.preventDefault();

    const rect = fieldEl.value?.getBoundingClientRect();
    activeEditableField.value = {
        kind: 'text',
        key: props.contentKey,
        page: props.page,
        styleId: styleId.value,
        tag: tagOverride.value,
        rect: rect ? { top: rect.top, left: rect.left } : { top: 0, left: 0 },
        setStyleId: (id) => {
            styleId.value = id;
            if (activeEditableField.value) activeEditableField.value.styleId = id;
            saveField();
        },
        setTag: (t) => {
            tagOverride.value = t;
            if (activeEditableField.value) activeEditableField.value.tag = t;
            saveField();
        },
    };
}

async function onBlur(event: FocusEvent) {
    if (!canEdit.value) return;

    const newValue = (event.target as HTMLElement).innerText.trim();
    if (newValue === text.value) return;

    text.value = newValue;
    await saveField();
}
</script>

<template>
    <component :is="effectiveTag" ref="fieldEl" v-bind="$attrs" :contenteditable="canEdit"
        :class="{ 'editable-text': canEdit }" :style="resolvedStyle" @blur="onBlur" @click="onClick">{{ text }}</component>
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
