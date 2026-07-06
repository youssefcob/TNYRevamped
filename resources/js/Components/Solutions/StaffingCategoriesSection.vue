<script setup lang="ts">
const featuredTop = {
  num: '01',
  title: 'Physical Therapy',
  subtitle: '(PTs & PTAs)',
  desc: 'Helping patients regain movement, strength, function, and confidence.',
  img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp',
};

const gridItems = [
  {
    num: '02',
    title: 'Occupational Therapy (OT & COTA)',
    desc: 'Supporting independence through practical, patient-centered rehabilitation.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994260/Physical_Therapy_PTs_PTAs_588x374_msie7z.webp',
  },
  {
    num: '03',
    title: 'Speech-Language Pathology (SLP)',
    desc: 'Improving communication, cognition, and swallowing function.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994261/Speech-Language_Pathologists_Staffing_384x156_et3xr0.webp',
  },
  {
    num: '04',
    title: 'Pelvic Floor Therapists',
    desc: 'Specialized care that improves quality of life and daily function.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/Pelvic_Floor_Rehabilitation_lovd41.webp',
  },
  {
    num: '05',
    title: 'Lymphedema Therapists',
    desc: 'Focused treatment for swelling management and recovery support.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/lymphedema_therapist_pcmiki.webp',
  },
  {
    num: '06',
    title: 'Neurological Therapists',
    desc: 'Helping patients navigate recovery and maximize functional outcomes.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/Neurological_Therapists_lw6ybl.webp',
  },
  {
    num: '07',
    title: 'Pediatric Therapists',
    desc: 'Supporting developmental milestones and long-term functional success.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994259/PCC_Aides_355x256_ppkic5.webp',
  },
];

const featuredBottom = {
  num: '08',
  title: 'Vestibular Therapists',
  desc: 'Restoring balance, stability, and confidence in movement.',
  img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994259/Vestibular_Therapists_ohzpg8.webp',
};
</script>

<template>
  <section class="sol-cats">
    <div class="sol-cats__container">

      <!-- Section header -->
      <div class="sol-cats__header">
        <p class="sol-cats__label">For Employers</p>
        <h2 class="sol-cats__heading">
          Staffing Categories<br>We Support
        </h2>
      </div>

      <!-- Featured top row: image left, content right -->
      <div class="sol-cats__featured">
        <img :src="featuredTop.img" :alt="featuredTop.title" class="sol-cats__featured-img" />
        <div class="sol-cats__featured-body">
          <span class="sol-cats__num">{{ featuredTop.num }}</span>
          <div class="sol-cats__featured-text">
            <h3 class="sol-cats__item-title">
              {{ featuredTop.title }}<br>
              <span class="sol-cats__item-sub">{{ featuredTop.subtitle }}</span>
            </h3>
            <p class="sol-cats__item-desc">{{ featuredTop.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 3×2 card grid -->
      <div class="sol-cats__grid">
        <div v-for="item in gridItems" :key="item.num" class="sol-cats__card">
          <img :src="item.img" :alt="item.title" class="sol-cats__card-img" />
          <div class="sol-cats__card-body">
            <span class="sol-cats__num">{{ item.num }}</span>
            <div class="sol-cats__card-text">
              <h3 class="sol-cats__item-title sol-cats__item-title--sm">{{ item.title }}</h3>
              <p class="sol-cats__item-desc sol-cats__item-desc--sm">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured bottom row: content left, image right -->
      <div class="sol-cats__featured sol-cats__featured--reversed">
        <div class="sol-cats__featured-body">
          <span class="sol-cats__num">{{ featuredBottom.num }}</span>
          <div class="sol-cats__featured-text">
            <h3 class="sol-cats__item-title">{{ featuredBottom.title }}</h3>
            <p class="sol-cats__item-desc">{{ featuredBottom.desc }}</p>
          </div>
        </div>
        <img :src="featuredBottom.img" :alt="featuredBottom.title" class="sol-cats__featured-img" />
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.sol-cats {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__container {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
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
  }

  &__heading {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3vw, 2.5rem);
    color: $color-dark;
    line-height: 1.25;
    margin: 0;
  }

  &__num {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-orange;
    text-transform: uppercase;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  // ---- Featured rows ----
  &__featured {
    display: flex;
    gap: 1.3125rem;
    align-items: flex-start;


    @media (max-width: 800px) {
      flex-direction: column;
    }

    &--reversed {
      @media (max-width: 800px) {
        flex-direction: column-reverse;
        margin-top: -3.75rem;
      }
    }
  }

  &__featured-img {
    flex: 0 0 36.75rem;
    height: 23.375rem;
    border-radius: 1.5rem;
    object-fit: cover;
    object-position: center;

    @media (max-width: 1100px) { flex: 0 0 45%; }
    @media (max-width: 800px)  { flex: 0 0 auto; width: 100%; height: 16rem; }
  }

  &__featured-body {
    flex: 1;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1.5rem 0;
  }

  &__featured-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  // ---- Grid ----
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.3125rem;

    @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 580px) { grid-template-columns: 1fr; }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__card-img {
    width: 100%;
    height: 19.6875rem;
    border-radius: 1.5rem;
    object-fit: cover;
    object-position: center;
  }

  &__card-body {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1.5rem 0;
  }

  &__card-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  // ---- Item text ----
  &__item-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.5rem;
    color: $color-dark;
    line-height: 1.3;
    margin: 0;

    &--sm { font-size: 1.3rem; }
  }

  &__item-sub {
    font-weight: $fw-bold;
  }

  &__item-desc {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.1rem;
    color: $color-dark;
    line-height: 1.55;
    margin: 0;

    &--sm { font-size: 1rem; }
  }
}
</style>
