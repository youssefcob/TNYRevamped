<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ArticlesHeroSection from '@/Components/Articles/ArticlesHeroSection.vue';
import ArticleGridSection from '@/Components/Articles/ArticleGridSection.vue';

interface NewsItem {
  id: number;
  url: string;
  title: string;
  image: string;
  description: string | null;
  content: string | null;
  created_at: string;
}

defineProps<{ articles: NewsItem[] }>();

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta page="articles" path="/articles"
    default-title="Healthcare Staffing Articles & Insights | TNY Staffing"
    default-description="Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York." />

  <LayoutV2>
    <ArticlesHeroSection />
    <ArticleGridSection :articles="articles" />
  </LayoutV2>
</template>
