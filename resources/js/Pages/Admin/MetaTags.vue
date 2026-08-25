<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { snack } from '@/mixins/toast';
import type { PageMeta, PageMetaTag } from '@/interface/Types';

const props = defineProps<{ metas: Record<string, PageMeta>; customTags: Record<string, PageMetaTag[]> }>();

const metas = reactive<Record<string, PageMeta>>({ ...props.metas });
const customTagsByPage = reactive<Record<string, PageMetaTag[]>>({ ...props.customTags });

const PAGES: { page: string; label: string; path: string; defaultTitle: string; defaultDescription: string }[] = [
    { page: 'home', label: 'Home', path: '/', defaultTitle: 'Therapy Staffing Agency in NYC | TNY Staffing Corporation', defaultDescription: 'TNY Staffing connects NY healthcare facilities with credentialed therapy professionals (PT, OT, SLP). Fast 24h placements for hospitals, schools, and clinics.' },
    { page: 'about', label: 'About', path: '/about', defaultTitle: 'About TNY Staffing | NYC Therapy Staffing Agency', defaultDescription: 'Learn how TNY Staffing creates meaningful connections between rehab professionals and NYC healthcare organizations. Proudly serving all five boroughs.' },
    { page: 'solutions', label: 'Solutions', path: '/solutions', defaultTitle: 'Healthcare Staffing Solutions in NYC | TNY Staffing', defaultDescription: 'Explore specialized healthcare staffing solutions in NYC. We connect facilities with qualified PTs, OTs, SLPs, and specialized therapists for per diem and permanent roles.' },
    { page: 'employers', label: 'For Employers', path: '/employers', defaultTitle: 'Reliable Healthcare Staffing in NYC | TNY Staffing', defaultDescription: 'TNY Staffing provides reliable healthcare staffing in NYC. We supply credentialed PTs, OTs, and SLPs for emergency coverage and long-term workforce solutions.' },
    { page: 'candidates', label: 'For Candidates', path: '/candidates', defaultTitle: 'Therapy Jobs in NYC | PT, OT & SLP Careers | TNY Staffing', defaultDescription: 'Explore flexible therapy jobs in NYC. TNY Staffing hires PTs, OTs, SLPs, Medical Assistants, and Exercise Physiologists for top healthcare facilities. Apply today.' },
    { page: 'apply', label: 'Apply', path: '/apply', defaultTitle: 'Apply for Healthcare & Therapy Jobs in NYC | TNY Staffing', defaultDescription: 'Ready for your next healthcare role? Apply online today with TNY Staffing. We hire PTs, OTs, SLPs, massage therapists, and acupuncturists in NYC.' },
    { page: 'request_service', label: 'Request Service', path: '/requestService', defaultTitle: 'Request Qualified Healthcare Staff | TNY Staffing', defaultDescription: 'Need immediate coverage or long-term rehab staff? Submit your staffing request to TNY Staffing and get matched with qualified PTs, OTs, and SLPs in NYC.' },
    { page: 'contact', label: 'Contact', path: '/contact', defaultTitle: 'Contact TNY Staffing | NYC Therapy Staffing Agency', defaultDescription: 'Contact TNY Staffing today. Call (347) 441-4283 to hire rehab professionals or find therapy jobs in NYC. Urgent staffing support available.' },
    { page: 'resources', label: 'Resources', path: '/resources', defaultTitle: 'Healthcare Staffing Resources & Insights | TNY Staffing', defaultDescription: 'Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York.' },
    { page: 'services', label: 'Services (legacy)', path: '/services', defaultTitle: 'Our Services | TNY Staffing Corporation', defaultDescription: "Explore TNY Staffing Corporation's healthcare staffing services, connecting NYC facilities with credentialed therapy professionals." },
];

const selectedPage = ref(PAGES[0].page);
const selected = computed(() => PAGES.find((p) => p.page === selectedPage.value)!);

type FormState = { title: string; description: string; canonical: string };

function formFor(page: string): FormState {
    const meta = metas[page];
    return {
        title: meta?.title ?? '',
        description: meta?.description ?? '',
        canonical: meta?.canonical ?? '',
    };
}

const form = reactive<FormState>(formFor(selectedPage.value));

function selectPage(page: string) {
    selectedPage.value = page;
    Object.assign(form, formFor(page));
    Object.assign(newTag, blankNewTag());
}

const saving = ref(false);

async function save() {
    saving.value = true;
    try {
        const { data } = await window.axios.post('/content/meta-tags', {
            page: selectedPage.value,
            title: form.title || null,
            description: form.description || null,
            canonical: form.canonical || null,
        });
        metas[selectedPage.value] = data.response.data as PageMeta;
        snack.success('Meta tags saved.');
    } catch (e: any) {
        snack.error(e?.response?.data?.response?.message || 'Failed to save meta tags.');
    } finally {
        saving.value = false;
    }
}

const uploadingOgImage = ref(false);
const ogImageInput = ref<HTMLInputElement | null>(null);

function triggerOgImagePicker() {
    ogImageInput.value?.click();
}

async function onOgImageChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    (e.target as HTMLInputElement).value = '';
    if (!file) return;

    uploadingOgImage.value = true;
    try {
        const upload = new FormData();
        upload.append('page', selectedPage.value);
        upload.append('image', file);

        const { data } = await window.axios.post('/content/meta-tags/og-image', upload, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        metas[selectedPage.value] = data.response.data as PageMeta;
        snack.success('Social share image updated.');
    } catch (e) {
        snack.error('Failed to upload social share image.');
    } finally {
        uploadingOgImage.value = false;
    }
}

const effectiveTitle = computed(() => form.title || selected.value.defaultTitle);
const effectiveDescription = computed(() => form.description || selected.value.defaultDescription);
const currentOgImage = computed(() => metas[selectedPage.value]?.og_image ?? null);

const currentCustomTags = computed(() => customTagsByPage[selectedPage.value] ?? []);

type NewTagState = { attribute: 'name' | 'property'; meta_key: string; content: string };

function blankNewTag(): NewTagState {
    return { attribute: 'name', meta_key: '', content: '' };
}

const newTag = reactive<NewTagState>(blankNewTag());
const addingTag = ref(false);

async function addCustomTag() {
    if (!newTag.meta_key.trim() || !newTag.content.trim()) {
        snack.error('Enter both a tag name and content.');
        return;
    }

    addingTag.value = true;
    try {
        const { data } = await window.axios.post('/content/meta-tags/custom-tags', {
            page: selectedPage.value,
            attribute: newTag.attribute,
            meta_key: newTag.meta_key.trim(),
            content: newTag.content.trim(),
        });
        const tag = data.response.data as PageMetaTag;
        if (!customTagsByPage[selectedPage.value]) customTagsByPage[selectedPage.value] = [];
        customTagsByPage[selectedPage.value].push(tag);
        Object.assign(newTag, blankNewTag());
        snack.success('Meta tag added.');
    } catch (e: any) {
        snack.error(e?.response?.data?.response?.message || 'Failed to add meta tag.');
    } finally {
        addingTag.value = false;
    }
}

async function removeCustomTag(tag: PageMetaTag) {
    if (!confirm(`Remove the <meta ${tag.attribute}="${tag.meta_key}"> tag from this page?`)) return;

    try {
        await window.axios.delete(`/content/meta-tags/custom-tags/${tag.id}`);
        customTagsByPage[selectedPage.value] = currentCustomTags.value.filter((t) => t.id !== tag.id);
        snack.success('Meta tag removed.');
    } catch (e) {
        snack.error('Failed to remove meta tag.');
    }
}
</script>

<template>
    <MainOverLay>
        <div class="meta-tags">
            <h1 class="meta-tags__title">Manage Meta Tags</h1>
            <p class="meta-tags__subtitle">
                Set the page title, description, and social share image search engines and social platforms show for
                each page. Leave a field blank to keep the site's default copy.
            </p>

            <div class="meta-tags__layout">
                <div class="meta-tags__pages">
                    <button v-for="p in PAGES" :key="p.page" type="button" class="meta-tags__page-btn"
                        :class="{ 'meta-tags__page-btn--active': p.page === selectedPage }" @click="selectPage(p.page)">
                        <span>{{ p.label }}</span>
                        <span v-if="metas[p.page]?.title || metas[p.page]?.description || metas[p.page]?.canonical || customTagsByPage[p.page]?.length"
                            class="meta-tags__badge">Customized</span>
                    </button>
                </div>

                <div class="meta-tags__main">
                <form class="meta-tags__form" @submit.prevent="save">
                    <h2>{{ selected.label }} <span class="meta-tags__path">{{ selected.path }}</span></h2>

                    <label>
                        Title
                        <input v-model="form.title" type="text" maxlength="255" :placeholder="selected.defaultTitle" />
                        <span class="meta-tags__hint">{{ form.title.length }} characters (aim for ~60)</span>
                    </label>

                    <label>
                        Description
                        <textarea v-model="form.description" rows="3" maxlength="500" :placeholder="selected.defaultDescription"></textarea>
                        <span class="meta-tags__hint">{{ form.description.length }} characters (aim for ~155)</span>
                    </label>

                    <label>
                        Canonical URL override
                        <input v-model="form.canonical" type="text" maxlength="255"
                            :placeholder="`https://www.tnystaffingco.com${selected.path}`" />
                        <span class="meta-tags__hint">Leave blank to use the page's own URL.</span>
                    </label>

                    <div class="meta-tags__og-image">
                        <span class="meta-tags__og-image-label">Social share image (og:image)</span>
                        <div class="meta-tags__og-image-row">
                            <img v-if="currentOgImage" :src="currentOgImage" alt="" class="meta-tags__og-image-preview" />
                            <div v-else class="meta-tags__og-image-empty">No image set</div>
                            <button type="button" :disabled="uploadingOgImage" @click="triggerOgImagePicker">
                                {{ uploadingOgImage ? 'Uploading…' : currentOgImage ? 'Replace Image' : 'Upload Image' }}
                            </button>
                            <input ref="ogImageInput" type="file" accept="image/*" class="meta-tags__og-image-input" @change="onOgImageChange" />
                        </div>
                    </div>

                    <div class="meta-tags__preview">
                        <span class="meta-tags__preview-label">Search preview</span>
                        <div class="meta-tags__preview-box">
                            <p class="meta-tags__preview-title">{{ effectiveTitle }}</p>
                            <p class="meta-tags__preview-url">tnystaffingco.com{{ selected.path }}</p>
                            <p class="meta-tags__preview-desc">{{ effectiveDescription }}</p>
                        </div>
                    </div>

                    <div class="meta-tags__actions">
                        <button type="submit" :disabled="saving">{{ saving ? 'Saving…' : 'Save Changes' }}</button>
                    </div>
                </form>

                <div class="meta-tags__custom">
                    <h2>Custom Meta Tags</h2>
                    <p class="meta-tags__custom-subtitle">
                        Add any other &lt;meta&gt; tag this page needs — author, keywords, twitter:site, verification
                        codes, and so on.
                    </p>

                    <table v-if="currentCustomTags.length" class="meta-tags__custom-table">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Key</th>
                                <th>Content</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tag in currentCustomTags" :key="tag.id">
                                <td>{{ tag.attribute }}</td>
                                <td>{{ tag.meta_key }}</td>
                                <td class="meta-tags__custom-content">{{ tag.content }}</td>
                                <td>
                                    <button type="button" class="meta-tags__custom-remove" @click="removeCustomTag(tag)">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-else class="meta-tags__empty">No custom tags on this page yet.</p>

                    <form class="meta-tags__custom-form" @submit.prevent="addCustomTag">
                        <select v-model="newTag.attribute">
                            <option value="name">name</option>
                            <option value="property">property</option>
                        </select>
                        <input v-model="newTag.meta_key" type="text" maxlength="255" placeholder="e.g. author, og:site_name" />
                        <input v-model="newTag.content" type="text" maxlength="1000" placeholder="Tag content" />
                        <button type="submit" :disabled="addingTag">{{ addingTag ? 'Adding…' : 'Add Tag' }}</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </MainOverLay>
</template>

<style scoped lang="scss">
.meta-tags {
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
        grid-template-columns: 16rem 1fr;
        gap: 2rem;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    }

    &__pages {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
    }

    &__page-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.625rem 0.875rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.12);
        background: #fff;
        text-align: left;
        cursor: pointer;
        font-size: 0.9rem;

        &--active {
            border-color: #0f2b3d;
            background: #0f2b3d;
            color: #fff;
        }
    }

    &__badge {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.125rem 0.375rem;
        border-radius: 999px;
        background: #ff9b37;
        color: #0f2b3d;
        font-weight: 700;
    }

    &__main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
        background: rgba(0, 0, 0, 0.02);
        border-radius: 0.75rem;

        h2 {
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
            font-size: 1.1rem;
        }

        label {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.9rem;
        }

        input[type='text'],
        textarea {
            padding: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.375rem;
            font-family: inherit;
            resize: vertical;
        }
    }

    &__path {
        font-size: 0.8rem;
        font-weight: 400;
        color: #6b7280;
    }

    &__hint {
        font-size: 0.75rem;
        color: #6b7280;
    }

    &__og-image {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        font-size: 0.9rem;
    }

    &__og-image-label {
        font-weight: 600;
    }

    &__og-image-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        button {
            padding: 0.5rem 0.875rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            background: #fff;
            cursor: pointer;

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    }

    &__og-image-preview {
        width: 6rem;
        height: 3.375rem;
        object-fit: cover;
        border-radius: 0.375rem;
        border: 1px solid rgba(0, 0, 0, 0.12);
    }

    &__og-image-empty {
        width: 6rem;
        height: 3.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        color: #9ca3af;
        border: 1px dashed rgba(0, 0, 0, 0.2);
        border-radius: 0.375rem;
        text-align: center;
    }

    &__og-image-input {
        display: none;
    }

    &__preview {
        padding: 1rem;
        border: 1px dashed rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;
    }

    &__preview-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6b7280;
    }

    &__preview-box {
        margin-top: 0.5rem;
    }

    &__preview-title {
        color: #1a0dab;
        font-size: 1.1rem;
        margin: 0;
    }

    &__preview-url {
        color: #006621;
        font-size: 0.85rem;
        margin: 0.125rem 0;
    }

    &__preview-desc {
        color: #545454;
        font-size: 0.85rem;
        margin: 0;
    }

    &__actions {
        display: flex;

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

    &__custom {
        padding: 1.5rem;
        background: rgba(0, 0, 0, 0.02);
        border-radius: 0.75rem;

        h2 {
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
        }
    }

    &__custom-subtitle {
        font-size: 0.85rem;
        color: #6b7280;
        margin-bottom: 1rem;
    }

    &__custom-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;

        th,
        td {
            text-align: left;
            padding: 0.5rem 0.625rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            font-size: 0.85rem;
        }
    }

    &__custom-content {
        max-width: 20rem;
        overflow-wrap: anywhere;
    }

    &__empty {
        font-size: 0.85rem;
        color: #6b7280;
        margin-bottom: 1rem;
    }

    &__custom-remove {
        padding: 0.25rem 0.625rem;
        border-radius: 0.375rem;
        border: 1px solid rgba(185, 28, 28, 0.3);
        background: #fff;
        color: #b91c1c;
        cursor: pointer;
        font-size: 0.8rem;
    }

    &__custom-form {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        select,
        input {
            padding: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.375rem;
            font-family: inherit;
        }

        input[type='text'] {
            flex: 1;
            min-width: 10rem;
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
