<script setup lang="ts">
import type { StudioDocument as StudioArticle } from '@/interface/Types';
import StudioDocument from '@/Components/Studio/StudioDocument.vue';

// The body of an article comes from Studio (the headless CMS). `entry` is the
// article's row in the news table: the title, excerpt and cover image shown
// on listing cards.
interface ArticleEntry {
  title: string;
  description: string | null;
  image: string | null;
}

defineProps<{ article: StudioArticle; entry: ArticleEntry; path: string }>();
</script>

<template>
  <StudioDocument :document="article" :path="path" og-type="article"
    :fallback-title="`${entry.title} | TNY Staffing`"
    :fallback-description="entry.description"
    :image="entry.image" />
</template>
