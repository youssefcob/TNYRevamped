<template>
  <section class="emp-hero">
    <div class="emp-hero__inner">
      <h1 class="emp-hero__title">
        Reliable
        <span class="emp-hero__title--blue"> Healthcare Staffing </span>
        Exactly When You Need It
      </h1>
      <p class="emp-hero__subtitle">
        When staffing needs can't wait, Therapy of New York delivers trusted rehabilitation
        professionals—supporting healthcare facilities across all five boroughs with both
        immediate coverage and long-term workforce solutions.
      </p>
      <a href="/requestService" class="emp-hero__btn">Request Staff</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.emp-hero {
  background: linear-gradient(
    -51.8deg,
    rgb(214, 185, 140) 0.24%,
    rgba(0, 33, 71, 0.9) 61%,
    rgb(0, 33, 71) 99.76%
  );
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 7.5rem 5rem;
  text-align: center;

  @media (max-width: 1100px) { padding: 8rem 2rem 4rem; }
  @media (max-width: 640px)  { padding: 7rem 1.25rem 3rem; }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 49.5rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.3rem, 4vw, 3rem);
    line-height: 1.15;
    color: $color-white;

    &--blue { color: $color-blue; font-size: inherit; line-height: inherit; }
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1.2rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: $color-white;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    width: 27.9375rem;
    max-width: 100%;
    border-radius: 80px;
    background: $color-orange;
    color: #0f2b3d;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: $btn-size;
    text-decoration: none;
    transition: background 0.25s;
    margin-top: 0.5rem;

    @media (max-width: 480px) { width: 100%; }

    &:hover { background: darken(#FF9B37, 8%); }
  }
}
</style>
