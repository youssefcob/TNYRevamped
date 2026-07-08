<script setup lang="ts">
const values = [
  {
    title: 'Compassion',
    body: 'We believe every great placement begins with a genuine commitment to improving lives.',
  },
  {
    title: 'Purpose',
    body: 'We connect people with opportunities that create meaningful careers and better patient outcomes.',
  },
  {
    title: 'Excellence',
    body: 'We never settle for "good enough." Every placement is held to the highest clinical standards.',
  },
  {
    title: 'Impact',
    body: "Every therapist we place has the power to change a life. That's a responsibility we take seriously.",
  },
];
</script>

<template>
  <section class="about-values">
    <div class="about-values__inner">
      <div class="about-values__header">
        <p class="about-values__label">Core Values</p>
        <h2 class="about-values__heading">Dream big</h2>
      </div>

      <div class="about-values__grid">
        <div v-for="val in values" :key="val.title" class="about-values__card">
          <div class="about-values__img"></div>
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
  background: $color-white;

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
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__img {
    width: 100%;
    height: 13.6875rem;
    border-radius: 2.5rem;
    background: #d9d9d9;
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.625rem 0;
    text-align: center;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    color: $color-dark;
    margin: 0;
  }

  &__card-text {
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-dark;
    line-height: 1.4;
    margin: 0;
  }
}
</style>
