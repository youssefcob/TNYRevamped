<script setup lang="ts">
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ArticleHeroSection from '@/Components/Resources/ArticleHeroSection.vue';

interface NewsItem {
  id: number;
  title: string;
  description: string | null;
  url: string;
  image: string;
  content: string | null;
  created_at: string;
}

const props = defineProps<{ news: NewsItem }>();

function excerpt(text: string | null): string {
  if (!text) return '';
  const stripped = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return stripped.length > 160 ? stripped.slice(0, 160).trimEnd() + '...' : stripped;
}

const metaDescription = computed(() => props.news.description || excerpt(props.news.content));
const canonicalUrl = computed(() => `https://www.tnystaffingco.com/news/${props.news.url}`);
</script>

<template>
  <Head>
    <title>{{ news.title }} | TNY Staffing</title>
    <meta name="description" :content="metaDescription" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" :href="canonicalUrl" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" :content="canonicalUrl" />
    <meta property="og:title" :content="news.title" />
    <meta property="og:description" :content="metaDescription" />
    <meta property="og:image" :content="news.image" />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" :content="canonicalUrl" />
    <meta name="twitter:title" :content="news.title" />
    <meta name="twitter:description" :content="metaDescription" />
    <meta name="twitter:image" :content="news.image" />
  </Head>

  <LayoutV2>
    <ArticleHeroSection :title="news.title" :description="news.description" :image="news.image" />

    <article class="news-content">
      <div class="news-content__inner" v-html="news.content"></div>
    </article>
  </LayoutV2>
</template>

<style scoped lang="scss">
.news-content {
  background: $color-white;
  padding: 4rem 7.5rem 6rem;

  @media (max-width: 1100px) { padding: 3rem 2rem 4rem; }
  @media (max-width: 640px)  { padding: 2.5rem 1.25rem 3rem; }

  &__inner {
    max-width: 48rem;
    margin: 0 auto;
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.0625rem;
    line-height: 1.8;
    color: #23324a;

    :deep(h1),
    :deep(h2),
    :deep(h3) {
      font-family: $font-heading;
      font-weight: $fw-bold;
      color: #0f2b3d;
      line-height: 1.3;
      margin: 2rem 0 1rem;
    }

    :deep(p) {
      margin: 0 0 1.25rem;
    }

    :deep(img) {
      max-width: 100%;
      height: auto;
      border-radius: 1rem;
      margin: 1.5rem 0;
    }

    :deep(a) {
      color: $color-orange;
    }

    :deep(ul),
    :deep(ol) {
      margin: 0 0 1.25rem 1.5rem;
    }
  }
}
</style>
