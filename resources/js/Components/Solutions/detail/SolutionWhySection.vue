<script setup lang="ts">
import type { SolutionDetail } from '@/interface/Types';
import EditableText from '@/Components/Admin/EditableText.vue';

const props = defineProps<{ solution: SolutionDetail; pageKey: string }>();
</script>

<template>
  <section class="sd-why">
    <div class="sd-why__inner">
      <div class="sd-why__header">
        <EditableText tag="p" class="sd-why__label" content-key="why.label" :page="props.pageKey"
          default="Why TNY" />
        <EditableText tag="h2" class="sd-why__heading" content-key="why.heading" :page="props.pageKey"
          default="Why facilities partner with us" />
      </div>

      <div class="sd-why__grid">
        <div v-for="(item, i) in props.solution.why" :key="i" class="sd-why__card">
          <span class="sd-why__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="sd-why__card-text">
            <EditableText tag="h3" class="sd-why__card-title" :content-key="`why.${i}.title`" :page="props.pageKey"
              :default="item.title" />
            <EditableText tag="p" class="sd-why__card-desc" :content-key="`why.${i}.desc`" :page="props.pageKey"
              :default="item.desc" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sd-why {
  padding: 4rem 7.5rem 5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem 4rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }

  &__card {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  &__num {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    color: $color-orange;
    flex-shrink: 0;
  }

  &__card-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.15rem;
    color: $color-dark;
    line-height: 1.3;
    margin: 0;
  }

  &__card-desc {
    font-family: $font-body;
    font-size: 1rem;
    line-height: 1.6;
    color: rgba($color-dark, 0.75);
    margin: 0;
  }
}
</style>
