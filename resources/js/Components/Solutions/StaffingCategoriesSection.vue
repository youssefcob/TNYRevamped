<script setup lang="ts">
import EditableText from '@/Components/Admin/EditableText.vue';
import EditableImage from '@/Components/Admin/EditableImage.vue';

const featuredTop = {
  num: '01',
  title: 'Physical Therapy',
  subtitle: '(PTs, PTAs, & Limited Permit Holders)',
  desc: 'Helping patients regain movement, strength, function, and confidence through evidence-based rehabilitation. We staff experienced PTs, PTAs, and Licensed Limited Permit holders who specialize in mobility restoration, pain management, and post-surgical recovery. Our flexible staffing ensures continuous patient flow, reduced waiting lists, and balanced workloads across your clinic.',
  img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp',
};

const gridItems = [
  {
    num: '02',
    title: 'Occupational Therapy (OTs & COTAs)',
    desc: 'Supporting independence through practical, patient-centered rehabilitation tailored to daily routines. Our OTs and COTAs focus on fine motor skills, cognitive function, adaptive equipment, and environmental modifications. They empower patients in outpatient, homecare, or SNF settings to safely resume the activities that matter most.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994260/Physical_Therapy_PTs_PTAs_588x374_msie7z.webp',
  },
  {
    num: '03',
    title: 'Speech-Language Pathology (SLPs & SLPAs)',
    desc: 'Improving communication, cognitive-linguistic skills, and swallowing function across diverse patient populations. Our SLPs are skilled in evaluating and treating neurological conditions, dysphagia, and speech delays. They deliver compassionate, outcome-driven care that enhances patient safety and functional recovery.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994261/Speech-Language_Pathologists_Staffing_384x156_et3xr0.webp',
  },
  {
    num: '04',
    title: 'Pelvic Floor Therapy',
    desc: 'Delivering specialized care focused on pelvic health, core stability, and daily functional quality of life. Our therapists discreetly address pelvic pain, incontinence, and pre/post-natal recovery. Adding pelvic specialists expands your practice’s care offerings and boosts patient retention.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/Pelvic_Floor_Rehabilitation_lovd41.webp',
  },
  {
    num: '05',
    title: 'Lymphedema Therapy',
    desc: 'Providing targeted treatment for effective swelling management, lymphatic drainage, and complete recovery. Certified Lymphedema Therapists (CLTs) utilize decongestive therapy and compression techniques, collaborating with oncology and vascular teams to achieve outstanding clinical outcomes.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/lymphedema_therapist_pcmiki.webp',
  },
  {
    num: '06',
    title: 'Neurological Rehabilitation',
    desc: 'Guiding patients through complex neurological recovery to maximize independence and long-term function. Experienced in stroke, TBI, Parkinson’s, and spinal injuries, our clinicians apply advanced neuro-rehab strategies to rebuild motor control, balance, and daily mobility.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/Neurological_Therapists_lw6ybl.webp',
  },
  {
    num: '07',
    title: 'Pediatric Therapy',
    desc: 'Nurturing developmental milestones, motor learning, and functional success for infants and children. Our pediatric PTs, OTs, and SLPs specialize in sensory integration and early intervention, creating engaging environments that foster physical growth and family support.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1782994259/PCC_Aides_355x256_ppkic5.webp',
  },
  {
    num: '08',
    title: 'Vestibular Rehabilitation',
    desc: 'Restoring balance, gaze stability, and movement confidence for patients with dizziness or inner ear disorders. Our clinicians utilize specialized repositioning and balance retraining to reduce fall risks and prevent hospital readmissions.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249116/08_Vestibular_Rehabilitation_i1oyva.webp',
  },
  {
    num: '09',
    title: 'Acupuncturists',
    desc: 'Integrating evidence-informed pain management and wellness solutions into your practice. Licensed acupuncturists specialize in musculoskeletal relief and post-op recovery, offering a holistic approach that complements physical rehabilitation.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/09_Acupuncturists_g0cxzf.webp',
  },
  {
    num: '10',
    title: 'Massage Therapists',
    desc: 'Enhancing soft-tissue recovery, reducing muscle tension, and improving circulation. Licensed Massage Therapists provide medical massage and trigger point therapy to accelerate healing timelines and boost patient satisfaction.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/10_Massage_Therapists_nplz71.webp',
  },
  {
    num: '11',
    title: 'Patient Care Coordinator / Front Desk Support',
    desc: 'The operational engine of your practice. Our coordinators manage patient intake, scheduling, insurance verification, and front-desk communication, ensuring a seamless experience and optimal clinic schedule.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/11Patient_Care_Coordinator_Front_Desk_Support_dowdut.webp',
  },
  {
    num: '12',
    title: 'School-Based Staffing',
    desc: 'Dedicated pediatric clinicians (PT, OT, SLP) qualified to support students in school settings under IEP guidelines. We ensure compliance, timely reporting, and smooth integration into educational environments.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/12School_Based_Staffing_fudyqw.webp',
  },
  {
    num: '13',
    title: 'Emergency & Rapid Staffing',
    desc: 'Rapid clinical coverage designed to prevent operational downtime. Backed by our 24-hour response capability, we quickly deploy pre-screened rehab professionals for sudden leaves, sick days, or caseload surges.',
    img: 'https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/13_Emergency_Rapid_Staffing_s4yzu7.webp',
  },
];
</script>

<template>
  <section class="sol-cats">
    <div class="sol-cats__container">

      <!-- Section header -->
      <div class="sol-cats__header">
        <EditableText tag="p" class="sol-cats__label" content-key="solutions.categories.label" page="solutions" default="For Employers" />
        <EditableText tag="h2" class="sol-cats__heading" content-key="solutions.categories.heading" page="solutions" default="Staffing Categories We Support" />
      </div>

      <!-- Featured top row: image left, content right -->
      <div class="sol-cats__featured">
        <EditableImage content-key="solutions.categories.featured_image" page="solutions" :default-src="featuredTop.img"
          default-object-fit="cover" :default-alt="featuredTop.title" class="sol-cats__featured-img" />
        <div class="sol-cats__featured-body">
          <span class="sol-cats__num">{{ featuredTop.num }}</span>
          <div class="sol-cats__featured-text">
            <h3 class="sol-cats__item-title">
              <EditableText tag="span" :content-key="`solutions.categories.item.${featuredTop.num}.title`" page="solutions" :default="featuredTop.title" /><br>
              <EditableText tag="span" class="sol-cats__item-sub" :content-key="`solutions.categories.item.${featuredTop.num}.subtitle`" page="solutions" :default="featuredTop.subtitle" />
            </h3>
            <EditableText tag="p" class="sol-cats__item-desc" :content-key="`solutions.categories.item.${featuredTop.num}.desc`" page="solutions" :default="featuredTop.desc" />
          </div>
        </div>
      </div>

      <!-- Category grid -->
      <div class="sol-cats__grid">
        <div v-for="item in gridItems" :key="item.num" class="sol-cats__card" :class="{ 'sol-cats__card--no-img': !item.img }">
          <EditableImage v-if="item.img" :content-key="`solutions.categories.item.${item.num}.image`" page="solutions"
            :default-src="item.img" default-object-fit="cover" :default-alt="item.title" class="sol-cats__card-img" />
          <div class="sol-cats__card-body">
            <span class="sol-cats__num">{{ item.num }}</span>
            <div class="sol-cats__card-text">
              <EditableText tag="h3" class="sol-cats__item-title sol-cats__item-title--sm" :content-key="`solutions.categories.item.${item.num}.title`" page="solutions" :default="item.title" />
              <EditableText tag="p" class="sol-cats__item-desc sol-cats__item-desc--sm" :content-key="`solutions.categories.item.${item.num}.desc`" page="solutions" :default="item.desc" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.sol-cats {
  padding: 5rem 7.5rem;
  background: $color-white;

  @media (max-width: 1100px) { padding: 3rem 2rem; }

  &__container {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 1.125rem;
    color: $color-orange;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  &__heading {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: clamp(1.875rem, 3vw, 2.5rem);
    color: $color-dark;
    line-height: 1.25;
    margin: 0;
  }

  &__num {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.125rem;
    color: $color-orange;
    text-transform: uppercase;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  // ---- Featured rows ----
  &__featured {
    display: flex;
    gap: 1.3125rem;
    align-items: flex-start;


    @media (max-width: 800px) {
      flex-direction: column;
    }

    &--reversed {
      @media (max-width: 800px) {
        flex-direction: column-reverse;
        margin-top: -3.75rem;
      }
    }
  }

  &__featured-img {
    flex: 0 0 36.75rem;
    height: 23.375rem;
    border-radius: 1.5rem;
    object-fit: cover;
    object-position: center;

    @media (max-width: 1100px) { flex: 0 0 45%; }
    @media (max-width: 800px)  { flex: 0 0 auto; width: 100%; height: 16rem; }
  }

  &__featured-body {
    flex: 1;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1.5rem 0;
  }

  &__featured-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  // ---- Grid ----
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.3125rem;

    @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 580px) { grid-template-columns: 1fr; }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &--no-img {
      border: 1px solid rgba($color-dark, 0.12);
      border-radius: 1.5rem;
      padding: 1.5rem;

      .sol-cats__card-body { padding: 0; }
    }
  }

  &__card-img {
    width: 100%;
    height: 19.6875rem;
    border-radius: 1.5rem;
    object-fit: cover;
    object-position: center;
  }

  &__card-body {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1.5rem 0;
  }

  &__card-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  // ---- Item text ----
  &__item-title {
    font-family: $font-heading;
    font-weight: $fw-bold;
    font-size: 1.5rem;
    color: $color-dark;
    line-height: 1.3;
    margin: 0;

    &--sm { font-size: 1.3rem; }
  }

  &__item-sub {
    font-weight: $fw-bold;
  }

  &__item-desc {
    font-family: $font-body;
    font-weight: $fw-regular;
    font-size: 1.1rem;
    color: $color-dark;
    line-height: 1.55;
    margin: 0;

    &--sm { font-size: 1rem; }
  }
}
</style>
