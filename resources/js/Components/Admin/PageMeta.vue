<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { FEATURES } from '@/config/features';
import type { PageMetaEntry } from '@/interface/Types';

const props = defineProps({
    page: { type: String, required: true },
    path: { type: String, required: true },
    defaultTitle: { type: String, required: true },
    defaultDescription: { type: String, required: true },
    defaultOgImage: { type: String, default: null },
});

// When the feature is off, every page falls back to its hardcoded defaults —
// admin overrides in the DB are ignored entirely rather than just hidden.
const pageMeta = computed(() => (FEATURES.metaTags ? (usePage().props.pageMeta as PageMetaEntry | null) ?? null : null));

const title = computed(() => pageMeta.value?.title || props.defaultTitle);
const description = computed(() => pageMeta.value?.description || props.defaultDescription);
const ogImage = computed(() => pageMeta.value?.ogImage || props.defaultOgImage);
const customTags = computed(() => pageMeta.value?.customTags ?? []);

const canonicalUrl = computed(() => {
    const override = pageMeta.value?.canonical;
    if (!override) return `https://www.tnystaffingco.com${props.path}`;
    return override.startsWith('http') ? override : `https://www.tnystaffingco.com${override}`;
});
</script>

<template>
    <Head>
        <title>{{ title }}</title>
        <meta name="title" :content="title" />
        <meta name="description" :content="description" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" :href="canonicalUrl" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" :content="canonicalUrl" />
        <meta property="og:title" :content="title" />
        <meta property="og:description" :content="description" />
        <meta property="og:site_name" content="TNY Staffing Corporation" />
        <meta v-if="ogImage" property="og:image" :content="ogImage" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" :content="canonicalUrl" />
        <meta name="twitter:title" :content="title" />
        <meta name="twitter:description" :content="description" />
        <meta v-if="ogImage" name="twitter:image" :content="ogImage" />

        <!-- Custom admin-added tags -->
        <meta v-for="tag in customTags" :key="`${tag.attribute}:${tag.meta_key}`"
            :name="tag.attribute === 'name' ? tag.meta_key : undefined"
            :property="tag.attribute === 'property' ? tag.meta_key : undefined"
            :content="tag.content" />
    </Head>
</template>
