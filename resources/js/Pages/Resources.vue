<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
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
  <PageMeta page="resources" path="/resources"
    default-title="Healthcare Staffing Resources & Insights | TNY Staffing"
    default-description="Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York." />

  <LayoutV2>
    <ResourcesHeroSection />
    <ArticleGridSection :articles="articles" />
  </LayoutV2>
</template>
