<template>
  <section class="about-team">
    <div class="about-team__inner">
      <div class="about-team__header">
        <p class="about-team__label">Grow With TNY</p>
        <h2 class="about-team__heading">Meet our Team</h2>
        <p class="about-team__subtext">
          Meet the experts connecting exceptional talent with exceptional care.
        </p>
      </div>

      <img
        class="about-team__photo"
        src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp"
        alt="Therapy of New York team"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-team {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__header {
    max-width: 36.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-self: center;
    text-align: center;
    width: 100%;
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
  }

  &__subtext {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
    color: $text-body;
    line-height: 1.7;
    margin: 0;
  }

  &__photo {
    width: 100%;
    height: 33.6875rem;
    border-radius: 2.5rem;
    object-fit: cover;
    object-position: center;

    @media (max-width: 800px) { height: 20rem; }
  }
}
</style>
