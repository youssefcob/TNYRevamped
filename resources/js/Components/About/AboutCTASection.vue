<template>
  <section class="about-cta">

    <div class="about-cta__half about-cta__half--dark">
      <div class="about-cta__content">
        <h2 class="about-cta__heading about-cta__heading--white">For Employers</h2>
        <p class="about-cta__body about-cta__body--white">
          Access qualified rehabilitation professionals and staffing support tailored
          to your facility's needs, timeline, and care setting.
        </p>
        <a href="/requestService" class="about-cta__btn about-cta__btn--orange">Hire Staff</a>
      </div>
    </div>

    <div class="about-cta__half about-cta__half--sand">
      <div class="about-cta__content">
        <h2 class="about-cta__heading">For Candidates</h2>
        <p class="about-cta__body">
          Discover flexible opportunities across healthcare settings throughout
          New York City — matched to your specialty, schedule, and goals.
        </p>
        <a href="/apply" class="about-cta__btn about-cta__btn--white">Find Jobs</a>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
.about-cta {
  display: flex;

  @media (max-width: 700px) { flex-direction: column; }

  &__half {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 4.625rem 7.5rem;

    &--dark { background: #0f2b3d; }
    &--sand { background: rgba($color-sand, 0.2); }

    @media (max-width: 1100px) { padding: 3rem 2rem; }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 3.625rem;
    max-width: 30.5rem;
    width: 100%;
  }

  &__heading {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3vw, 2.5rem);
    color: $color-dark;
    line-height: 1.25;
    margin: 0;

    &--white { color: $color-white; }
  }

  &__body {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
    color: $color-dark;
    line-height: 1.7;
    margin: 0;

    &--white { color: rgba(255, 255, 255, 0.85); }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    border-radius: 80px;
    font-family: $font-heading;
    font-weight: $fw-semibold;
    font-size: 1.25rem;
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;

    &--orange {
      background: $color-orange;
      color: #0f2b3d;

      &:hover { background: darken(#FF9B37, 8%); }
    }

    &--white {
      background: $color-white;
      color: #0f2b3d;
      border: 1px solid rgba(#0f2b3d, 0.15);

      &:hover {
        background: #0f2b3d;
        color: $color-white;
      }
    }
  }
}
</style>
