import { defineComponent, mergeProps, useSSRContext, h, createVNode, resolveDynamicComponent, provide, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { E as EditableImage, a as EditableText } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AboutMissionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-mission" }, _attrs))} data-v-f6916f4e><div class="about-mission__inner" data-v-f6916f4e><div class="about-mission__row" data-v-f6916f4e>`);
      _push(ssrRenderComponent(EditableImage, {
        class: "about-mission__img about-mission__img--about",
        "content-key": "about.mission.image",
        page: "about",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp",
        "default-object-fit": "cover",
        "default-object-position": "top",
        "default-alt": "TNY Staffing Corporation team"
      }, null, _parent));
      _push(`<div class="about-mission__copy" data-v-f6916f4e>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "about-mission__label",
        "content-key": "about.mission.label",
        page: "about",
        default: "About Us"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "about-mission__heading",
        "content-key": "about.mission.heading",
        page: "about",
        default: "Supporting Healthcare Across NYC"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "about-mission__body",
        "content-key": "about.mission.body",
        page: "about",
        default: "More than staffing. More than recruiting. We create meaningful connections between rehabilitation professionals and healthcare organizations across New York City—helping careers grow, teams thrive, and patient care reach its highest potential."
      }, null, _parent));
      _push(`</div></div><div class="about-mission__row about-mission__row--reversed" data-v-f6916f4e><div class="about-mission__copy" data-v-f6916f4e>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "about-mission__label",
        "content-key": "about.coverage.label",
        page: "about",
        default: "Coverage Area"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "about-mission__heading",
        "content-key": "about.coverage.heading",
        page: "about",
        default: "Supporting Healthcare Across NYC"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "about-mission__body",
        "content-key": "about.coverage.body",
        page: "about",
        default: "Proudly serving all five boroughs of New York City—Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Connecting healthcare organizations with exceptional rehabilitation professionals every day."
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(EditableImage, {
        class: "about-mission__img about-mission__img--map",
        "content-key": "about.coverage.image",
        page: "about",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1787249119/map_a5geyn.webp",
        "default-object-fit": "cover",
        "default-alt": "Map of New York City boroughs served"
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/About/AboutMissionSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutMissionSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f6916f4e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CoreValuesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const HeartIcon = () => h("svg", { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "#ee7830", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("path", { d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" })
    ]);
    const CompassIcon = () => h("svg", { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "#ee7830", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("circle", { cx: 12, cy: 12, r: 10 }),
      h("path", { d: "M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" })
    ]);
    const StarIcon = () => h("svg", { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "#ee7830", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
    ]);
    const RippleIcon = () => h("svg", { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "#ee7830", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, [
      h("circle", { cx: 12, cy: 12, r: 2 }),
      h("path", { d: "M12 5a7 7 0 010 14M12 2a10 10 0 010 20" })
    ]);
    const values = [
      {
        id: 0,
        icon: HeartIcon,
        title: "Compassion",
        body: "We believe every great placement begins with a genuine commitment to improving lives."
      },
      {
        id: 1,
        icon: CompassIcon,
        title: "Purpose",
        body: "We connect people with opportunities that create meaningful careers and better patient outcomes."
      },
      {
        id: 2,
        icon: StarIcon,
        title: "Excellence",
        body: 'We never settle for "good enough." Every placement is held to the highest clinical standards.'
      },
      {
        id: 3,
        icon: RippleIcon,
        title: "Impact",
        body: "Every therapist we place has the power to change a life. That's a responsibility we take seriously."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-values" }, _attrs))} data-v-75c741e1><div class="about-values__inner" data-v-75c741e1><div class="about-values__header" data-v-75c741e1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "about-values__label",
        "content-key": "about.values.label",
        page: "about",
        default: "Core Values"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "about-values__heading",
        "content-key": "about.values.heading",
        page: "about",
        default: "Dream big"
      }, null, _parent));
      _push(`</div><div class="about-values__grid" data-v-75c741e1><!--[-->`);
      ssrRenderList(values, (val) => {
        _push(`<div class="about-values__card" data-v-75c741e1><div class="about-values__icon-wrap" data-v-75c741e1>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(val.icon), null, null), _parent);
        _push(`</div><div class="about-values__card-body" data-v-75c741e1>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "about-values__card-title",
          "content-key": `about.values.item.${val.id}.title`,
          page: "about",
          default: val.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "about-values__card-text",
          "content-key": `about.values.item.${val.id}.body`,
          page: "about",
          default: val.body
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/About/CoreValuesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CoreValuesSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-75c741e1"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AboutCTASection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-cta" }, _attrs))} data-v-71fb9918><div class="about-cta__half about-cta__half--dark" data-v-71fb9918><div class="about-cta__content" data-v-71fb9918>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "about-cta__heading about-cta__heading--white",
        "content-key": "about.cta.employers.heading",
        page: "about",
        default: "For Employers"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "about-cta__body about-cta__body--white",
        "content-key": "about.cta.employers.body",
        page: "about",
        default: "Access qualified rehabilitation professionals and staffing support tailored to your facility."
      }, null, _parent));
      _push(`<a href="/requestService" class="about-cta__btn about-cta__btn--orange" data-v-71fb9918>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "about.cta.employers.cta",
        page: "about",
        default: "Hire Staff"
      }, null, _parent));
      _push(`</a></div></div><div class="about-cta__half about-cta__half--sand" data-v-71fb9918><div class="about-cta__content" data-v-71fb9918>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "about-cta__heading",
        "content-key": "about.cta.candidates.heading",
        page: "about",
        default: "For Candidates"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "about-cta__body",
        "content-key": "about.cta.candidates.body",
        page: "about",
        default: "Discover flexible opportunities across healthcare settings throughout New York City."
      }, null, _parent));
      _push(`<a href="/apply" class="about-cta__btn about-cta__btn--white" data-v-71fb9918>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "about.cta.candidates.cta",
        page: "about",
        default: "Find Jobs"
      }, null, _parent));
      _push(`</a></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/About/AboutCTASection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AboutCTASection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-71fb9918"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        page: "about",
        path: "/about",
        "default-title": "About TNY Staffing | NYC Therapy Staffing Agency",
        "default-description": "Learn how TNY Staffing creates meaningful connections between rehab professionals and NYC healthcare organizations. Proudly serving all five boroughs."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AboutMissionSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CoreValuesSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AboutCTASection, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AboutMissionSection),
              createVNode(CoreValuesSection),
              createVNode(AboutCTASection)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
