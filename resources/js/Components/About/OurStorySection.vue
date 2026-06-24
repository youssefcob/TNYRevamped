<template>
  <section class="about-story">
    <div class="about-story__inner">

      <div class="about-story__header">
        <p class="about-story__label">Our Story</p>
        <h2 class="about-story__heading">Built To Solve Healthcare<br>Staffing Challenges</h2>
      </div>

      <div class="about-story__content">
        <!-- Sticky image column -->
        <div class="about-story__img-wrap">
          <div class="about-story__img"></div>
        </div>

        <!-- Timeline column -->
        <div class="about-story__timeline">
          <div class="about-story__track"></div>

          <div v-for="(item, i) in milestones" :key="i" class="about-story__milestone">
            <div class="about-story__dot" :class="{ 'about-story__dot--active': i === 0 }"></div>
            <div class="about-story__milestone-body">
              <p class="about-story__year">{{ item.year }}</p>
              <p v-if="item.text" class="about-story__milestone-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const milestones = [
  {
    year: '2019',
    text: 'Founded in 2019, Therapy of New York was created to bridge the gap between highly qualified rehabilitation professionals and healthcare organizations that need dependable staffing support. What started as a local staffing solution has grown into a trusted workforce partner supporting hospitals, outpatient clinics, skilled nursing facilities, schools, and home healthcare providers throughout New York City.',
  },
  {
    year: '2021',
    text: 'Expanded services to include school-based staffing and per diem coverage across all five NYC boroughs, partnering with 30+ facilities in our first major growth phase.',
  },
  {
    year: '2023',
    text: 'Launched our dedicated credentialing and compliance support program, serving over 50 healthcare facilities and growing our active professional network to 300+ therapists.',
  },
  {
    year: 'Today',
    text: 'A trusted workforce partner supporting 100+ facilities with an active network of 500+ credentialed therapy professionals across New York City.',
  },
];
</script>

<style scoped lang="scss">
.about-story {
  background: #0f2b3d;
  padding: 3.75rem 7.5rem 6.25rem;

  @media (max-width: 1100px) { padding: 3rem 2rem 4rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    color: $color-orange;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0;
  }

  &__heading {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3vw, 2.5rem);
    color: $color-white;
    line-height: 1.25;
    margin: 0;
    max-width: 30rem;
  }

  &__content {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;

    @media (max-width: 800px) { flex-direction: column; }
  }

  &__img-wrap {
    flex: 0 0 36.75rem;
    position: sticky;
    top: 6rem;
    align-self: flex-start;

    @media (max-width: 1100px) { flex: 0 0 45%; }
    @media (max-width: 800px)  { position: static; flex: 0 0 auto; width: 100%; }
  }

  &__img {
    width: 100%;
    height: 40rem;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #1e4060 0%, #2a6080 60%, #3a7a99 100%);

    @media (max-width: 800px) { height: 18rem; }
  }

  // ---- Timeline ----
  &__timeline {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-left: 2rem;

    @media (max-width: 800px) { padding-left: 1.5rem; }
  }

  &__track {
    position: absolute;
    left: 0.9rem;
    top: 0.9rem;
    bottom: 0.9rem;
    width: 1px;
    background: rgba(255, 255, 255, 0.2);
    border-left: 1px dashed rgba(255, 255, 255, 0.3);
  }

  &__milestone {
    display: flex;
    gap: 1.0625rem;
    align-items: flex-start;
    position: relative;
  }

  &__dot {
    position: absolute;
    left: -2rem;
    top: 0.625rem;
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.4);
    flex-shrink: 0;

    &--active {
      background: $color-orange;
      border-color: $color-orange;
    }

    @media (max-width: 800px) { left: -1.5rem; }
  }

  &__milestone-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__year {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    color: $color-white;
    line-height: 1;
    margin: 0;
  }

  &__milestone-text {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(0.9375rem, 1.3vw, 1.125rem);
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
  }
}
</style>
