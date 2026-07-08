<template>
  <section class="rs-hero">
    <div class="rs-hero__inner">
      <h1 class="rs-hero__title">
        Request Qualified
        <span class="rs-hero__title--blue"> Healthcare Staff</span>
      </h1>
      <p class="rs-hero__subtitle">
        Whether you need immediate coverage, specialized rehabilitation professionals, or long-term
        staffing support, our team is ready to help you find the right talent for your facility.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.rs-hero {
  position: relative;
  min-height: 34rem;
  background: linear-gradient(-36.6deg, rgb(214,185,140) 0.24%, rgba(0,33,71,0.9) 61%, rgb(0,33,71) 99.76%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
    max-width: 49.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 9rem 1.5rem 4rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.3rem, 4vw, 3rem);
    color: $color-white;
    line-height: 1.2;
    margin: 0;

    &--blue { color: $color-blue; font-size: inherit; line-height: inherit; }
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1.2rem, 1.5vw, 1.25rem);
    color: $color-white;
    line-height: 1.36;
    margin: 0;
  }
}
</style>
