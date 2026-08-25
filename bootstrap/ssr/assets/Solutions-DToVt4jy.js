import { defineComponent, mergeProps, useSSRContext, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { a as EditableText, E as EditableImage } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SolutionsHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sol-hero" }, _attrs))} data-v-d0ed5764><div class="sol-hero__inner" data-v-d0ed5764>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "sol-hero__title",
        "content-key": "solutions.hero.title",
        page: "solutions",
        default: "Healthcare Staffing Solutions"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-hero__subtitle",
        "content-key": "solutions.hero.subtitle",
        page: "solutions",
        default: "Connecting healthcare facilities with highly qualified rehabilitation professionals and support staff across New York City."
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/SolutionsHeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SolutionsHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d0ed5764"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StaffingCategoriesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredTop = {
      num: "01",
      title: "Physical Therapy",
      subtitle: "(PTs, PTAs, & Limited Permit Holders)",
      desc: "Helping patients regain movement, strength, function, and confidence through evidence-based rehabilitation. We staff experienced PTs, PTAs, and Licensed Limited Permit holders who specialize in mobility restoration, pain management, and post-surgical recovery. Our flexible staffing ensures continuous patient flow, reduced waiting lists, and balanced workloads across your clinic.",
      img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp"
    };
    const gridItems = [
      {
        num: "02",
        title: "Occupational Therapy (OTs & COTAs)",
        desc: "Supporting independence through practical, patient-centered rehabilitation tailored to daily routines. Our OTs and COTAs focus on fine motor skills, cognitive function, adaptive equipment, and environmental modifications. They empower patients in outpatient, homecare, or SNF settings to safely resume the activities that matter most.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994260/Physical_Therapy_PTs_PTAs_588x374_msie7z.webp"
      },
      {
        num: "03",
        title: "Speech-Language Pathology (SLPs & SLPAs)",
        desc: "Improving communication, cognitive-linguistic skills, and swallowing function across diverse patient populations. Our SLPs are skilled in evaluating and treating neurological conditions, dysphagia, and speech delays. They deliver compassionate, outcome-driven care that enhances patient safety and functional recovery.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994261/Speech-Language_Pathologists_Staffing_384x156_et3xr0.webp"
      },
      {
        num: "04",
        title: "Pelvic Floor Therapy",
        desc: "Delivering specialized care focused on pelvic health, core stability, and daily functional quality of life. Our therapists discreetly address pelvic pain, incontinence, and pre/post-natal recovery. Adding pelvic specialists expands your practice’s care offerings and boosts patient retention.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/Pelvic_Floor_Rehabilitation_lovd41.webp"
      },
      {
        num: "05",
        title: "Lymphedema Therapy",
        desc: "Providing targeted treatment for effective swelling management, lymphatic drainage, and complete recovery. Certified Lymphedema Therapists (CLTs) utilize decongestive therapy and compression techniques, collaborating with oncology and vascular teams to achieve outstanding clinical outcomes.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/lymphedema_therapist_pcmiki.webp"
      },
      {
        num: "06",
        title: "Neurological Rehabilitation",
        desc: "Guiding patients through complex neurological recovery to maximize independence and long-term function. Experienced in stroke, TBI, Parkinson’s, and spinal injuries, our clinicians apply advanced neuro-rehab strategies to rebuild motor control, balance, and daily mobility.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994258/Neurological_Therapists_lw6ybl.webp"
      },
      {
        num: "07",
        title: "Pediatric Therapy",
        desc: "Nurturing developmental milestones, motor learning, and functional success for infants and children. Our pediatric PTs, OTs, and SLPs specialize in sensory integration and early intervention, creating engaging environments that foster physical growth and family support.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994259/PCC_Aides_355x256_ppkic5.webp"
      },
      {
        num: "08",
        title: "Vestibular Rehabilitation",
        desc: "Restoring balance, gaze stability, and movement confidence for patients with dizziness or inner ear disorders. Our clinicians utilize specialized repositioning and balance retraining to reduce fall risks and prevent hospital readmissions.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249116/08_Vestibular_Rehabilitation_i1oyva.webp"
      },
      {
        num: "09",
        title: "Acupuncturists",
        desc: "Integrating evidence-informed pain management and wellness solutions into your practice. Licensed acupuncturists specialize in musculoskeletal relief and post-op recovery, offering a holistic approach that complements physical rehabilitation.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/09_Acupuncturists_g0cxzf.webp"
      },
      {
        num: "10",
        title: "Massage Therapists",
        desc: "Enhancing soft-tissue recovery, reducing muscle tension, and improving circulation. Licensed Massage Therapists provide medical massage and trigger point therapy to accelerate healing timelines and boost patient satisfaction.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/10_Massage_Therapists_nplz71.webp"
      },
      {
        num: "11",
        title: "Patient Care Coordinator / Front Desk Support",
        desc: "The operational engine of your practice. Our coordinators manage patient intake, scheduling, insurance verification, and front-desk communication, ensuring a seamless experience and optimal clinic schedule.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/11Patient_Care_Coordinator_Front_Desk_Support_dowdut.webp"
      },
      {
        num: "12",
        title: "School-Based Staffing",
        desc: "Dedicated pediatric clinicians (PT, OT, SLP) qualified to support students in school settings under IEP guidelines. We ensure compliance, timely reporting, and smooth integration into educational environments.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/12School_Based_Staffing_fudyqw.webp"
      },
      {
        num: "13",
        title: "Emergency & Rapid Staffing",
        desc: "Rapid clinical coverage designed to prevent operational downtime. Backed by our 24-hour response capability, we quickly deploy pre-screened rehab professionals for sudden leaves, sick days, or caseload surges.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249115/13_Emergency_Rapid_Staffing_s4yzu7.webp"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sol-cats" }, _attrs))} data-v-adc0d345><div class="sol-cats__container" data-v-adc0d345><div class="sol-cats__header" data-v-adc0d345>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-cats__label",
        "content-key": "solutions.categories.label",
        page: "solutions",
        default: "For Employers"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sol-cats__heading",
        "content-key": "solutions.categories.heading",
        page: "solutions",
        default: "Staffing Categories We Support"
      }, null, _parent));
      _push(`</div><div class="sol-cats__featured" data-v-adc0d345>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "solutions.categories.featured_image",
        page: "solutions",
        "default-src": featuredTop.img,
        "default-object-fit": "cover",
        "default-alt": featuredTop.title,
        class: "sol-cats__featured-img"
      }, null, _parent));
      _push(`<div class="sol-cats__featured-body" data-v-adc0d345><span class="sol-cats__num" data-v-adc0d345>${ssrInterpolate(featuredTop.num)}</span><div class="sol-cats__featured-text" data-v-adc0d345><h3 class="sol-cats__item-title" data-v-adc0d345>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": `solutions.categories.item.${featuredTop.num}.title`,
        page: "solutions",
        default: featuredTop.title
      }, null, _parent));
      _push(`<br data-v-adc0d345>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        class: "sol-cats__item-sub",
        "content-key": `solutions.categories.item.${featuredTop.num}.subtitle`,
        page: "solutions",
        default: featuredTop.subtitle
      }, null, _parent));
      _push(`</h3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-cats__item-desc",
        "content-key": `solutions.categories.item.${featuredTop.num}.desc`,
        page: "solutions",
        default: featuredTop.desc
      }, null, _parent));
      _push(`</div></div></div><div class="sol-cats__grid" data-v-adc0d345><!--[-->`);
      ssrRenderList(gridItems, (item) => {
        _push(`<div class="${ssrRenderClass([{ "sol-cats__card--no-img": !item.img }, "sol-cats__card"])}" data-v-adc0d345>`);
        if (item.img) {
          _push(ssrRenderComponent(EditableImage, {
            "content-key": `solutions.categories.item.${item.num}.image`,
            page: "solutions",
            "default-src": item.img,
            "default-object-fit": "cover",
            "default-alt": item.title,
            class: "sol-cats__card-img"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="sol-cats__card-body" data-v-adc0d345><span class="sol-cats__num" data-v-adc0d345>${ssrInterpolate(item.num)}</span><div class="sol-cats__card-text" data-v-adc0d345>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "sol-cats__item-title sol-cats__item-title--sm",
          "content-key": `solutions.categories.item.${item.num}.title`,
          page: "solutions",
          default: item.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "sol-cats__item-desc sol-cats__item-desc--sm",
          "content-key": `solutions.categories.item.${item.num}.desc`,
          page: "solutions",
          default: item.desc
        }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/StaffingCategoriesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const StaffingCategoriesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-adc0d345"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EmployersMidCTA",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "emp-mid-cta" }, _attrs))} data-v-adb8d0aa><a href="/requestService" class="emp-mid-cta__btn" data-v-adb8d0aa>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "solutions.mid_cta.label",
        page: "solutions",
        default: "Hire Staff"
      }, null, _parent));
      _push(`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" data-v-adb8d0aa><path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="#0f2b3d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-adb8d0aa></path></svg></a></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/EmployersMidCTA.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const EmployersMidCTA = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-adb8d0aa"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IndustriesWeServeSection",
  __ssrInlineRender: true,
  setup(__props) {
    const industries = [
      {
        id: 0,
        title: "Outpatient Rehabilitation Clinics",
        desc: "High-volume settings needing fast-paced, highly skilled clinicians."
      },
      {
        id: 1,
        title: "Hospitals & Health Systems",
        desc: "Acute/sub-acute settings requiring fast onboarding and specialized expertise."
      },
      {
        id: 2,
        title: "Skilled Nursing Facilities (SNFs)",
        desc: "Long-term care facilities needing dedicated geriatric rehab professionals."
      },
      {
        id: 3,
        title: "Home Health Care Rehab Agencies",
        desc: "Flexible clinicians delivering 1-on-1 care across all 5 NYC boroughs."
      },
      {
        id: 4,
        title: "K-12 Schools & Educational Institutions",
        desc: "Specialized therapists managing IEP requirements and student growth."
      },
      {
        id: 5,
        title: "Private Practices",
        desc: "Customized staffing models that align with niche specialties and business expansion."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "ind-serve" }, _attrs))} data-v-004c2f17><div class="ind-serve__container" data-v-004c2f17><div class="ind-serve__header" data-v-004c2f17>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "ind-serve__label",
        "content-key": "solutions.industries.label",
        page: "solutions",
        default: "Industries We Serve"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "ind-serve__heading",
        "content-key": "solutions.industries.heading",
        page: "solutions",
        default: "Tailored Staffing for Every Healthcare Environment"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "ind-serve__subtitle",
        "content-key": "solutions.industries.subtitle",
        page: "solutions",
        default: "Every healthcare setting operates differently. We match top clinical talent to the specific operational flow, patient population, and compliance standards of your facility."
      }, null, _parent));
      _push(`</div><div class="ind-serve__grid" data-v-004c2f17><!--[-->`);
      ssrRenderList(industries, (industry) => {
        _push(`<div class="ind-serve__card" data-v-004c2f17>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "ind-serve__card-title",
          "content-key": `solutions.industries.item.${industry.id}.title`,
          page: "solutions",
          default: industry.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "ind-serve__card-desc",
          "content-key": `solutions.industries.item.${industry.id}.desc`,
          page: "solutions",
          default: industry.desc
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/IndustriesWeServeSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IndustriesWeServeSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-004c2f17"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ForCandidatesCTA",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sol-cta" }, _attrs))} data-v-62edd605><div class="sol-cta__inner" data-v-62edd605><div class="sol-cta__content" data-v-62edd605>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-cta__label",
        "content-key": "solutions.candidates_cta.label",
        page: "solutions",
        default: "For Candidates"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sol-cta__title",
        "content-key": "solutions.candidates_cta.title",
        page: "solutions",
        default: "Find Your Next Healthcare Opportunity"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-cta__desc",
        "content-key": "solutions.candidates_cta.desc",
        page: "solutions",
        default: "Join a growing network of healthcare professionals working across hospitals, clinics, schools, skilled nursing facilities, and home health settings throughout New York."
      }, null, _parent));
      _push(`<a href="/apply" class="sol-cta__btn" data-v-62edd605>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "solutions.candidates_cta.cta",
        page: "solutions",
        default: "Apply Now"
      }, null, _parent));
      _push(`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" data-v-62edd605><path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="#0f2b3d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-62edd605></path></svg></a></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/ForCandidatesCTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ForCandidatesCTA = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-62edd605"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Solutions",
  __ssrInlineRender: true,
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
        page: "solutions",
        path: "/solutions",
        "default-title": "Healthcare Staffing Solutions in NYC | TNY Staffing",
        "default-description": "Explore specialized healthcare staffing solutions in NYC. We connect facilities with qualified PTs, OTs, SLPs, and specialized therapists for per diem and permanent roles."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SolutionsHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(StaffingCategoriesSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(EmployersMidCTA, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(IndustriesWeServeSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ForCandidatesCTA, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SolutionsHeroSection),
              createVNode(StaffingCategoriesSection),
              createVNode(EmployersMidCTA),
              createVNode(IndustriesWeServeSection),
              createVNode(ForCandidatesCTA)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Solutions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
