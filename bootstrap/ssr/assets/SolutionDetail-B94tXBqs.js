import { defineComponent, mergeProps, useSSRContext, provide, withCtx, createVNode, createBlock, createCommentVNode, openBlock } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$9 } from "./PageMeta-RDJ3sdSO.js";
import { L as LayoutV2 } from "./LayoutV2-Cv_msxRR.js";
import { a as EditableText, E as EditableImage } from "./FooterV2-L8NNvjgt.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./StyleToolbarHost-99_vtE-Q.js";
import "vue3-toastify";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SolutionDetailHero",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-hero" }, _attrs))} data-v-88dd463c><div class="sd-hero__inner" data-v-88dd463c>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-hero__eyebrow",
        "content-key": "hero.eyebrow",
        page: props.pageKey,
        default: props.solution.eyebrow
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "sd-hero__title",
        "content-key": "hero.title",
        page: props.pageKey,
        default: props.solution.title
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-hero__intro",
        "content-key": "hero.intro",
        page: props.pageKey,
        default: props.solution.intro
      }, null, _parent));
      _push(`<a href="/requestService" class="sd-hero__btn" data-v-88dd463c>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "hero.cta",
        page: props.pageKey,
        default: "Request This Staffing"
      }, null, _parent));
      _push(`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" data-v-88dd463c><path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-88dd463c></path></svg></a></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionDetailHero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SolutionDetailHero = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-88dd463c"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SolutionOverviewSection",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-overview" }, _attrs))} data-v-0b73a03d><div class="sd-overview__inner" data-v-0b73a03d>`);
      _push(ssrRenderComponent(EditableImage, {
        class: "sd-overview__img",
        "content-key": "overview.image",
        page: props.pageKey,
        "default-src": props.solution.image,
        "default-object-fit": "cover",
        "default-object-position": "center",
        "default-alt": props.solution.name
      }, null, _parent));
      _push(`<div class="sd-overview__copy" data-v-0b73a03d>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-overview__label",
        "content-key": "overview.label",
        page: props.pageKey,
        default: "Overview"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sd-overview__heading",
        "content-key": "overview.heading",
        page: props.pageKey,
        default: `What TNY delivers with ${props.solution.name}`
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(props.solution.overview, (para, i) => {
        _push(ssrRenderComponent(EditableText, {
          key: i,
          tag: "p",
          class: "sd-overview__body",
          "content-key": `overview.p.${i}`,
          page: props.pageKey,
          default: para
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionOverviewSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SolutionOverviewSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-0b73a03d"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SolutionRolesSection",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-roles" }, _attrs))} data-v-2a8cd40b><div class="sd-roles__inner" data-v-2a8cd40b><div class="sd-roles__header" data-v-2a8cd40b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-roles__label",
        "content-key": "roles.label",
        page: props.pageKey,
        default: "Roles We Staff"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sd-roles__heading",
        "content-key": "roles.heading",
        page: props.pageKey,
        default: "The credentials behind this service"
      }, null, _parent));
      _push(`</div><div class="sd-roles__grid" data-v-2a8cd40b><!--[-->`);
      ssrRenderList(props.solution.roles, (role, i) => {
        _push(`<div class="sd-roles__card" data-v-2a8cd40b><span class="sd-roles__num" data-v-2a8cd40b>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "sd-roles__card-title",
          "content-key": `roles.${i}.title`,
          page: props.pageKey,
          default: role.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "sd-roles__card-desc",
          "content-key": `roles.${i}.blurb`,
          page: props.pageKey,
          default: role.blurb
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionRolesSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SolutionRolesSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2a8cd40b"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SolutionSpotlightSection",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-spotlight" }, _attrs))} data-v-4dd3422c><div class="sd-spotlight__inner" data-v-4dd3422c><div class="sd-spotlight__copy" data-v-4dd3422c>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-spotlight__label",
        "content-key": "spotlight.label",
        page: props.pageKey,
        default: "Why it matters"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sd-spotlight__heading",
        "content-key": "spotlight.heading",
        page: props.pageKey,
        default: `How TNY supports ${props.solution.name} teams`
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-spotlight__body",
        "content-key": "spotlight.body",
        page: props.pageKey,
        default: "Add the detail that sets this service apart here. Describe the outcomes clients can expect, the standards your talent is held to, and the difference it makes on the ground."
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(EditableImage, {
        class: "sd-spotlight__img",
        "content-key": "spotlight.image",
        page: props.pageKey,
        "default-src": props.solution.image,
        "default-object-fit": "cover",
        "default-object-position": "center",
        "default-alt": props.solution.name
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionSpotlightSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SolutionSpotlightSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4dd3422c"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SolutionFocusSection",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-focus" }, _attrs))} data-v-8aa9b7c2><div class="sd-focus__inner" data-v-8aa9b7c2><div class="sd-focus__header" data-v-8aa9b7c2>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-focus__label",
        "content-key": "focus.label",
        page: props.pageKey,
        default: "Clinical Focus"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sd-focus__heading",
        "content-key": "focus.heading",
        page: props.pageKey,
        default: "What our clinicians treat"
      }, null, _parent));
      _push(`</div><ul class="sd-focus__list" data-v-8aa9b7c2><!--[-->`);
      ssrRenderList(props.solution.focus, (item, i) => {
        _push(`<li class="sd-focus__item" data-v-8aa9b7c2><svg class="sd-focus__check" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-v-8aa9b7c2><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-8aa9b7c2></path></svg>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          "content-key": `focus.${i}`,
          page: props.pageKey,
          default: item
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionFocusSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SolutionFocusSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8aa9b7c2"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SolutionSettingsSection",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-settings" }, _attrs))} data-v-88e7fa2c><div class="sd-settings__inner" data-v-88e7fa2c><div class="sd-settings__header" data-v-88e7fa2c>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-settings__label",
        "content-key": "settings.label",
        page: props.pageKey,
        default: "Where They Work"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sd-settings__heading",
        "content-key": "settings.heading",
        page: props.pageKey,
        default: "Settings we place into"
      }, null, _parent));
      _push(`</div><div class="sd-settings__grid" data-v-88e7fa2c><!--[-->`);
      ssrRenderList(props.solution.settings, (setting, i) => {
        _push(`<div class="sd-settings__card" data-v-88e7fa2c>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "sd-settings__card-title",
          "content-key": `settings.${i}.title`,
          page: props.pageKey,
          default: setting.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "sd-settings__card-desc",
          "content-key": `settings.${i}.desc`,
          page: props.pageKey,
          default: setting.desc
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionSettingsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SolutionSettingsSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-88e7fa2c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SolutionWhySection",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-why" }, _attrs))} data-v-9addff59><div class="sd-why__inner" data-v-9addff59><div class="sd-why__header" data-v-9addff59>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-why__label",
        "content-key": "why.label",
        page: props.pageKey,
        default: "Why TNY"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sd-why__heading",
        "content-key": "why.heading",
        page: props.pageKey,
        default: "Why facilities partner with us"
      }, null, _parent));
      _push(`</div><div class="sd-why__grid" data-v-9addff59><!--[-->`);
      ssrRenderList(props.solution.why, (item, i) => {
        _push(`<div class="sd-why__card" data-v-9addff59><span class="sd-why__num" data-v-9addff59>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><div class="sd-why__card-text" data-v-9addff59>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "sd-why__card-title",
          "content-key": `why.${i}.title`,
          page: props.pageKey,
          default: item.title
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "sd-why__card-desc",
          "content-key": `why.${i}.desc`,
          page: props.pageKey,
          default: item.desc
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionWhySection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SolutionWhySection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9addff59"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SolutionDetailCTA",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "sd-cta" }, _attrs))} data-v-80af6fb0><div class="sd-cta__inner" data-v-80af6fb0><div class="sd-cta__content" data-v-80af6fb0>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-cta__label",
        "content-key": "cta.label",
        page: props.pageKey,
        default: "Next Steps"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "sd-cta__title",
        "content-key": "cta.title",
        page: props.pageKey,
        default: `Bring ${props.solution.name.replace(" Staffing", "")} talent to your team`
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "sd-cta__desc",
        "content-key": "cta.desc",
        page: props.pageKey,
        default: "Tell us about the caseload, setting, and schedule you need to cover. We’ll come back with pre-screened clinicians who fit — usually within a couple of business days."
      }, null, _parent));
      _push(`<div class="sd-cta__actions" data-v-80af6fb0><a href="/requestService" class="sd-cta__btn sd-cta__btn--primary" data-v-80af6fb0>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "cta.employer_cta",
        page: props.pageKey,
        default: "Request Staffing"
      }, null, _parent));
      _push(`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" data-v-80af6fb0><path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-80af6fb0></path></svg></a><a href="/apply" class="sd-cta__btn sd-cta__btn--ghost" data-v-80af6fb0>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "cta.candidate_cta",
        page: props.pageKey,
        default: "I’m a Clinician — Apply"
      }, null, _parent));
      _push(`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" data-v-80af6fb0><path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-80af6fb0></path></svg></a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Solutions/detail/SolutionDetailCTA.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SolutionDetailCTA = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-80af6fb0"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SolutionDetail",
  __ssrInlineRender: true,
  props: {
    solution: {},
    pageKey: {},
    path: {}
  },
  setup(__props) {
    const props = __props;
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$9, {
        page: props.pageKey,
        path: props.path,
        "default-title": props.solution.meta_title,
        "default-description": props.solution.meta_description,
        "default-og-image": props.solution.image
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(ssrRenderComponent(SolutionDetailHero, {
              solution: props.solution,
              "page-key": props.pageKey
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SolutionOverviewSection, {
              solution: props.solution,
              "page-key": props.pageKey
            }, null, _parent2, _scopeId));
            if ((_a = props.solution.roles) == null ? void 0 : _a.length) {
              _push2(ssrRenderComponent(SolutionRolesSection, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(SolutionSpotlightSection, {
              solution: props.solution,
              "page-key": props.pageKey
            }, null, _parent2, _scopeId));
            if ((_b = props.solution.focus) == null ? void 0 : _b.length) {
              _push2(ssrRenderComponent(SolutionFocusSection, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_c = props.solution.settings) == null ? void 0 : _c.length) {
              _push2(ssrRenderComponent(SolutionSettingsSection, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_d = props.solution.why) == null ? void 0 : _d.length) {
              _push2(ssrRenderComponent(SolutionWhySection, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(SolutionDetailCTA, {
              solution: props.solution,
              "page-key": props.pageKey
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SolutionDetailHero, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"]),
              createVNode(SolutionOverviewSection, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"]),
              ((_e = props.solution.roles) == null ? void 0 : _e.length) ? (openBlock(), createBlock(SolutionRolesSection, {
                key: 0,
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"])) : createCommentVNode("", true),
              createVNode(SolutionSpotlightSection, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"]),
              ((_f = props.solution.focus) == null ? void 0 : _f.length) ? (openBlock(), createBlock(SolutionFocusSection, {
                key: 1,
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"])) : createCommentVNode("", true),
              ((_g = props.solution.settings) == null ? void 0 : _g.length) ? (openBlock(), createBlock(SolutionSettingsSection, {
                key: 2,
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"])) : createCommentVNode("", true),
              ((_h = props.solution.why) == null ? void 0 : _h.length) ? (openBlock(), createBlock(SolutionWhySection, {
                key: 3,
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"])) : createCommentVNode("", true),
              createVNode(SolutionDetailCTA, {
                solution: props.solution,
                "page-key": props.pageKey
              }, null, 8, ["solution", "page-key"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Solutions/SolutionDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
