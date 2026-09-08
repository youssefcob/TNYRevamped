<script setup lang="ts">
import { reactive, ref } from 'vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { snack } from '@/mixins/toast';
import type { Redirect } from '@/interface/Types';

const props = defineProps<{ redirects: Redirect[]; statusCodes: number[] }>();

const STATUS_LABELS: Record<number, string> = {
    301: '301 — Permanent',
    302: '302 — Temporary',
};

const rows = reactive<Redirect[]>(props.redirects.map((r) => ({ ...r })));
const savingId = ref<number | null>(null);

async function saveRow(row: Redirect) {
    savingId.value = row.id;
    try {
        const { data } = await window.axios.post('/content/redirects', {
            id: row.id,
            source: row.source,
            destination: row.destination,
            status_code: row.status_code,
            enabled: row.enabled,
        });
        Object.assign(row, data.response.data);
        snack.success('Redirect saved.');
    } catch (e: any) {
        snack.error(e?.response?.data?.response?.message || 'Failed to save redirect.');
    } finally {
        savingId.value = null;
    }
}

async function removeRow(row: Redirect) {
    if (!row.id) return;
    if (!confirm(`Delete the redirect from ${row.source}?`)) return;

    try {
        await window.axios.delete(`/content/redirects/${row.id}`);
        const index = rows.findIndex((r) => r.id === row.id);
        if (index !== -1) rows.splice(index, 1);
        snack.success('Redirect removed.');
    } catch (e) {
        snack.error('Failed to remove redirect.');
    }
}

type NewRedirectState = { source: string; destination: string; status_code: number };

function blankNewRedirect(): NewRedirectState {
    return { source: '', destination: '', status_code: 301 };
}

const newRedirect = reactive<NewRedirectState>(blankNewRedirect());
const adding = ref(false);

async function addRedirect() {
    const source = newRedirect.source.trim();
    const destination = newRedirect.destination.trim();

    if (!source.startsWith('/')) {
        snack.error('Source must be a path starting with /, e.g. /old-page');
        return;
    }
    if (!destination) {
        snack.error('Destination is required.');
        return;
    }

    adding.value = true;
    try {
        const { data } = await window.axios.post('/content/redirects', {
            source,
            destination,
            status_code: newRedirect.status_code,
            enabled: true,
        });
        rows.unshift({ ...data.response.data });
        Object.assign(newRedirect, blankNewRedirect());
        snack.success('Redirect added.');
    } catch (e: any) {
        snack.error(e?.response?.data?.response?.message || 'Failed to add redirect.');
    } finally {
        adding.value = false;
    }
}
</script>

<template>
    <MainOverLay>
        <div class="redirects-admin">
            <h1 class="redirects-admin__title">Manage Redirects</h1>

            <table class="redirects-admin__table">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Type</th>
                        <th>Enabled</th>
                        <th>Hits</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows" :key="row.id ?? row.source" :class="{ 'redirects-admin__row--off': !row.enabled }">
                        <td>
                            <input type="text" v-model="row.source" :disabled="savingId === row.id"
                                @change="saveRow(row)" />
                        </td>
                        <td>
                            <input type="text" v-model="row.destination" :disabled="savingId === row.id"
                                @change="saveRow(row)" />
                        </td>
                        <td>
                            <select v-model.number="row.status_code" :disabled="savingId === row.id" @change="saveRow(row)">
                                <option v-for="code in props.statusCodes" :key="code" :value="code">
                                    {{ STATUS_LABELS[code] ?? code }}
                                </option>
                            </select>
                        </td>
                        <td>
                            <input type="checkbox" v-model="row.enabled" :disabled="savingId === row.id"
                                @change="saveRow(row)" />
                        </td>
                        <td class="redirects-admin__hits">{{ row.hits }}</td>
                        <td>
                            <button type="button" class="redirects-admin__remove" @click="removeRow(row)">Delete</button>
                        </td>
                    </tr>
                    <tr v-if="!rows.length">
                        <td colspan="6" class="redirects-admin__empty">No redirects yet.</td>
                    </tr>
                </tbody>
            </table>

            <form class="redirects-admin__add" @submit.prevent="addRedirect">
                <h2>Add a redirect</h2>
                <div class="redirects-admin__add-row">
                    <input v-model="newRedirect.source" type="text" placeholder="/old-page" />
                    <span class="redirects-admin__arrow">&rarr;</span>
                    <input v-model="newRedirect.destination" type="text" placeholder="/new-page or https://…" />
                    <select v-model.number="newRedirect.status_code">
                        <option v-for="code in props.statusCodes" :key="code" :value="code">
                            {{ STATUS_LABELS[code] ?? code }}
                        </option>
                    </select>
                    <button type="submit" :disabled="adding">{{ adding ? 'Adding…' : 'Add redirect' }}</button>
                </div>
            </form>
        </div>
    </MainOverLay>
</template>

<style scoped lang="scss">

.redirects-admin {
    max-width: 60rem;
    margin: 0 auto;
    padding: 2rem;
    min-height:70vh;

    &__title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    &__subtitle {
        color: #6b7280;
        margin-bottom: 2rem;
        line-height: 1.6;

        code {
            font-family: monospace;
            background: rgba(0, 0, 0, 0.06);
            padding: 0.05rem 0.3rem;
            border-radius: 0.25rem;
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

        input[type='text'],
        select {
            width: 100%;
            padding: 0.375rem 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.375rem;
            font-family: inherit;

            &:disabled {
                opacity: 0.6;
            }
        }
    }

    &__row--off {
        opacity: 0.5;
    }

    &__hits {
        font-variant-numeric: tabular-nums;
        color: #6b7280;
    }

    &__empty {
        color: #9ca3af;
        text-align: center;
        padding: 1.5rem 0;
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
        align-items: center;
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

    &__arrow {
        color: #9ca3af;
    }
}
</style>
