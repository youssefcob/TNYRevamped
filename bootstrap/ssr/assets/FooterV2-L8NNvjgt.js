import { ref, defineComponent, inject, watch, computed, createVNode, resolveDynamicComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, onMounted, onUnmounted, unref } from "vue";
import { ssrRenderVNode, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { toast } from "vue3-toastify";
const FEATURES = {
  textEditing: true,
  textStyles: true,
  imageEditing: true,
  metaTags: true,
  sitemap: true,
  redirects: true
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
    var _a, _b, _c, _d, _e;
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
    const href = ref(((_d = pageContent[props.contentKey]) == null ? void 0 : _d.href) ?? null);
    const target = ref(((_e = pageContent[props.contentKey]) == null ? void 0 : _e.target) ?? null);
    watch(() => props.contentKey, () => {
      const entry = pageContent[props.contentKey];
      text.value = (entry == null ? void 0 : entry.value) ?? props.default;
      styleId.value = (entry == null ? void 0 : entry.textStyleId) ?? null;
      tagOverride.value = (entry == null ? void 0 : entry.tag) ?? null;
      href.value = (entry == null ? void 0 : entry.href) ?? null;
      target.value = (entry == null ? void 0 : entry.target) ?? null;
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
    const isLink = computed(() => effectiveTag.value === "a");
    const saving = ref(false);
    async function saveField() {
      saving.value = true;
      try {
        await window.axios.post("/content/page-content", {
          key: props.contentKey,
          page: props.page,
          value: text.value,
          text_style_id: styleId.value,
          tag: tagOverride.value,
          href: href.value,
          target: target.value
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
        href: href.value,
        target: target.value,
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
        },
        setHref: (value) => {
          href.value = value;
          if (activeEditableField.value) activeEditableField.value.href = value;
          saveField();
        },
        setTarget: (value) => {
          target.value = value;
          if (activeEditableField.value) activeEditableField.value.target = value;
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
        href: isLink.value ? href.value || void 0 : void 0,
        target: isLink.value ? target.value || void 0 : void 0,
        rel: isLink.value && target.value === "_blank" ? "noopener noreferrer" : void 0,
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/EditableText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const EditableText = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bd6d8fb5"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/EditableImage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EditableImage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c590d920"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavBarV2",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const isAboutPage = computed(() => page.url.startsWith("/about"));
    const isArticlePage = computed(() => page.url.startsWith("/articles/"));
    const isScrolled = ref(false);
    const menuOpen = ref(false);
    const onScroll = () => {
      isScrolled.value = window.scrollY > window.innerHeight * 0.6;
    };
    onMounted(() => window.addEventListener("scroll", onScroll));
    onUnmounted(() => window.removeEventListener("scroll", onScroll));
    const scrolled = computed(() => isScrolled.value || isAboutPage.value || isArticlePage.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["nav2", { "nav2--scrolled": scrolled.value }]
      }, _attrs))} data-v-586a27f1><div class="nav2__inner" data-v-586a27f1>`);
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
      _push(`<div class="nav2__links" data-v-586a27f1><a href="/solutions" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_services",
        page: "global",
        default: "Services"
      }, null, _parent));
      _push(`</a><a href="/employers" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_employers",
        page: "global",
        default: "For Employers"
      }, null, _parent));
      _push(`</a><a href="/candidates" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_candidates",
        page: "global",
        default: "For Candidates"
      }, null, _parent));
      _push(`</a><a href="/articles" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_articles",
        page: "global",
        default: "Articles"
      }, null, _parent));
      _push(`</a><a href="/about" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_about",
        page: "global",
        default: "About"
      }, null, _parent));
      _push(`</a><a href="/contact" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_contact",
        page: "global",
        default: "Contact"
      }, null, _parent));
      _push(`</a></div><div class="nav2__ctas" data-v-586a27f1>`);
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
      _push(`</div><button class="nav2__hamburger" aria-label="Toggle menu" data-v-586a27f1><span data-v-586a27f1></span><span data-v-586a27f1></span><span data-v-586a27f1></span></button></div><div class="${ssrRenderClass([{ "nav2__mobile--open": menuOpen.value }, "nav2__mobile"])}" data-v-586a27f1><a href="/solutions" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_services",
        page: "global",
        default: "Services"
      }, null, _parent));
      _push(`</a><a href="/employers" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_employers",
        page: "global",
        default: "For Employers"
      }, null, _parent));
      _push(`</a><a href="/candidates" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_candidates",
        page: "global",
        default: "For Candidates"
      }, null, _parent));
      _push(`</a><a href="/articles" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_articles",
        page: "global",
        default: "Articles"
      }, null, _parent));
      _push(`</a><a href="/about" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_about",
        page: "global",
        default: "About"
      }, null, _parent));
      _push(`</a><a href="/contact" data-v-586a27f1>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.navbar.link_contact",
        page: "global",
        default: "Contact"
      }, null, _parent));
      _push(`</a><div class="nav2__mobile-ctas" data-v-586a27f1>`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/NavBarV2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-586a27f1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FooterV2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer2",
        id: "contact"
      }, _attrs))} data-v-980b33d9><div class="footer2__main" data-v-980b33d9><div class="footer2__col footer2__col--brand" data-v-980b33d9><div class="footer2__brand" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "global.footer_logo",
        page: "global",
        "default-src": "/images/tnylogofooter.png",
        "default-alt": "TNY Staffing Corporation",
        class: "footer2__logo"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__desc",
        "content-key": "global.footer.desc",
        page: "global",
        default: "Connecting therapy professionals with healthcare facilities across New York. Premium staffing solutions built for modern care."
      }, null, _parent));
      _push(`<div class="footer2__socials" data-v-980b33d9><a href="https://www.linkedin.com/company/therapy-of-new-york" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="LinkedIn" data-v-980b33d9><svg width="14" height="14" viewBox="0 0 24 24" fill="white" data-v-980b33d9><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" data-v-980b33d9></path><circle cx="4" cy="4" r="2" data-v-980b33d9></circle></svg></a><a href="https://www.facebook.com/Therapyofnewyorkstaffingcompany/" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="Facebook" data-v-980b33d9><svg width="14" height="14" viewBox="0 0 24 24" fill="white" data-v-980b33d9><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" data-v-980b33d9></path></svg></a><a href="https://www.instagram.com/therapyofnewyork/" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="Instagram" data-v-980b33d9><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-980b33d9><rect x="2" y="2" width="20" height="20" rx="5" data-v-980b33d9></rect><circle cx="12" cy="12" r="4" data-v-980b33d9></circle><circle cx="17.5" cy="6.5" r=".5" fill="white" stroke="none" data-v-980b33d9></circle></svg></a></div></div><div class="footer2__col" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__col-heading",
        "content-key": "global.footer.solutions.heading",
        page: "global",
        default: "Solutions"
      }, null, _parent));
      _push(`<ul class="footer2__links" data-v-980b33d9><li data-v-980b33d9><a href="/solutions/physical-therapy" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.0",
        page: "global",
        default: "Physical Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/occupational-therapy" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.1",
        page: "global",
        default: "Occupational Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/speech-language-pathology" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.2",
        page: "global",
        default: "Speech Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/school-based-staffing" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.3",
        page: "global",
        default: "School-Based Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/emergency-rapid-staffing" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.4",
        page: "global",
        default: "Emergency Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/acupuncture" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.5",
        page: "global",
        default: "Acupuncturist"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/massage-therapy" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.6",
        page: "global",
        default: "Massage Therapist"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/patient-care-coordination" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.7",
        page: "global",
        default: 'Patient Care Coordinator "Front Desk"'
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/pelvic-floor-therapy" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.8",
        page: "global",
        default: "Pelvic Floor Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/lymphedema-therapy" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.9",
        page: "global",
        default: "Lymphedema Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/neurological-rehabilitation" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.10",
        page: "global",
        default: "Neurological Rehabilitation Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/pediatric-therapy" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.11",
        page: "global",
        default: "Pediatric Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/solutions/vestibular-rehabilitation" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.12",
        page: "global",
        default: "Vestibular Rehabilitation Staffing"
      }, null, _parent));
      _push(`</a></li></ul></div><div class="footer2__col" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__col-heading",
        "content-key": "global.footer.company.heading",
        page: "global",
        default: "Company"
      }, null, _parent));
      _push(`<ul class="footer2__links" data-v-980b33d9><li data-v-980b33d9><a href="/about" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.company.link.0",
        page: "global",
        default: "About Us"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/articles" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.company.link.1",
        page: "global",
        default: "Articles"
      }, null, _parent));
      _push(`</a></li><li data-v-980b33d9><a href="/contact" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.company.link.2",
        page: "global",
        default: "Contact"
      }, null, _parent));
      _push(`</a></li></ul></div><div class="footer2__col" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__col-heading",
        "content-key": "global.footer.stay_informed.heading",
        page: "global",
        default: "Stay Informed"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__stay-desc",
        "content-key": "global.footer.stay_informed.desc",
        page: "global",
        default: "Staffing insights and healthcare workforce updates, direct to your inbox."
      }, null, _parent));
      _push(`<div class="footer2__newsletter" data-v-980b33d9><input type="email" placeholder="Your email address" class="footer2__email-input" data-v-980b33d9><button class="footer2__email-btn" aria-label="Subscribe" data-v-980b33d9>→</button></div><div class="footer2__contact-info" data-v-980b33d9><div class="footer2__contact-item" data-v-980b33d9><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-980b33d9><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-v-980b33d9></path></svg><a href="tel:+13474414283" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.phone",
        page: "global",
        default: "(347) 441-4283"
      }, null, _parent));
      _push(`</a></div><div class="footer2__contact-item" data-v-980b33d9><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-980b33d9><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-980b33d9></path><polyline points="22,6 12,13 2,6" data-v-980b33d9></polyline></svg><a href="mailto:staffing@therapyofnewyork.com" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.email",
        page: "global",
        default: "staffing@therapyofnewyork.com"
      }, null, _parent));
      _push(`</a></div><div class="footer2__contact-item" data-v-980b33d9><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-980b33d9><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-980b33d9></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.address",
        page: "global",
        default: "575 8th Ave, 10th Floor, New York, NY 10018"
      }, null, _parent));
      _push(`</div></div></div></div><div class="footer2__bottom" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__copyright",
        "content-key": "global.footer.copyright",
        page: "global",
        default: "© 2026 TNY Staffing Corporation. All rights reserved."
      }, null, _parent));
      _push(`<div class="footer2__legal" data-v-980b33d9><a href="#" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.legal.privacy",
        page: "global",
        default: "Privacy Policy"
      }, null, _parent));
      _push(`</a><a href="#" data-v-980b33d9>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.legal.terms",
        page: "global",
        default: "Terms of Service"
      }, null, _parent));
      _push(`</a></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/FooterV2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterV2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-980b33d9"]]);
export {
  setActiveEditableField as A,
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
  FooterV2 as x,
  editModeEnabled as y,
  activeEditableField as z
};
