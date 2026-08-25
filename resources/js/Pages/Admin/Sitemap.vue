<script setup lang="ts">
import { reactive, ref } from 'vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { snack } from '@/mixins/toast';
import type { SitemapEntry } from '@/interface/Types';

const props = defineProps<{ entries: SitemapEntry[] }>();

const CHANGEFREQ_OPTIONS = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];

const rows = reactive<SitemapEntry[]>(props.entries.map((e) => ({ ...e })));
const savingUrl = ref<string | null>(null);

async function saveRow(row: SitemapEntry) {
    savingUrl.value = row.url;
    try {
        const { data } = await window.axios.post('/content/sitemap', {
            url: row.url,
            priority: row.priority,
            changefreq: row.changefreq,
            excluded: row.excluded,
        });
        row.id = data.response.data.id;
        snack.success('Sitemap entry saved.');
    } catch (e: any) {
        snack.error(e?.response?.data?.response?.message || 'Failed to save sitemap entry.');
    } finally {
        savingUrl.value = null;
    }
}

async function removeRow(row: SitemapEntry) {
    if (!row.id) return;
    if (!confirm(`Remove ${row.url} from the sitemap entirely?`)) return;

    try {
        await window.axios.delete(`/content/sitemap/${row.id}`);
        const index = rows.findIndex((r) => r.url === row.url);
        if (index !== -1) rows.splice(index, 1);
        snack.success('Sitemap entry removed.');
    } catch (e) {
        snack.error('Failed to remove sitemap entry.');
    }
}

type NewUrlState = { url: string; priority: string; changefreq: string };

function blankNewUrl(): NewUrlState {
    return { url: '', priority: '0.5', changefreq: 'monthly' };
}

const newUrl = reactive<NewUrlState>(blankNewUrl());
const addingUrl = ref(false);

async function addUrl() {
    const url = newUrl.url.trim();
    if (!url.startsWith('/')) {
        snack.error('URL must be a path starting with /, e.g. /careers-fair');
        return;
    }
    if (rows.some((r) => r.url === url)) {
        snack.error('That URL is already in the sitemap.');
        return;
    }

    addingUrl.value = true;
    try {
        const { data } = await window.axios.post('/content/sitemap', {
            url,
            priority: newUrl.priority ? Number(newUrl.priority) : null,
            changefreq: newUrl.changefreq || null,
            excluded: false,
        });
        rows.push({
            id: data.response.data.id,
            url,
            source: 'manual',
            priority: data.response.data.priority,
            changefreq: data.response.data.changefreq,
            excluded: false,
            lastmod: null,
        });
        Object.assign(newUrl, blankNewUrl());
        snack.success('URL added to sitemap.');
    } catch (e: any) {
        snack.error(e?.response?.data?.response?.message || 'Failed to add URL.');
    } finally {
        addingUrl.value = false;
    }
}
</script>

<template>
    <MainOverLay>
        <div class="sitemap-admin">
            <h1 class="sitemap-admin__title">Manage Sitemap</h1>
           

            <table class="sitemap-admin__table">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Source</th>
                        <th>Priority</th>
                        <th>Change Frequency</th>
                        <th>Excluded</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows" :key="row.url" :class="{ 'sitemap-admin__row--excluded': row.excluded }">
                        <td class="sitemap-admin__url">{{ row.url }}</td>
                        <td>
                            <span class="sitemap-admin__badge" :class="`sitemap-admin__badge--${row.source}`">{{ row.source }}</span>
                        </td>
                        <td>
                            <input type="number" min="0" max="1" step="0.1" v-model.number="row.priority"
                                :disabled="savingUrl === row.url" @change="saveRow(row)" />
                        </td>
                        <td>
                            <select v-model="row.changefreq" :disabled="savingUrl === row.url" @change="saveRow(row)">
                                <option :value="null">Default</option>
                                <option v-for="f in CHANGEFREQ_OPTIONS" :key="f" :value="f">{{ f }}</option>
                            </select>
                        </td>
                        <td>
                            <input type="checkbox" v-model="row.excluded" :disabled="savingUrl === row.url" @change="saveRow(row)" />
                        </td>
                        <td>
                            <button v-if="row.source === 'manual'" type="button" class="sitemap-admin__remove" @click="removeRow(row)">
                                Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <form class="sitemap-admin__add" @submit.prevent="addUrl">
                <h2>Add a URL</h2>
                <div class="sitemap-admin__add-row">
                    <input v-model="newUrl.url" type="text" placeholder="/careers-fair" />
                    <input v-model="newUrl.priority" type="number" min="0" max="1" step="0.1" placeholder="Priority" />
                    <select v-model="newUrl.changefreq">
                        <option v-for="f in CHANGEFREQ_OPTIONS" :key="f" :value="f">{{ f }}</option>
                    </select>
                    <button type="submit" :disabled="addingUrl">{{ addingUrl ? 'Adding…' : 'Add URL' }}</button>
                </div>
            </form>
        </div>
    </MainOverLay>
</template>

<style scoped lang="scss">
.sitemap-admin {
    max-width: 60rem;
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

        a {
            color: #0f2b3d;
        }
    }

    &__table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 2rem;

        th,
        td {
            text-align: left;
            padding: 0.5rem 0.625rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            font-size: 0.85rem;
        }

        input[type='number'] {
            width: 4.5rem;
        }

        input,
        select {
            padding: 0.375rem 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.375rem;
            font-family: inherit;

            &:disabled {
                opacity: 0.6;
            }
        }
    }

    &__row--excluded {
        opacity: 0.5;
    }

    &__url {
        font-family: monospace;
        overflow-wrap: anywhere;
    }

    &__badge {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.125rem 0.375rem;
        border-radius: 999px;
        font-weight: 700;

        &--auto {
            background: rgba(15, 43, 61, 0.1);
            color: #0f2b3d;
        }

        &--manual {
            background: #ff9b37;
            color: #0f2b3d;
        }
    }

    &__remove {
        padding: 0.25rem 0.625rem;
        border-radius: 0.375rem;
        border: 1px solid rgba(185, 28, 28, 0.3);
        background: #fff;
        color: #b91c1c;
        cursor: pointer;
        font-size: 0.8rem;
    }

    &__add {
        padding: 1.5rem;
        background: rgba(0, 0, 0, 0.02);
        border-radius: 0.75rem;

        h2 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }
    }

    &__add-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        input,
        select {
            padding: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.375rem;
            font-family: inherit;
        }

        input[type='text'] {
            flex: 1;
            min-width: 12rem;
        }

        input[type='number'] {
            width: 6rem;
        }

        button {
            padding: 0.5rem 1rem;
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
}
</style>
