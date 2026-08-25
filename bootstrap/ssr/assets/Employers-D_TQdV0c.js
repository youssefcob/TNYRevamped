import { defineComponent, mergeProps, useSSRContext, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { a as EditableText, E as EditableImage } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EmployerHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "emp-hero" }, _attrs))} data-v-153ec78d><div class="emp-hero__inner" data-v-153ec78d>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "emp-hero__title",
        "content-key": "employers.hero.title",
        page: "employers",
        default: "Reliable Healthcare Staffing Exactly When You Need It"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "emp-hero__subtitle",
        "content-key": "employers.hero.subtitle",
        page: "employers",
        default: "When staffing needs can't wait, TNY Staffing Corporation delivers trusted rehabilitation professionals—supporting healthcare facilities across all five boroughs with both immediate coverage and long-term workforce solutions."
      }, null, _parent));
      _push(`<a href="/requestService" class="emp-hero__btn" data-v-153ec78d>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "employers.hero.cta",
        page: "employers",
        default: "Request Staff"
      }, null, _parent));
      _push(`</a></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ForEmployers/EmployerHeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const EmployerHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-153ec78d"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChallengesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const challenges = [
      {
        number: "01",
        title: "Last-Minute Callouts",
        body: "Unexpected absences that leave schedules stretched and patient care at risk.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249118/01_Last-Minute_Callouts_1_bijrjf.webp"
      },
      {
        number: "02",
        title: "Specialized Therapists",
        body: "Hard-to-fill therapy roles that demand experienced, qualified professionals.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249118/02_Specialized_Therapists_cj6wvf.webp"
      },
      {
        number: "03",
        title: "Administrative Staffing",
        body: "Front-office staffing challenges that disrupt clinic operations and daily patient management.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249118/02_Specialized_Therapists_cj6wvf.webp"
      },
      {
        number: "04",
        title: "Staffing Reliability",
        body: "Inconsistent staffing partners that create unnecessary gaps in care.",
        img: "https://res.cloudinary.com/dzilc11zf/image/upload/v1783361199/2_1_plxab7.webp"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "challenges" }, _attrs))} data-v-db29b785><div class="challenges__inner" data-v-db29b785><div class="challenges__header" data-v-db29b785>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "challenges__label",
        "content-key": "employers.challenges.label",
        page: "employers",
        default: "Employer Challenges"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "challenges__title",
        "content-key": "employers.challenges.title",
        page: "employers",
        default: "Staffing Challenges Shouldn't Compromise Patient Care"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "challenges__subtitle",
        "content-key": "employers.challenges.subtitle",
        page: "employers",
        default: "In today's fast-paced healthcare environment, reliable staffing is essential to maintaining quality patient care, operational efficiency, and continuity of services."
      }, null, _parent));
      _push(`</div><div class="challenges__list" data-v-db29b785><!--[-->`);
      ssrRenderList(challenges, (item, i) => {
        _push(`<div class="${ssrRenderClass([i % 2 === 0 ? "challenge-row--normal" : "challenge-row--flipped", "challenge-row"])}" data-v-db29b785><div class="challenge-row__text" data-v-db29b785><span class="challenge-row__number" data-v-db29b785>${ssrInterpolate(item.number)}</span><div class="challenge-row__content" data-v-db29b785>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "challenge-row__title",
          "content-key": `employers.challenges.item.${item.number}.title`,
          page: "employers",
          default: item.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "challenge-row__body",
          "content-key": `employers.challenges.item.${item.number}.body`,
          page: "employers",
          default: item.body
        }, null, _parent));
        _push(`</div></div><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.title)} class="challenge-row__image" data-v-db29b785></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ForEmployers/ChallengesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ChallengesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-db29b785"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WhyTNYSection",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        id: 0,
        title: "Rigorous Screening",
        body: "Every clinician is thoroughly vetted for credentials, compliance, experience, and clinical fit."
      },
      {
        id: 1,
        title: "Specialized Talent",
        body: "Access experienced PTs & PTAs, OTs & COTAs, SLPs & SLPAs, & Neuro Therapists, Acupuncturists, LMTs, and Administrative Staff."
      },
      {
        id: 2,
        title: "Flexible Staffing",
        body: "Per diem, contract, temp-to-hire, and long-term staffing solutions."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "why-tny" }, _attrs))} data-v-8e35c309><div class="why-tny__inner" data-v-8e35c309><div class="why-tny__header" data-v-8e35c309>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "why-tny__label",
        "content-key": "employers.why.label",
        page: "employers",
        default: "Why TNY"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "why-tny__title",
        "content-key": "employers.why.title",
        page: "employers",
        default: "Why Healthcare Facilities Choose TNY"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "why-tny__subtitle",
        "content-key": "employers.why.subtitle",
        page: "employers",
        default: "In a fast-moving healthcare environment, the right staffing makes the difference between simply keeping up and delivering exceptional care."
      }, null, _parent));
      _push(`</div><div class="why-tny__top-row" data-v-8e35c309><div class="why-tny__feature-card" data-v-8e35c309>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "why-tny__feature-label",
        "content-key": "employers.why.feature.label",
        page: "employers",
        default: "Rapid Deployment"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "why-tny__feature-title",
        "content-key": "employers.why.feature.title",
        page: "employers",
        default: "Fast Staffing Support Without Sacrificing Quality"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "why-tny__feature-body",
        "content-key": "employers.why.feature.body",
        page: "employers",
        default: "Urgent staffing doesn't mean lowering your standards. Our team delivers credentialed therapy professionals with the speed your facility demands."
      }, null, _parent));
      _push(`<div class="why-tny__stats" data-v-8e35c309></div></div>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "employers.why.image",
        page: "employers",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp",
        "default-object-fit": "cover",
        "default-alt": "Why healthcare facilities choose TNY",
        class: "why-tny__image"
      }, null, _parent));
      _push(`</div><div class="why-tny__cards" data-v-8e35c309><!--[-->`);
      ssrRenderList(cards, (card) => {
        _push(`<div class="why-tny__card" data-v-8e35c309>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "why-tny__card-title",
          "content-key": `employers.why.card.${card.id}.title`,
          page: "employers",
          default: card.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "why-tny__card-body",
          "content-key": `employers.why.card.${card.id}.body`,
          page: "employers",
          default: card.body
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ForEmployers/WhyTNYSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WhyTNYSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8e35c309"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HowItWorksSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hiw" }, _attrs))} data-v-e793987d><div class="hiw__inner" data-v-e793987d><div class="hiw__scene" data-v-e793987d><div class="hiw__center" data-v-e793987d><div class="hiw__oval" aria-hidden="true" data-v-e793987d></div><div class="hiw__header" data-v-e793987d>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "hiw__label",
        "content-key": "employers.how.label",
        page: "employers",
        default: "How It Works"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "hiw__title",
        "content-key": "employers.how.title",
        page: "employers",
        default: "Staff Ready in Four Steps"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "hiw__subtitle",
        "content-key": "employers.how.subtitle",
        page: "employers",
        default: "We make hiring simple, efficient, and focused on finding the right fit for your team."
      }, null, _parent));
      _push(`</div></div><div class="hiw__step hiw__step--tl" data-v-e793987d><div class="hiw__step-badge hiw__step-badge--orange" data-v-e793987d>01</div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "hiw__step-title",
        "content-key": "employers.how.step.tl.title",
        page: "employers",
        default: "Tell Us Your Needs"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "hiw__step-body",
        "content-key": "employers.how.step.tl.body",
        page: "employers",
        default: "Share your staffing needs, including discipline, care setting, schedule, and any specific qualifications."
      }, null, _parent));
      _push(`</div><div class="hiw__step hiw__step--tr" data-v-e793987d><div class="hiw__step-badge hiw__step-badge--teal" data-v-e793987d>02</div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "hiw__step-title",
        "content-key": "employers.how.step.tr.title",
        page: "employers",
        default: "We Find the Right Match"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "hiw__step-body",
        "content-key": "employers.how.step.tr.body",
        page: "employers",
        default: "Our recruiters quickly identify qualified therapy professionals from our trusted talent network."
      }, null, _parent));
      _push(`</div><div class="hiw__step hiw__step--bl" data-v-e793987d><div class="hiw__step-badge hiw__step-badge--blue" data-v-e793987d>04</div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "hiw__step-title",
        "content-key": "employers.how.step.bl.title",
        page: "employers",
        default: "We Handle the Details"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "hiw__step-body",
        "content-key": "employers.how.step.bl.body",
        page: "employers",
        default: "From credentialing and compliance to onboarding, we take care of the paperwork so you don't have to."
      }, null, _parent));
      _push(`</div><div class="hiw__step hiw__step--br" data-v-e793987d><div class="hiw__step-badge hiw__step-badge--sand" data-v-e793987d>03</div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "hiw__step-title",
        "content-key": "employers.how.step.br.title",
        page: "employers",
        default: "Ready to Make an Impact"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "hiw__step-body",
        "content-key": "employers.how.step.br.body",
        page: "employers",
        default: "Your therapist arrives prepared to integrate seamlessly into your team and start delivering care."
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ForEmployers/HowItWorksSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HowItWorksSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e793987d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EmployerCtaBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "emp-cta" }, _attrs))} data-v-44f45f27><div class="emp-cta__inner" data-v-44f45f27>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "emp-cta__title",
        "content-key": "employers.cta.title",
        page: "employers",
        default: "Need Qualified Therapy Professionals—Fast?"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "emp-cta__body",
        "content-key": "employers.cta.body",
        page: "employers",
        default: "Partner with a trusted therapy staffing team that delivers qualified professionals with speed, reliability, and confidence."
      }, null, _parent));
      _push(`<div class="emp-cta__btns" data-v-44f45f27><a href="/requestService" class="emp-cta__btn emp-cta__btn--primary" data-v-44f45f27>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "employers.cta.primary_cta",
        page: "employers",
        default: "Hire Staff →"
      }, null, _parent));
      _push(`</a><a href="/contact" class="emp-cta__btn emp-cta__btn--outline" data-v-44f45f27>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "employers.cta.secondary_cta",
        page: "employers",
        default: "Contact Us →"
      }, null, _parent));
      _push(`</a></div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "emp-cta__footnote",
        "content-key": "employers.cta.footnote",
        page: "employers",
        default: "No commitment required · Response within 24 hours · Serving all of New York"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ForEmployers/EmployerCtaBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EmployerCtaBanner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-44f45f27"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Employers",
  __ssrInlineRender: true,
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, {
        page: "employers",
        path: "/employers",
        "default-title": "Reliable Healthcare Staffing in NYC | TNY Staffing",
        "default-description": "TNY Staffing provides reliable healthcare staffing in NYC. We supply credentialed PTs, OTs, and SLPs for emergency coverage and long-term workforce solutions."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EmployerHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ChallengesSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(WhyTNYSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HowItWorksSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(EmployerCtaBanner, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EmployerHeroSection),
              createVNode(ChallengesSection),
              createVNode(WhyTNYSection),
              createVNode(HowItWorksSection),
              createVNode(EmployerCtaBanner)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Employers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
