<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
</script>

<template>
  <section class="cand-hero">
    <div class="cand-hero__inner">
      <EditableText tag="h1" class="cand-hero__title" content-key="candidates.hero.title" page="candidates" default="The Flexible Therapy Career You've Been Looking For." />
      <EditableText tag="p" class="cand-hero__subtitle" content-key="candidates.hero.subtitle" page="candidates"
        default="Join a growing community of rehabilitation professionals working where they're needed most—across hospitals, outpatient clinics, skilled nursing facilities, schools, and home healthcare throughout NYC." />
      <a href="#openings" class="cand-hero__btn">
        <EditableText tag="span" content-key="candidates.hero.cta" page="candidates" default="Browse Openings" />
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cand-hero {
  position: relative;
  background: linear-gradient(
    -51.8deg,
    rgb(214, 185, 140) 0.24%,
    rgba(0, 33, 71, 0.9) 61%,
    rgb(0, 33, 71) 99.76%
  );
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 7.5rem 5rem;
  text-align: center;
  overflow: hidden;

  @media (max-width: 1100px) { padding: 8rem 2rem 4rem; }
  @media (max-width: 640px)  { padding: 7rem 1.25rem 3rem; }

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
    gap: 1.5rem;
    max-width: 49.5rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.3rem, 4vw, 3rem);
    line-height: 1.15;
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

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    width: 27.9375rem;
    max-width: 100%;
    border-radius: 80px;
    background: $color-orange;
    color: #0f2b3d;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: $btn-size;
    text-decoration: none;
    transition: background 0.25s;
    margin-top: 0.5rem;

    @media (max-width: 480px) { width: 100%; }

    &:hover { background: darken(#FF9B37, 8%); }
  }
}
</style>
