<script setup lang="ts">
import type { SolutionDetail } from '@/interface/Types';
import EditableText from '@/Components/Admin/EditableText.vue';

const props = defineProps<{ solution: SolutionDetail; pageKey: string }>();
</script>

<template>
  <section class="sd-hero">
    <div class="sd-hero__inner">
      <EditableText tag="p" class="sd-hero__eyebrow" content-key="hero.eyebrow" :page="props.pageKey"
        :default="props.solution.eyebrow" />
      <EditableText tag="h1" class="sd-hero__title" content-key="hero.title" :page="props.pageKey"
        :default="props.solution.title" />
      <EditableText tag="p" class="sd-hero__intro" content-key="hero.intro" :page="props.pageKey"
        :default="props.solution.intro" />
      <a href="/requestService" class="sd-hero__btn">
        <EditableText tag="span" content-key="hero.cta" :page="props.pageKey" default="Request This Staffing" />
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
          <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sd-hero {
  position: relative;
  min-height: 30rem;
  background: linear-gradient(-36.6deg, rgb(214, 185, 140) 0.24%, rgba(0, 33, 71, 0.9) 61%, rgb(0, 33, 71) 99.76%);
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.8;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  &__inner {
    position: relative;
    z-index: 1;
    max-width: 75rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 9rem 7.5rem 4rem;

    @media (max-width: 1100px) { padding: 8rem 2rem 3.5rem; }
  }

  &__eyebrow {
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
    font-size: clamp(2.3rem, 4vw, 3rem);
    color: $color-white;
    line-height: 1.2;
    margin: 0;
    max-width: 40rem;
  }

  &__intro {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    color: $color-white;
    line-height: 1.5;
    margin: 0;
    max-width: 44rem;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    height: 3.75rem;
    padding: 0 2.5rem;
    margin-top: 0.75rem;
    background: $color-orange;
    color: $color-white;
    border-radius: 80px;
    font-family: $font-heading;
    font-weight: $fw-semibold;
    font-size: 1.125rem;
    text-decoration: none;
    white-space: nowrap;
    align-self: flex-start;
    transition: background 0.25s;

    &:hover { background: #0f2b3d; }
  }
}
</style>
