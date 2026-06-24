<script setup lang="ts">
import { reactive, ref } from 'vue';
import Http from '@/mixins/Http';
import { snack } from '@/mixins/toast';
import DropDownInputField from '@/Components/UI/DropDownInputField.vue';
import { vMaska } from 'maska/vue';

const role = ref<'employer' | 'candidate'>('employer');
const isLoading = ref(false);
const subjectRef = ref<InstanceType<typeof DropDownInputField> | null>(null);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const errors = reactive({
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  subject: false,
  message: false,
});

const subjects = [
  'General Inquiry',
  'Request Staff',
  'Career Opportunities',
  'Partnership & Business',
  'Other',
];

const setError = (key: keyof typeof errors, val: boolean) => {
  errors[key] = val;
  if (val) setTimeout(() => { errors[key] = false; }, 3000);
};

const validate = () => {
  let valid = true;
  if (!form.firstName.trim()) { setError('firstName', true); valid = false; }
  if (!form.lastName.trim())  { setError('lastName', true); valid = false; }
  if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) { setError('email', true); valid = false; }
  if (!form.phone.trim())   { setError('phone', true); valid = false; }
  if (!form.subject)        { setError('subject', true); valid = false; }
  if (!form.message.trim()) { setError('message', true); valid = false; }
  if (!valid) { snack.error('Please fill in all required fields.'); return; }
  submitForm();
};

const submitForm = async () => {
  isLoading.value = true;
  try {
    await Http.post('message', {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone.replace(/\D/g, ''),
      subject: form.subject,
      message: form.message,
      type: role.value,
    });
    snack.success('Message sent! We\'ll be in touch shortly.');
    Object.assign(form, { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    subjectRef.value?.clear();
  } catch (e) {
    snack.error('Something went wrong. Please try again.');
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section class="contact-main">
    <div class="contact-main__inner">

      <!-- ── Left: Contact form card ── -->
      <div class="contact-card">

        <div class="contact-card__header">
          <p class="contact-card__label">Send A Message</p>
          <h2 class="contact-card__title">How Can We Help?</h2>
          <p class="contact-card__subtitle">
            Complete the form below and a member of our team will get back to you shortly.
          </p>
        </div>

        <!-- Role toggle -->
        <div class="contact-card__role">
          <p class="contact-card__role-label">I Am A...</p>
          <div class="contact-card__role-btns">
            <button
              class="contact-card__role-btn"
              :class="{ 'contact-card__role-btn--active': role === 'employer' }"
              @click="role = 'employer'"
              type="button"
            >Employer</button>
            <button
              class="contact-card__role-btn"
              :class="{ 'contact-card__role-btn--active': role === 'candidate' }"
              @click="role = 'candidate'"
              type="button"
            >Candidate</button>
          </div>
        </div>

        <!-- Name row -->
        <div class="contact-card__grid">
          <div class="contact-card__field">
            <label class="contact-card__field-label">First Name</label>
            <input
              v-model="form.firstName"
              class="contact-card__input"
              :class="{ 'contact-card__input--error': errors.firstName }"
              type="text"
              placeholder="John"
            />
          </div>
          <div class="contact-card__field">
            <label class="contact-card__field-label">Last Name</label>
            <input
              v-model="form.lastName"
              class="contact-card__input"
              :class="{ 'contact-card__input--error': errors.lastName }"
              type="text"
              placeholder="Doe"
            />
          </div>
          <div class="contact-card__field">
            <label class="contact-card__field-label">Email Address</label>
            <input
              v-model="form.email"
              class="contact-card__input"
              :class="{ 'contact-card__input--error': errors.email }"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div class="contact-card__field">
            <label class="contact-card__field-label">Phone Number</label>
            <input
              v-model="form.phone"
              v-maska="'(###) ###-####'"
              class="contact-card__input"
              :class="{ 'contact-card__input--error': errors.phone }"
              type="tel"
              placeholder="(212) 555-0100"
            />
          </div>
        </div>

        <!-- Subject -->
        <div class="contact-card__field contact-card__field--full">
          <label class="contact-card__field-label">Subject</label>
          <DropDownInputField
            ref="subjectRef"
            v-model="form.subject"
            placeholder="Select a subject"
            :list="subjects"
            :error="errors.subject"
            class="contact-card__dropdown"
          />
        </div>

        <!-- Message -->
        <div class="contact-card__field contact-card__field--full">
          <label class="contact-card__field-label">Message</label>
          <textarea
            v-model="form.message"
            class="contact-card__input contact-card__input--area"
            :class="{ 'contact-card__input--error': errors.message }"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <!-- Submit -->
        <button
          class="contact-card__submit"
          :disabled="isLoading"
          @click="validate"
          type="button"
        >
          {{ isLoading ? 'Sending...' : 'Send Message' }}
        </button>

      </div>

      <!-- ── Right: Info sidebar ── -->
      <div class="contact-sidebar">

        <!-- Contact Info -->
        <div class="info-card">
          <p class="info-card__label">Contact Information</p>
          <h3 class="info-card__title">Reach Out Anytime</h3>
          <div class="info-card__rows">
            <div class="info-card__row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.08 5.08l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/>
              </svg>
              <span>(212) 555-0100</span>
            </div>
            <div class="info-card__row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>contact@therapyofnewyork.com</span>
            </div>
            <div class="info-card__row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>New York, NY 10001</span>
            </div>
          </div>
        </div>

        <!-- Opening Hours -->
        <div class="info-card">
          <p class="info-card__label">Opening Hours</p>
          <h3 class="info-card__title">We're Available</h3>
          <div class="info-card__hours">
            <div class="info-card__hour-row">
              <span>Monday – Friday</span>
              <span>8:00 AM – 6:00 PM</span>
            </div>
            <div class="info-card__hour-row">
              <span>Saturday</span>
              <span>9:00 AM – 2:00 PM</span>
            </div>
            <div class="info-card__hour-row">
              <span>Sunday</span>
              <span class="info-card__closed">Closed</span>
            </div>
          </div>
        </div>

        <!-- Quick Support -->
        <div class="info-card info-card--dark">
          <p class="info-card__label">Quick Support</p>
          <h3 class="info-card__title">Need Urgent Staffing Assistance?</h3>
          <p class="info-card__body">
            Our team can help healthcare facilities with urgent therapist coverage requests.
          </p>
          <a href="/requestService" class="info-card__cta">Request Staff</a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-main {
  background: $color-white;
  padding: 5rem 7.5rem 6rem;

  @media (max-width: 1200px) { padding: 4rem 2rem 5rem; }
  @media (max-width: 768px)  { padding: 3rem 1.25rem 4rem; }

  &__inner {
    max-width: 75rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 0.95fr;
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }
}

// ── Form card ──────────────────────────────────────────────────────────────
.contact-card {
  background: rgba($color-sand, 0.1);
  border-radius: 2.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-orange;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.625rem, 2.5vw, 2rem);
    color: $color-dark;
    line-height: 1.2;
  }

  &__subtitle {
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    line-height: 1.6;
    margin-top: 0.25rem;
  }

  // Role toggle
  &__role {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__role-label {
    font-family: $font-body;
    font-size: 1.125rem;
    color: $color-dark;
    padding: 0 0.25rem;
  }

  &__role-btns {
    display: flex;
    gap: 1.5rem;
  }

  &__role-btn {
    height: 3.9375rem;
    width: 10.0625rem;
    border-radius: 2.5rem;
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.125rem;
    border: none;
    cursor: pointer;
    color: #0f2b3d;
    background: transparent;
    transition: background 0.2s, color 0.2s;

    &--active {
      background: #0f2b3d;
      color: $color-white;
    }

    &:not(&--active):hover {
      background: rgba(#0f2b3d, 0.07);
    }
  }

  // Fields
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    @media (max-width: 560px) { grid-template-columns: 1fr; }
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    &--full { width: 100%; }
  }

  &__field-label {
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    padding: 0 0.25rem;
  }

  &__input {
    width: 100%;
    height: 3.75rem;
    padding: 0 1.5rem;
    border: 1px solid $color-dark;
    border-radius: 1rem;
    font-family: $font-heading;
    font-size: 1.0625rem;
    color: $color-dark;
    background: $color-white;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder { color: rgba($color-dark, 0.4); }

    &:focus {
      border-color: $color-blue;
      box-shadow: 0 0 0 3px rgba($color-blue, 0.12);
    }

    &--area {
      height: 12.625rem;
      padding: 1.25rem 1.5rem;
      resize: none;
    }

    &--error {
      border-color: #ef4444;
      &:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.12); }
    }
  }

  // Override DropDownInputField borders to match form style
  &__dropdown {
    :deep(.v2-select__control) {
      border: 1px solid $color-dark;
      border-radius: 1rem;
      height: 3.75rem;
    }

    :deep(.v2-select__control--open) {
      border-color: $color-blue;
    }
  }

  &__submit {
    width: 100%;
    height: 3.75rem;
    background: $color-orange;
    color: #0f2b3d;
    border: none;
    border-radius: 5rem;
    font-family: $font-heading;
    font-weight: $fw-semibold;
    font-size: 1.25rem;
    cursor: pointer;
    transition: background 0.25s, opacity 0.25s;
    margin-top: 0.5rem;

    &:hover { background: darken(#FF9B37, 8%); }
    &:disabled { opacity: 0.6; cursor: not-allowed; }
  }
}

// ── Right sidebar ──────────────────────────────────────────────────────────
.contact-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: rgba($color-sand, 0.1);
  border-radius: 2.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &--dark {
    background: #0f2b3d;

    .info-card__label { color: $color-orange; }
    .info-card__title { color: $color-white; }
    .info-card__body  { color: rgba($color-white, 0.8); }
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.0625rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-orange;
  }

  &__title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: $color-dark;
    line-height: 1.25;
  }

  &__body {
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    line-height: 1.65;
  }

  // Contact rows
  &__rows {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin-top: 0.25rem;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: $font-body;
    font-size: 1.125rem;
    color: $color-dark;

    svg { flex-shrink: 0; color: $color-dark; }
  }

  // Hours rows
  &__hours {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-top: 0.25rem;
  }

  &__hour-row {
    display: flex;
    justify-content: space-between;
    font-family: $font-body;
    font-size: 1.125rem;
    color: $color-dark;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba($color-dark, 0.07);

    &:last-child { border-bottom: none; padding-bottom: 0; }
  }

  &__closed {
    color: rgba($color-dark, 0.45);
  }

  // CTA button (dark card)
  &__cta {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    background: $color-white;
    color: #0f2b3d;
    border-radius: 5rem;
    font-family: $font-heading;
    font-weight: $fw-semibold;
    font-size: 1.25rem;
    text-decoration: none;
    margin-top: 0.75rem;
    transition: background 0.25s;

    &:hover { background: rgba($color-white, 0.88); }
  }
}
</style>
