<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
</script>

<template>
  <section class="emp-cta">
    <div class="emp-cta__inner">
      <EditableText tag="h2" class="emp-cta__title" content-key="employers.cta.title" page="employers" default="Need Qualified Therapy Professionals—Fast?" />
      <EditableText tag="p" class="emp-cta__body" content-key="employers.cta.body" page="employers"
        default="Partner with a trusted therapy staffing team that delivers qualified professionals with speed, reliability, and confidence." />
      <div class="emp-cta__btns">
        <a href="/requestService" class="emp-cta__btn emp-cta__btn--primary">
          <EditableText tag="span" content-key="employers.cta.primary_cta" page="employers" default="Hire Staff →" />
        </a>
        <a href="/contact" class="emp-cta__btn emp-cta__btn--outline">
          <EditableText tag="span" content-key="employers.cta.secondary_cta" page="employers" default="Contact Us →" />
        </a>
      </div>
      <EditableText tag="p" class="emp-cta__footnote" content-key="employers.cta.footnote" page="employers"
        default="No commitment required · Response within 24 hours · Serving all of New York" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.emp-cta {
  background: linear-gradient(180deg, #142235 0%, #1b314a 100%);
  padding: 3.75rem 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) { padding: 6rem 2rem; }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 46.3125rem;
    text-align: center;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp($h2-size-mobile, 3.5vw, 2.5rem);
    line-height: 1.15;
    color: $color-white;
  }

  &__body {
    font-family: $font-body;
    font-size: 1.125rem;
    line-height: 1.75;
    color: rgba($color-white, 0.85);
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
    font-family: $font-heading;
   font-size: $btn-size;
    font-weight: $btn-weight;
    text-decoration: none;
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
    color: rgba($color-white, 0.55);
    letter-spacing: 0.01em;
  }
}
</style>
