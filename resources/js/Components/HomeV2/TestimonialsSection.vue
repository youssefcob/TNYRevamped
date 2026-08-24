<script setup lang="ts">
import { ref } from 'vue';
import EditableText from '@/Components/Admin/EditableText.vue';

const active = ref(0);

const testimonials = [
  {
    quote: '"TNY Staffing Corporation  filled three PT positions within 48 hours when our census spiked unexpectedly. Every clinician they sent was credentialed, professional, and hit the ground running. We\'ve made them our primary staffing partner."',
    name: 'Michelle R.',
    title: 'Director of Rehab Services · Brooklyn Medical Center',
    initials: 'MR',
    color: '#1e3a4a',
  },
  {
    quote: '"As a bilingual SLP, I struggled to find positions that valued my Spanish skills. TNY Staffing Corporation  matched me with a school that specifically needed Spanish-speaking clinicians. It was the right fit from day one."',
    name: 'Carlos M., MS CCC-SLP',
    title: 'Speech-Language Pathologist · Queens, NY',
    initials: 'CM',
    color: '#2d4a3e',
  },
  {
    quote: '"We\'ve worked with multiple staffing agencies over the years. None have matched the responsiveness and quality of TNY Staffing Corporation . Our dedicated account manager actually understands rehab operations — that\'s a huge difference."',
    name: 'Patricia L.',
    title: 'Administrator · Sunrise Skilled Nursing',
    initials: 'PL',
    color: '#3a2d1e',
  },
];

const next = () => { active.value = (active.value + 1) % testimonials.length; };
const prev = () => { active.value = (active.value - 1 + testimonials.length) % testimonials.length; };
</script>

<template>
  <section class="testimonials">
    <div class="testimonials__header">
      <EditableText tag="p" class="section-label" content-key="home.testimonials.label" page="home" default="Testimonials" />
      <EditableText tag="h2" class="testimonials__title" content-key="home.testimonials.title" page="home" default="What Our Partners Say" />
      <EditableText tag="p" class="testimonials__subtitle" content-key="home.testimonials.subtitle" page="home"
        default="From the facilities we staff to the therapists we place — real voices, real results." />
    </div>

    <!-- Featured quote -->
    <div class="testimonials__featured">
      <svg class="testimonials__quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF9B37" stroke-width="1.5">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
      </svg>
      <EditableText tag="p" class="testimonials__featured-quote" :content-key="`home.testimonials.${active}.quote`" page="home" :default="testimonials[active].quote" />
      <div class="testimonials__featured-author">
        <div class="testimonials__avatar" :style="{ background: testimonials[active].color }">
          {{ testimonials[active].initials }}
        </div>
        <div>
          <EditableText tag="p" class="testimonials__author-name" :content-key="`home.testimonials.${active}.name`" page="home" :default="testimonials[active].name" />
          <EditableText tag="p" class="testimonials__author-role" :content-key="`home.testimonials.${active}.title`" page="home" :default="testimonials[active].title" />
          <div class="testimonials__stars">
            <span v-for="n in 5" :key="n">★</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards row -->
    <div class="testimonials__cards">
      <div v-for="(t, i) in testimonials" :key="i" class="test-card" :class="{ 'test-card--active': i === active }" @click="active = i">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF9B37" stroke-width="1.5">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
        </svg>
        <EditableText tag="p" class="test-card__quote" :content-key="`home.testimonials.${i}.quote`" page="home" :default="t.quote" />
        <div class="test-card__author">
          <div class="testimonials__avatar testimonials__avatar--sm" :style="{ background: t.color }">
            {{ t.initials }}
          </div>
          <div>
            <EditableText tag="p" class="test-card__name" :content-key="`home.testimonials.${i}.name`" page="home" :default="t.name" />
            <EditableText tag="p" class="test-card__role" :content-key="`home.testimonials.${i}.title`" page="home" :default="t.title" />
            <div class="testimonials__stars testimonials__stars--sm">
              <span v-for="n in 5" :key="n">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="testimonials__nav">
      <button class="testimonials__arrow" @click="prev" aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <div class="testimonials__dots">
        <button v-for="(_, i) in testimonials" :key="i"
          class="testimonials__dot"
          :class="{ 'testimonials__dot--active': i === active }"
          :aria-label="`Go to testimonial ${i + 1}`"
          :aria-current="i === active ? 'true' : undefined"
          @click="active = i" />
      </div>
      <button class="testimonials__arrow testimonials__arrow--active" @click="next" aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.testimonials {
  padding: 5rem 7.5rem;
  background: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, $h2-size-desktop);
    line-height: $h2-line-height;
    color: $color-dark;
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: clamp($body-size-mobile, 1.5vw, 1rem);
    line-height: $large-line-height;
    color: $color-dark;
    max-width: 27.5rem;
  }

  &__featured {
    width: 100%;
    border-radius: 2.5rem;
    padding: 3rem 3.5rem;
    background: linear-gradient(180deg, rgba($color-sand, 0.25) 0%, rgba($color-blue, 0.25) 100%);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 640px) { padding: 2rem 1.5rem; }
  }

  &__quote-icon { flex-shrink: 0; }

  &__featured-quote {
    font-family: $font-body;
    font-style: italic;
    font-weight: $fw-bold;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.75;
    color: $color-dark;
    max-width: 51.25rem;
  }

  &__featured-author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__avatar {
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 0.8rem;
    color: $color-white;
    letter-spacing: 0.04em;
    flex-shrink: 0;

    &--sm {
      width: 2.875rem;
      height: 2.875rem;
    }
  }

  &__author-name {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 0.95rem;
    color: #0f2b3d;
  }

  &__author-role {
    font-family: $font-body;
    font-size: 0.8rem;
    color: #0f2b3d;
  }

  &__stars {
    display: flex;
    gap: 2px;
    color: $color-orange;
    font-size: 0.75rem;
    margin-top: 0.25rem;

    &--sm { font-size: 0.65rem; }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__arrow {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    border: 0.8px solid #d1d5db;
    background: none;
    color: $color-dark;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &--active { border-color: $color-orange; color: $color-orange; }
    &:hover { border-color: $color-orange; color: $color-orange; }
  }

  &__dots {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  &__dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 99px;
    background: #d1d5db;
    border: none;
    cursor: pointer;
    transition: all 0.25s;

    &--active {
      background: $color-orange;
      width: 1.5rem;
    }
  }
}

.test-card {
  background: $color-white;
  border-radius: 1.25rem;
  padding: 1.75rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: box-shadow 0.25s;

  &--active { box-shadow: 0 0 0 1.5px $color-teal, 0 4px 10px rgba(#2d7a6e, 0.15); }
  &:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }

  &__quote {
    font-family: $font-body;
    font-style: italic;
    font-size: 1rem;
    line-height: 1.4;
    color: $color-dark;
    flex: 1;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  &__name {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 0.82rem;
    color: #0f2b3d;
  }

  &__role {
    font-family: $font-body;
    font-size: 0.73rem;
    color: $color-dark;
  }
}
</style>
