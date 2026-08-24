<template>
  <section class="challenges">
    <div class="challenges__inner">

      <div class="challenges__header">
        <EditableText tag="p" class="challenges__label" content-key="employers.challenges.label" page="employers" default="Employer Challenges" />
        <EditableText tag="h2" class="challenges__title" content-key="employers.challenges.title" page="employers" default="Staffing Challenges Shouldn't Compromise Patient Care" />
        <EditableText tag="p" class="challenges__subtitle" content-key="employers.challenges.subtitle" page="employers"
          default="In today's fast-paced healthcare environment, reliable staffing is essential to maintaining quality patient care, operational efficiency, and continuity of services." />
      </div>

      <div class="challenges__list">
        <div v-for="(item, i) in challenges" :key="item.number" class="challenge-row"
          :class="i % 2 === 0 ? 'challenge-row--normal' : 'challenge-row--flipped'">
          <div class="challenge-row__text">
            <span class="challenge-row__number">{{ item.number }}</span>
            <div class="challenge-row__content">
              <EditableText tag="h3" class="challenge-row__title" :content-key="`employers.challenges.item.${item.number}.title`" page="employers" :default="item.title" />
              <EditableText tag="p" class="challenge-row__body" :content-key="`employers.challenges.item.${item.number}.body`" page="employers" :default="item.body" />
            </div>
          </div>
          <img :src="item.img" :alt="item.title" class="challenge-row__image" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';

const challenges = [
  {
    number: '01',
    title: 'Last-Minute Callouts',
    body: 'Unexpected absences that leave schedules stretched and patient care at risk.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249118/01_Last-Minute_Callouts_1_bijrjf.webp',
  },
  {
    number: '02',
    title: 'Specialized Therapists',
    body: 'Hard-to-fill therapy roles that demand experienced, qualified professionals.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249118/02_Specialized_Therapists_cj6wvf.webp',
  },
  {
    number: '03',
    title: 'Administrative Staffing',
    body: 'Front-office staffing challenges that disrupt clinic operations and daily patient management.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249118/02_Specialized_Therapists_cj6wvf.webp',
  },
  {
    number: '04',
    title: 'Staffing Reliability',
    body: 'Inconsistent staffing partners that create unnecessary gaps in care.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1783361199/2_1_plxab7.webp',
  },
];
</script>

<style scoped lang="scss">
.challenges {
  background: $color-white;
  padding: 5rem 7.5rem;

  @media (max-width: 1100px) {
    padding: 3rem 2rem;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 75rem;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 49.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-orange;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3.5vw, 2.5rem);
    line-height: 1.1;
    color: $color-dark;
  }

  &__subtitle {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.7;
    color: $color-dark;
    margin-top: 0.25rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.challenge-row {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  height: 22.3125rem;

  @media (max-width: 900px) {
    flex-direction: column !important;
    height: auto;
    gap: 1.5rem;

    &:first-child {
      .challenge-row__image { order: -1; }
    }

    &:not(:first-child) {
      .challenge-row__image { display: none; }
    }
  }

  &--flipped {
    flex-direction: row-reverse;
  }

  &__text {
    flex: 0 0 36.5625rem;
    display: flex;
    align-items: flex-start;
    gap: 3.5rem;

    @media (max-width: 1100px) {
      flex: 1;
      gap: 2rem;
    }

    @media (max-width: 900px) {
      flex: none;
      width: 100%;
    }
  }

  &__number {
    font-family: $font-switzer;
    font-size: 150px;
    font-style: normal;
    font-weight: 200;
    line-height: 80%;
    color: #0D1F35;
    opacity: 0.9;
    flex-shrink: 0;
    user-select: none;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0.5rem;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.375rem, 2.5vw, 2rem);
    line-height: 1.1;
    color: #0d1f35;
  }

  &__body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.65;
    color: $color-dark;
    max-width: 15.375rem;
  }

  &__image {
    flex: 1;
    min-width: 0;
    width: 100%;
    height: 100%;
    min-height: 16rem;
    border-radius: 1.5rem;
    object-fit: cover;
    object-position: center;

    @media (max-width: 900px) {
      width: 100%;
      min-height: 14rem;
    }
  }
}
</style>
