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
        <div class="res-card__banner" :style="{ background: cardSchemes[idx % 3].banner }">
          <div class="res-card__icon-wrap">
            <component :is="cardSchemes[idx % 3].icon" :stroke="cardSchemes[idx % 3].tagColor" />
          </div>
        </div>
        <div class="res-card__body">
          <span class="res-card__tag" :style="{ background: cardSchemes[idx % 3].tagBg, color: cardSchemes[idx % 3].tagColor }">
            {{ cardSchemes[idx % 3].category }}
          </span>
          <h4 class="res-card__title">{{ article.title }}</h4>
          <p class="res-card__excerpt">{{ excerpt(article.content) }}</p>
          <div class="res-card__footer">
            <span class="res-card__read-time">{{ readTime(article.content) }}</span>
            <a :href="`/news/${article.id}`" class="res-card__read-more">Read more →</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';

interface NewsItem {
  id: number;
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

const chartIcon = (attrs: Record<string, unknown>) => h('svg', { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none', 'stroke-width': 2, ...attrs }, [
  h('polyline', { points: '22 7 13.5 15.5 8.5 10.5 2 17' }),
  h('polyline', { points: '16 7 22 7 22 13' }),
]);
const stethIcon = (attrs: Record<string, unknown>) => h('svg', { width: 30, height: 30, viewBox: '0 0 30 30', fill: 'none', 'stroke-width': '2.1875', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...attrs }, [
  h('path', { d: 'M13.75 2.5V5' }),
  h('path', { d: 'M6.25 2.5V5' }),
  h('path', { d: 'M6.25 3.75H5C4.33696 3.75 3.70107 4.01339 3.23223 4.48223C2.76339 4.95107 2.5 5.58696 2.5 6.25V11.25C2.5 13.2391 3.29018 15.1468 4.6967 16.5533C6.10322 17.9598 8.01088 18.75 10 18.75C11.9891 18.75 13.8968 17.9598 15.3033 16.5533C16.7098 15.1468 17.5 13.2391 17.5 11.25V6.25C17.5 5.58696 17.2366 4.95107 16.7678 4.48223C16.2989 4.01339 15.663 3.75 15 3.75H13.75' }),
  h('path', { d: 'M10 18.75C10 20.7391 10.7902 22.6468 12.1967 24.0533C13.6032 25.4598 15.5109 26.25 17.5 26.25C19.4891 26.25 21.3968 25.4598 22.8033 24.0533C24.2098 22.6468 25 20.7391 25 18.75V15' }),
  h('path', { d: 'M25 15C26.3807 15 27.5 13.8807 27.5 12.5C27.5 11.1193 26.3807 10 25 10C23.6193 10 22.5 11.1193 22.5 12.5C22.5 13.8807 23.6193 15 25 15Z' }),
]);
const lightbulbIcon = (attrs: Record<string, unknown>) => h('svg', { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none', 'stroke-width': 2, ...attrs }, [
  h('path', { d: 'M9 18h6M10 22h4M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z' }),
]);

const cardSchemes = [
  { banner: '#c8e8df', tagBg: '#e0f2ec', tagColor: '#1a5c52', category: 'Staffing Trends', icon: chartIcon },
  { banner: '#ddd6f3', tagBg: '#ede9fb', tagColor: '#4a2fa0', category: 'Career Tips', icon: stethIcon },
  { banner: '#fdefc8', tagBg: '#fef5d8', tagColor: '#96600e', category: 'Hiring Insights', icon: lightbulbIcon },
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__icon-wrap {
    width: 4rem;
    height: 4rem;
    background: rgba(255,255,255,0.55);
    border-radius: 1rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
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
