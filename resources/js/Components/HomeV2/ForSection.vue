<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
</script>

<template>
  <section class="for-section">
    <div class="for-section__inner">

      <!-- For Employers -->
      <div class="for-card for-card--dark">
        <EditableText tag="p" class="section-label" content-key="home.for.employers.label" page="home" default="For Employers" />
        <EditableText tag="h3" class="for-card__title" content-key="home.for.employers.title" page="home" default="Build the Team Your Patients Count On" />
        <EditableText tag="p" class="for-card__body" content-key="home.for.employers.body" page="home"
          default="Whether you need last-minute coverage or a long-term hire, we connect you with credentialed therapy professionals who fit your team from day one." />
        <ul class="for-card__list">
          <li><EditableText tag="span" content-key="home.for.employers.list.0" page="home" default="Temporary &amp; Per Diem Staffing" /></li>
          <li><EditableText tag="span" content-key="home.for.employers.list.1" page="home" default="Permanent Placements" /></li>
          <li><EditableText tag="span" content-key="home.for.employers.list.2" page="home" default="Emergency Coverage" /></li>
          <li><EditableText tag="span" content-key="home.for.employers.list.3" page="home" default="Fully Credentialed Professionals" /></li>
        </ul>
        <a href="/employers" class="for-card__cta for-card__cta--orange">
          <EditableText tag="span" content-key="home.for.employers.cta" page="home" default="Request Staff" />
        </a>

      </div>

      <!-- For Candidates -->
      <div class="for-card for-card--light">
        <EditableText tag="p" class="section-label" content-key="home.for.candidates.label" page="home" default="For Candidates" />
        <EditableText tag="h3" class="for-card__title for-card__title--dark" content-key="home.for.candidates.title" page="home"
          default="Build Your Future with New York's Leading Healthcare Teams" />
        <EditableText tag="p" class="for-card__body for-card__body--dark" content-key="home.for.candidates.body" page="home"
          default="Explore therapy opportunities across NY with competitive pay, career growth, and the support you need to succeed." />
        <ul class="for-card__list for-card__list--dark">
          <li><EditableText tag="span" content-key="home.for.candidates.list.0" page="home" default="Flexible &amp; Full-Time Positions" /></li>
          <li><EditableText tag="span" content-key="home.for.candidates.list.1" page="home" default="Competitive Compensation" /></li>
          <li><EditableText tag="span" content-key="home.for.candidates.list.2" page="home" default="Continuing Education &amp; Mentorship programs" /></li>
          <li><EditableText tag="span" content-key="home.for.candidates.list.3" page="home" default="Visa Sponsorship Support" /></li>
          <li><EditableText tag="span" content-key="home.for.candidates.list.4" page="home" default="Growth-Focused Opportunities" /></li>
          <li><EditableText tag="span" content-key="home.for.candidates.list.5" page="home" default="Gym Membership" /></li>
        </ul>
        <a href="/candidates" class="for-card__cta">
          <EditableText tag="span" content-key="home.for.candidates.cta" page="home" default="Explore Jobs" />
        </a>
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
