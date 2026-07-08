<script setup lang="ts">
import StatsBar from './StatsBar.vue';
</script>

<template>
  <section class="hero2">
    <!-- <div class="hero2__decoration" aria-hidden="true">
      <img src="@/Svg/logo.svg" alt="" class="hero2__deco-logo" />
    </div> -->

    <div class="hero2__main">
      <div class="hero2__content">
        <h1 class="hero2__title">
          Building Stronger Healthcare Teams
          <span class="hero2__title accent"> Through Trusted</span>
          <br />Therapy Staffing Solutions
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

      <div class="hero2__image">
        <img
          src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp"
          alt="Physical therapy professional" />
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(-51.8deg,
      rgb(214, 185, 140) 0.24%,
      rgba(0, 33, 71, 0.9) 61%,
      rgb(0, 33, 71) 99.76%);
  padding: 8rem 7.5rem 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("https://res.cloudinary.com/dzilc11zf/image/upload/v1783517430/pattern_TNY_leyhl2.webp");
    background-repeat: cover;
    opacity: 0.5;
    // mix-blend-mode: overlay;
    pointer-events: none;
  }

  @media (max-width: 1100px) {
    padding: 7rem 2rem 0;
  }

  @media (max-width: 640px) {
    padding: 2rem 1.25rem 0;
    // background: linear-gradient(
    //   -51.8deg,
    //   rgb(214, 185, 140) 0%,
    //   rgba(0, 33, 71, 0.5) 20%,
    //   rgba(0, 33, 71, 0.9) 45%,
    //   rgb(0, 33, 71) 99.76%
    // );
    fill: linear-gradient(301deg, #D6B98C 3.74%, rgba(0, 33, 71, 0.90) 43.33%, #002147 96.26%);
  }

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

    @media (max-width: 900px) {
      display: none;
    }
  }

  &__deco-logo {
    width: 100%;
    height: auto;
    filter: brightness(0) invert(1);
  }

  &__main {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom:1rem;

    @media (max-width: 1100px) {
      flex-direction: column;
      align-items: stretch;
      gap: 2rem;
    }
  }

  &__content {
    flex: 1 1 55%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding-top:2rem;
    // justify-content: space-between;

    @media screen and (min-width: 1100px) {
      // padding-top: 7rem;
    }

    @media screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-top: 5rem;
    }
  }

  &__image {
    flex: 0 1 35%;
    align-self: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      clip-path: polygon(45% 0rem, 100% 0, 100% 100%, 0 100%, 0 80%);
      // clip-path: path('M 112 0 A 20 20 0 0 0 92 20 L 0 112 L 0 592 ... Z');

      border-radius: 3rem;

      @media screen and (max-width: 1100px) {
        display: none;
      }
    }

    @media (max-width: 1100px) {
      flex: none;
      width: 70%;
      max-width: 24rem;
      margin: 0 auto;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.3rem, 4vw, 3rem);
    line-height: 1.15;
    color: $color-white;
    margin-bottom: 1.25rem;

    &.accent {
      color: $color-blue;
    }
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1.2rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: $color-white;
    max-width: 49rem;
    margin-bottom: 2rem;
  }

  &__ctas {
    display: flex;
    // justify-content:space;
    flex-wrap: wrap;
    gap:1rem;

  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 15.625rem;
    border-radius: 80px;
    font-family: $font-heading;
    font-size: $btn-size;
    font-weight: $btn-weight;
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;

    @media (max-width: 480px) {
      width: 100%;
    }

    &--primary {
      background: $color-orange;
      color: #0f2b3d;
      border: none;

      &:hover {
        background: darken(#FF9B37, 8%);
      }
    }

    &--outline {
      border: 1px solid rgba(232, 234, 237, 0.8);
      color: $color-white;
      background: transparent;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  &__stats {
    position: relative;
    z-index: 1;
    // margin-top: 3rem;
    width: 100%;
    margin-bottom:2rem;
  }


}
</style>
