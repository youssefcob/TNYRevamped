<script setup lang="ts">
import { h } from 'vue';
import EditableText from '@/Components/Admin/EditableText.vue';

const HeartIcon = () => h('svg', { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: '#ee7830', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' }),
]);
const CompassIcon = () => h('svg', { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: '#ee7830', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('circle', { cx: 12, cy: 12, r: 10 }),
  h('path', { d: 'M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z' }),
]);
const StarIcon = () => h('svg', { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: '#ee7830', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z' }),
]);
const RippleIcon = () => h('svg', { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: '#ee7830', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('circle', { cx: 12, cy: 12, r: 2 }),
  h('path', { d: 'M12 5a7 7 0 010 14M12 2a10 10 0 010 20' }),
]);

const values = [
  {
    id: 0,
    icon: HeartIcon,
    title: 'Compassion',
    body: 'We believe every great placement begins with a genuine commitment to improving lives.',
  },
  {
    id: 1,
    icon: CompassIcon,
    title: 'Purpose',
    body: 'We connect people with opportunities that create meaningful careers and better patient outcomes.',
  },
  {
    id: 2,
    icon: StarIcon,
    title: 'Excellence',
    body: 'We never settle for "good enough." Every placement is held to the highest clinical standards.',
  },
  {
    id: 3,
    icon: RippleIcon,
    title: 'Impact',
    body: "Every therapist we place has the power to change a life. That's a responsibility we take seriously.",
  },
];
</script>

<template>
  <section class="about-values">
    <div class="about-values__inner">
      <div class="about-values__header">
        <EditableText tag="p" class="about-values__label" content-key="about.values.label" page="about" default="Core Values" />
        <EditableText tag="h2" class="about-values__heading" content-key="about.values.heading" page="about" default="Dream big" />
      </div>

      <div class="about-values__grid">
        <div v-for="val in values" :key="val.title" class="about-values__card">
          <div class="about-values__icon-wrap">
            <component :is="val.icon" />
          </div>
          <div class="about-values__card-body">
            <EditableText tag="h3" class="about-values__card-title" :content-key="`about.values.item.${val.id}.title`" page="about" :default="val.title" />
            <EditableText tag="p" class="about-values__card-text" :content-key="`about.values.item.${val.id}.body`" page="about" :default="val.body" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-values {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
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
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 560px) { grid-template-columns: 1fr; }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__icon-wrap {
    width: 4.75rem;
    height: 4.75rem;
    border-radius: 50%;
    background: rgba($color-orange, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.625rem 0;
    text-align: center;
  }

  &__card-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    color: $color-dark;
    margin: 0;
  }

  &__card-text {
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-dark;
    line-height: 1.4;
    margin: 0;
  }
}
</style>
