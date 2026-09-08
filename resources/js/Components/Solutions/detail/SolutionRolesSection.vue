<script setup lang="ts">
import type { SolutionDetail } from '@/interface/Types';
import EditableText from '@/Components/Admin/EditableText.vue';

const props = defineProps<{ solution: SolutionDetail; pageKey: string }>();
</script>

<template>
  <section class="sd-roles">
    <div class="sd-roles__inner">
      <div class="sd-roles__header">
        <EditableText tag="p" class="sd-roles__label" content-key="roles.label" :page="props.pageKey"
          default="Roles We Staff" />
        <EditableText tag="h2" class="sd-roles__heading" content-key="roles.heading" :page="props.pageKey"
          default="The credentials behind this service" />
      </div>

      <div class="sd-roles__grid">
        <div v-for="(role, i) in props.solution.roles" :key="i" class="sd-roles__card">
          <span class="sd-roles__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <EditableText tag="h3" class="sd-roles__card-title" :content-key="`roles.${i}.title`" :page="props.pageKey"
            :default="role.title" />
          <EditableText tag="p" class="sd-roles__card-desc" :content-key="`roles.${i}.blurb`" :page="props.pageKey"
            :default="role.blurb" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sd-roles {
  padding: 4rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

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

  &__num {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1rem;
    color: $color-orange;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.2rem;
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
