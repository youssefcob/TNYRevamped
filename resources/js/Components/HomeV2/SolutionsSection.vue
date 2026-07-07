<template>
  <section class="solutions">
    <div class="solutions__inner">

      <!-- Col 1 · Row 1: header -->
      <div class="solutions__header">
        <p class="section-label">Our Solutions</p>
        <h2 class="solutions__title">Supporting<br />Every Care Environment</h2>
        <p class="solutions__subtitle">
          We match healthcare organizations with skilled therapy professionals across
          schools, hospitals, outpatient clinics and skilled nursing facilities
        </p>
      </div>

      <!-- Col 1 · Row 2: SLP -->
      <div class="sol-card sol-card--image-top">
        <img
          src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994265/Speech-Language_Pathologists_Staffing_384x156_eurdne.webp"
          alt="Speech-Language Pathologists Staffing"
          class="sol-card__image"
        />
        <div class="sol-card__info sol-card__info--blue">
          <div>
            <h4 class="sol-card__title">Speech-Language Pathologists Staffing</h4>
            <p class="sol-card__body">Licensed SLPs for inpatient, outpatient, and home settings. All specialties covered.</p>
          </div>
          <a href="/solutions" class="sol-card__link">Learn More <span>→</span></a>
        </div>
      </div>

      <!-- Col 2 · Rows 1–2: PT/OT -->
      <div class="sol-card sol-card--flip">
        <img
          src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp"
          alt="Physical &amp; Occupational Therapy Staffing"
          class="sol-card__image"
        />

        <div class="sol-card__info sol-card__info--white">
          <div>
            <h4 class="sol-card__title sol-card__title--dark">Physical &amp; Occupational Therapy Staffing</h4>
            <p class="sol-card__body sol-card__body--dark">Licensed PTs and PTAs for inpatient, outpatient, and home settings. All specialties covered.</p>
          </div>
          <a href="/solutions" class="sol-card__link sol-card__link--dark">Learn More <span>→</span></a>
        </div>
      </div>

      <!-- Col 3 · Row 1: Staffing Solutions -->
      <div class="sol-card sol-card--feature">
        <h4 class="sol-card__title">Staffing Solutions Built Around Your Facility</h4>
        <p class="sol-card__body">
          Discover flexible, customized therapy staffing solutions that help your team stay
          fully supported and your patients receive the care they deserve.
        </p>
        <a href="/solutions" class="sol-card__btn">Explore Solutions</a>
      </div>

      <!-- Col 3 · Row 2: PCC -->
      <div class="sol-card sol-card--image-top">
        <img
          src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994267/PCC_Aides_383x256_wu1rka.webp"
          alt="OT/COTA"
          class="sol-card__image"
        />
        <div class="sol-card__info sol-card__info--sand">
          <div>
            <h4 class="sol-card__title">OT/COTA</h4>
            <p class="sol-card__body">Licensed OTs and COTAs for inpatient, outpatient, and home settings. All specialties covered.</p>
          </div>
          <a href="/solutions" class="sol-card__link">Learn More <span>→</span></a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
$sol-bg: radial-gradient(ellipse at center, #345683 0%, #243c5c 50%, #142235 100%);

.solutions {
  background: $sol-bg;
  padding: 5rem 7.5rem;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 9fr 10fr;
    gap: 1.5rem;

    & > *:nth-child(1) { grid-column: 1; grid-row: 1; }
    & > *:nth-child(2) { grid-column: 1; grid-row: 2; }
    & > *:nth-child(3) { grid-column: 2; grid-row: 1 / 3; }
    & > *:nth-child(4) { grid-column: 3; grid-row: 1; }
    & > *:nth-child(5) { grid-column: 3; grid-row: 2; }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;

      & > * { grid-column: 1 !important; grid-row: auto !important; }
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, $h2-size-desktop);
    line-height: $h2-line-height;
    color: $color-white;
  }

  &__subtitle {
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: clamp($body-size-mobile, 1.5vw, $large-size-desktop);
    line-height: $large-line-height;
    color: $color-white;
  }
}

.sol-card {
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &--flip {
    flex-direction: column-reverse;

    .sol-card__image { flex: 1; height: auto; }
  }

  &--feature {
    background: $color-teal;
    padding: 2.25rem 1.625rem;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    min-height: 20.375rem;
  }

  &__image {
    height: 16rem;
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
    object-position: center;
    display: block;

    &--tall { height: 35.5rem; }
  }

  &__info {
    padding: 1rem 1.4375rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: 13.25rem;

    &--blue { background: $color-blue; }
    &--sand { background: $color-sand; }
    &--white { background: $color-white; padding: 2.1875rem 1.8125rem; }
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    line-height: 1.33;
    color: $color-dark;
    max-width: 17.25rem;

    &--dark { color: $color-dark; }
  }

  &__body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.35;
    color: $color-dark;

    &--dark { color: $color-dark; }
  }

  &__link {
    font-family: $font-body;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    color: $color-dark;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
    align-self: flex-start;

    &--dark { color: $color-dark; }
    &:hover { opacity: 0.7; }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.875rem;
    border: 0.8px solid #0f2b3d;
    border-radius: 99px;
    color: #0f2b3d;
    background: $color-white;
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: $btn-size;
    text-decoration: none;
    transition: all 0.25s;
    margin-top: auto;

    &:hover { background: #0f2b3d; color: $color-white; }
  }
}
</style>
