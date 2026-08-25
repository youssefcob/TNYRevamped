import { ref, defineComponent, inject, watch, computed, createVNode, resolveDynamicComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, onMounted, onUnmounted, unref } from "vue";
import { ssrRenderVNode, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { toast } from "vue3-toastify";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const FEATURES = {
  textEditing: true,
  textStyles: true,
  imageEditing: true,
  metaTags: true
};
let heroState = ref([]);
const assignHero = (hero) => {
  heroState.value = hero;
};
let serviceState = ref([]);
const assignService = (service) => {
  serviceState.value = service;
};
let employerState = ref([]);
const assignEmployer = (employer) => {
  employerState.value = employer;
};
let jobState = ref([]);
const assignJob = (job) => {
  jobState.value = job;
};
let newsState = ref([]);
const assignNews = (news) => {
  newsState.value = news;
};
let clientState = ref([]);
const assignClient = (client) => {
  clientState.value = client;
};
const testimonialState = ref([]);
const assignTestimonial = (testimonial) => {
  testimonialState.value = testimonial;
};
const teamState = ref([]);
const assignTeam = (team) => {
  teamState.value = team;
};
const talentState = ref([]);
const assignTalent = (talent) => {
  talentState.value = talent;
};
const vacanciesState = ref([]);
const assignVacancies = (vacancies) => {
  vacanciesState.value = vacancies;
};
const jobSeekerProfileState = ref(null);
const assignJobSeekerProfile = (profile) => {
  jobSeekerProfileState.value = profile;
};
const editModeEnabled = ref(false);
const activeEditableField = ref(null);
const setActiveEditableField = (field) => {
  activeEditableField.value = field;
};
const missingFieldsMessage = (labels) => {
  return labels.length === 1 ? `Please fill in the ${labels[0]} field.` : `Please fill in the following fields: ${labels.join(", ")}.`;
};
const snack = {
  error: (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3e3,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true
    });
  },
  success: (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3e3,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true
    });
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "EditableText",
  __ssrInlineRender: true,
  props: {
    contentKey: { type: String, required: true },
    page: { type: String, required: true },
    tag: { type: String, default: "span" },
    default: { type: String, default: "" }
  },
  setup(__props) {
    var _a, _b, _c;
    const props = __props;
    const FONT_STACKS = {
      heading: "'Montserrat', sans-serif",
      body: "'Poppins', sans-serif",
      switzer: "'Switzer', sans-serif"
    };
    const pageContent = inject("pageContent", {});
    const text = ref(((_a = pageContent[props.contentKey]) == null ? void 0 : _a.value) ?? props.default);
    const styleId = ref(((_b = pageContent[props.contentKey]) == null ? void 0 : _b.textStyleId) ?? null);
    const tagOverride = ref(((_c = pageContent[props.contentKey]) == null ? void 0 : _c.tag) ?? null);
    watch(() => props.contentKey, () => {
      const entry = pageContent[props.contentKey];
      text.value = (entry == null ? void 0 : entry.value) ?? props.default;
      styleId.value = (entry == null ? void 0 : entry.textStyleId) ?? null;
      tagOverride.value = (entry == null ? void 0 : entry.tag) ?? null;
    });
    const inertiaPage = usePage();
    const isAdmin = computed(() => {
      var _a2;
      return !!((_a2 = inertiaPage.props.auth) == null ? void 0 : _a2.admin);
    });
    const canEdit = computed(() => isAdmin.value && editModeEnabled.value && FEATURES.textEditing);
    const textStyles = computed(() => inertiaPage.props.textStyles ?? []);
    const activeStyle = computed(() => textStyles.value.find((s) => s.id === styleId.value) ?? null);
    const resolvedStyle = computed(() => {
      if (!FEATURES.textStyles) return {};
      const s = activeStyle.value;
      if (!s) return {};
      return {
        fontFamily: s.font_family !== "inherit" ? FONT_STACKS[s.font_family] : void 0,
        fontWeight: s.font_weight,
        fontStyle: s.italic ? "italic" : void 0,
        textDecoration: s.underline ? "underline" : void 0,
        color: s.color || void 0,
        lineHeight: s.line_height || void 0,
        fontSize: `clamp(${s.min_font_size}rem, ${s.font_size_vw}vw, ${s.max_font_size}rem)`
      };
    });
    const effectiveTag = computed(() => tagOverride.value || props.tag);
    const saving = ref(false);
    async function saveField() {
      saving.value = true;
      try {
        await window.axios.post("/content/page-content", {
          key: props.contentKey,
          page: props.page,
          value: text.value,
          text_style_id: styleId.value,
          tag: tagOverride.value
        });
        snack.success("Saved.");
      } catch (e) {
        snack.error("Failed to save content.");
      } finally {
        saving.value = false;
      }
    }
    const fieldEl = ref(null);
    function onClick(event) {
      var _a2;
      if (!canEdit.value) return;
      event.preventDefault();
      const rect = (_a2 = fieldEl.value) == null ? void 0 : _a2.getBoundingClientRect();
      activeEditableField.value = {
        kind: "text",
        key: props.contentKey,
        page: props.page,
        styleId: styleId.value,
        tag: tagOverride.value,
        rect: rect ? { top: rect.top, left: rect.left } : { top: 0, left: 0 },
        setStyleId: (id) => {
          styleId.value = id;
          if (activeEditableField.value) activeEditableField.value.styleId = id;
          saveField();
        },
        setTag: (t) => {
          tagOverride.value = t;
          if (activeEditableField.value) activeEditableField.value.tag = t;
          saveField();
        }
      };
    }
    async function onBlur(event) {
      if (!canEdit.value) return;
      const newValue = event.target.innerText.trim();
      if (newValue === text.value) return;
      text.value = newValue;
      await saveField();
    }
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(effectiveTag.value), mergeProps({
        ref_key: "fieldEl",
        ref: fieldEl
      }, _ctx.$attrs, {
        contenteditable: canEdit.value,
        class: { "editable-text": canEdit.value },
        style: resolvedStyle.value,
        onBlur,
        onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(text.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(text.value), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/EditableText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EditableText = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-12e576ab"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "EditableImage",
  __ssrInlineRender: true,
  props: {
    contentKey: { type: String, required: true },
    page: { type: String, required: true },
    defaultSrc: { type: String, required: true },
    defaultObjectFit: { type: String, default: null },
    defaultObjectPosition: { type: String, default: null },
    defaultAlt: { type: String, default: "" }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const pageContent = inject("pageContent", {});
    const src = ref(((_a = pageContent[props.contentKey]) == null ? void 0 : _a.value) ?? props.defaultSrc);
    const objectFit = ref(((_b = pageContent[props.contentKey]) == null ? void 0 : _b.objectFit) ?? props.defaultObjectFit);
    const objectPosition = ref(((_c = pageContent[props.contentKey]) == null ? void 0 : _c.objectPosition) ?? props.defaultObjectPosition);
    const alt = ref(((_d = pageContent[props.contentKey]) == null ? void 0 : _d.alt) ?? props.defaultAlt);
    watch(() => props.contentKey, () => {
      const entry = pageContent[props.contentKey];
      src.value = (entry == null ? void 0 : entry.value) ?? props.defaultSrc;
      objectFit.value = (entry == null ? void 0 : entry.objectFit) ?? props.defaultObjectFit;
      objectPosition.value = (entry == null ? void 0 : entry.objectPosition) ?? props.defaultObjectPosition;
      alt.value = (entry == null ? void 0 : entry.alt) ?? props.defaultAlt;
    });
    const inertiaPage = usePage();
    const isAdmin = computed(() => {
      var _a2;
      return !!((_a2 = inertiaPage.props.auth) == null ? void 0 : _a2.admin);
    });
    const canEdit = computed(() => isAdmin.value && editModeEnabled.value && FEATURES.imageEditing);
    const computedStyle = computed(() => ({
      objectFit: objectFit.value || void 0,
      objectPosition: objectPosition.value || void 0
    }));
    ref(false);
    const fieldEl = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        ref_key: "fieldEl",
        ref: fieldEl
      }, _ctx.$attrs, {
        src: src.value,
        alt: alt.value ?? "",
        class: { "editable-image": canEdit.value },
        style: computedStyle.value
      }, _attrs))} data-v-c590d920>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/EditableImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EditableImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c590d920"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavBarV2",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const isAboutPage = computed(() => page.url.startsWith("/about"));
    const isScrolled = ref(false);
    const menuOpen = ref(false);
    const onScroll = () => {
      isScrolled.value = window.scrollY > window.innerHeight * 0.6;
    };
    onMounted(() => window.addEventListener("scroll", onScroll));
    onUnmounted(() => window.removeEventListener("scroll", onScroll));
    const scrolled = computed(() => isScrolled.value || isAboutPage.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["nav2", { "nav2--scrolled": scrolled.value }]
      }, _attrs))} data-v-39474fbb><div class="nav2__inner" data-v-39474fbb>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "nav2__logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EditableImage, {
              "content-key": "global.logo",
              page: "global",
              "default-src": "/images/tnylogo.png",
              "default-alt": "TNY Staffing Corporation"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EditableImage, {
                "content-key": "global.logo",
                page: "global",
                "default-src": "/images/tnylogo.png",
                "default-alt": "TNY Staffing Corporation"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="nav2__links" data-v-39474fbb><a href="/solutions" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_services",
        page: "global",
        default: "Services"
      }, null, _parent));
      _push(`</a><a href="/employers" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_employers",
        page: "global",
        default: "For Employers"
      }, null, _parent));
      _push(`</a><a href="/candidates" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_candidates",
        page: "global",
        default: "For Candidates"
      }, null, _parent));
      _push(`</a><a href="/resources" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_resources",
        page: "global",
        default: "Resources"
      }, null, _parent));
      _push(`</a><a href="/about" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_about",
        page: "global",
        default: "About"
      }, null, _parent));
      _push(`</a><a href="/contact" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_contact",
        page: "global",
        default: "Contact"
      }, null, _parent));
      _push(`</a></div><div class="nav2__ctas" data-v-39474fbb>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/apply",
        class: "nav2__btn nav2__btn--outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EditableText, {
              tag: "span",
              "content-key": "global.navbar.cta_jobs",
              page: "global",
              default: "Find Jobs"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EditableText, {
                tag: "span",
                "content-key": "global.navbar.cta_jobs",
                page: "global",
                default: "Find Jobs"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/requestService",
        class: "nav2__btn nav2__btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EditableText, {
              tag: "span",
              "content-key": "global.navbar.cta_hire",
              page: "global",
              default: "Hire Staff"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EditableText, {
                tag: "span",
                "content-key": "global.navbar.cta_hire",
                page: "global",
                default: "Hire Staff"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="nav2__hamburger" aria-label="Toggle menu" data-v-39474fbb><span data-v-39474fbb></span><span data-v-39474fbb></span><span data-v-39474fbb></span></button></div><div class="${ssrRenderClass([{ "nav2__mobile--open": menuOpen.value }, "nav2__mobile"])}" data-v-39474fbb><a href="/solutions" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_services",
        page: "global",
        default: "Services"
      }, null, _parent));
      _push(`</a><a href="/employers" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_employers",
        page: "global",
        default: "For Employers"
      }, null, _parent));
      _push(`</a><a href="/candidates" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_candidates",
        page: "global",
        default: "For Candidates"
      }, null, _parent));
      _push(`</a><a href="/resources" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_resources",
        page: "global",
        default: "Resources"
      }, null, _parent));
      _push(`</a><a href="/about" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_about",
        page: "global",
        default: "About"
      }, null, _parent));
      _push(`</a><a href="/contact" data-v-39474fbb>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_contact",
        page: "global",
        default: "Contact"
      }, null, _parent));
      _push(`</a><div class="nav2__mobile-ctas" data-v-39474fbb>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/apply",
        class: "nav2__btn nav2__btn--outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EditableText, {
              tag: "span",
              "content-key": "global.navbar.cta_jobs",
              page: "global",
              default: "Find Jobs"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EditableText, {
                tag: "span",
                "content-key": "global.navbar.cta_jobs",
                page: "global",
                default: "Find Jobs"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/requestService",
        class: "nav2__btn nav2__btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EditableText, {
              tag: "span",
              "content-key": "global.navbar.cta_hire",
              page: "global",
              default: "Hire Staff"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EditableText, {
                tag: "span",
                "content-key": "global.navbar.cta_hire",
                page: "global",
                default: "Hire Staff"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/NavBarV2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39474fbb"]]);
export {
  EditableImage as E,
  FEATURES as F,
  Navbar as N,
  EditableText as a,
  assignHero as b,
  assignService as c,
  assignEmployer as d,
  assignJob as e,
  assignNews as f,
  assignClient as g,
  assignTestimonial as h,
  assignTeam as i,
  jobState as j,
  assignTalent as k,
  assignVacancies as l,
  assignJobSeekerProfile as m,
  clientState as n,
  missingFieldsMessage as o,
  heroState as p,
  newsState as q,
  teamState as r,
  snack as s,
  talentState as t,
  testimonialState as u,
  vacanciesState as v,
  serviceState as w,
  editModeEnabled as x,
  activeEditableField as y,
  setActiveEditableField as z
};
