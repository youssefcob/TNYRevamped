<template>
  <section class="trusted">
    <p class="section-label">Trusted By</p>
    <div class="trusted__logos">
      <div v-for="n in 12" :key="n" class="trusted__logo-placeholder"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.trusted {
  padding: 3.5rem 7.5rem;
  background: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 1100px) { padding: 2.5rem 2rem; }

  &__logos {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  &__logo-placeholder {
    width: 4.375rem;
    height: 3.125rem;
    background: #d9d9d9;
    border-radius: 0.375rem;
  }
}
</style>
