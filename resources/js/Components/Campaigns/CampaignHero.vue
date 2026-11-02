<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__copy">
        <div class="eyebrow-pill"><span></span>Now hiring across New York City</div>
        <h1><span>Therapy &amp; Rehab Jobs</span><br>in NYC.<br>Apply in 2 Minutes.</h1>
        <p class="hero__intro">PT, PTA, OT, SLP, Massage Therapist and Rehab roles in outpatient clinics, SNFs, schools, hospitals and home care. One application, matched to openings that fit your schedule.</p>
        <ul class="benefits">
          <li><i>✓</i><span><strong>Full-time &amp; part-time roles,</strong> built around your schedule</span></li>
          <li><i>✓</i><span><strong>New grads welcome</strong> — licensed or license in process</span></li>
          <li><i>✓</i><span><strong>A real recruiter calls you back,</strong> Mon–Fri 9am–5pm</span></li>
          <li><i>✓</i><span><strong>No resume? No problem.</strong> Apply now, send it later</span></li>
        </ul>
        <a class="hero__call" href="tel:+13474414283">Call (347) 441-4283</a>
      </div>

      <form class="application" @submit.prevent="continueApplication" novalidate>
        <template v-if="step === 1">
          <h2>Get matched to NYC openings</h2>
          <p class="form-subtitle">Takes about 2 minutes. No account needed.</p>
          <div class="progress"><span class="progress__fill"></span><span></span></div>
          <p class="step-label">STEP 1 OF 2 · YOUR ROLE</p>
          <fieldset class="role-field">
            <legend>What's your profession?</legend>
            <div class="chips">
              <button v-for="role in quickRoles" :key="role" type="button" class="chip" :class="{ 'chip--selected': form.role === role }" @click="selectRole(role)">{{ role }}<b v-if="form.role === role">✓</b></button>
              <button type="button" class="chip" :class="{ 'chip--selected': form.role === 'Rehab Aide' }" @click="selectRole('Rehab Aide')"><b v-if="form.role === 'Rehab Aide'">✓</b>Rehab Aide</button>
              <button type="button" class="chip" :class="{ 'chip--selected': form.role === 'Other' }" @click="selectRole('Other')"><b v-if="form.role === 'Other'">✓</b>Other</button>
            </div>
          </fieldset>
          <label class="field-label">Full name</label>
          <div class="name-fields">
            <input v-model="form.firstName" autocomplete="given-name" placeholder="First name" required aria-label="First name" :class="{ 'field--focus': !form.firstName }">
            <input v-model="form.lastName" autocomplete="family-name" placeholder="Last name" required aria-label="Last name">
          </div>
          <label class="field-label" for="phone">Mobile phone</label>
          <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" placeholder="(555) 555-5555" required>
          <label class="field-label" for="email">Email</label>
          <input id="email" v-model="form.email" type="email" autocomplete="email" placeholder="you@email.com" required>
          <p v-if="error" class="form-error" role="alert">{{ error }}</p>
          <button class="submit-button" type="submit">Continue <span aria-hidden="true">→</span></button>
        </template>

        <template v-else-if="step === 2">
          <button class="back-button" type="button" @click="step = 1">← Back</button>
          <h2>Tell us what works for you</h2>
          <p class="form-subtitle">A few details help us find the right match.</p>
          <div class="progress"><span class="progress__fill progress__fill--complete"></span><span></span></div>
          <p class="step-label">STEP 2 OF 2 · YOUR PREFERENCES</p>
          <p class="question">Where would you like to work?</p>
          <div class="choice-list">
            <label v-for="place in workplaces" :key="place"><input v-model="form.workplaces" type="checkbox" :value="place"><span>{{ place }}</span></label>
          </div>
          <label class="field-label" for="schedule">What schedule are you looking for?</label>
          <select id="schedule" v-model="form.schedule" required>
            <option disabled value="">Select a schedule</option><option>Full-time</option><option>Part-time</option><option>Per diem</option><option>Open to options</option>
          </select>
          <label class="field-label" for="experience">License / experience</label>
          <select id="experience" v-model="form.experience" required>
            <option disabled value="">Select one</option><option>Licensed</option><option>License in process</option><option>New graduate</option><option>Exploring my options</option>
          </select>
          <p v-if="error" class="form-error" role="alert">{{ error }}</p>
          <button class="submit-button" type="submit" :disabled="isSubmitting">
            <span v-if="isSubmitting">Submitting...</span>
            <template v-else>Find my matches <span aria-hidden="true">→</span></template>
          </button>
          <p class="privacy-note">By continuing, you agree that a TNY Staffing recruiter may contact you about job opportunities.</p>
        </template>

        <div v-else class="success-state" role="status">
          <div class="success-mark">✓</div>
          <p class="step-label">APPLICATION RECEIVED</p>
          <h2>Thanks, {{ form.firstName }}!</h2>
          <p>Our NYC therapy staffing team will review your preferences and reach out to you shortly.</p>
          <a class="submit-button success-call" href="tel:+13474414283">
            <svg class="phone-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.251.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
            </svg>
            Talk to a recruiter
          </a>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Http from '@/mixins/Http'

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
})

const step = ref(1)
const error = ref('')
const isSubmitting = ref(false)
const quickRoles = ['PT', 'PTA', 'OT', 'COTA', 'SLP', 'Massage']
const workplaces = ['Outpatient Clinics', 'Skilled Nursing (SNF)', 'Schools', 'Hospitals', 'Home Care']

function selectRole(role) {
  props.form.role = role
  error.value = ''
}

async function continueApplication() {
  error.value = ''
  if (step.value === 1) {
    if (!props.form.role || !props.form.firstName.trim() || !props.form.lastName.trim() || !props.form.phone.trim() || !props.form.email.trim()) {
      error.value = 'Please choose a profession and complete all contact fields.'
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.form.email)) {
      error.value = 'Please enter a valid email address.'
      return
    }
    step.value = 2
    return
  }

  if (!props.form.workplaces.length || !props.form.schedule || !props.form.experience) {
    error.value = 'Please choose at least one setting, a schedule and an experience level.'
    return
  }

  isSubmitting.value = true
  try {
    await Http.post('campaign-application', {
      role: props.form.role,
      first_name: props.form.firstName.trim(),
      last_name: props.form.lastName.trim(),
      phone: props.form.phone.trim(),
      email: props.form.email.trim(),
      workplaces: props.form.workplaces,
      schedule: props.form.schedule,
      experience: props.form.experience,
      campaign_source: 'therapy_healthcare_nyc',
    })
    step.value = 3
  } catch (err) {
    error.value = typeof err === 'string' ? err : 'Submission failed. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.hero { background: linear-gradient(112deg,#08284c 0%,#253f59 52%,#c4ad8b 100%); color: white; }
.hero__inner { width: min(1200px, calc(100% - 48px)); min-height: 878px; margin: auto; padding: 64px 0 78px; display: grid; grid-template-columns: 1.08fr .92fr; gap: 54px; align-items: center; }
.hero__copy { padding-bottom: 2px; }
.eyebrow-pill { width: fit-content; display:flex; align-items:center; gap:9px; border-radius:30px; padding:11px 16px; margin-bottom:30px; color:#fff; background:rgba(60,91,126,.5); font-size:14px; }
.eyebrow-pill span { width:9px; height:9px; background:var(--blue); border-radius:50%; }
h1,h2,p { margin-top:0; }
.hero h1 { margin:0 0 20px; font-size:48px; line-height:1.23; font-weight:800; letter-spacing:.1px; }
.hero h1 span { color:var(--blue); }
.hero__intro { max-width:595px; margin-bottom:25px; color:#d9e1eb; font-size:18px; line-height:1.5; }
.benefits { display:grid; gap:15px; list-style:none; margin:27px 0 28px; padding:0; font-size:16px; }
.benefits li { display:flex; align-items:center; gap:13px; line-height:1.45; }
.benefits i { width:20px; height:20px; flex:0 0 20px; display:grid; place-items:center; border:2px solid #11b5ed; border-radius:50%; color:#11b5ed; font-size:12px; font-style:normal; font-weight:700; }
.benefits strong { font-weight:700; }
.hero__call { width:320px; min-height:61px; display:grid; place-items:center; border:1px solid white; border-radius:40px; color:white; font-size:20px; font-weight:700; text-decoration:none; transition:.2s; }
.hero__call:hover { color:var(--navy); background:white; }
.application { width:100%; max-width:520px; justify-self:end; min-height:734px; padding:30px 32px 32px; border-radius:40px; color:#252525; background:#fbf9f6; }
.application h2 { margin:0 0 5px; font-size:29px; line-height:1.2; letter-spacing:-.5px; font-weight:800; }
.form-subtitle { color:var(--muted); margin:0 0 24px; font-size:16px; }
.progress { height:5px; display:flex; gap:8px; margin:0 0 25px; }.progress span { height:5px; flex:1; background:#dedfe1; border-radius:9px; }.progress .progress__fill { background:var(--blue); }.progress .progress__fill--complete { flex:2; }
.step-label { margin:0 0 14px; color:var(--ink); font-size:12px; font-weight:800; }
.role-field { border:0; margin:0 0 24px; padding:0; }.role-field legend,.question { margin-bottom:14px; font-size:15px; }
.chips { display:flex; flex-wrap:wrap; gap:8px; }.chip { display:flex; align-items:center; gap:7px; min-height:42px; padding:0 15px; border:1px solid var(--line); border-radius:24px; color:var(--ink); background:white; cursor:pointer; font-size:14px; transition:.15s; }.chip:hover { border-color:var(--blue); }.chip--selected { border-color:var(--blue); background:#e5f6fc; }.chip b { color:var(--blue); }
.field-label { display:block; margin:0 0 9px; font-size:15px; }.name-fields { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:18px; }
.application input:not([type=checkbox]),.application select { width:100%; height:57px; padding:0 17px; border:1px solid #d9dce0; border-radius:16px; outline:none; color:#252525; background:transparent; font-size:15px; margin-bottom:18px; transition:border-color .15s, box-shadow .15s; }
.application input::placeholder { color:#727e8c; opacity:1; }.application input:focus,.application select:focus { border-color:#12aef0; box-shadow:0 0 0 1px #12aef0; }.application input.field--focus { border-color:#12aef0; box-shadow:0 0 0 1px #12aef0; }
.name-fields input { margin-bottom:0!important; }.submit-button { width:100%; min-height:61px; display:flex; justify-content:center; align-items:center; gap:16px; margin-top:3px; border:0; border-radius:36px; color:#092749; background:var(--orange); cursor:pointer; font-size:20px; font-weight:700; text-decoration:none; transition:background .15s, transform .15s; }.submit-button:hover { background:#ffad50; transform:translateY(-1px); }.submit-button span { font-size:24px; font-weight:400; }
.form-error { margin:0 0 10px; color:#b42318; font-size:13px; }.back-button { padding:0; margin-bottom:14px; border:0; color:var(--ink); background:none; cursor:pointer; }.choice-list { display:grid; grid-template-columns:1fr 1fr; gap:9px; margin:0 0 23px; }.choice-list label { display:flex; align-items:center; gap:8px; padding:11px 12px; border:1px solid var(--line); border-radius:12px; background:white; font-size:13px; cursor:pointer; }.choice-list input { accent-color:var(--blue); }.privacy-note { margin:12px 2px 0; color:var(--muted); font-size:11px; line-height:1.5; }
.success-state { display:flex; min-height:660px; flex-direction:column; justify-content:center; align-items:center; text-align:center; }
.success-mark { width:64px; height:64px; display:grid; place-items:center; margin:0 auto 22px; border-radius:50%; color:white; background:#16a978; font-size:32px; }
.success-state h2 { margin:4px 0 10px; font-size:32px; }
.success-state>p:not(.step-label) { max-width:400px; margin:0 auto 26px; color:var(--muted); line-height:1.65; }
.success-call { width:100%; max-width:340px; margin-top:5px; gap:12px; }
.phone-icon { flex-shrink:0; }

@media (max-width: 980px) {
  .hero__inner { grid-template-columns:1fr 1fr; gap:28px; }
  .hero h1 { font-size:40px; }
  .application { padding:27px 24px; border-radius:30px; }
  .application h2 { font-size:25px; }
}

@media (max-width: 700px) {
  .hero__inner { width:calc(100% - 36px); min-height:0; padding:52px 0 56px; grid-template-columns:1fr; gap:38px; }
  .hero h1 { font-size:clamp(37px,9vw,48px); }
  .hero__intro { font-size:16px; }
  .benefits { font-size:14px; gap:13px; }
  .hero__call { width:100%; max-width:360px; }
  .application { max-width:none; min-height:auto; padding:26px 20px; border-radius:26px; }
  .application h2 { font-size:26px; }
  .name-fields { gap:9px; }
  .application input:not([type=checkbox]),.application select { height:54px; padding:0 13px; }
}
</style>
