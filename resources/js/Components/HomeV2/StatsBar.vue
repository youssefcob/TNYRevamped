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
      <!-- <div class="stats-bar__track"> -->
      <!-- Duplicated twice to create seamless loop -->
      <!-- <div v-for="(stat, i) in [...stats, ...stats]" :key="i" class="stats-bar__item">
          <div class="stats-bar__number">
            <span class="stats-bar__value">{{ stat.value }}</span><span class="stats-bar__suffix">{{ stat.suffix }}</span>
          </div>
          <p class="stats-bar__label">{{ stat.label }}</p>
        </div>
      </div> -->
      <div class="stat">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3.99999 14C3.81076 14.0006 3.62522 13.9476 3.46495 13.847C3.30467 13.7464 3.17623 13.6023 3.09454 13.4316C3.01286 13.2609 2.98129 13.0706 3.00349 12.8826C3.0257 12.6947 3.10077 12.5169 3.21999 12.37L13.12 2.16998C13.1943 2.08426 13.2955 2.02634 13.407 2.00571C13.5185 1.98509 13.6337 2.00299 13.7337 2.05648C13.8337 2.10998 13.9126 2.19588 13.9573 2.30009C14.0021 2.4043 14.0101 2.52063 13.98 2.62998L12.06 8.64998C12.0034 8.8015 11.9844 8.9645 12.0046 9.12499C12.0248 9.28547 12.0837 9.43866 12.1761 9.57141C12.2685 9.70415 12.3918 9.81249 12.5353 9.88714C12.6788 9.96179 12.8382 10.0005 13 9.99998H20C20.1892 9.99933 20.3748 10.0524 20.535 10.153C20.6953 10.2536 20.8238 10.3976 20.9054 10.5683C20.9871 10.739 21.0187 10.9294 20.9965 11.1173C20.9743 11.3053 20.8992 11.483 20.78 11.63L10.88 21.83C10.8057 21.9157 10.7045 21.9736 10.593 21.9942C10.4815 22.0149 10.3663 21.997 10.2663 21.9435C10.1663 21.89 10.0874 21.8041 10.0427 21.6999C9.99791 21.5957 9.98991 21.4793 10.02 21.37L11.94 15.35C11.9966 15.1985 12.0156 15.0355 11.9954 14.875C11.9752 14.7145 11.9163 14.5613 11.8239 14.4286C11.7315 14.2958 11.6082 14.1875 11.4647 14.1128C11.3212 14.0382 11.1617 13.9995 11 14H3.99999Z"
            stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="span">
          24h Response Fast Staffing Coverage
        </div>
      </div>
      <div class="stat">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 8L11 14" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 14L10 8L12 5" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 5H14" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 2H8" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 22L17 12L12 22" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 18H20" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div class="span">
          Multilingual Diverse Professionals
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '500', suffix: '+', label: 'Successful Placements' },
  { value: '98', suffix: '%', label: 'Client Satisfaction Rate' },
  { value: '24', suffix: 'h', label: 'Emergency Response Time' },
  { value: '10', suffix: '+', label: 'Years of Experience' },
];
</script>

<style scoped lang="scss">
.stats-bar {
  background: rgba(19, 35, 56, 0.2);
  border: 0.8px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  width: 100%;
  max-width: 100rem;
  overflow: hidden;
  padding-top: 0rem;
  padding-bottom: 0rem;

  // Desktop: show static row, hide carousel
  &__static {
    display: flex;
    align-items: center;
    padding: 2rem 2.5rem;
  }

  &__carousel {
    display: none;
  }

  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    flex-shrink: 0;

    .stats-bar__static &:not(:last-child) {
      border-right: 0.8px solid rgba(255, 255, 255, 0.08);
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
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
    white-space: nowrap;
  }

  // Mobile: hide static, show carousel
  @media (max-width: 640px) {
    border-radius: 0;
    max-width: 100vw;
    background: none;
    border: none;
    backdrop-filter: none;

    &__static {
      display: none;
    }

    &__carousel {
      display: flex;
      // flex-direction: column;
      gap: 1rem;
      // padding: 0 2rem;
    }

    .stat {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;

      svg {
        width: 2rem;
        height: 2rem;
        flex-shrink: 0;
      }

      .span {
        // display: flex;
        font-size:1rem;
        color: $color-white;
        line-height: 150%;
      }
    }

    &__track {
      display: flex;
      gap: 0;
      width: max-content;
      animation: stats-scroll 12s linear infinite;

      &:hover {
        animation-play-state: paused;
      }
    }

    &__item {
      width: 12rem;
      padding: 0 2rem;
      border-right: 0.8px solid rgba(255, 255, 255, 0.08);
    }

    &__value,
    &__suffix {
      font-size: clamp(2rem, 8vw, 2.75rem);
    }

    &__label {
      font-size: clamp(0.7rem, 1vw, 1.125rem);
    }
  }
}

@keyframes stats-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }

  // -50% scrolls exactly one copy (half the duplicated track)
}
</style>
