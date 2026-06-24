<script setup lang="ts">
import { ref } from 'vue';

const faqs = [
  {
    q: 'How quickly can TNY Therapy of New York place a professional at our facility?',
    a: 'We can typically place qualified therapy professionals within 24–48 hours for urgent needs, and within 1–2 weeks for standard placements, depending on specialty and location requirements.',
  },
  {
    q: 'What clinical specialties and disciplines does TNY cover?',
    a: 'TNY covers Physical Therapy (PT), Occupational Therapy (OT), Speech-Language Pathology (SLP), and related rehabilitation disciplines, including CFY-level and fully licensed clinicians.',
  },
  {
    q: 'How does TNY handle credentialing and compliance verification?',
    a: 'All professionals undergo thorough background checks, license verification, and compliance screening before any placement. We maintain up-to-date records for every clinician in our network.',
  },
  {
    q: 'What types of staffing arrangements do you offer employers?',
    a: 'We offer per diem, short-term contract, long-term contract, and permanent placement options to accommodate your facility\'s scheduling needs and budget requirements.',
  },
  {
    q: 'Does TNY operate outside of New York State?',
    a: 'TNY primarily serves healthcare facilities throughout New York City and the surrounding tri-state area, with select placements available in neighboring states upon request.',
  },
  {
    q: 'What happens if a placed professional is not the right fit for our facility?',
    a: 'We stand behind every placement. If a professional isn\'t the right fit, we\'ll work quickly to find a replacement at no additional cost during the initial placement period.',
  },
  {
    q: 'Can TNY support multi-site or enterprise-level staffing programs?',
    a: 'Yes. We work with multi-site healthcare networks to provide coordinated staffing solutions across multiple locations, with a dedicated account manager for each enterprise partner.',
  },
];

const openIndex = ref<number | null>(null);

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i;
};
</script>

<template>
  <section class="faq">
    <div class="faq__inner">

      <!-- Left: heading -->
      <div class="faq__heading">
        <h2 class="faq__title">Frequently Asked Questions</h2>
        <p class="faq__subtitle">
          Everything employers need to know about partnering with TNY Therapy of New York.
        </p>
        <div class="faq__divider" />
      </div>

      <!-- Right: accordion -->
      <div class="faq__list">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="faq__item"
          :class="{ 'faq__item--open': openIndex === i }"
        >
          <button class="faq__question" @click="toggle(i)" type="button">
            <span class="faq__question-text">{{ item.q }}</span>
            <span class="faq__toggle" :class="{ 'faq__toggle--open': openIndex === i }">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line v-if="openIndex !== i" x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </span>
          </button>

          <Transition name="faq-ans">
            <div v-if="openIndex === i" class="faq__answer">
              <p>{{ item.a }}</p>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  background: rgba($color-sand, 0.04);
  padding: 5rem 7.5rem 6rem;

  @media (max-width: 1200px) { padding: 4rem 2rem 5rem; }
  @media (max-width: 768px)  { padding: 3rem 1.25rem 4rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 4rem;
    align-items: start;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  &__heading {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 8rem;

    @media (max-width: 960px) { position: static; }
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.625rem, 2.5vw, 2rem);
    color: $color-dark;
    line-height: 1.25;
  }

  &__subtitle {
    font-family: $font-body;
    font-size: 1.0625rem;
    color: #6b7280;
    line-height: 1.65;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background: rgba($color-dark, 0.1);
    margin-top: 0.5rem;
  }

  // Accordion list
  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__item {
    background: $color-white;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-radius: 1rem;
    overflow: hidden;
    transition: box-shadow 0.2s;

    &--open {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    }
  }

  &__question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.5rem 1.75rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  &__question-text {
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    line-height: 1.5;
    flex: 1;
  }

  &__toggle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: $color-dark;
    transition: background 0.2s, color 0.2s;

    &--open {
      background: rgba($color-blue, 0.1);
      border-color: rgba($color-blue, 0.2);
      color: $color-blue;
    }
  }

  &__answer {
    padding: 0 1.75rem 1.5rem;

    p {
      font-family: $font-body;
      font-size: 1rem;
      color: #6b7280;
      line-height: 1.7;
    }
  }
}

.faq-ans-enter-active,
.faq-ans-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.faq-ans-enter-from,
.faq-ans-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
