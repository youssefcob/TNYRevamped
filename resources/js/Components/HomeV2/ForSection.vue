<template>
  <section class="for-section">
    <div class="for-section__inner">

      <!-- For Employers -->
      <div class="for-card for-card--dark">
        <p class="section-label">For Employers</p>
        <h3 class="for-card__title">Build the Team Your Patients Count On</h3>
        <p class="for-card__body">
          Whether you need last-minute coverage or a long-term hire, we connect you with
          credentialed therapy professionals who fit your team from day one.
        </p>
        <ul class="for-card__list">
          <li>Temporary &amp; Per Diem Staffing</li>
          <li>Permanent Placements</li>
          <li>Emergency Coverage</li>
          <li>Fully Credentialed Professionals</li>
        </ul>
        <a href="/employers" class="for-card__cta for-card__cta--orange">Request Staff</a>

      </div>

      <!-- For Candidates -->
      <div class="for-card for-card--light">
        <p class="section-label">For Candidates</p>
        <h3 class="for-card__title for-card__title--dark">Build Your Future with New York's Leading Healthcare Teams</h3>
        <p class="for-card__body for-card__body--dark">
          Explore therapy opportunities across NY with competitive pay, career growth,
          and the support you need to succeed.
        </p>
        <ul class="for-card__list for-card__list--dark">
          <li>Flexible &amp; Full-Time Positions</li>
          <li>Competitive Compensation</li>
          <li>Continuing Education & Mentorship programs</li>
          <li>Visa Sponsorship Support</li>
          <li>Growth-Focused Opportunities</li>
          <li>Gym Membership</li>
        </ul>
        <a href="/candidates" class="for-card__cta">Explore Jobs</a>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.for-section {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) {
    padding: 3rem 2rem;
  }

  &__inner {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
}

.for-card {
  flex: 1;
  border-radius: 2.5rem;
  padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 640px) {
    padding: 2.5rem 1.75rem;
  }

  &--dark {
    background: #0f2b3d;
    color: $color-white;
  }

  &--light {
    background: $color-white;
    border: 1px solid #6b7280;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.375rem, 2vw, 2rem);
    line-height: $h3-line-height;
    color: $color-white;

    &--dark {
      color: $color-dark;
    }
  }

  &__body {
    font-family: $font-body;
    font-size: clamp($body-size-mobile, 1.2vw, $body-size-desktop);
    line-height: $body-line-height;
    color: $color-white;
    font-weight: $fw-regular;

    &--dark {
      color: $color-dark;
    }
  }

  &__list {
    list-style: disc;
    padding-left: 1.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    color: $color-white;
    font-family: $font-body;
    font-size: clamp($body-size-mobile, 1.2vw, $body-size-desktop);
    font-weight: $fw-medium;

    li {
      font-family: inherit;
      font-weight: inherit;
    }

    &--dark {
      color: $color-dark;
    }
  }

  &__cta {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    border: 1px solid #0f2b3d;
    border-radius: 80px;
    color: #0f2b3d;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: $btn-size;
    text-decoration: none;
    margin-top: auto;
    transition: all 0.25s;

    &:hover {
      background: #0f2b3d;
      color: $color-white;
    }

    &--orange {
      border-color: $color-orange;
      background-color: $color-orange;

      &:hover {
        background: transparent;
        color: $color-orange;
      }
    }
  }
}
</style>
