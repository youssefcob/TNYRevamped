<template>
  <section class="hiw">
    <div class="hiw__inner">
      <div class="hiw__grid">

        <!-- Top row -->
        <div class="hiw__step hiw__step--tl">
          <div class="hiw__step-badge hiw__step-badge--orange">01</div>
          <h3 class="hiw__step-title">Tell Us Your Needs</h3>
          <p class="hiw__step-body">
            Share your staffing requirements — discipline, setting, schedule,
            and any special qualifications you need.
          </p>
        </div>

        <!-- Center label – spans both rows visually via absolute -->
        <div class="hiw__center">
          <div class="hiw__oval" aria-hidden="true"></div>
          <div class="hiw__header">
            <p class="hiw__label">How It Works</p>
            <h2 class="hiw__title">Staff Ready in Four Steps</h2>
            <p class="hiw__subtitle">
              A streamlined process designed to get the right professional
              in the right setting — fast
            </p>
          </div>
        </div>

        <div class="hiw__step hiw__step--tr">
          <div class="hiw__step-badge hiw__step-badge--teal">02</div>
          <h3 class="hiw__step-title">We Source Candidates</h3>
          <p class="hiw__step-body">
            Our team identifies the best-fit professionals from our active
            talent network within hours, not days.
          </p>
        </div>

        <!-- Bottom row -->
        <div class="hiw__step hiw__step--bl">
          <div class="hiw__step-badge hiw__step-badge--blue">03</div>
          <h3 class="hiw__step-title">Credentialing &amp; Onboarding</h3>
          <p class="hiw__step-body">
            We handle the credentialing, background checks, and onboarding paperwork
            so you don't have to.
          </p>
        </div>

        <div class="hiw__step hiw__step--br">
          <div class="hiw__step-badge hiw__step-badge--sand">04</div>
          <h3 class="hiw__step-title">Staff Ready to Work</h3>
          <p class="hiw__step-body">
            Your matched professional arrives oriented and compliant, ready to
            deliver care from day one.
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

  &__grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto;
    gap: 1.5rem;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  &__center {
    grid-column: 2;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 18rem;
    padding: 0 1.5rem;

    @media (max-width: 860px) {
      grid-column: 1;
      grid-row: auto;
      width: 100%;
      order: -1;
      padding: 0;
    }
  }

  &__oval {
    position: absolute;
    inset: 0;
    border: 10px dashed rgba(#0f2b3d, 0.12);
    border-radius: 200px;
    pointer-events: none;

    @media (max-width: 860px) { display: none; }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    position: relative;
    z-index: 1;
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
    min-height: 18.375rem;

    // top-left and bottom-right: number top-left
    &--tl, &--bl { align-items: flex-start; }
    // top-right and bottom-right: number top-right
    &--tr, &--br { align-items: flex-end; text-align: right; }

    @media (max-width: 860px) {
      min-height: auto;
      &--tr, &--br { align-items: flex-start; text-align: left; }
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
    max-width: 15.25rem;

    @media (max-width: 860px) { max-width: 100%; }
  }
}
</style>
