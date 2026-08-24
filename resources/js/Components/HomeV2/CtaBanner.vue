<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
</script>

<template>
  <section class="cta-banner">
    <div class="cta-banner__inner">
      <EditableText tag="h2" class="cta-banner__title" content-key="home.cta_banner.title" page="home" default="Need Healthcare Staff Fast?" />
      <EditableText tag="p" class="cta-banner__body" content-key="home.cta_banner.body" page="home"
        default="Whether it's an emergency gap or a planned expansion, we're ready to respond. Get your first candidate profile within 24 hours." />
      <div class="cta-banner__btns">
        <a href="/requestService" class="cta-banner__btn cta-banner__btn--primary">
          <EditableText tag="span" content-key="home.cta_banner.primary_cta" page="home" default="Hire Staff →" />
        </a>
        <a href="/contact" class="cta-banner__btn cta-banner__btn--outline">
          <EditableText tag="span" content-key="home.cta_banner.secondary_cta" page="home" default="Contact Us →" />
        </a>
      </div>
      <EditableText tag="p" class="cta-banner__footnote" content-key="home.cta_banner.footnote" page="home"
        default="No commitment required · Response within 24 hours · Serving all of New York" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta-banner {
  background: linear-gradient(180deg, #142235 0%, #1b314a 100%);
  padding: 4rem 7.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 46.25rem;
    text-align: center;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, $h2-size-desktop);
    line-height: $h2-line-height;
    color: $color-white;
  }

  &__body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.75;
    color: $color-white;
  }

  &__btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.0625rem;
    padding: 0 1.5rem;
    border-radius: 80px;
    font-family: $font-body;
    font-weight: $fw-semibold;
    font-size: 0.88rem;
    text-decoration: none;
    letter-spacing: 0.01em;
    transition: all 0.25s;

    &--primary {
      background: $color-orange;
      color: #0f2b3d;
      &:hover { background: darken(#FF9B37, 8%); }
    }

    &--outline {
      border: 0.8px solid rgba(255,255,255,0.3);
      color: $color-white;
      &:hover { background: rgba(255,255,255,0.1); }
    }
  }

  &__footnote {
    font-family: $font-body;
    font-size: 1rem;
    color: $color-white;
    opacity: 0.7;
    letter-spacing: 0.01em;
  }
}
</style>
