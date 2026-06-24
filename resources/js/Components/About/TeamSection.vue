<script setup lang="ts">
const team = [
  { name: 'Sarah Johnson', role: 'Founder & CEO' },
  { name: 'Marcus Williams', role: 'Director of Staffing' },
  { name: 'Priya Patel', role: 'Credentialing Manager' },
  { name: 'James Carter', role: 'Client Relations Lead' },
  { name: 'Aisha Thompson', role: 'Recruiter — Therapy' },
  { name: 'David Nguyen', role: 'Compliance Specialist' },
];
</script>

<template>
  <section class="about-team">
    <div class="about-team__inner">
      <div class="about-team__header">
        <p class="about-team__label">The People Behind TNY</p>
        <h2 class="about-team__heading">Meet Our Team</h2>
        <p class="about-team__subtext">
          Our team brings together deep healthcare knowledge, staffing expertise, and a genuine
          commitment to the professionals and facilities we serve.
        </p>
      </div>

      <div class="about-team__photo"></div>

      <div class="about-team__grid">
        <div v-for="member in team" :key="member.name" class="about-team__card">
          <div class="about-team__avatar"></div>
          <div class="about-team__card-info">
            <p class="about-team__card-name">{{ member.name }}</p>
            <p class="about-team__card-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-team {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
  }

  &__header {
    max-width: 36.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-self: center;
    text-align: center;
    width: 100%;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    color: $color-orange;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0;
  }

  &__heading {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3vw, 2.5rem);
    color: $color-dark;
    line-height: 1.25;
    margin: 0;
  }

  &__subtext {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(0.9375rem, 1.2vw, 1.125rem);
    color: $text-body;
    line-height: 1.7;
    margin: 0;
  }

  &__photo {
    width: 100%;
    height: 33.6875rem;
    border-radius: 2.5rem;
    background: linear-gradient(135deg, #b8d4e8 0%, #8ab9d4 60%, #6aa5c8 100%);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 600px)  { grid-template-columns: repeat(2, 1fr); }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__avatar {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #c8dde8 0%, #a8c5d8 100%);
  }

  &__card-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }

  &__card-name {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    color: $color-dark;
    margin: 0;
  }

  &__card-role {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1rem;
    color: $text-body;
    margin: 0;
  }
}
</style>
