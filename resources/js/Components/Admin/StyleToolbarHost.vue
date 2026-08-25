<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { activeEditableField, setActiveEditableField } from '@/state/state';
import { FEATURES } from '@/config/features';
import type { TextStyle } from '@/interface/Types';

const TAG_OPTIONS = ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'a'];
const TAG_LABELS: Record<string, string> = { a: 'Link' };
const OBJECT_FIT_OPTIONS = ['cover', 'contain', 'fill', 'none'];
const POSITION_GRID = [
    { value: 'left top', label: '↖' },
    { value: 'top', label: '↑' },
    { value: 'right top', label: '↗' },
    { value: 'left', label: '←' },
    { value: 'center', label: '•' },
    { value: 'right', label: '→' },
    { value: 'left bottom', label: '↙' },
    { value: 'bottom', label: '↓' },
    { value: 'right bottom', label: '↘' },
];

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
    activeEditableField.value?.setStyleId?.(val ? Number(val) : null);
}

function onTagChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    activeEditableField.value?.setTag?.(val || null);
}

function onHrefChange(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    activeEditableField.value?.setHref?.(val || null);
}

function onTargetChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    activeEditableField.value?.setTarget?.(val || null);
}

function onObjectFitChange(e: Event) {
    const val = (e.target as HTMLSelectElement).value;
    activeEditableField.value?.setObjectFit?.(val || null);
}

function onPositionPick(value: string) {
    activeEditableField.value?.setObjectPosition?.(value);
}

function onAltChange(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    activeEditableField.value?.setAlt?.(val || null);
}

const fileInput = ref<HTMLInputElement | null>(null);

function triggerFilePicker() {
    fileInput.value?.click();
}

function onFileChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) activeEditableField.value?.setImageFile?.(file);
    (e.target as HTMLInputElement).value = '';
}

function onDocClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    // A click on any editable field is handled by that field's own click
    // handler (it may be opening a different field, or re-opening this one)
    // — don't fight it here.
    if (target.closest('.editable-text') || target.closest('.editable-image')) return;
    if (target.closest('.style-toolbar-host')) return;
    setActiveEditableField(null);
}

// Listens on 'click' rather than 'mousedown': clicking outside the toolbar
// also blurs whatever toolbar input was focused (e.g. the href field), and
// that blur's 'change' handler must run before we null out
// activeEditableField, or the pending edit is silently dropped. Blur/change
// fire as part of the mousedown's default focus shift — before 'click' — so
// 'click' is the first point where it's safe to close.
onMounted(() => document.addEventListener('click', onDocClick));
onUnmounted(() => document.removeEventListener('click', onDocClick));
</script>

<template>
    <div v-if="activeEditableField" class="style-toolbar-host" :style="pos">
        <template v-if="activeEditableField.kind === 'text'">
            <select v-if="FEATURES.textStyles" class="style-toolbar-host__select" :value="activeEditableField.styleId ?? ''" @change="onStyleChange">
                <option value="">Default style</option>
                <option v-for="s in textStyles" :key="s.id" :value="s.id">{{ s.name }}</option>
            </select>
            <select class="style-toolbar-host__select" :value="activeEditableField.tag ?? ''" @change="onTagChange">
                <option value="">Default tag</option>
                <option v-for="t in TAG_OPTIONS" :key="t" :value="t">{{ TAG_LABELS[t] ?? t.toUpperCase() }}</option>
            </select>

            <template v-if="activeEditableField.tag === 'a'">
                <label class="style-toolbar-host__alt">
                    Link URL
                    <input type="text" placeholder="https://... or /apply" :value="activeEditableField.href ?? ''"
                        @change="onHrefChange" />
                </label>
                <select class="style-toolbar-host__select" :value="activeEditableField.target ?? ''" @change="onTargetChange">
                    <option value="">Same tab</option>
                    <option value="_blank">New tab</option>
                </select>
            </template>
        </template>

        <template v-else>
            <button type="button" class="style-toolbar-host__btn" @click="triggerFilePicker">Replace Image</button>
            <input ref="fileInput" type="file" accept="image/*" class="style-toolbar-host__file-input" @change="onFileChange" />

            <select class="style-toolbar-host__select" :value="activeEditableField.objectFit ?? ''" @change="onObjectFitChange">
                <option value="">Default fit</option>
                <option v-for="f in OBJECT_FIT_OPTIONS" :key="f" :value="f">{{ f }}</option>
            </select>

            <div class="style-toolbar-host__grid">
                <button v-for="cell in POSITION_GRID" :key="cell.value" type="button" class="style-toolbar-host__grid-cell"
                    :class="{ 'style-toolbar-host__grid-cell--active': activeEditableField.objectPosition === cell.value }"
                    :title="cell.value" @click="onPositionPick(cell.value)">{{ cell.label }}</button>
            </div>

            <label class="style-toolbar-host__alt">
                Alt text
                <input type="text" maxlength="255" placeholder="Describe this image for SEO"
                    :value="activeEditableField.alt ?? ''" @change="onAltChange" />
            </label>
        </template>
    </div>
</template>

<style scoped lang="scss">
.style-toolbar-host {
    position: fixed;
    z-index: 2000;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem;
    max-width: 18rem;
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

    &__btn {
        font-size: 0.85rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: #ff9b37;
        color: #0f2b3d;
        font-weight: 600;
        cursor: pointer;
    }

    &__file-input {
        display: none;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1.5rem);
        grid-template-rows: repeat(3, 1.5rem);
        gap: 2px;
    }

    &__grid-cell {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        border-radius: 0.25rem;
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: #16344a;
        color: #fff;
        cursor: pointer;

        &--active {
            background: #ff9b37;
            color: #0f2b3d;
        }
    }

    &__alt {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        gap: 0.25rem;
        font-size: 0.8rem;
        color: #fff;

        input {
            width: 100%;
            font-size: 0.85rem;
            padding: 0.25rem 0.375rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: #16344a;
            color: #fff;
        }
    }
}
</style>
