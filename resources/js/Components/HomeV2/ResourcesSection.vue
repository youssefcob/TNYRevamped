<template>
  <section v-if="latestArticles.length > 0" class="resources">
    <div class="resources__header">
      <div class="resources__header-left">
        <p class="section-label">Resources</p>
        <h2 class="resources__title">Insights for Healthcare Leaders</h2>
      </div>
      <a href="/news" class="resources__view-all">View All Resources</a>
    </div>

    <div class="resources__cards">
      <article v-for="(article, idx) in latestArticles" :key="article.id" class="res-card">
        <div class="res-card__banner">
          <img :src="article.image" :alt="article.title" class="res-card__image" />
        </div>
        <div class="res-card__body">
          <!-- <span class="res-card__tag" :style="{ background: cardSchemes[idx % 3].tagBg, color: cardSchemes[idx % 3].tagColor }">
            {{ cardSchemes[idx % 3].category }}
          </span> -->
          <h4 class="res-card__title">{{ article.title }}</h4>
          <p class="res-card__excerpt">{{ excerpt(article.content) }}</p>
          <div class="res-card__footer">
            <span class="res-card__read-time">{{ readTime(article.content) }}</span>
            <a :href="`/news/${article.url}`" class="res-card__read-more">Read more →</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface NewsItem {
  id: number;
  url: string;
  title: string;
  image: string;
  content: string | null;
  created_at: string;
}

const props = defineProps<{ articles: NewsItem[] }>();

const latestArticles = computed(() =>
  [...props.articles]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 3)
);

const cardSchemes = [
  { tagBg: '#e0f2ec', tagColor: '#1a5c52', category: 'Staffing Trends' },
  { tagBg: '#ede9fb', tagColor: '#4a2fa0', category: 'Career Tips' },
  { tagBg: '#fef5d8', tagColor: '#96600e', category: 'Hiring Insights' },
];

function readTime(text: string | null): string {
  if (!text) return '3 min read';
  const words = text.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function excerpt(text: string | null): string {
  if (!text) return '';
  const stripped = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return stripped.length > 120 ? stripped.slice(0, 120).trimEnd() + '...' : stripped;
}
</script>

<style scoped lang="scss">
.resources {
  padding: 5rem 7.5rem;
  background: $color-white;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 640px) { flex-direction: column; align-items: flex-start; }
  }

  &__header-left {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, $h2-size-desktop);
    line-height: $h2-line-height;
    color: $color-dark;
  }

  &__view-all {
    height: 2.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.25rem;
    border: 0.8px solid #0f2b3d;
    border-radius: 99px;
    color: #0f2b3d;
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: $btn-size;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.25s;
    align-self: flex-start;

    &:hover { background: #0f2b3d; color: $color-white; }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }
}

.res-card {
  background: $color-white;
  border-radius: 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &__banner {
    height: 10rem;
    flex-shrink: 0;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  &__body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
  }

  &__tag {
    display: inline-block;
    padding: 0.25rem 0.625rem;
    border-radius: 0.375rem;
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: .9rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    align-self: flex-start;
  }

  &__title {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 1.3rem;
    line-height: 1.4;
    color: #0f2b3d;
  }

  &__excerpt {
    font-family: $font-body;
    font-size: 1rem;
    line-height: 1.65;
    color: #6b7280;
    flex: 1;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    border-top: 0.8px solid rgba(0,0,0,0.07);
  }

  &__read-time {
    font-family: $font-body;
    font-size: 0.78rem;
    color: #9ca3af;
  }

  &__read-more {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: 0.82rem;
    color: $color-orange;
    text-decoration: none;
    &:hover { opacity: 0.75; }
  }
}
</style>
