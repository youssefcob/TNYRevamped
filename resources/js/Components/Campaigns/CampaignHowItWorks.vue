<template>
  <section class="section steps-section">
    <div class="section-heading">
      <p class="section-kicker">HOW IT WORKS</p>
      <h2>From application to first day in 3 steps</h2>
    </div>
    <div class="steps-grid">
      <article v-for="item in steps" :key="item.number" class="step-card">
        <div class="step-card__top">
          <span>{{ item.number }}</span>
          <small>{{ item.tag }}</small>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { number: '01', tag: 'APPLY', title: 'Tell us about you', description: 'Share your profession and contact details. No resume ready? You can send it later.' },
  { number: '02', tag: 'MATCH', title: 'Meet your recruiter', description: "Talk through your license, experience and schedule. We'll match you with openings that fit." },
  { number: '03', tag: 'START', title: 'Get ready for day one', description: 'Choose your opportunity. Your recruiter helps coordinate credentials, onboarding and your first day.' },
]
</script>

<style scoped>
.section { padding: 98px 0; }
.steps-section { padding-top: 99px; padding-bottom: 97px; }
.section-heading { width: min(1100px, calc(100% - 48px)); margin: 0 auto 48px; text-align: center; }
.section-kicker { margin: 0 0 15px; color: #ff790e; font-size: 14px; font-weight: 500; }
.section-heading h2 { margin: 0 0 11px; font-size: 40px; line-height: 1.2; letter-spacing: -.6px; font-weight: 800; }

.steps-grid { width: min(1200px, calc(100% - 48px)); margin: auto; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.step-card { min-height: 237px; padding: 26px 27px; border: 1px solid var(--line); border-radius: 20px; background: white; }
.step-card__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.step-card__top span { color: var(--blue); font-size: 36px; font-weight: 700; }
.step-card__top small { color: var(--muted); font-size: 11px; }
.step-card h3 { margin: 0 0 9px; font-size: 23px; line-height: 1.3; font-weight: 700; }
.step-card p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.55; }

@media (max-width: 700px) {
  .section { padding: 69px 0; }
  .section-heading { width: calc(100% - 36px); margin-bottom: 34px; }
  .section-heading h2 { font-size: 32px; }
  .steps-grid { width: calc(100% - 36px); grid-template-columns: 1fr; gap: 14px; }
  .step-card { min-height: 0; padding: 23px; }
}
</style>
