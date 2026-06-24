<template>
  <section class="why">
    <div class="why__header">
      <p class="section-label">Why Therapy of New York</p>
      <h2 class="why__title">Built on Trust. Delivered with Speed.</h2>
      <p class="why__subtitle">
        We operate with a different model — relationship-driven, quality-first, and deeply
        specialized in therapy staffing.
      </p>
    </div>

    <div class="why__stats_grid_wrapper">
      <!-- Stats strip -->
      <div class="why__stats">
        <div v-for="stat in stats" :key="stat.label" class="why__stat">
          <span class="why__stat-value">{{ stat.value }}<span class="why__stat-suffix">{{ stat.suffix }}</span></span>
          <span class="why__stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <!-- Feature grid -->
      <div class="why__grid">
        <div v-for="feat in features" :key="feat.title" class="why__feature">
          <div class="why__icon-box">
            <component :is="feat.icon" />
          </div>
          <h4 class="why__feat-title">{{ feat.title }}</h4>
          <p class="why__feat-body">{{ feat.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue';

const stats = [
  { value: '500', suffix: '+', label: 'Successful Placements' },
  { value: '98', suffix: '%', label: 'Client Satisfaction Rate' },
  { value: '24', suffix: 'h', label: 'Emergency Response Time' },
  { value: '10', suffix: '+', label: 'Years of Experience' },
];

const BoltIcon = () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#222222', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' }),
]);
const GlobeIcon = () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#222222', 'stroke-width': 2 }, [
  h('circle', { cx: 12, cy: 12, r: 10 }),
  h('path', { d: 'M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20' }),
]);
const ShieldIcon = () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#222222', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
  h('path', { d: 'M9 12l2 2 4-4' }),
]);
const GearIcon = () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#222222', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('circle', { cx: 12, cy: 12, r: 3 }),
  h('path', { d: 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z' }),
]);
const MagnifyIcon = () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#222222', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('circle', { cx: 11, cy: 11, r: 8 }),
  h('path', { d: 'M21 21l-4.35-4.35' }),
]);
const HeartIcon = () => h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#222222', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' }),
]);

const features = [
  { icon: BoltIcon, title: 'Fast Placements', body: 'From intake to placement in as little as 24 hours. Our network of pre-vetted professionals is always ready.' },
  { icon: GlobeIcon, title: 'Multilingual Professionals', body: 'Spanish, Mandarin, Russian, and more. We match your patient demographics with culturally competent therapists.' },
  { icon: ShieldIcon, title: 'Compliance Support', body: 'Every professional is fully credentialed, background-checked, and compliant with Joint Commission standards.' },
  { icon: GearIcon, title: 'Flexible Staffing Models', body: 'Per diem, part-time, full-time, and contract arrangements to match your specific operational needs.' },
  { icon: MagnifyIcon, title: 'Quality Screening', body: 'Rigorous clinical assessments, reference checks, and skills validation before any candidate is presented.' },
  { icon: HeartIcon, title: 'Dedicated Support', body: 'A dedicated account manager for every client — proactive communication, not just reactive problem-solving.' },
];
</script>

<style scoped lang="scss">
.why {
  padding: 5rem 7.5rem;
  background: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  @media (max-width: 1100px) {
    padding: 3rem 2rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    // max-width: 56.25rem;
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
    font-size: clamp($body-size-mobile, 1.5vw, $large-size-desktop);
    line-height: $large-line-height;
    color: $color-dark;
  }

  &__stats_grid_wrapper {
    @media screen and (min-width: 900px) {
      padding: 0 12rem;
    }

    overflow-x: auto;
  }

  &__stats {
    display: flex;
    width: 100%;
    background: #132338;
    border: 0.8px solid rgba(255, 255, 255, 0.07);
    border-radius: 1.25rem;
    padding: 2rem 2.5rem;
    margin-bottom:2rem;

    @media (max-width: 640px) {
      flex-wrap: wrap;
      gap: 1.5rem;
    }
  }

  &__stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    padding: 0 1rem;
    

    &:not(:last-child) {
      border-right: 0.8px solid rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 640px) {
      flex: 1 0 40%;
      border-right: none !important;
    }
  }

  &__stat-value {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.75rem, 3vw, 2.6rem);
    color: $color-white;
    line-height: 1;
  }

  &__stat-suffix {
    color: #2dbfad;
    font-size: 2rem;
  }

  &__stat-label {
    font-family: $font-body;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
    }
  }

  &__feature {
    padding: 2.25rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border-right: 0.8px solid rgba(0, 0, 0, 0.07);
    border-bottom: 0.8px solid rgba(0, 0, 0, 0.07);

    &:nth-child(3n) {
      border-right: none;
    }

    &:nth-last-child(-n+3) {
      border-bottom: none;
    }

    @media (max-width: 900px) {
      &:nth-child(3n) {
        border-right: 0.8px solid rgba(0, 0, 0, 0.07);
      }

      &:nth-child(2n) {
        border-right: none;
      }

      &:nth-last-child(-n+3) {
        border-bottom: 0.8px solid rgba(0, 0, 0, 0.07);
      }

      &:nth-last-child(-n+2) {
        border-bottom: none;
      }
    }
  }

  &__icon-box {
    width: 2.75rem;
    height: 2.75rem;
    background: rgba(45, 191, 173, 0.12);
    border: 0.8px solid rgba(45, 191, 173, 0.2);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__feat-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    color: $color-dark;
  }

  &__feat-body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.4;
    color: $color-dark;
  }
}
</style>
