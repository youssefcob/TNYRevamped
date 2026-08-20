<script setup lang="ts">
import { ref } from 'vue';

interface NewsItem {
  id: number;
  url: string;
  title: string;
  image: string;
  content: string | null;
  created_at: string;
}

defineProps<{ articles: NewsItem[] }>();

const activeTab = ref<'articles' | 'case-studies'>('articles');

const cardSchemes = [
  { tagBg: '#e0f2ec', tagText: '#1a5c52', category: 'Staffing Trends' },
  { tagBg: '#ede9fb', tagText: '#4a2fa0', category: 'Career Tips' },
  { tagBg: '#fef5d8', tagText: '#96600e', category: 'Hiring Insights' },
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

<template>
  <section class="art-section">

    <!-- Tab toggle -->
    <div class="art-section__tabs-wrap">
      <div class="art-section__tabs">
        <button
          class="art-section__tab"
          :class="{ 'art-section__tab--active': activeTab === 'articles' }"
          @click="activeTab = 'articles'"
        >
          Articles
        </button>
        <!-- <button
          class="art-section__tab"
          :class="{ 'art-section__tab--active': activeTab === 'case-studies' }"
          @click="activeTab = 'case-studies'"
        >
          Case studies
        </button> -->
      </div>
    </div>

    <!-- Articles grid -->
    <div class="art-section__content">
      <template v-if="activeTab === 'articles'">
        <div v-if="articles.length > 0" class="art-section__grid">
          <div
            v-for="(article, idx) in articles"
            :key="article.id"
            class="art-card"
          >
            <div class="art-card__banner">
              <img :src="article.image" :alt="article.title" class="art-card__image" />
            </div>

            <div class="art-card__body">
              <!-- <span
                class="art-card__tag"
                :style="{ background: cardSchemes[idx % 3].tagBg, color: cardSchemes[idx % 3].tagText }"
              >{{ cardSchemes[idx % 3].category }}</span> -->
              <h3 class="art-card__title">{{ article.title }}</h3>
              <p class="art-card__excerpt">{{ excerpt(article.content) }}</p>
              <div class="art-card__footer">
                <span class="art-card__read-time">{{ readTime(article.content) }}</span>
                <a :href="`/news/${article.url}`" class="art-card__link">Read more &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="art-section__empty">
          <p>No articles available yet.</p>
        </div>
      </template>

      <template v-else>
        <div class="art-section__empty">
          <p>Case studies coming soon.</p>
        </div>
      </template>
    </div>

  </section>
</template>

<style scoped lang="scss">
.art-section {
  background: $color-white;
  padding: 3.5rem 7.5rem 6rem;

  @media (max-width: 1100px) { padding: 3rem 2rem 4rem; }

  &__tabs-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }

  &__tabs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba($color-sand, 0.2);
    border-radius: 3.78125rem;
    padding: 0.875rem 1.0625rem;
    width: 24rem;
    height: 6.0625rem;
    justify-content: center;

    @media (max-width: 480px) { width: 100%; }
  }

  &__tab {
    flex: 1;
    height: 3.9375rem;
    border-radius: 2.5rem;
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    cursor: pointer;
    border: none;
    background: transparent;
    color: #0f2b3d;
    transition: background 0.2s, color 0.2s;

    &--active {
      background: #0f2b3d;
      color: $color-white;
    }

    &:not(&--active):hover {
      background: rgba(#0f2b3d, 0.06);
    }
  }

  &__content {
    max-width: 66.25rem;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 640px) { grid-template-columns: 1fr; }
  }

  &__empty {
    text-align: center;
    padding: 4rem 0;
    font-family: $font-body;
    font-size: 1.125rem;
    color: rgba($color-dark, 0.45);
  }
}

.art-card {
  background: $color-white;
  border-radius: 1.25rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
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
    gap: 0.625rem;
    flex: 1;
  }

  &__tag {
    display: inline-block;
    align-self: flex-start;
    padding: 0.3rem 0.625rem;
    border-radius: 0.375rem;
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 0.62rem;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    line-height: 1.5;
  }

  &__title {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 0.98rem;
    line-height: 1.4;
    color: #0f2b3d;
  }

  &__excerpt {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 0.84rem;
    line-height: 1.65;
    color: #6b7280;
    flex: 1;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    margin-top: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
  }

  &__read-time {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 0.78rem;
    color: #9ca3af;
  }

  &__link {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: 0.82rem;
    color: $color-orange;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover { opacity: 0.75; }
  }
}
</style>
