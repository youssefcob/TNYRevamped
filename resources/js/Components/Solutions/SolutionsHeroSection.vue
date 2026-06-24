<template>
  <section class="sol-hero">
    <div class="sol-hero__inner">
      <h1 class="sol-hero__title">
        Healthcare
        <span class="sol-hero__title--blue"> Staffing Solutions</span>
      </h1>
      <p class="sol-hero__subtitle">
        Connecting healthcare facilities with highly qualified rehabilitation professionals
        and support staff across New York City.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sol-hero {
  min-height: 34rem;
  background: linear-gradient(-36.6deg, rgb(214,185,140) 0.24%, rgba(0,33,71,0.9) 61%, rgb(0,33,71) 99.76%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &__inner {
    max-width: 49.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 9rem 1.5rem 4rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.25rem, 4vw, 3rem);
    color: $color-white;
    line-height: 1.2;
    margin: 0;

    &--blue { color: $color-blue; }
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    color: $color-white;
    line-height: 1.36;
    margin: 0;
  }
}
</style>
