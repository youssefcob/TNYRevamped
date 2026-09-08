<script setup lang="ts">
import type { SolutionDetail } from '@/interface/Types';
import EditableText from '@/Components/Admin/EditableText.vue';

const props = defineProps<{ solution: SolutionDetail; pageKey: string }>();
</script>

<template>
  <section class="sd-settings">
    <div class="sd-settings__inner">
      <div class="sd-settings__header">
        <EditableText tag="p" class="sd-settings__label" content-key="settings.label" :page="props.pageKey"
          default="Where They Work" />
        <EditableText tag="h2" class="sd-settings__heading" content-key="settings.heading" :page="props.pageKey"
          default="Settings we place into" />
      </div>

      <div class="sd-settings__grid">
        <div v-for="(setting, i) in props.solution.settings" :key="i" class="sd-settings__card">
          <EditableText tag="h3" class="sd-settings__card-title" :content-key="`settings.${i}.title`" :page="props.pageKey"
            :default="setting.title" />
          <EditableText tag="p" class="sd-settings__card-desc" :content-key="`settings.${i}.desc`" :page="props.pageKey"
            :default="setting.desc" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sd-settings {
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media (max-width: 700px) { grid-template-columns: 1fr; }
  }

  &__card {
    border: 1px solid rgba($color-dark, 0.12);
    border-radius: 1.25rem;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.2rem;
    color: $color-dark;
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
