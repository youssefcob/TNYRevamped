<template>
  <section class="apply-hero">
    <div class="apply-hero__inner">
      <h1 class="apply-hero__title">
        Find Your Next
        <span class="apply-hero__title--blue"> Healthcare Opportunity</span>
      </h1>
      <p class="apply-hero__subtitle">
        Whether you're a Physical Therapist, Occupational Therapist, Speech-Language Pathologist,
        Rehab Aide, Massage Therapist, Acupuncturist, Medical Sales Representative, or Flyer Distributor,
        Therapy of New York can help connect you with rewarding opportunities across New York City.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.apply-hero {
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
