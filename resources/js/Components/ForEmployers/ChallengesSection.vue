<template>
  <section class="challenges">
    <div class="challenges__inner">

      <div class="challenges__header">
        <p class="challenges__label">Employer Challenges</p>
        <h2 class="challenges__title">Staffing Challenges Shouldn't Compromise Patient Care</h2>
        <p class="challenges__subtitle">
          Healthcare facilities operate in fast-moving environments where reliable staffing
          directly impacts patient outcomes and operational performance.
        </p>
      </div>

      <div class="challenges__list">
        <div
          v-for="(item, i) in challenges"
          :key="item.number"
          class="challenge-row"
          :class="i % 2 === 0 ? 'challenge-row--normal' : 'challenge-row--flipped'"
        >
          <div class="challenge-row__text">
            <span class="challenge-row__number">{{ item.number }}</span>
            <div class="challenge-row__content">
              <h3 class="challenge-row__title">{{ item.title }}</h3>
              <p class="challenge-row__body">{{ item.body }}</p>
            </div>
          </div>
          <div class="challenge-row__image"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const challenges = [
  {
    number: '01',
    title: 'Last-Minute Callouts',
    body: 'Unexpected absences disrupting schedules and patient continuity.',
  },
  {
    number: '02',
    title: 'Specialized Roles',
    body: 'Difficulty sourcing qualified Pelvic Floor, Lymphedema, and rehab specialists.',
  },
  {
    number: '03',
    title: 'Administrative Burden',
    body: 'Credentialing, onboarding, and compliance processes consume valuable time.',
  },
  {
    number: '04',
    title: 'Inconsistent Quality',
    body: 'Unreliable staffing partners create instability across care teams.',
  },
];
</script>

<style scoped lang="scss">
.challenges {
  background: $color-white;
  padding: 5rem 7.5rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 75rem;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 49.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-orange;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3.5vw, 2.5rem);
    line-height: 1.1;
    color: $color-dark;
  }

  &__subtitle {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.7;
    color: $color-dark;
    margin-top: 0.25rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.challenge-row {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  height: 22.3125rem;

  @media (max-width: 900px) {
    flex-direction: column !important;
    height: auto;
    gap: 1.5rem;
  }

  &--flipped {
    flex-direction: row-reverse;
  }

  &__text {
    flex: 0 0 36.5625rem;
    display: flex;
    align-items: flex-start;
    gap: 3.5rem;

    @media (max-width: 1100px) { flex: 1; gap: 2rem; }
    @media (max-width: 900px)  { flex: none; width: 100%; }
  }

  &__number {
    font-family: $font-heading;
    font-weight: 100;
    font-size: clamp(5rem, 10vw, 9.375rem);
    line-height: 0.8;
    color: #0d1f35;
    opacity: 0.15;
    flex-shrink: 0;
    user-select: none;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0.5rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.375rem, 2.5vw, 2rem);
    line-height: 1.1;
    color: #0d1f35;
  }

  &__body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.65;
    color: $color-dark;
    max-width: 15.375rem;
  }

  &__image {
    flex: 1;
    height: 100%;
    min-height: 16rem;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, rgba($color-blue, 0.25), rgba($color-sand, 0.35));

    @media (max-width: 900px) { width: 100%; min-height: 14rem; }
  }
}
</style>
