<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
</script>

<template>
  <section class="res-hero">
    <div class="res-hero__inner">
      <EditableText tag="h1" class="res-hero__title" content-key="resources.hero.title" page="resources" default="Resources For Modern Healthcare Teams." />
      <EditableText tag="p" class="res-hero__subtitle" content-key="resources.hero.subtitle" page="resources"
        default="Explore educational articles, staffing insights, rehabilitation trends, and real-world case studies designed for healthcare employers and therapy professionals." />
    </div>
  </section>
</template>

<style scoped lang="scss">
.res-hero {
  position: relative;
  background: linear-gradient(
    -36.6deg,
    rgb(214, 185, 140) 0.24%,
    rgba(0, 33, 71, 0.9) 61%,
    rgb(0, 33, 71) 99.76%
  );
  min-height: 545px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 7.5rem 6rem;
  text-align: center;
  overflow: hidden;

  @media (max-width: 1100px) { padding: 8rem 2rem 5rem; }
  @media (max-width: 640px)  { padding: 7rem 1.25rem 4rem; }

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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    max-width: 49.5rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.3rem, 4vw, 3rem);
    line-height: 1.2;
    color: $color-white;

    &--blue { color: $color-blue; font-size: inherit; line-height: inherit; }
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1.2rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: $color-white;
  }
}
</style>
