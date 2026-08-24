<template>
  <section class="industries">
    <div class="industries__header">
      <EditableText tag="p" class="section-label" content-key="home.industries.label" page="home" default="Industries" />
      <EditableText tag="h2" class="industries__title" content-key="home.industries.title" page="home" default="Precision Rehab Staffing for Every Healthcare Environment" />
      <EditableText tag="p" class="industries__subtitle" content-key="home.industries.subtitle" page="home"
        default="No matter your staffing needs, we connect healthcare organizations with exceptional therapy professionals ready to make an immediate impact." />
    </div>

    <div class="industries__grid">
      <EditableImage
        content-key="home.industries.center_image" page="home"
        default-src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994268/1_rvf4tg.webp"
        default-object-fit="cover"
        default-alt=""
        aria-hidden="true"
        class="industries__center-img"
      />
      <div class="industries__row" :class="`industries__row--${ri + 1}`" v-for="(row, ri) in rows" :key="ri">
        <div v-for="industry in row" :key="industry.title" class="ind-card"
             :style="{ flex: industry.flex }">
          <div class="ind-card__icon-box">
            <component :is="industry.icon" />
          </div>
          <EditableText tag="h4" class="ind-card__title" :content-key="`home.industries.item.${industry.id}.title`" page="home" :default="industry.title" />
          <EditableText tag="p" class="ind-card__body" :content-key="`home.industries.item.${industry.id}.body`" page="home" :default="industry.body" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue';
import EditableText from '@/Components/Admin/EditableText.vue';
import EditableImage from '@/Components/Admin/EditableImage.vue';

const icon = (path: string) => () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', 'stroke-width': 1.5 }, [
  h('path', { d: path, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
]);

const industries: { id: number; icon: () => any; title: string; body: string; wide: boolean }[] = [
  {
    id: 0,
    icon: icon('M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'),
    title: 'Hospitals & Health Systems',
    body: 'Reliable staffing solutions for acute care, inpatient rehabilitation, and LTACH facilities with complex therapy needs.',
    wide: true,
  },
  {
    id: 1,
    icon: icon('M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'),
    title: 'Schools Settings',
    body: 'Support student success with credentialed therapists for public and private schools, early intervention programs, and special education services.',
    wide: false,
  },
  {
    id: 2,
    icon: icon('M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'),
    title: 'Rehabilitation Centers',
    body: 'Strengthen your therapy team with experienced professionals for both outpatient and inpatient rehabilitation programs.',
    wide: false,
  },
  {
    id: 3,
    icon: icon('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'),
    title: 'Skilled Nursing Facilities',
    body: 'Ensure consistent, compassionate care with therapy professionals experienced in long-term care and subacute rehabilitation.',
    wide: false,
  },
  {
    id: 4,
    icon: icon('M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'),
    title: 'Home Healthcare Agencies',
    body: 'Deliver exceptional care at home with fully credentialed therapists experienced in independent, patient-centered care.',
    wide: false,
  },
  {
    id: 5,
    icon: icon('M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'),
    title: 'Private Practices',
    body: 'Grow your practice with skilled therapists for temporary coverage, contract assignments, or permanent placements.',
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
  ],
];
</script>

<style scoped lang="scss">
$ind-bg: radial-gradient(ellipse at center, #345683 0%, #243c5c 50%, #142235 100%);

.industries {
  padding: 5rem clamp(1rem, 1vw, 7.5rem);
  background: $ind-bg;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1100px) { padding-top: 3rem; padding-bottom: 3rem; }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0rem 5rem;
    @media (max-width: 1100px) { padding: 1rem; }
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
    position: relative;
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

  &__center-img {
    display: none;

    @media (min-width: 901px) {
      display: block;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      // width: 40rem;
      max-width: 50vw;
      height: auto;
      border-radius: 1.25rem;
      z-index: 0;
      pointer-events: none;
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
  position: relative;
  z-index: 1;
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
