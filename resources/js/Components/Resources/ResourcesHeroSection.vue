<template>
  <section class="res-hero">
    <div class="res-hero__inner">
      <h1 class="res-hero__title">
        Resources For Modern
        <span class="res-hero__title--blue"> Healthcare Teams.</span>
      </h1>
      <p class="res-hero__subtitle">
        Explore educational articles, staffing insights, rehabilitation trends,<br>
        and real-world case studies designed for<br>
        healthcare employers and therapy professionals.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.res-hero {
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

  @media (max-width: 1100px) { padding: 8rem 2rem 5rem; }
  @media (max-width: 640px)  { padding: 7rem 1.25rem 4rem; }

  &__inner {
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
    font-weight: $fw-semibold;
    font-size: clamp(1.2rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: $color-white;
  }
}
</style>
