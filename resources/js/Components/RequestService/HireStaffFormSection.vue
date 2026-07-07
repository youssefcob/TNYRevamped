<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue';
import Http from '@/mixins/Http';
import { snack } from '@/mixins/toast';

interface ServiceItem { id: number; title: string; }

const props = defineProps<{
  services?: ServiceItem[];
  preselected?: string;
}>();

const serviceNames = computed(() => (props.services ?? []).map(s => s.title));

const urgencyOptions = ['Urgent (ASAP)', 'Within 30 Days', 'Flexible'];

const form = reactive({
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  discipline: props.preselected ?? '',
  open_roles: '',
  location: '',
  pay_range: '',
  start_date: '',
  urgency: '',
  description: '',
});

const errors = reactive<Record<string, string>>({});
const loading = ref(false);
const submitted = ref(false);

// ---- Dropdown state ----
const disciplineOpen = ref(false);
const urgencyOpen = ref(false);
const disciplineSearch = ref('');
const urgencySearch = ref('');

const filteredDisciplines = computed(() =>
  serviceNames.value.filter(s => s.toLowerCase().includes(disciplineSearch.value.toLowerCase()))
);
const filteredUrgency = computed(() =>
  urgencyOptions.filter(u => u.toLowerCase().includes(urgencySearch.value.toLowerCase()))
);

function closeDiscipline() { disciplineOpen.value = false; disciplineSearch.value = ''; }
function closeUrgency() { urgencyOpen.value = false; urgencySearch.value = ''; }
function selectDiscipline(val: string) { form.discipline = val; closeDiscipline(); }
function selectUrgency(val: string) { form.urgency = val; closeUrgency(); }

function onDocClick(e: MouseEvent) {
  const t = e.target as HTMLElement;
  if (!t.closest('.rs-dropdown')) {
    closeDiscipline();
    closeUrgency();
  }
}
onMounted(() => document.addEventListener('mousedown', onDocClick));
onUnmounted(() => document.removeEventListener('mousedown', onDocClick));

function validate() {
  const e: Record<string, string> = {};
  if (!form.company_name.trim()) e.company_name = 'Company name is required';
  if (!form.contact_name.trim()) e.contact_name = 'Contact name is required';
  if (!form.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
  if (!form.phone.trim()) e.phone = 'Phone number is required';
  if (!form.discipline) e.discipline = 'Please select a discipline';
  if (!form.location.trim()) e.location = 'Location is required';
  if (!form.description.trim()) e.description = 'Please provide a brief description';
  Object.assign(errors, e);
  return Object.keys(e).length === 0;
}

async function submit() {
  // Clear errors
  Object.keys(errors).forEach(k => delete errors[k]);
  if (!validate()) return;

  loading.value = true;
  try {
    const extras = [
      form.open_roles   ? `Open Roles: ${form.open_roles}`   : null,
      form.pay_range    ? `Pay Range: ${form.pay_range}`      : null,
      form.start_date   ? `Start Date: ${form.start_date}`    : null,
      form.urgency      ? `Urgency: ${form.urgency}`          : null,
    ].filter(Boolean).join('\n');

    await Http.methods.post('request', {
      company_name: form.company_name,
      name:         form.contact_name,
      email:        form.email,
      phone:        form.phone.replace(/\D/g, ''),
      service:      form.discipline,
      address:      form.location,
      requirements: extras ? `${form.description}\n\n${extras}` : form.description,
    });

    submitted.value = true;
    snack('success', 'Your staffing request has been submitted! We\'ll be in touch shortly.');
  } catch (err: any) {
    snack('error', err || 'Something went wrong. Please try again.');
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section class="rs-form-section">
    <div class="rs-form-section__inner">

      <!-- LEFT: Form card -->
      <div class="rs-card">
        <div class="rs-card__header">
          <p class="rs-card__label">Request Staff</p>
          <h2 class="rs-card__title">Tell Us About<br>Your Staffing Needs</h2>
          <p class="rs-card__desc">
            Complete the form below and our staffing specialists will review your requirements
            and connect you with qualified professionals tailored to your facility, setting, and timeline.
          </p>
        </div>

        <!-- Success state -->
        <div v-if="submitted" class="rs-card__success">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="24" fill="#22c55e" opacity="0.12"/>
            <path d="M14 24L21 31L34 17" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Request Submitted!</h3>
          <p>Our staffing team will review your requirements and reach out within one business day.</p>
        </div>

        <form v-else class="rs-form" @submit.prevent="submit" novalidate>

          <!-- Company Name -->
          <div class="rs-field">
            <label class="rs-field__label">Company Name</label>
            <input v-model="form.company_name" type="text" placeholder="Example Company" class="rs-field__input" :class="{ 'rs-field__input--err': errors.company_name }" />
            <span v-if="errors.company_name" class="rs-field__err">{{ errors.company_name }}</span>
          </div>

          <!-- Contact Name -->
          <div class="rs-field">
            <label class="rs-field__label">Contact Name</label>
            <input v-model="form.contact_name" type="text" placeholder="Full Name" class="rs-field__input" :class="{ 'rs-field__input--err': errors.contact_name }" />
            <span v-if="errors.contact_name" class="rs-field__err">{{ errors.contact_name }}</span>
          </div>

          <!-- Email + Phone -->
          <div class="rs-form__row">
            <div class="rs-field">
              <label class="rs-field__label">Email Address</label>
              <input v-model="form.email" type="email" placeholder="you@facility.com" class="rs-field__input" :class="{ 'rs-field__input--err': errors.email }" />
              <span v-if="errors.email" class="rs-field__err">{{ errors.email }}</span>
            </div>
            <div class="rs-field">
              <label class="rs-field__label">Phone Number</label>
              <input v-model="form.phone" type="tel" placeholder="(212) 555-0100" class="rs-field__input" :class="{ 'rs-field__input--err': errors.phone }" />
              <span v-if="errors.phone" class="rs-field__err">{{ errors.phone }}</span>
            </div>
          </div>

          <!-- Discipline Needed -->
          <div class="rs-field">
            <label class="rs-field__label">Discipline Needed</label>
            <div class="rs-dropdown" :class="{ 'rs-dropdown--open': disciplineOpen, 'rs-dropdown--err': errors.discipline }">
              <div class="rs-dropdown__control" @click="disciplineOpen = !disciplineOpen">
                <span :class="{ 'rs-dropdown__placeholder': !form.discipline }">
                  {{ form.discipline || 'PT / PTA / OT / COTA / SLP / Multiple' }}
                </span>
                <svg class="rs-dropdown__chevron" :class="{ 'rs-dropdown__chevron--open': disciplineOpen }" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <Transition name="rs-drop">
                <div v-if="disciplineOpen" class="rs-dropdown__menu">
                  <input v-model="disciplineSearch" type="text" placeholder="Search..." class="rs-dropdown__search" @click.stop />
                  <button v-for="opt in filteredDisciplines" :key="opt" type="button" class="rs-dropdown__option" :class="{ 'rs-dropdown__option--active': form.discipline === opt }" @mousedown.prevent="selectDiscipline(opt)">
                    {{ opt }}
                  </button>
                  <p v-if="filteredDisciplines.length === 0" class="rs-dropdown__empty">No options found</p>
                </div>
              </Transition>
            </div>
            <span v-if="errors.discipline" class="rs-field__err">{{ errors.discipline }}</span>
          </div>

          <!-- Open Roles + Location -->
          <div class="rs-form__row">
            <div class="rs-field">
              <label class="rs-field__label">Number of Open Roles</label>
              <input v-model="form.open_roles" type="number" min="1" placeholder="e.g. 3" class="rs-field__input" />
            </div>
            <div class="rs-field">
              <label class="rs-field__label">Location(s)</label>
              <input v-model="form.location" type="text" placeholder="Manhattan, Brooklyn…" class="rs-field__input" :class="{ 'rs-field__input--err': errors.location }" />
              <span v-if="errors.location" class="rs-field__err">{{ errors.location }}</span>
            </div>
          </div>

          <!-- Pay Range + Start Date -->
          <div class="rs-form__row">
            <div class="rs-field">
              <label class="rs-field__label">Pay Range <span class="rs-field__optional">(optional)</span></label>
              <input v-model="form.pay_range" type="text" placeholder="e.g. $35–$45/hr" class="rs-field__input" />
            </div>
            <div class="rs-field">
              <label class="rs-field__label">Start Date</label>
              <input v-model="form.start_date" type="date" class="rs-field__input" />
            </div>
          </div>

          <!-- Hiring Urgency -->
          <div class="rs-field">
            <label class="rs-field__label">Hiring Urgency</label>
            <div class="rs-dropdown" :class="{ 'rs-dropdown--open': urgencyOpen }">
              <div class="rs-dropdown__control" @click="urgencyOpen = !urgencyOpen">
                <span :class="{ 'rs-dropdown__placeholder': !form.urgency }">
                  {{ form.urgency || '(Urgent / 30 days / Flexible' }}
                </span>
                <svg class="rs-dropdown__chevron" :class="{ 'rs-dropdown__chevron--open': urgencyOpen }" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <Transition name="rs-drop">
                <div v-if="urgencyOpen" class="rs-dropdown__menu">
                  <button v-for="opt in filteredUrgency" :key="opt" type="button" class="rs-dropdown__option" :class="{ 'rs-dropdown__option--active': form.urgency === opt }" @mousedown.prevent="selectUrgency(opt)">
                    {{ opt }}
                  </button>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Brief Description -->
          <div class="rs-field">
            <label class="rs-field__label">Brief Job Description</label>
            <textarea v-model="form.description" rows="6" placeholder="Describe the role, setting, schedule, and any specific requirements…" class="rs-field__input rs-field__input--textarea" :class="{ 'rs-field__input--err': errors.description }"></textarea>
            <span v-if="errors.description" class="rs-field__err">{{ errors.description }}</span>
          </div>

          <!-- Submit -->
          <div class="rs-form__actions">
            <button type="submit" class="rs-form__submit" :disabled="loading">
              <span v-if="loading">Submitting…</span>
              <span v-else>Submit Staffing Request</span>
            </button>
            <p class="rs-form__note">
              By submitting the application you agree to be contacted by TNY regarding staffing services
            </p>
          </div>

        </form>
      </div>

      <!-- RIGHT: Image + Sidebar cards -->
      <div class="rs-sidebar">
        <div class="rs-sidebar__img"></div>

        <div class="rs-info-card">
          <p class="rs-info-card__label">Contact Information</p>
          <h3 class="rs-info-card__title">Talk To Our Staffing Team</h3>
          <ul class="rs-info-card__list">
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.09 3.27a1 1 0 01-.23 1.02L7.7 9.36a11.045 11.045 0 005.63 5.63l1.385-1.385a1 1 0 011.02-.23l3.27 1.09A1 1 0 0119 15.72V18a2 2 0 01-2 2h-1C8.16 20 1 12.84 1 4V3a2 2 0 012-2h.28" stroke="#FF9B37" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span>(212) 555-0100</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M2 5l8 5 8-5M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" stroke="#FF9B37" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span>contact@therapyofnewyork.com</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 11a3 3 0 100-6 3 3 0 000 6z" stroke="#FF9B37" stroke-width="1.5"/><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" stroke="#FF9B37" stroke-width="1.5"/></svg>
              <span>New York, NY 10001</span>
            </li>
          </ul>
        </div>

        <div class="rs-info-card">
          <p class="rs-info-card__label">Staffing Hours</p>
          <h3 class="rs-info-card__title">We're Available</h3>
          <ul class="rs-info-card__hours">
            <li><span>Monday - Friday</span><span>8:00 AM – 6:00 PM</span></li>
            <li><span>Saturday</span><span>9:00 AM – 2:00 PM</span></li>
            <li class="rs-info-card__hours-closed"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
// ---- Section layout ----
.rs-form-section {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
}

// ---- Form card ----
.rs-card {
  background: rgba($color-sand, 0.1);
  border-radius: 2.5rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__label {
    font-family: $font-body;
    font-size: 1.125rem;
    font-weight: $fw-medium;
    color: $color-orange;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    color: $color-dark;
    line-height: 1.25;
    margin: 0;
  }

  &__desc {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: clamp(0.875rem, 1.2vw, 1.125rem);
    color: $color-dark;
    line-height: 1.6;
    margin: 0;
  }

  &__success {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 3rem 1rem;

    h3 {
      font-family: $font-heading;
      font-weight: $fw-bold;
      font-size: 1.5rem;
      color: $color-dark;
      margin: 0;
    }

    p {
      font-family: $font-body;
      font-size: 1rem;
      color: $text-body;
      margin: 0;
    }
  }
}

// ---- Form ----
.rs-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 500px) { grid-template-columns: 1fr; }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  &__submit {
    width: 100%;
    height: 3.75rem;
    background: $color-orange;
    color: #0f2b3d;
    border: none;
    border-radius: 80px;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: $btn-size;
    cursor: pointer;
    transition: background 0.25s;

    &:hover:not(:disabled) { background: darken(#FF9B37, 8%); }
    &:disabled { opacity: 0.65; cursor: not-allowed; }
  }

  &__note {
    font-family: $font-body;
    font-size: 0.875rem;
    color: rgba($color-dark, 0.5);
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }
}

// ---- Field ----
.rs-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &__label {
    font-family: $font-body;
    font-size: 1.0625rem;
    font-weight: $fw-regular;
    color: $color-dark;
    padding: 0 0.25rem;
  }

  &__optional {
    font-size: 0.875rem;
    color: rgba($color-dark, 0.5);
  }

  &__input {
    height: 3.75rem;
    padding: 0 1.5rem;
    border: 1px solid $color-dark;
    border-radius: 1rem;
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    background: transparent;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
    box-sizing: border-box;

    &::placeholder { color: rgba($color-dark, 0.4); }

    &:focus {
      border-color: $color-blue;
      box-shadow: 0 0 0 3px rgba($color-blue, 0.12);
    }

    &--err {
      border-color: #ef4444;
    }

    &--textarea {
      height: auto;
      padding: 1rem 1.5rem;
      resize: vertical;
      min-height: 7.5rem;
    }
  }

  &__err {
    font-family: $font-body;
    font-size: 0.8125rem;
    color: #ef4444;
    padding-left: 0.25rem;
  }
}

// ---- Dropdown ----
.rs-dropdown {
  position: relative;

  &__control {
    height: 3.75rem;
    padding: 0 1.5rem;
    border: 1px solid $color-dark;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: transparent;
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;

    &:hover { border-color: $color-blue; }
  }

  &--open .rs-dropdown__control {
    border-color: $color-blue;
    box-shadow: 0 0 0 3px rgba($color-blue, 0.12);
    border-radius: 1rem 1rem 0 0;
  }

  &--err .rs-dropdown__control { border-color: #ef4444; }

  &__placeholder { color: rgba($color-dark, 0.4); }

  &__chevron {
    flex-shrink: 0;
    transition: transform 0.2s;
    &--open { transform: rotate(180deg); }
  }

  &__menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: $color-white;
    border: 1px solid $color-blue;
    border-top: none;
    border-radius: 0 0 1rem 1rem;
    z-index: 50;
    max-height: 15rem;
    overflow-y: auto;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }

  &__search {
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    border: none;
    border-bottom: 1px solid rgba($color-dark, 0.1);
    font-family: $font-body;
    font-size: 0.9375rem;
    outline: none;
    background: rgba($color-sand, 0.08);
  }

  &__option {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.875rem 1.25rem;
    font-family: $font-body;
    font-size: 1rem;
    color: $color-dark;
    background: none;
    border: none;
    cursor: pointer;
    transition: background 0.15s;

    &:hover { background: rgba($color-blue, 0.06); }
    &--active { background: rgba($color-blue, 0.1); color: $color-blue; font-weight: $fw-medium; }
  }

  &__empty {
    padding: 1rem;
    font-family: $font-body;
    font-size: 0.9375rem;
    color: rgba($color-dark, 0.5);
    text-align: center;
    margin: 0;
  }
}

// Dropdown transition
.rs-drop-enter-active,
.rs-drop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.rs-drop-enter-from,
.rs-drop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

// ---- Sidebar ----
.rs-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: 6rem;
  align-self: start;

  @media (max-width: 900px) { position: static; }
}

.rs-sidebar__img {
  width: 100%;
  height: 34rem;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, #b8d4e8 0%, #8ab9d4 60%, #6aa5c8 100%);

  @media (max-width: 900px) { height: 20rem; }
}

// ---- Info cards ----
.rs-info-card {
  background: rgba($color-sand, 0.1);
  border-radius: 2.5rem;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &__label {
    font-family: $font-body;
    font-size: 1rem;
    font-weight: $fw-medium;
    color: $color-orange;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.5rem;
    color: $color-dark;
    margin: 0;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      font-family: $font-body;
      font-size: 1.0625rem;
      color: $color-dark;
    }
  }

  &__hours {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      display: flex;
      justify-content: space-between;
      font-family: $font-body;
      font-size: 1.0625rem;
      color: $color-dark;
    }
  }

  &__hours-closed span:last-child {
    color: rgba($color-dark, 0.4);
  }
}
</style>
