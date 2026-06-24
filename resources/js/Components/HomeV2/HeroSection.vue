<script setup lang="ts">
import StatsBar from './StatsBar.vue';
</script>

<template>
  <section class="hero2">
    <div class="hero2__decoration" aria-hidden="true">
      <img src="@/Svg/logo.svg" alt="" class="hero2__deco-logo" />
    </div>

    <div class="hero2__content">
      <h1 class="hero2__title">
        Healthcare
        <span class="hero2__title accent"> Staffing Solutions</span>
        <br />Built for Modern Care
      </h1>
      <p class="hero2__subtitle">
        Connecting healthcare facilities with qualified therapy professionals across New York.
        Fast, credentialed, and built for today's healthcare demands.
      </p>
      <div class="hero2__ctas">
        <a href="/requestService" class="hero2__btn hero2__btn--primary">Hire Staff</a>
        <a href="/apply" class="hero2__btn hero2__btn--outline">Find Jobs</a>
      </div>
    </div>

    <div class="hero2__stats">
      <StatsBar />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero2 {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    -51.8deg,
    rgb(214, 185, 140) 0.24%,
    rgba(0, 33, 71, 0.9) 61%,
    rgb(0, 33, 71) 99.76%
  );
  padding: 9rem 7.5rem 0;

  @media (max-width: 1100px) { padding: 7rem 2rem 0; }
  @media (max-width: 640px)  { padding: 6rem 1.25rem 0; }

  &__decoration {
    position: absolute;
    right: -4rem;
    top: 50%;
    transform: translateY(-50%);
    width: 45vw;
    max-width: 700px;
    opacity: 0.07;
    pointer-events: none;
    overflow: hidden; // clip the decoration here instead of on the whole section

    @media (max-width: 900px) { display: none; }
  }

  &__deco-logo {
    width: 100%;
    height: auto;
    filter: brightness(0) invert(1);
  }

  &__content {
    position: relative;
    z-index: 1;
    // max-width: 55rem;
    // padding-bottom: 4rem;
    @media screen and (min-width: 1100px) {
      padding-top: 7rem;
    }
    @media screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      // align-items: center;
      gap:2rem;
      padding-top: 5rem;
    }
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h1-size-mobile, 5vw, $h1-size-desktop);
    line-height: $h1-line-height;
    color: $color-white;
    margin-bottom: 1.25rem;

    &.accent { color: $color-blue; }
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: clamp($large-size-mobile, 6vw, $large-size-desktop);
    line-height: $large-line-height;
    color: $color-white;
    max-width: 49rem;
    margin-bottom: 2rem;
  }

  &__ctas {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    width: 17.625rem;
    border-radius: 80px;
    font-family: $font-heading;
    font-size: $btn-size;
    font-weight: $btn-weight;
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;

    @media (max-width: 480px) { width: 100%; }

    &--primary {
      background: $color-orange;
      color: #0f2b3d;
      border: none;
      &:hover { background: darken(#FF9B37, 8%); }
    }

    &--outline {
      border: 1px solid rgba(232,234,237,0.8);
      color: $color-white;
      background: transparent;
      &:hover { background: rgba(255,255,255,0.1); }
    }
  }

  &__stats {
    position: relative;
    z-index: 1;
    margin-top: auto;
    padding-bottom: 3rem;
    padding-top: 2rem;
    align-self: center;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 640px) {
      // break out of section's 1.25rem horizontal padding → full viewport width
      width: 100vw;
      margin-left: -1.25rem;
      margin-right: -1.25rem;
      padding-bottom: 0;
    }
  }
}
</style>
