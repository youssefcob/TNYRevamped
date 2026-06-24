<template>
  <section class="about-mission">
    <div class="about-mission__inner">

      <!-- Row 1: image left, text right -->
      <div class="about-mission__row">
        <div class="about-mission__img"></div>
        <div class="about-mission__copy">
          <p class="about-mission__label">About Us</p>
          <h2 class="about-mission__heading">Supporting Healthcare Across NYC</h2>
          <p class="about-mission__body">
            Therapy of New York is a healthcare staffing agency specializing in rehabilitation and
            support professionals. We work closely with hospitals, outpatient clinics, skilled nursing
            facilities, schools, and home health providers to ensure they always have the qualified
            staff they need.
          </p>
          <p class="about-mission__body">
            Our rigorous screening, credential verification, and placement process means every
            professional we place meets the highest clinical and compliance standards — giving
            facility administrators confidence and patients the best possible care.
          </p>
          <p class="about-mission__body">
            Whether you need temporary coverage, per diem staffing, or a permanent placement, we
            move quickly and thoughtfully to match the right professional to your specific needs.
          </p>
        </div>
      </div>

      <!-- Row 2: text left, map right -->
      <div class="about-mission__row about-mission__row--reversed">
        <div class="about-mission__copy">
          <p class="about-mission__label">Coverage Area</p>
          <h2 class="about-mission__heading">Serving All Five Boroughs</h2>
          <p class="about-mission__body">
            Our network of healthcare professionals spans every borough of New York City — Manhattan,
            Brooklyn, Queens, The Bronx, and Staten Island — as well as select facilities in the
            greater NYC metropolitan area.
          </p>
          <p class="about-mission__body">
            From large academic medical centers to community clinics, we understand the unique
            staffing pressures each setting faces and tailor our approach accordingly.
          </p>
          <p class="about-mission__body">
            Our local roots and deep community relationships allow us to respond faster and place
            better-matched professionals than national staffing firms.
          </p>
        </div>
        <div class="about-mission__img about-mission__img--map"></div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.about-mission {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

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

    &--reversed { flex-direction: row-reverse; }

    @media (max-width: 800px) {
      flex-direction: column !important;
      gap: 2rem;
    }
  }

  &__img {
    flex: 0 0 36.75rem;
    height: 28.5rem;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #b8d4e8 0%, #8ab9d4 100%);

    &--map {
      background: linear-gradient(135deg, #c8dde8 0%, #9ac0d8 50%, #b8d4e8 100%);
    }

    @media (max-width: 1100px) { flex: 0 0 45%; }
    @media (max-width: 800px)  { flex: 0 0 auto; width: 100%; height: 18rem; }
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
