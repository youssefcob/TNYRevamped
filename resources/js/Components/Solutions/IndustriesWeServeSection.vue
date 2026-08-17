<script setup lang="ts">
const industries = [
  {
    title: 'Outpatient Rehabilitation Clinics',
    desc: 'High-volume settings needing fast-paced, highly skilled clinicians.',
  },
  {
    title: 'Hospitals & Health Systems',
    desc: 'Acute/sub-acute settings requiring fast onboarding and specialized expertise.',
  },
  {
    title: 'Skilled Nursing Facilities (SNFs)',
    desc: 'Long-term care facilities needing dedicated geriatric rehab professionals.',
  },
  {
    title: 'Home Health Care Rehab Agencies',
    desc: 'Flexible clinicians delivering 1-on-1 care across all 5 NYC boroughs.',
  },
  {
    title: 'K-12 Schools & Educational Institutions',
    desc: 'Specialized therapists managing IEP requirements and student growth.',
  },
  {
    title: 'Private Practices',
    desc: 'Customized staffing models that align with niche specialties and business expansion.',
  },
];
</script>

<template>
  <section class="ind-serve">
    <div class="ind-serve__container">
      <div class="ind-serve__header">
        <p class="ind-serve__label">Industries We Serve</p>
        <h2 class="ind-serve__heading">Tailored Staffing for Every Healthcare Environment</h2>
        <p class="ind-serve__subtitle">
          Every healthcare setting operates differently. We match top clinical talent to the
          specific operational flow, patient population, and compliance standards of your facility.
        </p>
      </div>

      <div class="ind-serve__grid">
        <div v-for="industry in industries" :key="industry.title" class="ind-serve__card">
          <h3 class="ind-serve__card-title">{{ industry.title }}</h3>
          <p class="ind-serve__card-desc">{{ industry.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ind-serve {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__container {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 45rem;
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

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    color: rgba($color-dark, 0.75);
    line-height: 1.55;
    margin: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 580px) { grid-template-columns: 1fr; }
  }

  &__card {
    border: 1px solid rgba($color-dark, 0.12);
    border-radius: 1.25rem;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    color: $color-dark;
    margin: 0;
  }

  &__card-desc {
    font-family: $font-body;
    font-size: 1rem;
    line-height: 1.55;
    color: rgba($color-dark, 0.75);
    margin: 0;
  }
}
</style>
