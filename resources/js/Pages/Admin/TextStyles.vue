<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { snack } from '@/mixins/toast';
import type { TextStyle } from '@/interface/Types';

const props = defineProps<{ styles: TextStyle[] }>();

const styles = ref<TextStyle[]>([...props.styles]);

const FONT_FAMILIES = ['heading', 'body', 'switzer', 'inherit'] as const;
const FONT_WEIGHTS = [400, 500, 600, 700] as const;

const FONT_STACKS: Record<string, string> = {
    heading: "'Montserrat', sans-serif",
    body: "'Poppins', sans-serif",
    switzer: "'Switzer', sans-serif",
    inherit: 'inherit',
};

type FormState = {
    name: string;
    font_family: typeof FONT_FAMILIES[number];
    font_weight: typeof FONT_WEIGHTS[number];
    italic: boolean;
    underline: boolean;
    hasColor: boolean;
    color: string;
    min_font_size: number;
    max_font_size: number;
    font_size_vw: number;
    hasLineHeight: boolean;
    line_height: number;
};

function blankForm(): FormState {
    return {
        name: '',
        font_family: 'inherit',
        font_weight: 400,
        italic: false,
        underline: false,
        hasColor: false,
        color: '#222222',
        min_font_size: 1,
        max_font_size: 1.5,
        font_size_vw: 1.5,
        hasLineHeight: false,
        line_height: 1.4,
    };
}

const editingId = ref<number | null>(null);
const saving = ref(false);
const form = reactive<FormState>(blankForm());

const previewStyle = computed(() => ({
    fontFamily: FONT_STACKS[form.font_family],
    fontWeight: form.font_weight,
    fontStyle: form.italic ? 'italic' : 'normal',
    textDecoration: form.underline ? 'underline' : 'none',
    color: form.hasColor ? form.color : undefined,
    lineHeight: form.hasLineHeight ? form.line_height : undefined,
    fontSize: `clamp(${form.min_font_size}rem, ${form.font_size_vw}vw, ${form.max_font_size}rem)`,
}));

function startCreate() {
    editingId.value = null;
    Object.assign(form, blankForm());
}

function startEdit(style: TextStyle) {
    editingId.value = style.id;
    Object.assign(form, {
        name: style.name,
        font_family: style.font_family,
        font_weight: style.font_weight,
        italic: style.italic,
        underline: style.underline,
        hasColor: !!style.color,
        color: style.color ?? '#222222',
        min_font_size: style.min_font_size,
        max_font_size: style.max_font_size,
        font_size_vw: style.font_size_vw,
        hasLineHeight: style.line_height !== null,
        line_height: style.line_height ?? 1.4,
    });
}

async function save() {
    saving.value = true;
    const payload = {
        name: form.name,
        font_family: form.font_family,
        font_weight: form.font_weight,
        italic: form.italic,
        underline: form.underline,
        color: form.hasColor ? form.color : null,
        min_font_size: form.min_font_size,
        max_font_size: form.max_font_size,
        font_size_vw: form.font_size_vw,
        line_height: form.hasLineHeight ? form.line_height : null,
    };

    try {
        if (editingId.value) {
            const { data } = await window.axios.put(`/content/text-styles/${editingId.value}`, payload);
            const updated: TextStyle = data.response.data;
            const idx = styles.value.findIndex((s) => s.id === updated.id);
            if (idx !== -1) styles.value[idx] = updated;
        } else {
            const { data } = await window.axios.post('/content/text-styles', payload);
            styles.value.push(data.response.data as TextStyle);
        }
        snack.success('Text style saved.');
        startCreate();
    } catch (e: any) {
        snack.error(e?.response?.data?.response?.message || 'Failed to save text style.');
    } finally {
        saving.value = false;
    }
}

async function remove(style: TextStyle) {
    if (!confirm(`Delete the "${style.name}" text style? Any text using it will fall back to its default look.`)) {
        return;
    }
    try {
        await window.axios.delete(`/content/text-styles/${style.id}`);
        styles.value = styles.value.filter((s) => s.id !== style.id);
        if (editingId.value === style.id) startCreate();
        snack.success('Text style deleted.');
    } catch (e) {
        snack.error('Failed to delete text style.');
    }
}
</script>

<template>
    <MainOverLay>
        <div class="text-styles">
            <h1 class="text-styles__title">Manage Text Styles</h1>
            <p class="text-styles__subtitle">
                Named text styles admins can assign to any editable field on the site. Editing a style here updates
                every field that uses it.
            </p>

            <div class="text-styles__layout">
                <form class="text-styles__form" @submit.prevent="save">
                    <h2>{{ editingId ? 'Edit Style' : 'New Style' }}</h2>

                    <label>
                        Name
                        <input v-model="form.name" type="text" required placeholder="e.g. Heading 1" />
                    </label>

                    <label>
                        Font family
                        <select v-model="form.font_family">
                            <option v-for="f in FONT_FAMILIES" :key="f" :value="f">{{ f }}</option>
                        </select>
                    </label>

                    <label>
                        Font weight
                        <select v-model.number="form.font_weight">
                            <option v-for="w in FONT_WEIGHTS" :key="w" :value="w">{{ w }}</option>
                        </select>
                    </label>

                    <div class="text-styles__row">
                        <label class="text-styles__checkbox">
                            <input v-model="form.italic" type="checkbox" /> Italic
                        </label>
                        <label class="text-styles__checkbox">
                            <input v-model="form.underline" type="checkbox" /> Underline
                        </label>
                    </div>

                    <label class="text-styles__checkbox">
                        <input v-model="form.hasColor" type="checkbox" /> Override color
                    </label>
                    <label v-if="form.hasColor">
                        <input v-model="form.color" type="color" />
                    </label>

                    <div class="text-styles__row">
                        <label>
                            Min size (rem)
                            <input v-model.number="form.min_font_size" type="number" step="0.125" min="0.5" max="6" />
                        </label>
                        <label>
                            Max size (rem)
                            <input v-model.number="form.max_font_size" type="number" step="0.125" min="0.5" max="6" />
                        </label>
                        <label>
                            Fluid slope (vw)
                            <input v-model.number="form.font_size_vw" type="number" step="0.1" min="0" max="10" />
                        </label>
                    </div>

                    <label class="text-styles__checkbox">
                        <input v-model="form.hasLineHeight" type="checkbox" /> Override line height
                    </label>
                    <label v-if="form.hasLineHeight">
                        <input v-model.number="form.line_height" type="number" step="0.05" min="0.8" max="3" />
                    </label>

                    <div class="text-styles__preview">
                        <span class="text-styles__preview-label">Preview</span>
                        <p :style="previewStyle">The quick brown fox jumps over the lazy dog</p>
                    </div>

                    <div class="text-styles__actions">
                        <button type="submit" :disabled="saving">{{ editingId ? 'Save Changes' : 'Create Style' }}</button>
                        <button v-if="editingId" type="button" class="text-styles__cancel" @click="startCreate">Cancel</button>
                    </div>
                </form>

                <div class="text-styles__list">
                    <h2>Existing Styles</h2>
                    <p v-if="styles.length === 0" class="text-styles__empty">No text styles yet.</p>
                    <table v-else>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Family</th>
                                <th>Weight</th>
                                <th>Size range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="style in styles" :key="style.id">
                                <td>{{ style.name }}</td>
                                <td>{{ style.font_family }}</td>
                                <td>{{ style.font_weight }}</td>
                                <td>{{ style.min_font_size }}rem – {{ style.max_font_size }}rem</td>
                                <td class="text-styles__row-actions">
                                    <button type="button" @click="startEdit(style)">Edit</button>
                                    <button type="button" class="text-styles__delete" @click="remove(style)">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </MainOverLay>
</template>

<style scoped lang="scss">
.text-styles {
    max-width: 75rem;
    margin: 0 auto;
    padding: 2rem;

    &__title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    &__subtitle {
        color: #6b7280;
        margin-bottom: 2rem;
    }

    &__layout {
        display: grid;
        grid-template-columns: 22rem 1fr;
        gap: 2rem;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1.5rem;
        background: rgba(0, 0, 0, 0.02);
        border-radius: 0.75rem;

        label {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.9rem;
        }

        input,
        select {
            padding: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.375rem;
        }
    }

    &__row {
        display: flex;
        gap: 1rem;
    }

    &__checkbox {
        flex-direction: row !important;
        align-items: center;
        gap: 0.5rem !important;
    }

    &__preview {
        padding: 1rem;
        border: 1px dashed rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;

        &-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #6b7280;
        }
    }

    &__actions {
        display: flex;
        gap: 0.5rem;

        button {
            padding: 0.625rem 1.25rem;
            border-radius: 0.375rem;
            border: none;
            background: #0f2b3d;
            color: #fff;
            cursor: pointer;

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    }

    &__cancel {
        background: transparent !important;
        color: #0f2b3d !important;
        border: 1px solid rgba(0, 0, 0, 0.2) !important;
    }

    &__list {
        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            text-align: left;
            padding: 0.625rem 0.75rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
    }

    &__empty {
        color: #6b7280;
    }

    &__row-actions {
        display: flex;
        gap: 0.5rem;

        button {
            padding: 0.375rem 0.75rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(0, 0, 0, 0.15);
            background: #fff;
            cursor: pointer;
        }
    }

    &__delete {
        color: #b91c1c;
        border-color: rgba(185, 28, 28, 0.3) !important;
    }
}
</style>
