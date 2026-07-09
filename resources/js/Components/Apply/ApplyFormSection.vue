<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import Http from '@/mixins/Http';
import { snack } from '@/mixins/toast';

interface Job { id: number; title: string; }

const props = defineProps<{
  jobs?: Job[];
  preselected?: string;
}>();

const professions = [
  'Physical Therapist (PT)',
  'Physical Therapy Assistant (PTA)',
  'Occupational Therapist (OT)',
  'Occupational Therapy Assistant (COTA)',
  'Speech-Language Pathologist (SLP)',
  'Rehab Aide',
  'Massage Therapist',
  'Acupuncturist',
  'Medical Sales Representative',
  'Flyer Distributor',
  'Other',
];

const licenseOptions = ['Licensed', 'In Process', 'Student / Intern'];
const experienceOptions = ['0–1 years', '1–3 years', '3–5 years', '5+ years'];
const settingOptions = ['Outpatient', 'SNF / Subacute', 'Home Health', 'School-Based', 'Hospital', 'Other'];
const employmentOptions = ['Full-Time', 'Part-Time', 'Per Diem', 'Contract'];

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  profession: props.preselected ?? '',
  license_status: '',
  years_experience: '',
  preferred_setting: '',
  employment_type: '',
  start_date: '',
  message: '',
  resume: null as File | null,
});

const openDropdown = ref<string | null>(null);
const resumeFileName = ref('');
const isDragging = ref(false);
const submitted = ref(false);
const isLoading = ref(false);

function toggleDropdown(name: string) {
  openDropdown.value = openDropdown.value === name ? null : name;
}

function selectOption(field: keyof typeof form, value: string) {
  (form as any)[field] = value;
  openDropdown.value = null;
}

function onDocClick(e: MouseEvent) {
  const t = e.target as HTMLElement;
  if (!t.closest('.apply-dropdown')) {
    openDropdown.value = null;
  }
}

onMounted(() => document.addEventListener('mousedown', onDocClick));
onUnmounted(() => document.removeEventListener('mousedown', onDocClick));

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement;
  if (input.files?.[0]) {
    form.resume = input.files[0];
    resumeFileName.value = input.files[0].name;
  }
}

function onDrop(e: DragEvent) {
  isDragging.value = false;
  const file = e.dataTransfer?.files?.[0];
  if (file) {
    form.resume = file;
    resumeFileName.value = file.name;
  }
}

async function submit() {
  if (!form.first_name || !form.last_name || !form.email || !form.phone || !form.profession) {
    snack.error('Please fill in all required fields.');
    return;
  }
  if (!form.resume) {
    snack.error('Please upload your resume.');
    return;
  }

  isLoading.value = true;
  try {
    const extras = [
      form.license_status && `License Status: ${form.license_status}`,
      form.years_experience && `Years of Experience: ${form.years_experience}`,
      form.preferred_setting && `Preferred Setting: ${form.preferred_setting}`,
      form.employment_type && `Employment Type: ${form.employment_type}`,
      form.start_date && `Desired Start Date: ${form.start_date}`,
      form.message && `Notes: ${form.message}`,
    ].filter(Boolean).join('\n');

    const fd = new FormData();
    fd.append('name', `${form.first_name} ${form.last_name}`);
    fd.append('email', form.email);
    fd.append('phone', form.phone.replace(/\D/g, ''));
    fd.append('zip', `${form.city}${form.state ? ', ' + form.state : ''}`);
    fd.append('position', form.profession);
    fd.append('message', extras || 'Application submitted via website.');
    fd.append('resume', form.resume);

    await Http.post('application', fd);
    snack.success('Application submitted! Our recruitment team will be in touch.');
    submitted.value = true;
  } catch (e) {
    snack.error(e as string);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="apply-form">
    <div class="apply-form__inner">

      <!-- Form Card -->
      <div class="apply-form__card">
        <template v-if="!submitted">
          <div class="apply-form__card-header">
            <p class="apply-form__label">APPLY TODAY</p>
            <h2 class="apply-form__heading">Tell Us About Yourself</h2>
            <p class="apply-form__desc">
              Complete the form below and our recruitment team will review your experience,
              credentials, and career goals to match you with opportunities that fit your skills and preferences.
            </p>
          </div>

          <div class="apply-form__grid">
            <!-- Row 1: First / Last Name -->
            <div class="apply-form__field">
              <label class="apply-form__field-label">First Name</label>
              <input v-model="form.first_name" class="apply-form__input" placeholder="John" />
            </div>
            <div class="apply-form__field">
              <label class="apply-form__field-label">Last Name</label>
              <input v-model="form.last_name" class="apply-form__input" placeholder="Doe" />
            </div>

            <!-- Row 2: Email / Phone -->
            <div class="apply-form__field">
              <label class="apply-form__field-label">Email Address</label>
              <input v-model="form.email" type="email" class="apply-form__input" placeholder="john@example.com" />
            </div>
            <div class="apply-form__field">
              <label class="apply-form__field-label">Phone Number</label>
              <input v-model="form.phone" class="apply-form__input" placeholder="(212) 555-0100" />
            </div>

            <!-- Row 3: City / State -->
            <div class="apply-form__field">
              <label class="apply-form__field-label">City</label>
              <input v-model="form.city" class="apply-form__input" placeholder="NewYork" />
            </div>
            <div class="apply-form__field">
              <label class="apply-form__field-label">State</label>
              <input v-model="form.state" class="apply-form__input" placeholder="NY" />
            </div>

            <!-- Row 4: Profession / License Status -->
            <div class="apply-form__field">
              <label class="apply-form__field-label">Profession</label>
              <div class="apply-dropdown" :class="{ 'apply-dropdown--open': openDropdown === 'profession' }">
                <button type="button" class="apply-dropdown__trigger" @click="toggleDropdown('profession')">
                  <span :class="{ 'apply-dropdown__placeholder': !form.profession }">
                    {{ form.profession || 'PT / PTA / OT.....' }}
                  </span>
                  <svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div v-if="openDropdown === 'profession'" class="apply-dropdown__menu">
                  <button
                    v-for="opt in professions"
                    :key="opt"
                    type="button"
                    class="apply-dropdown__item"
                    :class="{ 'apply-dropdown__item--active': form.profession === opt }"
                    @click="selectOption('profession', opt)"
                  >{{ opt }}</button>
                </div>
              </div>
            </div>
            <div class="apply-form__field">
              <label class="apply-form__field-label">License Status</label>
              <div class="apply-dropdown" :class="{ 'apply-dropdown--open': openDropdown === 'license' }">
                <button type="button" class="apply-dropdown__trigger" @click="toggleDropdown('license')">
                  <span :class="{ 'apply-dropdown__placeholder': !form.license_status }">
                    {{ form.license_status || 'Licensed / In Process' }}
                  </span>
                  <svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div v-if="openDropdown === 'license'" class="apply-dropdown__menu">
                  <button
                    v-for="opt in licenseOptions"
                    :key="opt"
                    type="button"
                    class="apply-dropdown__item"
                    :class="{ 'apply-dropdown__item--active': form.license_status === opt }"
                    @click="selectOption('license_status', opt)"
                  >{{ opt }}</button>
                </div>
              </div>
            </div>

            <!-- Row 5: Years of Experience / Preferred Setting -->
            <div class="apply-form__field">
              <label class="apply-form__field-label">Years of Experience</label>
              <div class="apply-dropdown" :class="{ 'apply-dropdown--open': openDropdown === 'experience' }">
                <button type="button" class="apply-dropdown__trigger" @click="toggleDropdown('experience')">
                  <span :class="{ 'apply-dropdown__placeholder': !form.years_experience }">
                    {{ form.years_experience || '0–1 / 1–3 / 3–5 / 5+' }}
                  </span>
                  <svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div v-if="openDropdown === 'experience'" class="apply-dropdown__menu">
                  <button
                    v-for="opt in experienceOptions"
                    :key="opt"
                    type="button"
                    class="apply-dropdown__item"
                    :class="{ 'apply-dropdown__item--active': form.years_experience === opt }"
                    @click="selectOption('years_experience', opt)"
                  >{{ opt }}</button>
                </div>
              </div>
            </div>
            <div class="apply-form__field">
              <label class="apply-form__field-label">Preferred Setting</label>
              <div class="apply-dropdown" :class="{ 'apply-dropdown--open': openDropdown === 'setting' }">
                <button type="button" class="apply-dropdown__trigger" @click="toggleDropdown('setting')">
                  <span :class="{ 'apply-dropdown__placeholder': !form.preferred_setting }">
                    {{ form.preferred_setting || 'Outpatient / SNF...' }}
                  </span>
                  <svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div v-if="openDropdown === 'setting'" class="apply-dropdown__menu">
                  <button
                    v-for="opt in settingOptions"
                    :key="opt"
                    type="button"
                    class="apply-dropdown__item"
                    :class="{ 'apply-dropdown__item--active': form.preferred_setting === opt }"
                    @click="selectOption('preferred_setting', opt)"
                  >{{ opt }}</button>
                </div>
              </div>
            </div>

            <!-- Row 6: Employment Type / Desired Start Date -->
            <div class="apply-form__field">
              <label class="apply-form__field-label">Employment Type</label>
              <div class="apply-dropdown" :class="{ 'apply-dropdown--open': openDropdown === 'employment' }">
                <button type="button" class="apply-dropdown__trigger" @click="toggleDropdown('employment')">
                  <span :class="{ 'apply-dropdown__placeholder': !form.employment_type }">
                    {{ form.employment_type || 'Full-Time / Part-Time...' }}
                  </span>
                  <svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div v-if="openDropdown === 'employment'" class="apply-dropdown__menu">
                  <button
                    v-for="opt in employmentOptions"
                    :key="opt"
                    type="button"
                    class="apply-dropdown__item"
                    :class="{ 'apply-dropdown__item--active': form.employment_type === opt }"
                    @click="selectOption('employment_type', opt)"
                  >{{ opt }}</button>
                </div>
              </div>
            </div>
            <div class="apply-form__field">
              <label class="apply-form__field-label">Desired Start Date</label>
              <input v-model="form.start_date" type="date" class="apply-form__input apply-form__input--date" />
            </div>
          </div>

          <!-- Resume Upload -->
          <div class="apply-form__resume">
            <label class="apply-form__field-label">Upload your Resume</label>
            <label
              class="apply-form__dropzone"
              :class="{ 'apply-form__dropzone--active': isDragging, 'apply-form__dropzone--filled': resumeFileName }"
              @dragover.prevent="isDragging = true"
              @dragleave="isDragging = false"
              @drop.prevent="onDrop"
            >
              <input type="file" class="apply-form__file-input" accept=".pdf,.doc,.docx" @change="onFileChange" />
              <span v-if="resumeFileName" class="apply-form__file-name">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" stroke="#2F8F83" stroke-width="2"/></svg>
                {{ resumeFileName }}
              </span>
              <span v-else class="apply-form__dropzone-hint">
                Drag &amp; drop your resume here or <u>browse files</u>
              </span>
            </label>
          </div>

          <!-- Submit -->
          <div class="apply-form__actions">
            <button
              class="apply-form__submit"
              :class="{ 'apply-form__submit--loading': isLoading }"
              :disabled="isLoading"
              @click="submit"
            >
              {{ isLoading ? 'Submitting...' : 'Submit Application' }}
            </button>
            <p class="apply-form__disclaimer">
              By submitting the application you agree to be contacted by TNY regarding opportunities
            </p>
          </div>
        </template>

        <!-- Success State -->
        <div v-else class="apply-form__success">
          <svg class="apply-form__success-icon" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="39" stroke="#2F8F83" stroke-width="2"/>
            <path d="M24 40l12 12 20-24" stroke="#2F8F83" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3 class="apply-form__success-title">Application Received!</h3>
          <p class="apply-form__success-text">
            Thank you for applying. Our recruitment team will review your profile
            and reach out within 1–2 business days.
          </p>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="apply-form__sidebar">
        <img
          src="https://res.cloudinary.com/dzilc11zf/image/upload/v1782994261/Tell_Us_About_Your_Staffing_Needs_588x889_dykgjl.webp"
          alt="Tell us about your staffing needs"
          class="apply-form__sidebar-image"
        />

        <div class="apply-form__info-card">
          <p class="apply-form__info-label">Contact Information</p>
          <h3 class="apply-form__info-heading">Talk To Our<br>Recruitment Team</h3>
          <div class="apply-form__contacts">
            <div class="apply-form__contact-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#222"/></svg>
              <span>(347) 441-4283</span>
            </div>
            <div class="apply-form__contact-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#222"/></svg>
              <span>staffing@therapyofnewyork.com</span>
            </div>
            <div class="apply-form__contact-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#222"/></svg>
              <span>575 8th Ave, 10th Floor, New York, NY 10018</span>
            </div>
          </div>
        </div>

        <div class="apply-form__info-card">
          <p class="apply-form__info-label">RECRUITMENT HOURS</p>
          <h3 class="apply-form__info-heading">We're Available</h3>
          <div class="apply-form__hours">
            <div class="apply-form__hours-row">
              <span>Mon - Fri</span>
              <span>9:00 AM - 5:00 PM</span>
            </div>
            <div class="apply-form__hours-row">
              <span>Sat & Sun</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.apply-form {
  padding: 4rem 7.5rem 6rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem 5rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }

  // Form Card
  &__card {
    background: rgba($color-sand, 0.1);
    border-radius: 2.5rem;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__card-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-orange;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin: 0;
  }

  &__heading {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: $color-dark;
    margin: 0;
    line-height: 1.2;
  }

  &__desc {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-dark;
    line-height: 1.6;
    margin: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 600px) { grid-template-columns: 1fr; }
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__field-label {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-dark;
    padding: 0.25rem 0.625rem;
    display: block;
  }

  &__input {
    border: 1px solid $color-dark;
    border-radius: 1rem;
    height: 3.75rem;
    padding: 0 1.5rem;
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-dark;
    background: transparent;
    outline: none;
    width: 100%;

    &::placeholder { color: rgba($color-dark, 0.5); }
    &:focus { border-color: $color-blue; }

    &--date {
      cursor: pointer;
      color: rgba($color-dark, 0.5);
    }
  }

  // Dropdowns
  .apply-dropdown {
    position: relative;

    &__trigger {
      width: 100%;
      height: 3.75rem;
      border: 1px solid $color-dark;
      border-radius: 1rem;
      padding: 0 1.5rem;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      gap: 0.5rem;
      font-family: $font-heading;
      font-weight: $fw-regular;
      font-size: 1.125rem;
      color: $color-dark;
      text-align: left;

      &:focus { outline: none; }
    }

    &--open &__trigger { border-color: $color-blue; }

    &__placeholder { color: rgba($color-dark, 0.5); }

    &__chevron {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      color: $color-dark;
      transition: transform 0.2s;
    }

    &--open &__chevron { transform: rotate(180deg); }

    &__menu {
      position: absolute;
      top: calc(100% + 0.375rem);
      left: 0;
      right: 0;
      background: $color-white;
      border: 1px solid rgba($color-dark, 0.15);
      border-radius: 1rem;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      z-index: 50;
      overflow: hidden;
      max-height: 16rem;
      overflow-y: auto;
    }

    &__item {
      display: block;
      width: 100%;
      padding: 0.875rem 1.5rem;
      text-align: left;
      background: none;
      border: none;
      cursor: pointer;
      font-family: $font-heading;
      font-weight: $fw-regular;
      font-size: 1rem;
      color: $color-dark;
      transition: background 0.15s;

      &:hover { background: rgba($color-sand, 0.15); }
      &--active { background: rgba($color-sand, 0.25); font-weight: $fw-semibold; }
    }
  }

  // Resume Upload
  &__resume {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__dropzone {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8.75rem;
    background: rgba(107, 114, 128, 0.15);
    border-radius: 1rem;
    border: 2px dashed rgba($color-dark, 0.25);
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    padding: 1rem 1.5rem;
    text-align: center;

    &--active {
      border-color: $color-blue;
      background: rgba($color-blue, 0.05);
    }

    &--filled {
      border-color: $color-teal;
      background: rgba($color-teal, 0.05);
    }
  }

  &__file-input {
    display: none;
  }

  &__dropzone-hint {
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: rgba($color-dark, 0.5);
  }

  &__file-name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: 1rem;
    color: $color-teal;
  }

  // Actions
  &__actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__submit {
    width: 100%;
    height: 3.75rem;
    border: 1px solid $color-dark;
    border-radius: 5rem;
    background: $color-white;
    font-family: $font-heading;
    font-weight: $fw-medium;
    font-size: $btn-size;
    color: #0f2b3d;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;

    &:hover:not(:disabled) {
      background: #0f2b3d;
      color: $color-white;
      border-color: #0f2b3d;
    }

    &--loading, &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  &__disclaimer {
    font-family: $font-heading;
    font-weight: $fw-regular;
    font-size: 1rem;
    color: rgba($color-dark, 0.7);
    text-align: center;
    margin: 0;
    line-height: 1.5;
  }

  // Success State
  &__success {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 3rem 1rem;
    text-align: center;
  }

  &__success-icon {
    width: 5rem;
    height: 5rem;
  }

  &__success-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.75rem;
    color: $color-dark;
    margin: 0;
  }

  &__success-text {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: rgba($color-dark, 0.75);
    line-height: 1.6;
    max-width: 28rem;
    margin: 0;
  }

  // Sidebar
  &__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__sidebar-image {
    width: 100%;
    height: 34rem;
    border-radius: 1.5rem;
    object-fit: cover;
  }

  &__info-card {
    background: rgba($color-sand, 0.1);
    border-radius: 2.5rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__info-label {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-orange;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin: 0;
  }

  &__info-heading {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 2rem;
    color: $color-dark;
    margin: 0;
    line-height: 1.2;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-top: 0.25rem;
  }

  &__contact-row {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-dark;
  }

  &__hours {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.25rem;
  }

  &__hours-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-dark;
  }
}
</style>
