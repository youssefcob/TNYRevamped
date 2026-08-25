import { defineComponent, mergeProps, useSSRContext, ref, computed, watch, onMounted, onUnmounted, reactive, unref, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { a as EditableText } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "vue3-toastify";
import { vMaska } from "maska/vue";
import { D as DevFillButton } from "./DevFillButton-C8XbAzkC.js";
import "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ContactHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-hero" }, _attrs))} data-v-ea1ac812><div class="contact-hero__inner" data-v-ea1ac812>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "contact-hero__title",
        "content-key": "contact.hero.title",
        page: "contact",
        default: "Let's Start The Conversation."
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "contact-hero__subtitle",
        "content-key": "contact.hero.subtitle",
        page: "contact",
        default: "Whether you're looking to hire qualified rehabilitation professionals or explore new career opportunities, our team is here to help."
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contact/ContactHeroSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ContactHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ea1ac812"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropDownInputField",
  __ssrInlineRender: true,
  props: {
    label: {},
    placeholder: {},
    list: {},
    error: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    modelValue: {},
    default: {}
  },
  emits: ["input", "update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const containerRef = ref(null);
    const selected = ref(props.modelValue ?? props.default ?? "");
    const searchQuery = ref("");
    const isOpen = ref(false);
    const filteredList = computed(() => {
      const q = searchQuery.value.toLowerCase().trim();
      if (!q || !props.list) return props.list ?? [];
      return props.list.filter((item) => item.toLowerCase().includes(q));
    });
    const onClickOutside = (e) => {
      if (containerRef.value && !containerRef.value.contains(e.target)) {
        isOpen.value = false;
      }
    };
    watch(() => props.modelValue, (v) => {
      if (v !== void 0) selected.value = v;
    });
    onMounted(() => {
      document.addEventListener("mousedown", onClickOutside);
      if (props.default && !selected.value) {
        selected.value = props.default;
        emit("input", props.default);
        emit("update:modelValue", props.default);
      }
    });
    onUnmounted(() => {
      document.removeEventListener("mousedown", onClickOutside);
    });
    const clear = () => {
      selected.value = "";
      emit("input", "");
      emit("update:modelValue", "");
    };
    const defaultValue = (value) => {
      selected.value = value;
      emit("input", value);
      emit("update:modelValue", value);
    };
    __expose({ clear, defaultValue });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "v2-select"
      }, _attrs))} data-v-a8cf7947>`);
      if (_ctx.label) {
        _push(`<label class="v2-select__label" data-v-a8cf7947>${ssrInterpolate(_ctx.label)}`);
        if (_ctx.required) {
          _push(`<span class="v2-select__req" data-v-a8cf7947> *</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{
        "v2-select__control--open": isOpen.value,
        "v2-select__control--error": _ctx.error,
        "v2-select__control--disabled": _ctx.disabled
      }, "v2-select__control"])}" data-v-a8cf7947>`);
      if (isOpen.value) {
        _push(`<input${ssrRenderAttr("value", searchQuery.value)} class="v2-select__search"${ssrRenderAttr("placeholder", selected.value || _ctx.placeholder)} autofocus data-v-a8cf7947>`);
      } else {
        _push(`<span class="${ssrRenderClass([{ "v2-select__value--placeholder": !selected.value }, "v2-select__value"])}" data-v-a8cf7947>${ssrInterpolate(selected.value || _ctx.placeholder)}</span>`);
      }
      _push(`<div class="v2-select__icons" data-v-a8cf7947>`);
      if (selected.value && !_ctx.disabled) {
        _push(`<button type="button" class="v2-select__clear" tabindex="-1" data-v-a8cf7947><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-a8cf7947><line x1="18" y1="6" x2="6" y2="18" data-v-a8cf7947></line><line x1="6" y1="6" x2="18" y2="18" data-v-a8cf7947></line></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<svg class="${ssrRenderClass([{ "v2-select__chevron--open": isOpen.value }, "v2-select__chevron"])}" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-a8cf7947><polyline points="6 9 12 15 18 9" data-v-a8cf7947></polyline></svg></div></div>`);
      if (isOpen.value) {
        _push(`<div class="v2-select__dropdown" data-v-a8cf7947><!--[-->`);
        ssrRenderList(filteredList.value, (item) => {
          _push(`<div class="${ssrRenderClass([{ "v2-select__option--selected": item === selected.value }, "v2-select__option"])}" data-v-a8cf7947>`);
          if (item === selected.value) {
            _push(`<svg class="v2-select__option-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-a8cf7947><polyline points="20 6 9 17 4 12" data-v-a8cf7947></polyline></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(item)}</div>`);
        });
        _push(`<!--]-->`);
        if (filteredList.value.length === 0) {
          _push(`<div class="v2-select__empty" data-v-a8cf7947> No options found </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/DropDownInputField.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DropDownInputField = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a8cf7947"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactFormSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const isLoading = ref(false);
    const subjectRef = ref(null);
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    const errors = reactive({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      subject: false,
      message: false
    });
    const subjects = [
      "General Inquiry",
      "Request Staff",
      "Career Opportunities",
      "Partnership & Business",
      "Other"
    ];
    const fillTestData = () => {
      Object.assign(form, {
        firstName: "Jamie",
        lastName: "Rivera",
        email: "jamie.rivera@example.com",
        phone: "(212) 555-0100",
        subject: subjects[0],
        message: "Hi, I'd like to learn more about your staffing services."
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-main" }, _attrs))} data-v-701fe534><div class="contact-main__inner" data-v-701fe534><div class="contact-card" data-v-701fe534><div class="contact-card__header" data-v-701fe534>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "contact-card__label",
        "content-key": "contact.form.label",
        page: "contact",
        default: "Send A Message"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "contact-card__title",
        "content-key": "contact.form.title",
        page: "contact",
        default: "How Can We Help?"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "contact-card__subtitle",
        "content-key": "contact.form.subtitle",
        page: "contact",
        default: "Complete the form below and a member of our team will get back to you shortly."
      }, null, _parent));
      _push(`</div><div class="contact-card__grid" data-v-701fe534><div class="contact-card__field" data-v-701fe534><label class="contact-card__field-label" data-v-701fe534>First Name</label><input${ssrRenderAttr("value", form.firstName)} class="${ssrRenderClass([{ "contact-card__input--error": errors.firstName }, "contact-card__input"])}" type="text" placeholder="John" data-v-701fe534></div><div class="contact-card__field" data-v-701fe534><label class="contact-card__field-label" data-v-701fe534>Last Name</label><input${ssrRenderAttr("value", form.lastName)} class="${ssrRenderClass([{ "contact-card__input--error": errors.lastName }, "contact-card__input"])}" type="text" placeholder="Doe" data-v-701fe534></div><div class="contact-card__field" data-v-701fe534><label class="contact-card__field-label" data-v-701fe534>Email Address</label><input${ssrRenderAttr("value", form.email)} class="${ssrRenderClass([{ "contact-card__input--error": errors.email }, "contact-card__input"])}" type="email" placeholder="john@example.com" data-v-701fe534></div><div class="contact-card__field" data-v-701fe534><label class="contact-card__field-label" data-v-701fe534>Phone Number</label><input${ssrRenderAttrs((_temp0 = mergeProps({
        value: form.phone,
        class: ["contact-card__input", { "contact-card__input--error": errors.phone }],
        type: "tel",
        placeholder: "(212) 555-0100"
      }, ssrGetDirectiveProps(_ctx, unref(vMaska), "(###) ###-####")), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, form.phone))))} data-v-701fe534></div></div><div class="contact-card__field contact-card__field--full" data-v-701fe534><label class="contact-card__field-label" data-v-701fe534>Subject</label>`);
      _push(ssrRenderComponent(DropDownInputField, {
        ref_key: "subjectRef",
        ref: subjectRef,
        modelValue: form.subject,
        "onUpdate:modelValue": ($event) => form.subject = $event,
        placeholder: "Select a subject",
        list: subjects,
        error: errors.subject,
        class: "contact-card__dropdown"
      }, null, _parent));
      _push(`</div><div class="contact-card__field contact-card__field--full" data-v-701fe534><label class="contact-card__field-label" data-v-701fe534>Message</label><textarea class="${ssrRenderClass([{ "contact-card__input--error": errors.message }, "contact-card__input contact-card__input--area"])}" placeholder="Tell us how we can help you..." data-v-701fe534>${ssrInterpolate(form.message)}</textarea></div><button class="contact-card__submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} type="button" data-v-701fe534>${ssrInterpolate(isLoading.value ? "Sending..." : "Send Message")}</button>`);
      _push(ssrRenderComponent(DevFillButton, { onFill: fillTestData }, null, _parent));
      _push(`</div><div class="contact-sidebar" data-v-701fe534><div class="info-card" data-v-701fe534>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "info-card__label",
        "content-key": "contact.info.label",
        page: "contact",
        default: "Contact Information"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "info-card__title",
        "content-key": "contact.info.title",
        page: "contact",
        default: "Reach Out Anytime"
      }, null, _parent));
      _push(`<div class="info-card__rows" data-v-701fe534><div class="info-card__row" data-v-701fe534><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-701fe534><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.08 5.08l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" data-v-701fe534></path></svg><a href="tel:+13474414283" data-v-701fe534>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "contact.info.phone",
        page: "contact",
        default: "(347) 441-4283"
      }, null, _parent));
      _push(`</a></div><div class="info-card__row" data-v-701fe534><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-701fe534><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-701fe534></path><polyline points="22,6 12,13 2,6" data-v-701fe534></polyline></svg><a href="mailto:staffing@therapyofnewyork.com" data-v-701fe534>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "contact.info.email",
        page: "contact",
        default: "staffing@therapyofnewyork.com"
      }, null, _parent));
      _push(`</a></div><div class="info-card__row" data-v-701fe534><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-701fe534><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-701fe534></path><circle cx="12" cy="10" r="3" data-v-701fe534></circle></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "contact.info.address",
        page: "contact",
        default: "575 8th Ave, 10th Floor, New York, NY 10018"
      }, null, _parent));
      _push(`</div></div></div><div class="info-card" data-v-701fe534>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "info-card__label",
        "content-key": "contact.hours.label",
        page: "contact",
        default: "Opening Hours"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "info-card__title",
        "content-key": "contact.hours.title",
        page: "contact",
        default: "We're Available"
      }, null, _parent));
      _push(`<div class="info-card__hours" data-v-701fe534><div class="info-card__hour-row" data-v-701fe534><span data-v-701fe534>Mon - Fri</span>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "contact.hours.weekday",
        page: "contact",
        default: "9:00 AM - 5:00 PM"
      }, null, _parent));
      _push(`</div><div class="info-card__hour-row" data-v-701fe534><span data-v-701fe534>Sat &amp; Sun</span>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        class: "info-card__closed",
        "content-key": "contact.hours.weekend",
        page: "contact",
        default: "Closed"
      }, null, _parent));
      _push(`</div></div></div><div class="info-card info-card--dark" data-v-701fe534>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "info-card__label",
        "content-key": "contact.support.label",
        page: "contact",
        default: "Quick Support"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "info-card__title",
        "content-key": "contact.support.title",
        page: "contact",
        default: "Need Urgent Staffing Assistance?"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "info-card__body",
        "content-key": "contact.support.body",
        page: "contact",
        default: "Our team can help healthcare facilities with urgent therapist coverage requests."
      }, null, _parent));
      _push(`<a href="/requestService" class="info-card__cta" data-v-701fe534>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "contact.support.cta",
        page: "contact",
        default: "Request Staff"
      }, null, _parent));
      _push(`</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contact/ContactFormSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactFormSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-701fe534"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FaqSection",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        id: 0,
        q: "How quickly can TNY Staffing Corporation  place a professional at our facility?",
        a: "We can typically place qualified therapy professionals within 24–48 hours for urgent needs, and within 1–2 weeks for standard placements, depending on specialty and location requirements."
      },
      {
        id: 1,
        q: "What clinical specialties and disciplines does TNY cover?",
        a: "TNY covers Physical Therapy (PT), Occupational Therapy (OT), Speech-Language Pathology (SLP), and related rehabilitation disciplines, including CFY-level and fully licensed clinicians."
      },
      {
        id: 2,
        q: "How does TNY handle credentialing and compliance verification?",
        a: "All professionals undergo thorough background checks, license verification, and compliance screening before any placement. We maintain up-to-date records for every clinician in our network."
      },
      {
        id: 3,
        q: "What types of staffing arrangements do you offer employers?",
        a: "We offer per diem, short-term contract, long-term contract, and permanent placement options to accommodate your facility's scheduling needs and budget requirements."
      },
      {
        id: 4,
        q: "Does TNY operate outside of New York State?",
        a: "TNY primarily serves healthcare facilities throughout New York City and the surrounding tri-state area, with select placements available in neighboring states upon request."
      },
      {
        id: 5,
        q: "What happens if a placed professional is not the right fit for our facility?",
        a: "We stand behind every placement. If a professional isn't the right fit, we'll work quickly to find a replacement at no additional cost during the initial placement period."
      },
      {
        id: 6,
        q: "Can TNY support multi-site or enterprise-level staffing programs?",
        a: "Yes. We work with multi-site healthcare networks to provide coordinated staffing solutions across multiple locations, with a dedicated account manager for each enterprise partner."
      }
    ];
    const openIndex = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq" }, _attrs))} data-v-13583e75><div class="faq__inner" data-v-13583e75><div class="faq__heading" data-v-13583e75>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "faq__title",
        "content-key": "contact.faq.title",
        page: "contact",
        default: "Frequently Asked Questions"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "faq__subtitle",
        "content-key": "contact.faq.subtitle",
        page: "contact",
        default: "Everything employers need to know about partnering with TNY Staffing Corporation."
      }, null, _parent));
      _push(`<div class="faq__divider" data-v-13583e75></div></div><div class="faq__list" data-v-13583e75><!--[-->`);
      ssrRenderList(faqs, (item, i) => {
        _push(`<div class="${ssrRenderClass([{ "faq__item--open": openIndex.value === i }, "faq__item"])}" data-v-13583e75><button class="faq__question" type="button" data-v-13583e75>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "span",
          class: "faq__question-text",
          "content-key": `contact.faq.item.${item.id}.q`,
          page: "contact",
          default: item.q
        }, null, _parent));
        _push(`<span class="${ssrRenderClass([{ "faq__toggle--open": openIndex.value === i }, "faq__toggle"])}" data-v-13583e75><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-13583e75>`);
        if (openIndex.value !== i) {
          _push(`<line x1="12" y1="5" x2="12" y2="19" data-v-13583e75></line>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<line x1="5" y1="12" x2="19" y2="12" data-v-13583e75></line></svg></span></button>`);
        if (openIndex.value === i) {
          _push(`<div class="faq__answer" data-v-13583e75>`);
          _push(ssrRenderComponent(EditableText, {
            tag: "p",
            "content-key": `contact.faq.item.${item.id}.a`,
            page: "contact",
            default: item.a
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Contact/FaqSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FaqSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-13583e75"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$5, {
        page: "contact",
        path: "/contact",
        "default-title": "Contact TNY Staffing | NYC Therapy Staffing Agency",
        "default-description": "Contact TNY Staffing today. Call (347) 441-4283 to hire rehab professionals or find therapy jobs in NYC. Urgent staffing support available."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContactHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ContactFormSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FaqSection, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContactHeroSection),
              createVNode(ContactFormSection),
              createVNode(FaqSection)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
