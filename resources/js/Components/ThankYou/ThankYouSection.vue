<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  type: 'contact' | 'apply' | 'request-service';
}>();

interface ThankYouContent {
  label: string;
  title: string;
  body: string;
  secondaryCta: { label: string; href: string };
}

const content: Record<string, ThankYouContent> = {
  contact: {
    label: 'Message Sent',
    title: 'Thanks For Reaching Out!',
    body: "We've received your message and a member of our team will get back to you shortly.",
    secondaryCta: { label: 'Browse Our Services', href: '/services' },
  },
  apply: {
    label: 'Application Received',
    title: "You're All Set!",
    body: 'Thank you for applying. Our recruitment team will review your profile and reach out within 1–2 business days.',
    secondaryCta: { label: 'View Open Positions', href: '/candidates' },
  },
  'request-service': {
    label: 'Request Submitted',
    title: "We've Got Your Request!",
    body: 'Our staffing specialists will review your requirements and reach out within one business day.',
    secondaryCta: { label: 'Explore Our Services', href: '/services' },
  },
};

const copy = computed(() => content[props.type] ?? content.contact);
</script>

<template>
  <section class="ty-hero">
    <div class="ty-hero__inner">
      <div class="ty-hero__icon">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="32" fill="#FF9B37" fill-opacity="0.15" />
          <path d="M19 33L28 42L45 23" stroke="#FF9B37" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <p class="ty-hero__label">{{ copy.label }}</p>
      <h1 class="ty-hero__title">{{ copy.title }}</h1>
      <p class="ty-hero__body">{{ copy.body }}</p>

      <div class="ty-hero__actions">
        <a href="/" class="ty-hero__btn ty-hero__btn--orange">Back To Home</a>
        <a :href="copy.secondaryCta.href" class="ty-hero__btn ty-hero__btn--white">{{ copy.secondaryCta.label }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ty-hero {
  position: relative;
  background: linear-gradient(
    -36.6deg,
    rgb(214, 185, 140) 0.24%,
    rgba(0, 33, 71, 0.9) 61%,
    rgb(0, 33, 71) 99.76%
  );
  min-height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 7.5rem 6rem;
  text-align: center;
  overflow: hidden;

  @media (max-width: 1100px) { padding: 8rem 2rem 5rem; }
  @media (max-width: 640px)  { padding: 7rem 1.25rem 4rem; }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.8;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  &__inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    max-width: 40rem;
  }

  &__icon {
    margin-bottom: 0.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-orange;
    margin: 0;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(2.3rem, 4vw, 3rem);
    line-height: 1.2;
    color: $color-white;
    margin: 0;
  }

  &__body {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(1.0625rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: rgba($color-white, 0.85);
    margin: 0;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 1rem;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    padding: 0 2.25rem;
    border-radius: 80px;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: $btn-size;
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;

    &--orange {
      background: $color-orange;
      color: #0f2b3d;

      &:hover { background: darken(#FF9B37, 8%); }
    }

    &--white {
      background: transparent;
      color: $color-white;
      border: 1px solid rgba($color-white, 0.4);

      &:hover {
        background: $color-white;
        color: #0f2b3d;
      }
    }
  }
}
</style>
