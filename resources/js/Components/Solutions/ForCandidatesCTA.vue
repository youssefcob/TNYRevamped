<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
</script>

<template>
  <section class="sol-cta">
    <div class="sol-cta__inner">
      <!-- <div class="sol-cta__img"></div> -->
      <div class="sol-cta__content">
        <EditableText tag="p" class="sol-cta__label" content-key="solutions.candidates_cta.label" page="solutions" default="For Candidates" />
        <EditableText tag="h2" class="sol-cta__title" content-key="solutions.candidates_cta.title" page="solutions" default="Find Your Next Healthcare Opportunity" />
        <EditableText tag="p" class="sol-cta__desc" content-key="solutions.candidates_cta.desc" page="solutions"
          default="Join a growing network of healthcare professionals working across hospitals, clinics, schools, skilled nursing facilities, and home health settings throughout New York." />
        <a href="/apply" class="sol-cta__btn">
          <EditableText tag="span" content-key="solutions.candidates_cta.cta" page="solutions" default="Apply Now" />
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
              stroke="#0f2b3d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sol-cta {
  background: linear-gradient(to bottom, #142235, #1b314a);
  padding: 3.75rem 7.5rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    gap: 4.25rem;
    align-items: center;

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  &__img {
    flex: 0 0 20.125rem;
    height: 20.9375rem;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #1e4060 0%, #2a6080 100%);

    @media (max-width: 1100px) { flex: 0 0 30%; }
    @media (max-width: 800px)  { flex: 0 0 auto; width: 100%; height: 14rem; }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3vw, 2.5rem);
    color: $color-white;
    line-height: 1.25;
    margin: 0;
  }

  &__desc {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    color: $color-white;
    line-height: 1.55;
    margin: 0;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    height: 3.0625rem;
    padding: 0 2rem;
    background: $color-white;
    color: #0f2b3d;
    border-radius: 80px;
    font-family: $font-heading;
    font-weight: $fw-semibold;
    font-size: 1.125rem;
    text-decoration: none;
    white-space: nowrap;
    align-self: flex-start;
    transition: background 0.25s, color 0.25s;

    &:hover {
      background: $color-orange;
      color: $color-white;

      svg path { stroke: $color-white; }
    }
  }
}
</style>
