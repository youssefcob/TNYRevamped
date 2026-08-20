<script setup lang="ts">
defineProps<{
  title: string;
  description?: string | null;
  image?: string | null;
}>();
</script>

<template>
  <section class="art-hero">
    <div class="art-hero__inner">
      <div class="art-hero__content">
        <h1 class="art-hero__title">{{ title }}</h1>
        <p v-if="description" class="art-hero__subtitle">{{ description }}</p>
      </div>

      <div v-if="image" class="art-hero__image">
        <img :src="image" :alt="title" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.art-hero {
  position: relative;
  background: linear-gradient(
    -51.8deg,
    rgb(214, 185, 140) 0.24%,
    rgba(0, 33, 71, 0.9) 61%,
    rgb(0, 33, 71) 99.76%
  );
  padding: 10rem 7.5rem 5rem;
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
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: stretch;
      gap: 2.5rem;
    }
  }

  &__content {
    flex: 1 1 55%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.1rem, 3.6vw, 2.75rem);
    line-height: 1.2;
    color: $color-white;
    margin: 0;
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1.1rem, 1.4vw, 1.2rem);
    line-height: 1.7;
    color: $color-white;
    margin: 0;
  }

  &__image {
    flex: 0 1 38%;
    width: 100%;
    max-width: 24rem;
    align-self: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: 1.5rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 900px) {
      max-width: 26rem;
    }
  }
}
</style>
