<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';

// The body of an article comes from Studio (the headless CMS) as a ready-made
// HTML fragment with its own content-hashed stylesheet and script, so this
// page only wires those into the site shell. `entry` is the article's row in
// the news table: the title, excerpt and cover image shown on listing cards.
interface StudioArticle {
  html: string;
  css: string | null;
  js: string | null;
  fontStylesheets: string[];
  title: string | null;
  description: string | null;
  meta: { name: string; value: string }[];
  jsonLd: Record<string, unknown>[];
  // 'render-api' means the stored file had nothing and Studio rendered it live.
  source: 'stored-file' | 'render-api';
}

interface ArticleEntry {
  title: string;
  description: string | null;
  image: string | null;
}

const props = defineProps<{ article: StudioArticle; entry: ArticleEntry; path: string }>();

// Inertia's <Head> writes attribute values and text as-is, so CMS-supplied
// strings are escaped here before they reach the document head.
function esc(value: string | null): string {
  return (value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const title = computed(() => esc(props.article.title) || `${esc(props.entry.title)} | TNY Staffing`);
const description = computed(() => esc(props.article.description || props.entry.description));
const image = computed(() => esc(props.entry.image));
const canonicalUrl = computed(() => `https://www.tnystaffingco.com${props.path}`);
const jsonLd = computed(() => props.article.jsonLd.map((entry) => JSON.stringify(entry).replace(/</g, '\\u003c')));

// The block runtime is progressive enhancement only: load it once per
// browser session, and re-run its (idempotent) init on later article visits.
onMounted(() => {
  if (import.meta.env.DEV) {
    console.log(`[studio] ${props.path} fetched from ${props.article.source}:`, props.article);

    if (props.article.source === 'render-api') {
      console.warn(`[studio] ${props.path} was served by the render API, not the stored file.`);
    }
  }

  const src = props.article.js;
  if (!src) return;

  if (Array.from(document.scripts).some((script) => script.src === src)) {
    (window as any).__studioBlocks?.init();
    return;
  }

  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.body.appendChild(script);
});
</script>

<template>
  <Head>
    <title>{{ title }}</title>
    <meta v-if="description" name="description" :content="description" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" :href="canonicalUrl" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" :content="canonicalUrl" />
    <meta property="og:title" :content="title" />
    <meta v-if="description" property="og:description" :content="description" />
    <meta v-if="image" property="og:image" :content="image" />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" :content="image ? 'summary_large_image' : 'summary'" />
    <meta name="twitter:url" :content="canonicalUrl" />
    <meta name="twitter:title" :content="title" />
    <meta v-if="description" name="twitter:description" :content="description" />
    <meta v-if="image" name="twitter:image" :content="image" />

    <!-- Studio: extra meta, fonts, block styles, structured data -->
    <meta v-for="tag in article.meta" :key="tag.name" :name="esc(tag.name)" :content="esc(tag.value)" />
    <link v-for="href in article.fontStylesheets" :key="href" rel="stylesheet" :href="esc(href)" />
    <link v-if="article.css" rel="stylesheet" :href="esc(article.css)" />
    <component :is="'script'" v-for="(json, index) in jsonLd" :key="index" type="application/ld+json">{{ json }}</component>
  </Head>

  <LayoutV2>
    <!-- Blocks are full-width and set their own gutters and backgrounds, so
         the fragment sits directly in the layout with no padded container. -->
    <article class="studio-article" v-html="article.html"></article>
  </LayoutV2>
</template>

<style scoped lang="scss">
// Clears the fixed navbar, which stays solid on article pages.
.studio-article {
  padding-top: 5.5rem;

  @media (max-width: 1100px) { padding-top: 4.5rem; }
}
</style>
