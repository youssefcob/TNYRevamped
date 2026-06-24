<script setup lang="ts">
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
</script>

<template>
  <LayoutV2>
    <ResourcesHeroSection />
    <ArticleGridSection :articles="articles" />
  </LayoutV2>
</template>
