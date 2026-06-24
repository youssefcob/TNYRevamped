<script setup lang="ts">
const featuredTop = {
  num: '01',
  title: 'Physical Therapy',
  subtitle: '(PTs & PTAs)',
  desc: 'Licensed Physical Therapists and PTAs delivering care across hospitals, outpatient clinics, schools, skilled nursing facilities, and home healthcare settings throughout New York City.',
};

const gridItems = [
  {
    num: '02',
    title: 'Occupational Therapy',
    subtitle: '(OTs & COTAs)',
    desc: 'Occupational Therapists and Certified OT Assistants helping patients regain independence in daily living skills across pediatric, adult, and geriatric care settings.',
  },
  {
    num: '03',
    title: 'Speech-Language Pathologists',
    desc: 'Board-certified SLPs providing evidence-based therapy for communication, language, voice, fluency, and swallowing disorders in schools, clinics, and acute care environments.',
  },
  {
    num: '04',
    title: 'School-Based Staffing',
    desc: 'Specialized therapists, school psychologists, and paraprofessionals for K–12 schools, early intervention programs, and special education settings across all five boroughs.',
  },
  {
    num: '05',
    title: 'Home Health & Personal Care',
    desc: 'Compassionate caregivers, home health aides, and personal care attendants supporting patients in their homes with daily living activities and health monitoring.',
  },
  {
    num: '06',
    title: 'Per Diem & Emergency Coverage',
    desc: 'Rapid-response staffing for last-minute coverage needs, sick-day replacements, and seasonal surge demands — skilled professionals available on short notice.',
  },
  {
    num: '07',
    title: 'Administrative & Support Staff',
    desc: 'Experienced medical receptionists, care coordinators, and administrative professionals to keep your front office running smoothly and your patients well-supported.',
  },
];

const featuredBottom = {
  num: '08',
  title: 'Credentialing Support',
  desc: 'Comprehensive credentialing, compliance management, and onboarding support for your clinical staff — reducing administrative burden so your team can focus on delivering exceptional patient care.',
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
        <div class="sol-cats__featured-img"></div>
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
          <div class="sol-cats__card-img"></div>
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
        <div class="sol-cats__featured-img"></div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
$hero-img-bg: linear-gradient(135deg, #b8d4e8 0%, #8ab9d4 100%);

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
    align-items: center;

    &--reversed {
      flex-direction: row-reverse;
    }

    @media (max-width: 800px) {
      flex-direction: column !important;
    }
  }

  &__featured-img {
    flex: 0 0 36.75rem;
    height: 23.375rem;
    border-radius: 1.5rem;
    background: $hero-img-bg;

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
    background: $hero-img-bg;
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
