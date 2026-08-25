import { defineComponent, mergeProps, useSSRContext, unref, h, createVNode, resolveDynamicComponent, ref, computed, provide, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$b } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { a as EditableText, E as EditableImage } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "@inertiajs/vue3";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "StatsBar",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "300", suffix: "+", label: "Hiring & Coverage Requests Fulfilled" },
      { value: "165", suffix: "%", label: "Year-over-Year Growth" },
      { value: "15", suffix: "+", label: "Active Healthcare Clients" },
      { value: "65", suffix: "+", label: "Locations Supported" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stats-bar" }, _attrs))} data-v-43f81ea4><div class="stats-bar__static" data-v-43f81ea4><!--[-->`);
      ssrRenderList(stats, (stat, idx) => {
        _push(`<div class="stats-bar__item" data-v-43f81ea4><div class="stats-bar__number" data-v-43f81ea4>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          class: "stats-bar__value",
          "content-key": `home.stats.${idx}.value`,
          page: "home",
          default: stat.value
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          class: "stats-bar__suffix",
          "content-key": `home.stats.${idx}.suffix`,
          page: "home",
          default: stat.suffix
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "stats-bar__label",
          "content-key": `home.stats.${idx}.label`,
          page: "home",
          default: stat.label
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="stats-bar__carousel" aria-hidden="true" data-v-43f81ea4><div class="stat" data-v-43f81ea4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-43f81ea4><path d="M3.99999 14C3.81076 14.0006 3.62522 13.9476 3.46495 13.847C3.30467 13.7464 3.17623 13.6023 3.09454 13.4316C3.01286 13.2609 2.98129 13.0706 3.00349 12.8826C3.0257 12.6947 3.10077 12.5169 3.21999 12.37L13.12 2.16998C13.1943 2.08426 13.2955 2.02634 13.407 2.00571C13.5185 1.98509 13.6337 2.00299 13.7337 2.05648C13.8337 2.10998 13.9126 2.19588 13.9573 2.30009C14.0021 2.4043 14.0101 2.52063 13.98 2.62998L12.06 8.64998C12.0034 8.8015 11.9844 8.9645 12.0046 9.12499C12.0248 9.28547 12.0837 9.43866 12.1761 9.57141C12.2685 9.70415 12.3918 9.81249 12.5353 9.88714C12.6788 9.96179 12.8382 10.0005 13 9.99998H20C20.1892 9.99933 20.3748 10.0524 20.535 10.153C20.6953 10.2536 20.8238 10.3976 20.9054 10.5683C20.9871 10.739 21.0187 10.9294 20.9965 11.1173C20.9743 11.3053 20.8992 11.483 20.78 11.63L10.88 21.83C10.8057 21.9157 10.7045 21.9736 10.593 21.9942C10.4815 22.0149 10.3663 21.997 10.2663 21.9435C10.1663 21.89 10.0874 21.8041 10.0427 21.6999C9.99791 21.5957 9.98991 21.4793 10.02 21.37L11.94 15.35C11.9966 15.1985 12.0156 15.0355 11.9954 14.875C11.9752 14.7145 11.9163 14.5613 11.8239 14.4286C11.7315 14.2958 11.6082 14.1875 11.4647 14.1128C11.3212 14.0382 11.1617 13.9995 11 14H3.99999Z" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43f81ea4></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "div",
        class: "span",
        "content-key": "home.stats_bar.mobile_note_1",
        page: "home",
        default: "24h Response Fast Staffing Coverage"
      }, null, _parent));
      _push(`</div><div class="stat" data-v-43f81ea4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-43f81ea4><path d="M5 8L11 14" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43f81ea4></path><path d="M4 14L10 8L12 5" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43f81ea4></path><path d="M2 5H14" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43f81ea4></path><path d="M7 2H8" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43f81ea4></path><path d="M22 22L17 12L12 22" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43f81ea4></path><path d="M14 18H20" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43f81ea4></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "div",
        class: "span",
        "content-key": "home.stats_bar.mobile_note_2",
        page: "home",
        default: "Multilingual Diverse Professionals"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/StatsBar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const StatsBar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-43f81ea4"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero2" }, _attrs))} data-v-df34d912><div class="hero2__main" data-v-df34d912><div class="hero2__content" data-v-df34d912>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "hero2__title",
        "content-key": "home.hero.title",
        page: "home",
        default: "Building Stronger Healthcare Teams Through Trusted Therapy Staffing Solutions"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "hero2__subtitle",
        "content-key": "home.hero.subtitle",
        page: "home",
        default: "Connecting healthcare facilities with qualified therapy professionals across New York. Fast, credentialed, and built for today's healthcare demands."
      }, null, _parent));
      _push(`<div class="hero2__ctas" data-v-df34d912><a href="/requestService" class="hero2__btn hero2__btn--primary" data-v-df34d912>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.hero.cta_primary_label",
        page: "home",
        default: "Hire Staff"
      }, null, _parent));
      _push(`</a><a href="/apply" class="hero2__btn hero2__btn--outline" data-v-df34d912>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.hero.cta_secondary_label",
        page: "home",
        default: "Find Jobs"
      }, null, _parent));
      _push(`</a></div></div><div class="hero2__image" data-v-df34d912>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "home.hero.image",
        page: "home",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp",
        "default-object-fit": "cover",
        "default-alt": "Physical therapy professional"
      }, null, _parent));
      _push(`</div></div><div class="hero2__stats" data-v-df34d912>`);
      _push(ssrRenderComponent(StatsBar, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/HeroSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-df34d912"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ForSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "for-section" }, _attrs))} data-v-9b74ef3b><div class="for-section__inner" data-v-9b74ef3b><div class="for-card for-card--dark" data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "section-label",
        "content-key": "home.for.employers.label",
        page: "home",
        default: "For Employers"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "for-card__title",
        "content-key": "home.for.employers.title",
        page: "home",
        default: "Build the Team Your Patients Count On"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "for-card__body",
        "content-key": "home.for.employers.body",
        page: "home",
        default: "Whether you need last-minute coverage or a long-term hire, we connect you with credentialed therapy professionals who fit your team from day one."
      }, null, _parent));
      _push(`<ul class="for-card__list" data-v-9b74ef3b><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.employers.list.0",
        page: "home",
        default: "Temporary & Per Diem Staffing"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.employers.list.1",
        page: "home",
        default: "Permanent Placements"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.employers.list.2",
        page: "home",
        default: "Emergency Coverage"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.employers.list.3",
        page: "home",
        default: "Fully Credentialed Professionals"
      }, null, _parent));
      _push(`</li></ul><a href="/employers" class="for-card__cta for-card__cta--orange" data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.employers.cta",
        page: "home",
        default: "Request Staff"
      }, null, _parent));
      _push(`</a></div><div class="for-card for-card--light" data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "section-label",
        "content-key": "home.for.candidates.label",
        page: "home",
        default: "For Candidates"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "for-card__title for-card__title--dark",
        "content-key": "home.for.candidates.title",
        page: "home",
        default: "Build Your Future with New York's Leading Healthcare Teams"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "for-card__body for-card__body--dark",
        "content-key": "home.for.candidates.body",
        page: "home",
        default: "Explore therapy opportunities across NY with competitive pay, career growth, and the support you need to succeed."
      }, null, _parent));
      _push(`<ul class="for-card__list for-card__list--dark" data-v-9b74ef3b><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.candidates.list.0",
        page: "home",
        default: "Flexible & Full-Time Positions"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.candidates.list.1",
        page: "home",
        default: "Competitive Compensation"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.candidates.list.2",
        page: "home",
        default: "Continuing Education & Mentorship programs"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.candidates.list.3",
        page: "home",
        default: "Visa Sponsorship Support"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.candidates.list.4",
        page: "home",
        default: "Growth-Focused Opportunities"
      }, null, _parent));
      _push(`</li><li data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.candidates.list.5",
        page: "home",
        default: "Gym Membership"
      }, null, _parent));
      _push(`</li></ul><a href="/candidates" class="for-card__cta" data-v-9b74ef3b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.for.candidates.cta",
        page: "home",
        default: "Explore Jobs"
      }, null, _parent));
      _push(`</a></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/ForSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ForSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9b74ef3b"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "JoinNetworkSection",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        id: 0,
        title: "Flexible Opportunities",
        body: "Access assignments that match your schedule and preferences."
      },
      {
        id: 1,
        title: "Competitive & Transparent Pay",
        body: "Clear, market-leading rates provided upfront so you always know your worth."
      },
      {
        id: 2,
        title: "Diverse Clinical Settings",
        body: "Choose your preferred environment—from outpatient and hospitals to homecare and schools."
      },
      {
        id: 3,
        title: "Personalized Placement Support",
        body: "Work 1-on-1 with dedicated recruiters who match you with roles aligned with your career goals."
      }
    ];
    const leftFeatures = features.slice(0, 2);
    const rightFeatures = features.slice(2, 4);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "join" }, _attrs))} data-v-dfd1a665><div class="join__text" data-v-dfd1a665>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "section-label",
        "content-key": "home.join_network.label",
        page: "home",
        default: "For Healthcare Professionals"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "join__title",
        "content-key": "home.join_network.title",
        page: "home",
        default: "Join our Network"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "join__body",
        "content-key": "home.join_network.body",
        page: "home",
        default: "TNY Staffing Corporation partners with experienced healthcare professionals seeking flexible opportunities, supportive recruiters, and meaningful placements across hospitals, rehabilitation centers, clinics, and healthcare organizations."
      }, null, _parent));
      _push(`</div><div class="join__visual" data-v-dfd1a665><div class="join__cards-wrap" data-v-dfd1a665><div class="join__cards join__cards--left" data-v-dfd1a665><!--[-->`);
      ssrRenderList(unref(leftFeatures), (feature) => {
        _push(`<div class="join__card" data-v-dfd1a665><div class="join__card-icon" data-v-dfd1a665><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" data-v-dfd1a665><path d="M7 25.6666V4.66659C7 4.04775 7.24583 3.45425 7.68342 3.01667C8.121 2.57908 8.71449 2.33325 9.33333 2.33325H18.6667C19.2855 2.33325 19.879 2.57908 20.3166 3.01667C20.7542 3.45425 21 4.04775 21 4.66659V25.6666H7Z" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M7.00016 14H4.66683C4.04799 14 3.4545 14.2458 3.01691 14.6834C2.57933 15.121 2.3335 15.7145 2.3335 16.3333V23.3333C2.3335 23.9522 2.57933 24.5457 3.01691 24.9832C3.4545 25.4208 4.04799 25.6667 4.66683 25.6667H7.00016" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M21 10.5H23.3333C23.9522 10.5 24.5457 10.7458 24.9832 11.1834C25.4208 11.621 25.6667 12.2145 25.6667 12.8333V23.3333C25.6667 23.9522 25.4208 24.5457 24.9832 24.9832C24.5457 25.4208 23.9522 25.6667 23.3333 25.6667H21" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 7H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 11.6667H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 16.3333H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 21H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path></svg></div><div data-v-dfd1a665>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h4",
          class: "join__card-title",
          "content-key": `home.join_network.feature.${feature.id}.title`,
          page: "home",
          default: feature.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "join__card-body",
          "content-key": `home.join_network.feature.${feature.id}.body`,
          page: "home",
          default: feature.body
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="join__cards join__cards--right" data-v-dfd1a665><!--[-->`);
      ssrRenderList(unref(rightFeatures), (feature) => {
        _push(`<div class="join__card" data-v-dfd1a665><div class="join__card-icon" data-v-dfd1a665><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" data-v-dfd1a665><path d="M7 25.6666V4.66659C7 4.04775 7.24583 3.45425 7.68342 3.01667C8.121 2.57908 8.71449 2.33325 9.33333 2.33325H18.6667C19.2855 2.33325 19.879 2.57908 20.3166 3.01667C20.7542 3.45425 21 4.04775 21 4.66659V25.6666H7Z" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M7.00016 14H4.66683C4.04799 14 3.4545 14.2458 3.01691 14.6834C2.57933 15.121 2.3335 15.7145 2.3335 16.3333V23.3333C2.3335 23.9522 2.57933 24.5457 3.01691 24.9832C3.4545 25.4208 4.04799 25.6667 4.66683 25.6667H7.00016" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M21 10.5H23.3333C23.9522 10.5 24.5457 10.7458 24.9832 11.1834C25.4208 11.621 25.6667 12.2145 25.6667 12.8333V23.3333C25.6667 23.9522 25.4208 24.5457 24.9832 24.9832C24.5457 25.4208 23.9522 25.6667 23.3333 25.6667H21" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 7H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 11.6667H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 16.3333H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path><path d="M11.6665 21H16.3332" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" data-v-dfd1a665></path></svg></div><div data-v-dfd1a665>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h4",
          class: "join__card-title",
          "content-key": `home.join_network.feature.${feature.id}.title`,
          page: "home",
          default: feature.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "join__card-body",
          "content-key": `home.join_network.feature.${feature.id}.body`,
          page: "home",
          default: feature.body
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="join__image-wrap" data-v-dfd1a665><div class="join__shape" aria-hidden="true" data-v-dfd1a665><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 787 614" fill="none" data-v-dfd1a665><path d="M0 152.721H241.083L315.6 327.259L556.683 0H789L355.05 614H113.967L184.1 492.447L0 152.721Z" fill="#24A8E0" data-v-dfd1a665></path></svg></div><div class="join__image-bg" data-v-dfd1a665>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "home.join_network.image",
        page: "home",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994267/2_ylphoc.webp",
        "default-object-fit": "cover",
        "default-alt": "Physical therapy professional",
        class: "join__image"
      }, null, _parent));
      _push(`</div></div><a href="/apply" class="join__cta" data-v-dfd1a665>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.join_network.cta",
        page: "home",
        default: "Explore Jobs"
      }, null, _parent));
      _push(`</a></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/JoinNetworkSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const JoinNetworkSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-dfd1a665"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SolutionsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "solutions" }, _attrs))} data-v-4a99ede3><div class="solutions__inner" data-v-4a99ede3><div class="solutions__header" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "section-label",
        "content-key": "home.solutions.label",
        page: "home",
        default: "Our Solutions"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "solutions__title",
        "content-key": "home.solutions.title",
        page: "home",
        default: "Supporting Every Healthcare Practices"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "solutions__subtitle",
        "content-key": "home.solutions.subtitle",
        page: "home",
        default: "We match healthcare organizations with skilled therapy professionals across schools, hospitals, outpatient clinics and skilled nursing facilities"
      }, null, _parent));
      _push(`</div><div class="sol-card sol-card--image-top" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "home.solutions.slp.image",
        page: "home",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994265/Speech-Language_Pathologists_Staffing_384x156_eurdne.webp",
        "default-object-fit": "cover",
        "default-alt": "Speech-Language Pathologists Staffing",
        class: "sol-card__image"
      }, null, _parent));
      _push(`<div class="sol-card__info sol-card__info--blue" data-v-4a99ede3><div data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h4",
        class: "sol-card__title",
        "content-key": "home.solutions.slp.title",
        page: "home",
        default: "Speech-Language Pathologists Staffing"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-card__body",
        "content-key": "home.solutions.slp.body",
        page: "home",
        default: "Licensed SLPs & SLPAs for inpatient, outpatient, SNF, and home care. All specialties covered."
      }, null, _parent));
      _push(`</div><a href="/solutions" class="sol-card__link" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.solutions.slp.link",
        page: "home",
        default: "Learn More"
      }, null, _parent));
      _push(` <span data-v-4a99ede3>→</span></a></div></div><div class="sol-card sol-card--flip" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "home.solutions.pt.image",
        page: "home",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp",
        "default-object-fit": "cover",
        "default-alt": "Physical Therapy Staffing",
        class: "sol-card__image"
      }, null, _parent));
      _push(`<div class="sol-card__info sol-card__info--white" data-v-4a99ede3><div data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h4",
        class: "sol-card__title sol-card__title--dark",
        "content-key": "home.solutions.pt.title",
        page: "home",
        default: "Physical Therapy Staffing"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-card__body sol-card__body--dark",
        "content-key": "home.solutions.pt.body",
        page: "home",
        default: "Licensed PTs, PTAs, and Limited Permit for inpatient, outpatient, SNF, and home care. All specialties covered."
      }, null, _parent));
      _push(`</div><a href="/solutions" class="sol-card__link sol-card__link--dark" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.solutions.pt.link",
        page: "home",
        default: "Learn More"
      }, null, _parent));
      _push(` <span data-v-4a99ede3>→</span></a></div></div><div class="sol-card sol-card--feature" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h4",
        class: "sol-card__title",
        "content-key": "home.solutions.feature.title",
        page: "home",
        default: "Staffing Solutions Built Around Your Facility"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-card__body",
        "content-key": "home.solutions.feature.body",
        page: "home",
        default: "Discover flexible, customized therapy staffing solutions that help your team stay fully supported and your patients receive the care they deserve."
      }, null, _parent));
      _push(`<a href="/solutions" class="sol-card__btn" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.solutions.feature.cta",
        page: "home",
        default: "Explore Solutions"
      }, null, _parent));
      _push(`</a></div><div class="sol-card sol-card--image-top" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "home.solutions.ot.image",
        page: "home",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994267/PCC_Aides_383x256_wu1rka.webp",
        "default-object-fit": "cover",
        "default-alt": "OT/COTA",
        class: "sol-card__image"
      }, null, _parent));
      _push(`<div class="sol-card__info sol-card__info--sand" data-v-4a99ede3><div data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h4",
        class: "sol-card__title",
        "content-key": "home.solutions.ot.title",
        page: "home",
        default: "OT/COTA"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sol-card__body",
        "content-key": "home.solutions.ot.body",
        page: "home",
        default: "Licensed OTs and COTAs for inpatient, outpatient, and home settings. All specialties covered."
      }, null, _parent));
      _push(`</div><a href="/solutions" class="sol-card__link" data-v-4a99ede3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.solutions.ot.link",
        page: "home",
        default: "Learn More"
      }, null, _parent));
      _push(` <span data-v-4a99ede3>→</span></a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/SolutionsSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SolutionsSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4a99ede3"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WhyTNYSection",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "300", suffix: "+", label: "Hiring & Coverage Requests Fulfilled" },
      { value: "165", suffix: "%", label: "Year-over-Year Growth" },
      { value: "15", suffix: "+", label: "Active Healthcare Clients" },
      { value: "65", suffix: "+", label: "Locations Supported" }
    ];
    const BoltIcon = () => h("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#222222", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
    ]);
    const GlobeIcon = () => h("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#222222", "stroke-width": 2 }, [
      h("circle", { cx: 12, cy: 12, r: 10 }),
      h("path", { d: "M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" })
    ]);
    const ShieldIcon = () => h("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#222222", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
      h("path", { d: "M9 12l2 2 4-4" })
    ]);
    const GearIcon = () => h("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#222222", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("circle", { cx: 12, cy: 12, r: 3 }),
      h("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" })
    ]);
    const MagnifyIcon = () => h("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#222222", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("circle", { cx: 11, cy: 11, r: 8 }),
      h("path", { d: "M21 21l-4.35-4.35" })
    ]);
    const HeartIcon = () => h("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "#222222", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("path", { d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" })
    ]);
    const features = [
      { icon: BoltIcon, title: "Fast Placements", body: "From intake to placement in as little as 24 hours. Our network of pre-vetted professionals is always ready." },
      { icon: GlobeIcon, title: "Multilingual Professionals", body: "Spanish, Mandarin, Russian, and more. We match your patient demographics with culturally competent therapists." },
      { icon: ShieldIcon, title: "Recruitment Support", body: "End-to-end talent sourcing, candidate matching, and interview coordination to handle the heavy lifting of hiring so you can focus on patient care." },
      { icon: GearIcon, title: "Flexible Staffing Models", body: "Per diem, part-time, full-time, and contract arrangements to match your specific operational needs." },
      { icon: MagnifyIcon, title: "Quality Screening", body: "Rigorous clinical assessments, reference checks, and skills validation before any candidate is presented." },
      { icon: HeartIcon, title: "Dedicated Support", body: "A dedicated account manager for every client — proactive communication, not just reactive problem-solving." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "why" }, _attrs))} data-v-63260ff0><div class="why__header" data-v-63260ff0>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "section-label",
        "content-key": "home.why.label",
        page: "home",
        default: "Why TNY Staffing Corporation"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "why__title",
        "content-key": "home.why.title",
        page: "home",
        default: "Staffing Solutions Built Around Your Facility"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "why__subtitle",
        "content-key": "home.why.subtitle",
        page: "home",
        default: "Discover flexible, customized therapy staffing solutions that help your team stay fully supported and your patients receive the care they deserve."
      }, null, _parent));
      _push(`</div><div class="why__stats_grid_wrapper" data-v-63260ff0><div class="why__stats" data-v-63260ff0><!--[-->`);
      ssrRenderList(stats, (stat, idx) => {
        _push(`<div class="why__stat" data-v-63260ff0><span class="why__stat-value" data-v-63260ff0>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          "content-key": `home.stats.${idx}.value`,
          page: "home",
          default: stat.value
        }, null, _parent));
        _push(`<span class="why__stat-suffix" data-v-63260ff0>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          "content-key": `home.stats.${idx}.suffix`,
          page: "home",
          default: stat.suffix
        }, null, _parent));
        _push(`</span></span><span class="why__stat-label" data-v-63260ff0>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          "content-key": `home.stats.${idx}.label`,
          page: "home",
          default: stat.label
        }, null, _parent));
        _push(`</span></div>`);
      });
      _push(`<!--]--></div><div class="why__grid" data-v-63260ff0><!--[-->`);
      ssrRenderList(features, (feat, idx) => {
        _push(`<div class="why__feature" data-v-63260ff0><div class="why__icon-box" data-v-63260ff0>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feat.icon), null, null), _parent);
        _push(`</div>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h4",
          class: "why__feat-title",
          "content-key": `home.why.feature.${idx}.title`,
          page: "home",
          default: feat.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "why__feat-body",
          "content-key": `home.why.feature.${idx}.body`,
          page: "home",
          default: feat.body
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/WhyTNYSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const WhyTNYSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-63260ff0"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "IndustriesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const icon = (path) => () => h("svg", { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "white", "stroke-width": 1.5 }, [
      h("path", { d: path, "stroke-linecap": "round", "stroke-linejoin": "round" })
    ]);
    const industries = [
      {
        id: 0,
        icon: icon("M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"),
        title: "Hospitals & Health Systems",
        body: "Reliable staffing solutions for acute care, inpatient rehabilitation, and LTACH facilities with complex therapy needs.",
        wide: true
      },
      {
        id: 1,
        icon: icon("M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"),
        title: "Schools Settings",
        body: "Support student success with credentialed therapists for public and private schools, early intervention programs, and special education services.",
        wide: false
      },
      {
        id: 2,
        icon: icon("M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"),
        title: "Rehabilitation Centers",
        body: "Strengthen your therapy team with experienced professionals for both outpatient and inpatient rehabilitation programs.",
        wide: false
      },
      {
        id: 3,
        icon: icon("M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"),
        title: "Skilled Nursing Facilities",
        body: "Ensure consistent, compassionate care with therapy professionals experienced in long-term care and subacute rehabilitation.",
        wide: false
      },
      {
        id: 4,
        icon: icon("M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"),
        title: "Home Healthcare Agencies",
        body: "Deliver exceptional care at home with fully credentialed therapists experienced in independent, patient-centered care.",
        wide: false
      },
      {
        id: 5,
        icon: icon("M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"),
        title: "Private Practices",
        body: "Grow your practice with skilled therapists for temporary coverage, contract assignments, or permanent placements.",
        wide: false
      }
    ];
    const rows = [
      [
        { ...industries[2], flex: "0 0 30rem" },
        { ...industries[1], flex: "0 0 30rem" }
      ],
      [
        { ...industries[0], flex: "0 0 40rem" },
        { ...industries[5], flex: "0 0 30rem" }
      ],
      [
        { ...industries[3], flex: 1 },
        { ...industries[4], flex: 2 }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "industries" }, _attrs))} data-v-b55a8383><div class="industries__header" data-v-b55a8383>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "section-label",
        "content-key": "home.industries.label",
        page: "home",
        default: "Industries"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "industries__title",
        "content-key": "home.industries.title",
        page: "home",
        default: "Precision Rehab Staffing for Every Healthcare Environment"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "industries__subtitle",
        "content-key": "home.industries.subtitle",
        page: "home",
        default: "No matter your staffing needs, we connect healthcare organizations with exceptional therapy professionals ready to make an immediate impact."
      }, null, _parent));
      _push(`</div><div class="industries__grid" data-v-b55a8383>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "home.industries.center_image",
        page: "home",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994268/1_rvf4tg.webp",
        "default-object-fit": "cover",
        "default-alt": "",
        "aria-hidden": "true",
        class: "industries__center-img"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(rows, (row, ri) => {
        _push(`<div class="${ssrRenderClass([`industries__row--${ri + 1}`, "industries__row"])}" data-v-b55a8383><!--[-->`);
        ssrRenderList(row, (industry) => {
          _push(`<div class="ind-card" style="${ssrRenderStyle({ flex: industry.flex })}" data-v-b55a8383><div class="ind-card__icon-box" data-v-b55a8383>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(industry.icon), null, null), _parent);
          _push(`</div>`);
          _push(ssrRenderComponent(EditableText, {
            tag: "h4",
            class: "ind-card__title",
            "content-key": `home.industries.item.${industry.id}.title`,
            page: "home",
            default: industry.title
          }, null, _parent));
          _push(ssrRenderComponent(EditableText, {
            tag: "p",
            class: "ind-card__body",
            "content-key": `home.industries.item.${industry.id}.body`,
            page: "home",
            default: industry.body
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/IndustriesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IndustriesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b55a8383"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const active = ref(0);
    const testimonials = [
      {
        quote: `"TNY Staffing Corporation  filled three PT positions within 48 hours when our census spiked unexpectedly. Every clinician they sent was credentialed, professional, and hit the ground running. We've made them our primary staffing partner."`,
        name: "Michelle R.",
        title: "Director of Rehab Services · Brooklyn Medical Center",
        initials: "MR",
        color: "#1e3a4a"
      },
      {
        quote: '"As a bilingual SLP, I struggled to find positions that valued my Spanish skills. TNY Staffing Corporation  matched me with a school that specifically needed Spanish-speaking clinicians. It was the right fit from day one."',
        name: "Carlos M., MS CCC-SLP",
        title: "Speech-Language Pathologist · Queens, NY",
        initials: "CM",
        color: "#2d4a3e"
      },
      {
        quote: `"We've worked with multiple staffing agencies over the years. None have matched the responsiveness and quality of TNY Staffing Corporation . Our dedicated account manager actually understands rehab operations — that's a huge difference."`,
        name: "Patricia L.",
        title: "Administrator · Sunrise Skilled Nursing",
        initials: "PL",
        color: "#3a2d1e"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials" }, _attrs))} data-v-f1585a4b><div class="testimonials__header" data-v-f1585a4b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "section-label",
        "content-key": "home.testimonials.label",
        page: "home",
        default: "Testimonials"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "testimonials__title",
        "content-key": "home.testimonials.title",
        page: "home",
        default: "What Our Partners Say"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "testimonials__subtitle",
        "content-key": "home.testimonials.subtitle",
        page: "home",
        default: "From the facilities we staff to the therapists we place — real voices, real results."
      }, null, _parent));
      _push(`</div><div class="testimonials__featured" data-v-f1585a4b><svg class="testimonials__quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF9B37" stroke-width="1.5" data-v-f1585a4b><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" data-v-f1585a4b></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" data-v-f1585a4b></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "testimonials__featured-quote",
        "content-key": `home.testimonials.${active.value}.quote`,
        page: "home",
        default: testimonials[active.value].quote
      }, null, _parent));
      _push(`<div class="testimonials__featured-author" data-v-f1585a4b><div class="testimonials__avatar" style="${ssrRenderStyle({ background: testimonials[active.value].color })}" data-v-f1585a4b>${ssrInterpolate(testimonials[active.value].initials)}</div><div data-v-f1585a4b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "testimonials__author-name",
        "content-key": `home.testimonials.${active.value}.name`,
        page: "home",
        default: testimonials[active.value].name
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "testimonials__author-role",
        "content-key": `home.testimonials.${active.value}.title`,
        page: "home",
        default: testimonials[active.value].title
      }, null, _parent));
      _push(`<div class="testimonials__stars" data-v-f1585a4b><!--[-->`);
      ssrRenderList(5, (n) => {
        _push(`<span data-v-f1585a4b>★</span>`);
      });
      _push(`<!--]--></div></div></div></div><div class="testimonials__cards" data-v-f1585a4b><!--[-->`);
      ssrRenderList(testimonials, (t, i) => {
        _push(`<div class="${ssrRenderClass([{ "test-card--active": i === active.value }, "test-card"])}" data-v-f1585a4b><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF9B37" stroke-width="1.5" data-v-f1585a4b><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" data-v-f1585a4b></path></svg>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "test-card__quote",
          "content-key": `home.testimonials.${i}.quote`,
          page: "home",
          default: t.quote
        }, null, _parent));
        _push(`<div class="test-card__author" data-v-f1585a4b><div class="testimonials__avatar testimonials__avatar--sm" style="${ssrRenderStyle({ background: t.color })}" data-v-f1585a4b>${ssrInterpolate(t.initials)}</div><div data-v-f1585a4b>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "test-card__name",
          "content-key": `home.testimonials.${i}.name`,
          page: "home",
          default: t.name
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "test-card__role",
          "content-key": `home.testimonials.${i}.title`,
          page: "home",
          default: t.title
        }, null, _parent));
        _push(`<div class="testimonials__stars testimonials__stars--sm" data-v-f1585a4b><!--[-->`);
        ssrRenderList(5, (n) => {
          _push(`<span data-v-f1585a4b>★</span>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="testimonials__nav" data-v-f1585a4b><button class="testimonials__arrow" aria-label="Previous" data-v-f1585a4b><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-f1585a4b><path d="M15 18l-6-6 6-6" data-v-f1585a4b></path></svg></button><div class="testimonials__dots" data-v-f1585a4b><!--[-->`);
      ssrRenderList(testimonials, (_, i) => {
        _push(`<button class="${ssrRenderClass([{ "testimonials__dot--active": i === active.value }, "testimonials__dot"])}"${ssrRenderAttr("aria-label", `Go to testimonial ${i + 1}`)}${ssrRenderAttr("aria-current", i === active.value ? "true" : void 0)} data-v-f1585a4b></button>`);
      });
      _push(`<!--]--></div><button class="testimonials__arrow testimonials__arrow--active" aria-label="Next" data-v-f1585a4b><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-f1585a4b><path d="M9 18l6-6-6-6" data-v-f1585a4b></path></svg></button></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/TestimonialsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TestimonialsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f1585a4b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResourcesSection",
  __ssrInlineRender: true,
  props: {
    articles: {}
  },
  setup(__props) {
    const props = __props;
    const latestArticles = computed(
      () => [...props.articles].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 3)
    );
    function readTime(text) {
      if (!text) return "3 min read";
      const words = text.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
      return `${Math.max(1, Math.round(words / 200))} min read`;
    }
    function excerpt(text) {
      if (!text) return "";
      const stripped = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      return stripped.length > 120 ? stripped.slice(0, 120).trimEnd() + "..." : stripped;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (latestArticles.value.length > 0) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "resources" }, _attrs))} data-v-385ebf9d><div class="resources__header" data-v-385ebf9d><div class="resources__header-left" data-v-385ebf9d>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "section-label",
          "content-key": "home.resources.label",
          page: "home",
          default: "Resources"
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "h2",
          class: "resources__title",
          "content-key": "home.resources.title",
          page: "home",
          default: "Insights for Healthcare Leaders"
        }, null, _parent));
        _push(`</div><a href="/news" class="resources__view-all" data-v-385ebf9d>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          "content-key": "home.resources.cta",
          page: "home",
          default: "View All Resources"
        }, null, _parent));
        _push(`</a></div><div class="resources__cards" data-v-385ebf9d><!--[-->`);
        ssrRenderList(latestArticles.value, (article, idx) => {
          _push(`<article class="res-card" data-v-385ebf9d><div class="res-card__banner" data-v-385ebf9d><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="res-card__image" data-v-385ebf9d></div><div class="res-card__body" data-v-385ebf9d><h4 class="res-card__title" data-v-385ebf9d>${ssrInterpolate(article.title)}</h4><p class="res-card__excerpt" data-v-385ebf9d>${ssrInterpolate(excerpt(article.content))}</p><div class="res-card__footer" data-v-385ebf9d><span class="res-card__read-time" data-v-385ebf9d>${ssrInterpolate(readTime(article.content))}</span><a${ssrRenderAttr("href", `/news/${article.url}`)} class="res-card__read-more" data-v-385ebf9d>Read more →</a></div></div></article>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/ResourcesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ResourcesSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-385ebf9d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CtaBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-banner" }, _attrs))} data-v-249358ca><div class="cta-banner__inner" data-v-249358ca>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "cta-banner__title",
        "content-key": "home.cta_banner.title",
        page: "home",
        default: "Need Healthcare Staff Fast?"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "cta-banner__body",
        "content-key": "home.cta_banner.body",
        page: "home",
        default: "Whether it's an emergency gap or a planned expansion, we're ready to respond. Get your first candidate profile within 24 hours."
      }, null, _parent));
      _push(`<div class="cta-banner__btns" data-v-249358ca><a href="/requestService" class="cta-banner__btn cta-banner__btn--primary" data-v-249358ca>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.cta_banner.primary_cta",
        page: "home",
        default: "Hire Staff →"
      }, null, _parent));
      _push(`</a><a href="/contact" class="cta-banner__btn cta-banner__btn--outline" data-v-249358ca>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "home.cta_banner.secondary_cta",
        page: "home",
        default: "Contact Us →"
      }, null, _parent));
      _push(`</a></div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "cta-banner__footnote",
        "content-key": "home.cta_banner.footnote",
        page: "home",
        default: "No commitment required · Response within 24 hours · Serving all of New York"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/CtaBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CtaBanner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-249358ca"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeV2",
  __ssrInlineRender: true,
  props: {
    news: {},
    pageContent: {}
  },
  setup(__props) {
    const props = __props;
    provide("pageContent", props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$b, {
        page: "home",
        path: "/",
        "default-title": "Therapy Staffing Agency in NYC | TNY Staffing Corporation",
        "default-description": "TNY Staffing connects NY healthcare facilities with credentialed therapy professionals (PT, OT, SLP). Fast 24h placements for hospitals, schools, and clinics.",
        "default-og-image": "https://www.tnystaffingco.com/images/tnylogo.png"
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ForSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(JoinNetworkSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SolutionsSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(WhyTNYSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(IndustriesSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TestimonialsSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ResourcesSection, {
              articles: _ctx.news ?? []
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CtaBanner, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroSection),
              createVNode(ForSection),
              createVNode(JoinNetworkSection),
              createVNode(SolutionsSection),
              createVNode(WhyTNYSection),
              createVNode(IndustriesSection),
              createVNode(TestimonialsSection),
              createVNode(ResourcesSection, {
                articles: _ctx.news ?? []
              }, null, 8, ["articles"]),
              createVNode(CtaBanner)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/HomeV2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
