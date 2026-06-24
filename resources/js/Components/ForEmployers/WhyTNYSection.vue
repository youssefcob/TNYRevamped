<template>
  <section class="why-tny">
    <div class="why-tny__inner">

      <div class="why-tny__header">
        <p class="why-tny__label">Why TNY</p>
        <h2 class="why-tny__title">Why Healthcare Facilities Choose TNY</h2>
        <p class="why-tny__subtitle">
          Healthcare facilities operate in fast-moving environments where reliable staffing
          directly impacts patient outcomes and operational performance.
        </p>
      </div>

      <!-- Top row: dark feature card + image -->
      <div class="why-tny__top-row">
        <div class="why-tny__feature-card">
          <p class="why-tny__feature-label">Rapid Deployment</p>
          <h3 class="why-tny__feature-title">Fast Staffing Support<br />Without Sacrificing Quality</h3>
          <p class="why-tny__feature-body">
            Our staffing team responds quickly to urgent operational needs while maintaining
            rigorous screening and credential verification standards.
          </p>
          <div class="why-tny__stats">
            <div class="why-tny__stat">
              <span class="why-tny__stat-value">98<span class="why-tny__stat-suffix">%</span></span>
              <span class="why-tny__stat-label">Client Satisfaction Rate</span>
            </div>
            <div class="why-tny__stat">
              <span class="why-tny__stat-value">24<span class="why-tny__stat-suffix">h</span></span>
              <span class="why-tny__stat-label">Emergency Response Time</span>
            </div>
          </div>
        </div>
        <div class="why-tny__image"></div>
      </div>

      <!-- Bottom row: 3 sand cards -->
      <div class="why-tny__cards">
        <div v-for="card in cards" :key="card.title" class="why-tny__card">
          <h3 class="why-tny__card-title">{{ card.title }}</h3>
          <p class="why-tny__card-body">{{ card.body }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Rigorous Screening',
    body: 'Every clinician is evaluated for licensing, experience, compliance, and role alignment.',
  },
  {
    title: 'Specialized Talent',
    body: 'Access highly qualified PTs, OTs, SLPs, PTAs, COTAs, and rehab aides.',
  },
  {
    title: 'Flexible Staffing',
    body: 'Per diem, contract, temp-to-hire, and ongoing workforce support.',
  },
];
</script>

<style scoped lang="scss">
.why-tny {
  background: $color-white;
  padding: 5rem 7.5rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 75rem;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    max-width: 55.875rem;
    margin: 0 auto 1rem;
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
    text-align: center;
  }

  &__top-row {
    display: flex;
    gap: 1.5rem;
    align-items: stretch;

    @media (max-width: 900px) { flex-direction: column; }
  }

  &__feature-card {
    flex: 0 0 49.5rem;
    background: #0f2b3d;
    border-radius: 1.5rem;
    padding: 2.375rem 2.875rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 1100px) { flex: 1; padding: 2rem; }
  }

  &__feature-label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-orange;
  }

  &__feature-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.375rem, 2.5vw, 2rem);
    line-height: 1.15;
    color: $color-white;
  }

  &__feature-body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba($color-white, 0.85);
    max-width: 43.75rem;
  }

  &__stats {
    display: flex;
    align-items: center;
    gap: 0;
    margin-top: 0.5rem;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    padding: 0 1rem;
    flex: 1;

    &:first-child {
      padding-left: 0;
      border-right: 0.8px solid rgba(255,255,255,0.08);
    }
  }

  &__stat-value {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 2rem;
    color: $color-white;
    line-height: 1;
  }

  &__stat-suffix {
    color: #2dbfad;
  }

  &__stat-label {
    font-family: $font-body;
    font-size: 1rem;
    color: rgba($color-white, 0.45);
    text-align: center;
  }

  &__image {
    flex: 1;
    min-height: 22rem;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, rgba($color-blue, 0.25), rgba($color-sand, 0.35));

    @media (max-width: 900px) { min-height: 14rem; }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    background: rgba($color-sand, 0.2);
    border-radius: 1.5rem;
    padding: 1.5rem 2.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 13.3125rem;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.25rem, 2vw, 2rem);
    line-height: 1.1;
    color: $color-dark;
  }

  &__card-body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.7;
    color: $color-dark;
  }
}
</style>
