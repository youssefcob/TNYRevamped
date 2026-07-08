<template>
  <section class="about-mission">
    <div class="about-mission__inner">

      <!-- Row 1: image left, text right -->
      <div class="about-mission__row">
        <img
          class="about-mission__img about-mission__img--about"
          src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp"
          alt="Therapy of New York team"
        />
        <div class="about-mission__copy">
          <p class="about-mission__label">About Us</p>
          <h2 class="about-mission__heading">Supporting Healthcare Across NYC</h2>
          <p class="about-mission__body">
            More than staffing. More than recruiting. We create meaningful connections between
            rehabilitation professionals and healthcare organizations across New York City—helping
            careers grow, teams thrive, and patient care reach its highest potential.
          </p>
        </div>
      </div>

      <!-- Row 2: text left, map right -->
      <div class="about-mission__row about-mission__row--reversed">
        <div class="about-mission__copy">
          <p class="about-mission__label">Coverage Area</p>
          <h2 class="about-mission__heading">Supporting Healthcare Across NYC</h2>
          <p class="about-mission__body">
            Proudly serving all five boroughs of New York City—Manhattan, Brooklyn, Queens, the
            Bronx, and Staten Island. Connecting healthcare organizations with exceptional
            rehabilitation professionals every day.
          </p>
        </div>
        <img
          class="about-mission__img about-mission__img--map"
          src="https://res.cloudinary.com/dzilc11zf/image/upload/v1783368351/Rectangle_53_eywewf.webp"
          alt="Map of New York City boroughs served"
        />
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.about-mission {
  padding: 10rem 7.5rem 5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 8rem 2rem 4rem; }
  @media (max-width: 640px)  { padding: 7rem 1.25rem 3rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 7.5rem;
  }

  &__row {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    // &--reversed { flex-direction: row-reverse; }

    @media (max-width: 800px) {
      flex-direction: column !important;
      gap: 2rem;
    }
  }

  &__img {
    flex: 0 0 36.75rem;
    width: 36.75rem;
    aspect-ratio: 588 / 277;
    height: auto;
    border-radius: 1.5rem;
    object-fit: cover;
    object-position: center;

    &--about {
      aspect-ratio: 588 / 456;
      object-position: top;
    }

    &--map {
      aspect-ratio: 588 / 456;
    }

    @media (max-width: 1100px) { flex: 0 0 45%; width: 45%; }
    @media (max-width: 800px)  { flex: 0 0 auto; width: 100%; aspect-ratio: 16 / 9; }
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
    margin: 0;
    max-width: 30rem;
  }

  &__body {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
    color: $color-dark;
    line-height: 1.7;
    margin: 0;
  }
}
</style>
