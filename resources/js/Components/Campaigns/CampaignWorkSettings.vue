<template>
  <section class="section workplaces-section">
    <div class="section-heading">
      <p class="section-kicker">WHERE YOU'LL WORK</p>
      <h2>Work in the setting you love</h2>
      <p>Tell us where you want to be and we'll match you with facilities that fit.</p>
    </div>
    <div class="workplace-grid">
      <button
        v-for="(place, index) in workplaceCards"
        :key="place"
        type="button"
        class="workplace-card"
        :class="{ 'workplace-card--active': workplaces.includes(place) }"
        @click="emit('toggleWorkplace', place)"
      >
        <span class="workplace-icon" aria-hidden="true">{{ workplaceIcons[index] }}</span>
        <span>{{ place }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  workplaces: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['toggleWorkplace'])

const workplaceCards = ['Outpatient Clinics', 'Skilled Nursing (SNF)', 'Schools', 'Hospitals', 'Home Care']
const workplaceIcons = ['▤', '⊞', '⌂', '＋', '⌂']
</script>

<style scoped>
.section { padding: 98px 0; }
.section-heading { width: min(1100px, calc(100% - 48px)); margin: 0 auto 48px; text-align: center; }
.section-kicker { margin: 0 0 15px; color: #ff790e; font-size: 14px; font-weight: 500; }
.section-heading h2 { margin: 0 0 11px; font-size: 40px; line-height: 1.2; letter-spacing: -.6px; font-weight: 800; }
.section-heading > p:last-child { margin: 0; color: var(--muted); font-size: 18px; line-height: 1.5; }

.workplaces-section { background: #faf8f5; }
.workplace-grid { width: min(1200px, calc(100% - 48px)); margin: auto; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 20px; }
.workplace-card { min-height: 168px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 20px 10px; border: 1px solid var(--line); border-radius: 20px; color: #282828; background: #fff; cursor: pointer; font-size: 16px; font-weight: 600; transition: .18s; }
.workplace-card:hover, .workplace-card--active { border-color: var(--blue); box-shadow: 0 5px 20px #0a35500c; }
.workplace-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 17px; color: white; background: #102f43; font-size: 27px; font-weight: 400; }

@media (max-width: 980px) {
  .workplace-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .section { padding: 69px 0; }
  .section-heading { width: calc(100% - 36px); margin-bottom: 34px; }
  .section-heading h2 { font-size: 32px; }
  .section-heading > p:last-child { font-size: 16px; }
  .workplace-grid { width: calc(100% - 36px); grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
  .workplace-card { min-height: 140px; font-size: 14px; }
  .workplace-card:last-child { grid-column: 1 / -1; }
}
</style>
