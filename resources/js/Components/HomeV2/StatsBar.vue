<template>
  <div class="stats-bar">
    <!-- Desktop: static row -->
    <div class="stats-bar__static">
      <div v-for="stat in stats" :key="stat.label" class="stats-bar__item">
        <div class="stats-bar__number">
          <span class="stats-bar__value">{{ stat.value }}</span><span class="stats-bar__suffix">{{ stat.suffix }}</span>
        </div>
        <p class="stats-bar__label">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Mobile: infinite scroll carousel -->
    <div class="stats-bar__carousel" aria-hidden="true">
      <div class="stats-bar__track">
        <!-- Duplicated twice to create seamless loop -->
        <div v-for="(stat, i) in [...stats, ...stats]" :key="i" class="stats-bar__item">
          <div class="stats-bar__number">
            <span class="stats-bar__value">{{ stat.value }}</span><span class="stats-bar__suffix">{{ stat.suffix }}</span>
          </div>
          <p class="stats-bar__label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '500', suffix: '+', label: 'Successful Placements' },
  { value: '98',  suffix: '%', label: 'Client Satisfaction Rate' },
  { value: '24',  suffix: 'h', label: 'Emergency Response Time' },
  { value: '10',  suffix: '+', label: 'Years of Experience' },
];
</script>

<style scoped lang="scss">
.stats-bar {
  background: rgba(19,35,56,0.2);
  border: 0.8px solid rgba(255,255,255,0.07);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  width: 100%;
  max-width: 100rem;
  overflow: hidden;

  // Desktop: show static row, hide carousel
  &__static {
    display: flex;
    align-items: center;
    padding: 2rem 2.5rem;
  }

  &__carousel { display: none; }

  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    flex-shrink: 0;

    .stats-bar__static &:not(:last-child) {
      border-right: 0.8px solid rgba(255,255,255,0.08);
    }
  }

  &__number {
    display: flex;
    align-items: baseline;
    line-height: 1;
  }

  &__value {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.75rem, 3vw, 3.5rem);
    color: $color-white;
  }

  &__suffix {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.75rem, 3vw, 3.5rem);
    color: #2dbfad;
  }

  &__label {
    font-family: $font-body;
    font-size: 1.5rem;
    color: rgba(255,255,255,0.45);
    text-align: center;
    white-space: nowrap;
  }

  // Mobile: hide static, show carousel
  @media (max-width: 640px) {
    border-radius: 0;
    max-width: 100vw;

    &__static { display: none; }

    &__carousel {
      display: block;
      padding: 2rem 0;
    }

    &__track {
      display: flex;
      gap: 0;
      width: max-content;
      animation: stats-scroll 12s linear infinite;

      &:hover { animation-play-state: paused; }
    }

    &__item {
      width: 12rem;
      padding: 0 2rem;
      border-right: 0.8px solid rgba(255,255,255,0.08);
    }

    &__value,
    &__suffix {
      font-size: clamp(2rem, 8vw, 2.75rem);
    }

    &__label {
      font-size: clamp(0.9rem, 3.5vw, 1.125rem);
    }
  }
}

@keyframes stats-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); } // -50% scrolls exactly one copy (half the duplicated track)
}
</style>
