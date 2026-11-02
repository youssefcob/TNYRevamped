<template>
  <section id="roles" class="section roles-section">
    <div class="section-heading">
      <p class="section-kicker">OPEN ROLES</p>
      <h2>Find the role that fits you</h2>
      <p>Tap your profession to start your application. We place therapy and rehab professionals across New York City.</p>
    </div>
    <div class="role-grid">
      <article v-for="role in roleCards" :key="role.code" class="role-card">
        <span class="role-card__badge">{{ role.code }}</span>
        <h3>{{ role.title }}</h3>
        <p>{{ role.description }}</p>
        <button type="button" class="text-link" @click="handleSelect(role.role)">Apply <span>→</span></button>
      </article>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['selectRole'])

const roleCards = [
  { code: 'PT', title: 'Physical Therapist', description: 'Outpatient, SNF, home care & school roles', role: 'PT' },
  { code: 'PTA', title: 'PT Assistant', description: 'Full-time and part-time schedules', role: 'PTA' },
  { code: 'OT', title: 'Occupational Therapist', description: 'Pediatric, adult & school-based settings', role: 'OT' },
  { code: 'COTA', title: 'OT Assistant', description: 'Clinic and facility-based roles', role: 'COTA' },
  { code: 'SLP', title: 'Speech-Language Pathologist', description: 'Schools, clinics and home care', role: 'SLP' },
  { code: 'LMT', title: 'Massage Therapist', description: 'Rehab and wellness practices', role: 'Massage' },
  { code: 'AIDE', title: 'Rehab Aide', description: 'Great entry point into rehab', role: 'Rehab Aide' },
  { code: '+', title: 'Front Desk & More', description: 'Medical front desk, MA, acupuncture', role: 'Other' },
]

function handleSelect(role) {
  emit('selectRole', role)
  document.querySelector('.application')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped>
.section { padding: 98px 0; }
.section-heading { width: min(1100px, calc(100% - 48px)); margin: 0 auto 48px; text-align: center; }
.section-kicker { margin: 0 0 15px; color: #ff790e; font-size: 14px; font-weight: 500; }
.section-heading h2 { margin: 0 0 11px; font-size: 40px; line-height: 1.2; letter-spacing: -.6px; font-weight: 800; }
.section-heading > p:last-child { margin: 0; color: var(--muted); font-size: 18px; line-height: 1.5; }

.role-grid { width: min(1200px, calc(100% - 48px)); margin: auto; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; }
.role-card { min-height: 286px; display: flex; flex-direction: column; align-items: flex-start; padding: 23px; border: 1px solid var(--line); border-radius: 20px; background: white; }
.role-card__badge { min-width: 48px; height: 48px; display: grid; place-items: center; padding: 0 10px; margin-bottom: 20px; border-radius: 15px; color: var(--ink); background: #e8f6fc; font-weight: 800; }
.role-card h3 { margin: 0 0 7px; font-size: 20px; line-height: 1.3; font-weight: 700; }
.role-card p { margin: 0 0 18px; color: var(--muted); font-size: 15px; line-height: 1.55; }
.text-link { display: flex; align-items: center; gap: 10px; margin-top: auto; padding: 0; border: 0; color: var(--ink); background: none; cursor: pointer; font-size: 16px; font-weight: 600; }
.text-link span { color: var(--blue); font-size: 21px; transition: transform .15s; }
.text-link:hover span { transform: translateX(4px); }

@media (max-width: 980px) {
  .role-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .section { padding: 69px 0; }
  .section-heading { width: calc(100% - 36px); margin-bottom: 34px; }
  .section-heading h2 { font-size: 32px; }
  .section-heading > p:last-child { font-size: 16px; }
  .role-grid { width: calc(100% - 36px); grid-template-columns: 1fr; gap: 14px; }
  .role-card { min-height: 235px; }
}
</style>
