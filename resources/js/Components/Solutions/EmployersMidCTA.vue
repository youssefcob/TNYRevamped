<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
</script>

<template>
  <section class="emp-mid-cta">
    <a href="/requestService" class="emp-mid-cta__btn">
      <EditableText tag="span" content-key="solutions.mid_cta.label" page="solutions" default="Hire Staff" />
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
          stroke="#0f2b3d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </section>
</template>

<style scoped lang="scss">
.emp-mid-cta {
  padding: 0 7.5rem 3.75rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) { padding: 0 2rem 3rem; }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    height: 3.75rem;
    padding: 0 2.5rem;
    background: $color-orange;
    color: $color-white;
    border-radius: 80px;
    font-family: $font-heading;
    font-weight: $fw-semibold;
    font-size: 1.125rem;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.25s;

    svg path { stroke: $color-white; }

    &:hover { background: #0f2b3d; }
  }
}
</style>
