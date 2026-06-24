<script setup lang="ts">
const values = [
  {
    icon: '★',
    title: 'Excellence in Care',
    body: 'Every placement meets the highest clinical and compliance standards. We verify credentials, check references, and ensure each professional is truly ready to deliver.',
  },
  {
    icon: '◆',
    title: 'Integrity First',
    body: 'Transparent communication and honest relationships are the foundation of everything we do — with our clients, our candidates, and each other.',
  },
  {
    icon: '♥',
    title: 'Community Focus',
    body: "We're proud to serve New York City's healthcare community, investing in the professionals and the facilities that keep it running.",
  },
  {
    icon: '⚡',
    title: 'Agility',
    body: 'Healthcare staffing moves fast. We respond quickly, adapt readily, and always deliver — even when timelines are tight and stakes are high.',
  },
];
</script>

<template>
  <section class="about-values">
    <div class="about-values__inner">
      <div class="about-values__header">
        <p class="about-values__label">Core Values</p>
        <h2 class="about-values__heading">What Drives Us</h2>
      </div>

      <div class="about-values__grid">
        <div v-for="val in values" :key="val.title" class="about-values__card">
          <div class="about-values__icon-wrap">
            <span class="about-values__icon">{{ val.icon }}</span>
          </div>
          <div class="about-values__card-body">
            <h3 class="about-values__card-title">{{ val.title }}</h3>
            <p class="about-values__card-text">{{ val.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-values {
  padding: 5rem 7.5rem;
  background: rgba($color-sand, 0.08);

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
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
    color: $color-dark;
    line-height: 1.25;
    margin: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 560px) { grid-template-columns: 1fr; }
  }

  &__card {
    background: $color-white;
    border-radius: 2.5rem;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__icon-wrap {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1rem;
    background: rgba($color-navy, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    font-size: 1.5rem;
    color: $color-navy;
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    color: $color-dark;
    margin: 0;
  }

  &__card-text {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1rem;
    color: $text-body;
    line-height: 1.6;
    margin: 0;
  }
}
</style>
