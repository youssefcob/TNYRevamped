<template>
  <section class="why-section">
    <div class="why-inner">
      <p class="section-kicker">WHY TNY STAFFING</p>
      <h2>A staffing partner that's in your corner</h2>
      <p class="why-intro">We focus on therapy and rehab, so we understand your license, your caseload and the settings you work in.</p>
      <div class="why-grid">
        <article v-for="item in reasons" :key="item.title" class="why-card">
          <span class="why-icon" aria-hidden="true">{{ item.icon }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
      <div class="why-cta">
        <div>
          <h3>Your next opportunity starts here.</h3>
          <p>Talk to a real recruiter, Mon–Fri 9am–5pm.</p>
        </div>
        <a href="tel:+13474414283">Call (347) 441-4283</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  { icon: '☆', title: 'Therapy specialists', description: 'PT, OT, SLP and rehab staffing is what we do: including pediatric, neuro, vestibular, pelvic floor and lymphedema roles.' },
  { icon: '◷', title: 'Flexible schedules', description: 'Full-time, part-time or per diem. Choose what works for your life, and change it as your needs change.' },
  { icon: '⌖', title: 'Local to NYC', description: 'Our team is based at 575 8th Ave in Manhattan, placing professionals with facilities across New York City.' },
]
</script>

<style scoped>
.why-section { padding: 83px 0 62px; color: #f8fafc; background: radial-gradient(ellipse at 55% 46%,#294a70 0%,#192c45 54%,#111f31 100%); }
.why-inner { width: min(1200px, calc(100% - 48px)); margin: auto; }
.why-inner > .section-kicker { margin-bottom: 15px; color: #ff790e; font-size: 14px; font-weight: 500; }
.why-inner > h2 { margin-bottom: 14px; font-size: 40px; line-height: 1.2; letter-spacing: -.6px; font-weight: 800; }
.why-intro { margin-bottom: 40px; color: #d7deea; font-size: 18px; line-height: 1.5; }
.why-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.why-card { min-height: 226px; padding: 25px 27px; border: 1px solid rgba(255,255,255,.13); border-radius: 21px; background: rgba(255,255,255,.085); }
.why-icon { color: #10b8ee; font-size: 29px; line-height: 1; }
.why-card h3 { margin: 21px 0 12px; font-size: 22px; font-weight: 700; }
.why-card p { margin: 0; color: #d7deea; font-size: 15px; line-height: 1.7; }
.why-cta { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 49px; }
.why-cta h3 { margin: 0 0 6px; font-size: 22px; font-weight: 700; }
.why-cta p { margin: 0; color: #d7deea; font-size: 15px; }
.why-cta a { width: 320px; min-height: 61px; display: grid; place-items: center; border-radius: 36px; color: #092749; background: var(--orange); font-size: 20px; font-weight: 700; text-decoration: none; transition: background .15s; }
.why-cta a:hover { background: #ffad50; }

@media (max-width: 980px) {
  .why-card { padding: 22px; }
}

@media (max-width: 700px) {
  .why-section { padding: 66px 0 45px; }
  .why-inner { width: calc(100% - 36px); }
  .why-inner > h2 { font-size: 32px; }
  .why-intro { font-size: 16px; line-height: 1.6; }
  .why-grid { width: calc(100% - 36px); grid-template-columns: 1fr; gap: 14px; }
  .why-card { min-height: 0; }
  .why-cta { align-items: stretch; flex-direction: column; margin-top: 34px; }
  .why-cta a { width: 100%; }
}
</style>
