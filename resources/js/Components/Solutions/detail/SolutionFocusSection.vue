<script setup lang="ts">
import type { SolutionDetail } from '@/interface/Types';
import EditableText from '@/Components/Admin/EditableText.vue';

const props = defineProps<{ solution: SolutionDetail; pageKey: string }>();
</script>

<template>
  <section class="sd-focus">
    <div class="sd-focus__inner">
      <div class="sd-focus__header">
        <EditableText tag="p" class="sd-focus__label" content-key="focus.label" :page="props.pageKey"
          default="Clinical Focus" />
        <EditableText tag="h2" class="sd-focus__heading" content-key="focus.heading" :page="props.pageKey"
          default="What our clinicians treat" />
      </div>

      <ul class="sd-focus__list">
        <li v-for="(item, i) in props.solution.focus" :key="i" class="sd-focus__item">
          <svg class="sd-focus__check" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <EditableText tag="span" :content-key="`focus.${i}`" :page="props.pageKey" :default="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sd-focus {
  padding: 4rem 7.5rem;
  background: #f7f4ef;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
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

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 2.5rem;

    @media (max-width: 700px) { grid-template-columns: 1fr; }
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-family: $font-body;
    font-size: 1.0625rem;
    line-height: 1.5;
    color: $color-dark;
    padding: 0.35rem 0;
  }

  &__check {
    flex: 0 0 auto;
    margin-top: 0.15rem;
    color: $color-orange;
  }
}
</style>
