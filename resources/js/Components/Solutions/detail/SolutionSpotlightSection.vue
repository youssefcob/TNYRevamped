<script setup lang="ts">
import type { SolutionDetail } from '@/interface/Types';
import EditableText from '@/Components/Admin/EditableText.vue';
import EditableImage from '@/Components/Admin/EditableImage.vue';

const props = defineProps<{ solution: SolutionDetail; pageKey: string }>();
</script>

<template>
  <section class="sd-spotlight">
    <div class="sd-spotlight__inner">
      <div class="sd-spotlight__copy">
        <EditableText tag="p" class="sd-spotlight__label" content-key="spotlight.label" :page="props.pageKey"
          default="Why it matters" />
        <EditableText tag="h2" class="sd-spotlight__heading" content-key="spotlight.heading" :page="props.pageKey"
          :default="`How TNY supports ${props.solution.name} teams`" />
        <EditableText tag="p" class="sd-spotlight__body" content-key="spotlight.body" :page="props.pageKey"
          default="Add the detail that sets this service apart here. Describe the outcomes clients can expect, the standards your talent is held to, and the difference it makes on the ground." />
      </div>

      <EditableImage class="sd-spotlight__img" content-key="spotlight.image" :page="props.pageKey"
        :default-src="props.solution.image" default-object-fit="cover" default-object-position="center"
        :default-alt="props.solution.name" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.sd-spotlight {
  padding: 4rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    gap: 4rem;
    align-items: center;

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 2.5rem;
      align-items: stretch;
    }
  }

  &__copy {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    margin: 0 0 0.5rem;
  }

  &__body {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1rem, 1.2vw, 1.125rem);
    color: rgba($color-dark, 0.8);
    line-height: 1.7;
    margin: 0;
  }

  &__img {
    flex: 0 0 34rem;
    width: 34rem;
    aspect-ratio: 588 / 440;
    height: auto;
    border-radius: 1.5rem;
    object-fit: cover;

    @media (max-width: 1100px) { flex: 0 0 44%; width: 44%; }
    @media (max-width: 900px)  { flex: 0 0 auto; width: 100%; aspect-ratio: 16 / 10; }
  }
}
</style>
