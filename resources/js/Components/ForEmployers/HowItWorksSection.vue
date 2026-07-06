<template>
  <section class="hiw">
    <div class="hiw__inner">
      <div class="hiw__scene">

        <div class="hiw__center">
          <div class="hiw__oval" aria-hidden="true"></div>
          <div class="hiw__header">
            <p class="hiw__label">How It Works</p>
            <h2 class="hiw__title">Staff Ready in Four Steps</h2>
            <p class="hiw__subtitle">
              We make hiring simple, efficient, and focused on finding the right fit for your team.
            </p>
          </div>
        </div>

        <div class="hiw__step hiw__step--tl">
          <div class="hiw__step-badge hiw__step-badge--orange">01</div>
          <h3 class="hiw__step-title">Tell Us Your Needs</h3>
          <p class="hiw__step-body">
            Share your staffing needs, including discipline, care setting, schedule,
            and any specific qualifications.
          </p>
        </div>

        <div class="hiw__step hiw__step--tr">
          <div class="hiw__step-badge hiw__step-badge--teal">02</div>
          <h3 class="hiw__step-title">We Find the Right Match</h3>
          <p class="hiw__step-body">
            Our recruiters quickly identify qualified therapy professionals from our trusted talent network.
          </p>
        </div>

        <div class="hiw__step hiw__step--bl">
          <div class="hiw__step-badge hiw__step-badge--blue">03</div>
          <h3 class="hiw__step-title">We Handle the Details</h3>
          <p class="hiw__step-body">
            From credentialing and compliance to onboarding, we take care of the paperwork so you don't have to.
          </p>
        </div>

        <div class="hiw__step hiw__step--br">
          <div class="hiw__step-badge hiw__step-badge--sand">04</div>
          <h3 class="hiw__step-title">Ready to Make an Impact</h3>
          <p class="hiw__step-body">
            Your therapist arrives prepared to integrate seamlessly into your team and start delivering care.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$step-bg: #0f2b3d;

.hiw {
  background: $color-white;
  padding: 5rem 7.5rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
  }

  &__scene {
    position: relative;
    // vertical padding so step boxes can extend above/below the oval corners
    padding: 4rem 0;

    @media (max-width: 860px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__center {
    // square oval centered in the scene; step boxes (26% wide) overlap its corners
    width: 50%;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 860px) {
      width: 100%;
    }
  }

  &__oval {
    position: absolute;
    inset: 0;
    border: 10px dashed rgba(#0f2b3d, 0.12);
    border-radius: 2rem;
    pointer-events: none;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    position: relative;
    z-index: 1;
    padding: 0 2rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $color-orange;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    line-height: 1.15;
    color: $color-dark;
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: 1rem;
    line-height: 1.7;
    color: $color-dark;
  }

  &__step {
    background: $step-bg;
    border-radius: 1.25rem;
    padding: 2rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;

    // desktop: absolutely pinned at the four corners, overlapping the oval
    @media (min-width: 861px) {
      position: absolute;
      width: 26%;
      z-index: 1;
    }

    &--tl {
      @media (min-width: 861px) { top: -2rem; left: 4rem; }
    }
    &--tr {
      @media (min-width: 861px) { top: -2rem; right: 4rem; align-items: flex-end; text-align: right; }
    }
    &--bl {
      @media (min-width: 861px) { bottom: -2rem; left: 4rem; }
    }
    &--br {
      @media (min-width: 861px) { bottom: -2rem; right: 4rem; align-items: flex-end; text-align: right; }
    }
  }

  &__step-badge {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 1.25rem;
    color: $color-white;
    flex-shrink: 0;
    margin-bottom: 0.5rem;

    &--orange { background: $color-orange; }
    &--teal   { background: #2ee5c1; }
    &--blue   { background: $color-blue; }
    &--sand   { background: $color-sand; }
  }

  &__step-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    color: $color-white;
    line-height: 1.3;
  }

  &__step-body {
    font-family: $font-body;
    font-size: 0.875rem;
    line-height: 1.65;
    color: rgba($color-white, 0.75);

    @media (max-width: 860px) { max-width: 100%; }
  }
}
</style>
