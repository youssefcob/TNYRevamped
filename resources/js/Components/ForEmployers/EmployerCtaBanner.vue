<template>
  <section class="emp-cta">
    <div class="emp-cta__inner">
      <h2 class="emp-cta__title">Need Qualified Therapy Professionals—Fast?</h2>
      <p class="emp-cta__body">
        Partner with a trusted therapy staffing team that delivers qualified professionals
        with speed, reliability, and confidence.
      </p>
      <div class="emp-cta__btns">
        <a href="/requestService" class="emp-cta__btn emp-cta__btn--primary">
          Hire Staff →
        </a>
        <a href="/contact" class="emp-cta__btn emp-cta__btn--outline">
          Contact Us →
        </a>
      </div>
      <p class="emp-cta__footnote">
        No commitment required · Response within 24 hours · Serving all of New York
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.emp-cta {
  background: linear-gradient(180deg, #142235 0%, #1b314a 100%);
  padding: 3.75rem 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) { padding: 6rem 2rem; }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 46.3125rem;
    text-align: center;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, 2.5rem);
    line-height: 1.15;
    color: $color-white;
  }

  &__body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.75;
    color: rgba($color-white, 0.85);
  }

  &__btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.0625rem;
    padding: 0 1.5rem;
    border-radius: 80px;
    font-family: $font-heading;
   font-size: $btn-size;
    font-weight: $btn-weight;
    text-decoration: none;
    transition: all 0.25s;

    &--primary {
      background: $color-orange;
      color: #0f2b3d;
      &:hover { background: darken(#FF9B37, 8%); }
    }

    &--outline {
      border: 0.8px solid rgba(255,255,255,0.3);
      color: $color-white;
      &:hover { background: rgba(255,255,255,0.1); }
    }
  }

  &__footnote {
    font-family: $font-body;
    font-size: 1rem;
    color: rgba($color-white, 0.55);
    letter-spacing: 0.01em;
  }
}
</style>
