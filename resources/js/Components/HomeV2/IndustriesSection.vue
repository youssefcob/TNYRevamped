<template>
  <section class="industries">
    <div class="industries__header">
      <p class="section-label">Industries</p>
      <h2 class="industries__title">We Serve Every Healthcare Setting</h2>
      <p class="industries__subtitle">
        From major hospital systems to private practices, our professionals thrive across
        the full continuum of care.
      </p>
    </div>

    <div class="industries__grid">
      <div class="industries__row" :class="`industries__row--${ri + 1}`" v-for="(row, ri) in rows" :key="ri">
        <div v-for="industry in row" :key="industry.title" class="ind-card"
             :style="{ flex: industry.flex }">
          <div class="ind-card__icon-box">
            <component :is="industry.icon" />
          </div>
          <h4 class="ind-card__title">{{ industry.title }}</h4>
          <p class="ind-card__body">{{ industry.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue';

const icon = (path: string) => () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', 'stroke-width': 1.5 }, [
  h('path', { d: path, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
]);

const industries: { icon: () => any; title: string; body: string; wide: boolean }[] = [
  {
    icon: icon('M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'),
    title: 'Hospitals & Health Systems',
    body: 'Acute care, inpatient rehab, and LTACH staffing for large-scale healthcare organizations with complex therapy needs.',
    wide: true,
  },
  {
    icon: icon('M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'),
    title: 'Schools & Educational Settings',
    body: 'Public and private schools, early intervention programs, and special education sites requiring credentialed therapists.',
    wide: false,
  },
  {
    icon: icon('M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'),
    title: 'Rehabilitation Centers',
    body: 'Outpatient and inpatient rehab facilities requiring multidisciplinary therapy teams at every level of care.',
    wide: false,
  },
  {
    icon: icon('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'),
    title: 'Skilled Nursing Facilities',
    body: 'Long-term care and subacute settings requiring consistent, compassionate therapy coverage.',
    wide: false,
  },
  {
    icon: icon('M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'),
    title: 'Home Healthcare Agencies',
    body: 'Visiting therapists for homebound patients — certified, insured, and highly experienced in independent care delivery.',
    wide: false,
  },
  {
    icon: icon('M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'),
    title: 'Private Practices',
    body: 'Solo and group practices looking to expand capacity or find the right permanent addition to their clinical team.',
    wide: false,
  },
];

const rows = [
  [
    { ...industries[2], flex: '0 0 30rem' },
    { ...industries[1], flex: '0 0 30rem' },
  ],
  [
    { ...industries[0], flex: '0 0 40rem' },
    { ...industries[5], flex: '0 0 30rem' },
  ],
  [
    { ...industries[3], flex: 1 },
    { ...industries[4], flex: 2 },
    { ...industries[5], flex: 1 },
  ],
];
</script>

<style scoped lang="scss">
$ind-bg: radial-gradient(ellipse at center, #345683 0%, #243c5c 50%, #142235 100%);

.industries {
  padding: 5rem 7.5rem;
  background: $ind-bg;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, $h2-size-desktop);
    line-height: $h2-line-height;
    color: $color-white;
    max-width: 40rem;
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: clamp($body-size-mobile, 1.5vw, 1rem);
    line-height: $large-line-height;
    color: $color-white;
    max-width: 30rem;
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 7rem;

    @media (max-width: 900px) {
      flex-direction: row;
      gap: 1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 0.75rem;
    }
  }

  &__row {
    display: flex;
    gap: 1rem;

    @media (max-width: 900px) { display: contents; }

    &--1 {
      justify-content: flex-start;
      gap: 1rem;
      padding-left: 5rem;

      .ind-card:last-child { margin-left: auto; margin-right: 10rem; transform: translateY(-5rem); }

      @media (max-width: 900px) {
        padding-left: 0;
        .ind-card:last-child { margin-left: 0; margin-right: 0; transform: none; }
      }
    }
    &--2 {
      justify-content: flex-start;
      gap: 1rem;

      .ind-card:last-child { margin-left: auto; margin-right: 5rem; transform: translateY(-5rem); }

      @media (max-width: 900px) {
        .ind-card:last-child { margin-left: 0; margin-right: 0; transform: none; }
      }
    }
    &--3 { gap: 3rem; }
  }
}

.ind-card {
  background: rgba(255, 255, 255, 0.08);

  @media (max-width: 900px) {
    flex: 0 0 78vw !important;
    scroll-snap-align: start;
  }
  border-radius: 1.25rem;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
  transition: background 0.25s;

&:hover { background: rgba(255, 255, 255, 0.14); }

  &__icon-box {
    width: 3rem;
    height: 3rem;
    background: rgba(255,255,255,0.1);
    border-radius: 0.8125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    color: $color-white;
    line-height: 1.4;
  }

  &__body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.4;
    color: rgba(255,255,255,0.8);
  }
}
</style>
