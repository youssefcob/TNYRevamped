<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
import EditableImage from '@/Components/Admin/EditableImage.vue';
</script>

<template>
  <section class="solutions">
    <div class="solutions__inner">

      <!-- Col 1 · Row 1: header -->
      <div class="solutions__header">
        <EditableText tag="p" class="section-label" content-key="home.solutions.label" page="home" default="Our Solutions" />
        <EditableText tag="h2" class="solutions__title" content-key="home.solutions.title" page="home" default="Supporting Every Healthcare Practices" />
        <EditableText tag="p" class="solutions__subtitle" content-key="home.solutions.subtitle" page="home"
          default="We match healthcare organizations with skilled therapy professionals across schools, hospitals, outpatient clinics and skilled nursing facilities" />
      </div>

      <!-- Col 1 · Row 2: SLP -->
      <div class="sol-card sol-card--image-top">
        <EditableImage
          content-key="home.solutions.slp.image" page="home"
          default-src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994265/Speech-Language_Pathologists_Staffing_384x156_eurdne.webp"
          default-object-fit="cover"
          default-alt="Speech-Language Pathologists Staffing"
          class="sol-card__image"
        />
        <div class="sol-card__info sol-card__info--blue">
          <div>
            <EditableText tag="h4" class="sol-card__title" content-key="home.solutions.slp.title" page="home" default="Speech-Language Pathologists Staffing" />
            <EditableText tag="p" class="sol-card__body" content-key="home.solutions.slp.body" page="home"
              default="Licensed SLPs &amp; SLPAs for inpatient, outpatient, SNF, and home care. All specialties covered." />
          </div>
          <a href="/solutions" class="sol-card__link">
            <EditableText tag="span" content-key="home.solutions.slp.link" page="home" default="Learn More" /> <span>→</span>
          </a>
        </div>
      </div>

      <!-- Col 2 · Rows 1–2: PT/OT -->
      <div class="sol-card sol-card--flip">
        <EditableImage
          content-key="home.solutions.pt.image" page="home"
          default-src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp"
          default-object-fit="cover"
          default-alt="Physical Therapy Staffing"
          class="sol-card__image"
        />

        <div class="sol-card__info sol-card__info--white">
          <div>
            <EditableText tag="h4" class="sol-card__title sol-card__title--dark" content-key="home.solutions.pt.title" page="home" default="Physical Therapy Staffing" />
            <EditableText tag="p" class="sol-card__body sol-card__body--dark" content-key="home.solutions.pt.body" page="home"
              default="Licensed PTs, PTAs, and Limited Permit for inpatient, outpatient, SNF, and home care. All specialties covered." />
          </div>
          <a href="/solutions" class="sol-card__link sol-card__link--dark">
            <EditableText tag="span" content-key="home.solutions.pt.link" page="home" default="Learn More" /> <span>→</span>
          </a>
        </div>
      </div>

      <!-- Col 3 · Row 1: Staffing Solutions -->
      <div class="sol-card sol-card--feature">
        <EditableText tag="h4" class="sol-card__title" content-key="home.solutions.feature.title" page="home" default="Staffing Solutions Built Around Your Facility" />
        <EditableText tag="p" class="sol-card__body" content-key="home.solutions.feature.body" page="home"
          default="Discover flexible, customized therapy staffing solutions that help your team stay fully supported and your patients receive the care they deserve." />
        <a href="/solutions" class="sol-card__btn">
          <EditableText tag="span" content-key="home.solutions.feature.cta" page="home" default="Explore Solutions" />
        </a>
      </div>

      <!-- Col 3 · Row 2: PCC -->
      <div class="sol-card sol-card--image-top">
        <EditableImage
          content-key="home.solutions.ot.image" page="home"
          default-src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994267/PCC_Aides_383x256_wu1rka.webp"
          default-object-fit="cover"
          default-alt="OT/COTA"
          class="sol-card__image"
        />
        <div class="sol-card__info sol-card__info--sand">
          <div>
            <EditableText tag="h4" class="sol-card__title" content-key="home.solutions.ot.title" page="home" default="OT/COTA" />
            <EditableText tag="p" class="sol-card__body" content-key="home.solutions.ot.body" page="home"
              default="Licensed OTs and COTAs for inpatient, outpatient, and home settings. All specialties covered." />
          </div>
          <a href="/solutions" class="sol-card__link">
            <EditableText tag="span" content-key="home.solutions.ot.link" page="home" default="Learn More" /> <span>→</span>
          </a>
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
