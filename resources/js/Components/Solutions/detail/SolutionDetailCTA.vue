<script setup lang="ts">
import type { SolutionDetail } from '@/interface/Types';
import EditableText from '@/Components/Admin/EditableText.vue';

const props = defineProps<{ solution: SolutionDetail; pageKey: string }>();
</script>

<template>
  <section class="sd-cta">
    <div class="sd-cta__inner">
      <div class="sd-cta__content">
        <EditableText tag="p" class="sd-cta__label" content-key="cta.label" :page="props.pageKey"
          default="Next Steps" />
        <EditableText tag="h2" class="sd-cta__title" content-key="cta.title" :page="props.pageKey"
          :default="`Bring ${props.solution.name.replace(' Staffing', '')} talent to your team`" />
        <EditableText tag="p" class="sd-cta__desc" content-key="cta.desc" :page="props.pageKey"
          default="Tell us about the caseload, setting, and schedule you need to cover. We’ll come back with pre-screened clinicians who fit — usually within a couple of business days." />

        <div class="sd-cta__actions">
          <a href="/requestService" class="sd-cta__btn sd-cta__btn--primary">
            <EditableText tag="span" content-key="cta.employer_cta" :page="props.pageKey" default="Request Staffing" />
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href="/apply" class="sd-cta__btn sd-cta__btn--ghost">
            <EditableText tag="span" content-key="cta.candidate_cta" :page="props.pageKey" default="I’m a Clinician — Apply" />
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sd-cta {
  background: linear-gradient(to bottom, #142235, #1b314a);
  padding: 4.5rem 7.5rem;

  @media (max-width: 1100px) { padding: 3.5rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
  }

  &__content {
    max-width: 46rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
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
    color: rgba($color-white, 0.85);
    line-height: 1.6;
    margin: 0;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.75rem;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    height: 3.25rem;
    padding: 0 2rem;
    border-radius: 80px;
    font-family: $font-heading;
    font-weight: $fw-semibold;
    font-size: 1.0625rem;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.25s, color 0.25s;

    &--primary {
      background: $color-orange;
      color: $color-white;

      &:hover { background: $color-white; color: #0f2b3d; }
    }

    &--ghost {
      background: transparent;
      color: $color-white;
      border: 1px solid rgba($color-white, 0.4);

      &:hover { background: $color-white; color: #0f2b3d; }
    }
  }
}
</style>
