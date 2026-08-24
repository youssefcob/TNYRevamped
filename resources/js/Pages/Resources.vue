<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { Head, usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ResourcesHeroSection from '@/Components/Resources/ResourcesHeroSection.vue';
import ArticleGridSection from '@/Components/Resources/ArticleGridSection.vue';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  content: string | null;
  created_at: string;
}

defineProps<{ articles: NewsItem[] }>();

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <Head>
    <title>Healthcare Staffing Resources & Insights | TNY Staffing</title>
    <meta name="description" content="Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/resources" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/resources" />
    <meta property="og:title" content="Healthcare Staffing Resources & Insights | TNY Staffing" />
    <meta property="og:description" content="Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/resources" />
    <meta name="twitter:title" content="Healthcare Staffing Resources & Insights | TNY Staffing" />
    <meta name="twitter:description" content="Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York." />
  </Head>

  <LayoutV2>
    <ResourcesHeroSection />
    <ArticleGridSection :articles="articles" />
  </LayoutV2>
</template>
