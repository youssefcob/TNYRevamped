import { defineComponent, mergeProps, useSSRContext, computed, reactive, ref, onMounted, onUnmounted, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { a as EditableText, E as EditableImage } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "vue3-toastify";
import { D as DevFillButton } from "./DevFillButton-C8XbAzkC.js";
import "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HireStaffHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "rs-hero" }, _attrs))} data-v-053705a3><div class="rs-hero__inner" data-v-053705a3>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "rs-hero__title",
        "content-key": "request_service.hero.title",
        page: "request_service",
        default: "Request Qualified Healthcare Staff"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "rs-hero__subtitle",
        "content-key": "request_service.hero.subtitle",
        page: "request_service",
        default: "Whether you need immediate coverage, specialized rehabilitation professionals, or long-term staffing support, our team is ready to help you find the right talent for your facility."
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/RequestService/HireStaffHeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HireStaffHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-053705a3"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HireStaffFormSection",
  __ssrInlineRender: true,
  props: {
    services: {},
    preselected: {}
  },
  setup(__props) {
    const props = __props;
    const facilityTypes = computed(() => [...(props.services ?? []).map((s) => s.title), "Other"]);
    const positionOptions = [
      "Physical Therapist (PT)",
      "Physical Therapist Assistant (PTA)",
      "Physical Therapist – Limited Permit Holder",
      "Occupational Therapist (OT)",
      "Certified Occupational Therapy Assistant (COTA)",
      "Speech-Language Pathologist (SLP)",
      "Speech-Language Pathology Assistant (SLPA)",
      "Licensed Acupuncturist",
      "Licensed Massage Therapist (LMT)",
      "School-Based Clinicians (PT, OT, SLP - IEP Compliant)",
      "Homecare Rehabilitation Therapists",
      "24-Hour Emergency & Rapid Response Staffing",
      "Patient Care Coordinator / Front Desk Specialist",
      "Rehab Aide / Therapy Assistant",
      "Clinical Support Staff"
    ];
    const urgencyOptions = ["Immediate Start", "Within 30 Days", "Flexible"];
    const form = reactive({
      company_name: "",
      contact_name: "",
      email: "",
      phone: "",
      discipline: props.preselected ?? "",
      requested_positions: [],
      open_roles: "",
      location: "",
      start_date: "",
      urgency: "",
      description: ""
    });
    const errors = reactive({});
    const loading = ref(false);
    const submitted = ref(false);
    const disciplineOpen = ref(false);
    const urgencyOpen = ref(false);
    const positionsOpen = ref(false);
    const disciplineSearch = ref("");
    const urgencySearch = ref("");
    const filteredDisciplines = computed(
      () => facilityTypes.value.filter((s) => s.toLowerCase().includes(disciplineSearch.value.toLowerCase()))
    );
    const filteredUrgency = computed(
      () => urgencyOptions.filter((u) => u.toLowerCase().includes(urgencySearch.value.toLowerCase()))
    );
    function closeDiscipline() {
      disciplineOpen.value = false;
      disciplineSearch.value = "";
    }
    function closeUrgency() {
      urgencyOpen.value = false;
      urgencySearch.value = "";
    }
    function closePositions() {
      positionsOpen.value = false;
    }
    function onDocClick(e) {
      const t = e.target;
      if (!t.closest(".rs-dropdown")) {
        closeDiscipline();
        closeUrgency();
        closePositions();
      }
    }
    onMounted(() => document.addEventListener("mousedown", onDocClick));
    onUnmounted(() => document.removeEventListener("mousedown", onDocClick));
    function fillTestData() {
      Object.keys(errors).forEach((k) => delete errors[k]);
      Object.assign(form, {
        company_name: "Acme Rehab Group",
        contact_name: "Jamie Rivera",
        email: "jamie.rivera@example.com",
        phone: "(212) 555-0100",
        discipline: facilityTypes.value[0] ?? "Hospitals",
        requested_positions: [positionOptions[0], positionOptions[3]],
        open_roles: "3",
        location: "Manhattan, NY",
        start_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10),
        urgency: urgencyOptions[0],
        description: "Looking for licensed therapists to cover an outpatient caseload starting next month."
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "rs-form-section" }, _attrs))} data-v-ceadf9f5><div class="rs-form-section__inner" data-v-ceadf9f5><div class="rs-card" data-v-ceadf9f5><div class="rs-card__header" data-v-ceadf9f5>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "rs-card__label",
        "content-key": "request_service.form.label",
        page: "request_service",
        default: "Request Staff"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "rs-card__title",
        "content-key": "request_service.form.title",
        page: "request_service",
        default: "Tell Us About Your Staffing Needs"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "rs-card__desc",
        "content-key": "request_service.form.desc",
        page: "request_service",
        default: "Complete the form below and our staffing specialists will review your requirements and connect you with qualified professionals tailored to your facility, setting, and timeline."
      }, null, _parent));
      _push(`</div>`);
      if (submitted.value) {
        _push(`<div class="rs-card__success" data-v-ceadf9f5><svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" data-v-ceadf9f5><circle cx="24" cy="24" r="24" fill="#22c55e" opacity="0.12" data-v-ceadf9f5></circle><path d="M14 24L21 31L34 17" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-ceadf9f5></path></svg>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          "content-key": "request_service.form.success_title",
          page: "request_service",
          default: "Request Submitted!"
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          "content-key": "request_service.form.success_body",
          page: "request_service",
          default: "Our staffing team will review your requirements and reach out within one business day."
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<form class="rs-form" novalidate data-v-ceadf9f5><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Company Name</label><input${ssrRenderAttr("value", form.company_name)} type="text" placeholder="Example Company" class="${ssrRenderClass([{ "rs-field__input--err": errors.company_name }, "rs-field__input"])}" data-v-ceadf9f5>`);
        if (errors.company_name) {
          _push(`<span class="rs-field__err" data-v-ceadf9f5>${ssrInterpolate(errors.company_name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Contact Name</label><input${ssrRenderAttr("value", form.contact_name)} type="text" placeholder="Full Name" class="${ssrRenderClass([{ "rs-field__input--err": errors.contact_name }, "rs-field__input"])}" data-v-ceadf9f5>`);
        if (errors.contact_name) {
          _push(`<span class="rs-field__err" data-v-ceadf9f5>${ssrInterpolate(errors.contact_name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="rs-form__row" data-v-ceadf9f5><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Email Address</label><input${ssrRenderAttr("value", form.email)} type="email" placeholder="you@facility.com" class="${ssrRenderClass([{ "rs-field__input--err": errors.email }, "rs-field__input"])}" data-v-ceadf9f5>`);
        if (errors.email) {
          _push(`<span class="rs-field__err" data-v-ceadf9f5>${ssrInterpolate(errors.email)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Phone Number</label><input${ssrRenderAttr("value", form.phone)} type="tel" placeholder="(212) 555-0100" class="${ssrRenderClass([{ "rs-field__input--err": errors.phone }, "rs-field__input"])}" data-v-ceadf9f5>`);
        if (errors.phone) {
          _push(`<span class="rs-field__err" data-v-ceadf9f5>${ssrInterpolate(errors.phone)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Facility Type</label><div class="${ssrRenderClass([{ "rs-dropdown--open": disciplineOpen.value, "rs-dropdown--err": errors.discipline }, "rs-dropdown"])}" data-v-ceadf9f5><div class="rs-dropdown__control" data-v-ceadf9f5><span class="${ssrRenderClass({ "rs-dropdown__placeholder": !form.discipline })}" data-v-ceadf9f5>${ssrInterpolate(form.discipline || "Select the type of your facility")}</span><svg class="${ssrRenderClass([{ "rs-dropdown__chevron--open": disciplineOpen.value }, "rs-dropdown__chevron"])}" width="20" height="20" viewBox="0 0 20 20" fill="none" data-v-ceadf9f5><path d="M5 7.5L10 12.5L15 7.5" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-ceadf9f5></path></svg></div>`);
        if (disciplineOpen.value) {
          _push(`<div class="rs-dropdown__menu" data-v-ceadf9f5><input${ssrRenderAttr("value", disciplineSearch.value)} type="text" placeholder="Search..." class="rs-dropdown__search" data-v-ceadf9f5><!--[-->`);
          ssrRenderList(filteredDisciplines.value, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "rs-dropdown__option--active": form.discipline === opt }, "rs-dropdown__option"])}" data-v-ceadf9f5>${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]-->`);
          if (filteredDisciplines.value.length === 0) {
            _push(`<p class="rs-dropdown__empty" data-v-ceadf9f5>No options found</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (errors.discipline) {
          _push(`<span class="rs-field__err" data-v-ceadf9f5>${ssrInterpolate(errors.discipline)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Requested Position</label><div class="${ssrRenderClass([{ "rs-dropdown--open": positionsOpen.value }, "rs-dropdown"])}" data-v-ceadf9f5><div class="rs-dropdown__control" data-v-ceadf9f5><span class="${ssrRenderClass({ "rs-dropdown__placeholder": !form.requested_positions.length })}" data-v-ceadf9f5>${ssrInterpolate(form.requested_positions.length ? form.requested_positions.join(", ") : "Select one or more positions")}</span><svg class="${ssrRenderClass([{ "rs-dropdown__chevron--open": positionsOpen.value }, "rs-dropdown__chevron"])}" width="20" height="20" viewBox="0 0 20 20" fill="none" data-v-ceadf9f5><path d="M5 7.5L10 12.5L15 7.5" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-ceadf9f5></path></svg></div>`);
        if (positionsOpen.value) {
          _push(`<div class="rs-dropdown__menu" data-v-ceadf9f5><!--[-->`);
          ssrRenderList(positionOptions, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "rs-dropdown__option--active": form.requested_positions.includes(opt) }, "rs-dropdown__option rs-dropdown__option--checkbox"])}" data-v-ceadf9f5><span class="${ssrRenderClass([{ "rs-dropdown__checkbox--checked": form.requested_positions.includes(opt) }, "rs-dropdown__checkbox"])}" data-v-ceadf9f5></span> ${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="rs-form__row" data-v-ceadf9f5><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Number of Open Roles</label><input${ssrRenderAttr("value", form.open_roles)} type="number" min="1" placeholder="e.g. 3" class="rs-field__input" data-v-ceadf9f5></div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Location(s)</label><input${ssrRenderAttr("value", form.location)} type="text" placeholder="Manhattan, Brooklyn…" class="${ssrRenderClass([{ "rs-field__input--err": errors.location }, "rs-field__input"])}" data-v-ceadf9f5>`);
        if (errors.location) {
          _push(`<span class="rs-field__err" data-v-ceadf9f5>${ssrInterpolate(errors.location)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Start Date</label><input${ssrRenderAttr("value", form.start_date)} type="date" class="rs-field__input" data-v-ceadf9f5></div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Hiring Urgency</label><div class="${ssrRenderClass([{ "rs-dropdown--open": urgencyOpen.value }, "rs-dropdown"])}" data-v-ceadf9f5><div class="rs-dropdown__control" data-v-ceadf9f5><span class="${ssrRenderClass({ "rs-dropdown__placeholder": !form.urgency })}" data-v-ceadf9f5>${ssrInterpolate(form.urgency || "Immediate Start / 30 days / Flexible")}</span><svg class="${ssrRenderClass([{ "rs-dropdown__chevron--open": urgencyOpen.value }, "rs-dropdown__chevron"])}" width="20" height="20" viewBox="0 0 20 20" fill="none" data-v-ceadf9f5><path d="M5 7.5L10 12.5L15 7.5" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-ceadf9f5></path></svg></div>`);
        if (urgencyOpen.value) {
          _push(`<div class="rs-dropdown__menu" data-v-ceadf9f5><!--[-->`);
          ssrRenderList(filteredUrgency.value, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "rs-dropdown__option--active": form.urgency === opt }, "rs-dropdown__option"])}" data-v-ceadf9f5>${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="rs-field" data-v-ceadf9f5><label class="rs-field__label" data-v-ceadf9f5>Brief Job Description</label><textarea rows="6" placeholder="Describe the role, setting, schedule, and any specific requirements…" class="${ssrRenderClass([{ "rs-field__input--err": errors.description }, "rs-field__input rs-field__input--textarea"])}" data-v-ceadf9f5>${ssrInterpolate(form.description)}</textarea>`);
        if (errors.description) {
          _push(`<span class="rs-field__err" data-v-ceadf9f5>${ssrInterpolate(errors.description)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="rs-form__actions" data-v-ceadf9f5><button type="submit" class="rs-form__submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-ceadf9f5>`);
        if (loading.value) {
          _push(`<span data-v-ceadf9f5>Submitting…</span>`);
        } else {
          _push(ssrRenderComponent(EditableText, {
            tag: "span",
            "content-key": "request_service.form.submit_label",
            page: "request_service",
            default: "Submit Staffing Request"
          }, null, _parent));
        }
        _push(`</button>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "rs-form__note",
          "content-key": "request_service.form.note",
          page: "request_service",
          default: "By submitting the application you agree to be contacted by TNY regarding staffing services"
        }, null, _parent));
        _push(ssrRenderComponent(DevFillButton, { onFill: fillTestData }, null, _parent));
        _push(`</div></form>`);
      }
      _push(`</div><div class="rs-sidebar" data-v-ceadf9f5>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "request_service.form.image",
        page: "request_service",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994263/Tell_Us_About_Yourself_588x889_goum4u.webp",
        "default-object-fit": "cover",
        "default-alt": "Tell us about yourself",
        class: "rs-sidebar__img"
      }, null, _parent));
      _push(`<div class="rs-info-card" data-v-ceadf9f5>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "rs-info-card__label",
        "content-key": "request_service.info.label",
        page: "request_service",
        default: "Contact Information"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "rs-info-card__title",
        "content-key": "request_service.info.title",
        page: "request_service",
        default: "Talk To Our Staffing Team"
      }, null, _parent));
      _push(`<ul class="rs-info-card__list" data-v-ceadf9f5><li data-v-ceadf9f5><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" data-v-ceadf9f5><path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.09 3.27a1 1 0 01-.23 1.02L7.7 9.36a11.045 11.045 0 005.63 5.63l1.385-1.385a1 1 0 011.02-.23l3.27 1.09A1 1 0 0119 15.72V18a2 2 0 01-2 2h-1C8.16 20 1 12.84 1 4V3a2 2 0 012-2h.28" stroke="#FF9B37" stroke-width="1.5" stroke-linecap="round" data-v-ceadf9f5></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "request_service.info.phone",
        page: "request_service",
        default: "(347) 441-4283"
      }, null, _parent));
      _push(`</li><li data-v-ceadf9f5><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" data-v-ceadf9f5><path d="M2 5l8 5 8-5M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" stroke="#FF9B37" stroke-width="1.5" stroke-linecap="round" data-v-ceadf9f5></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "request_service.info.email",
        page: "request_service",
        default: "recruitment@tnystaffing.com"
      }, null, _parent));
      _push(`</li><li data-v-ceadf9f5><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" data-v-ceadf9f5><path d="M10 11a3 3 0 100-6 3 3 0 000 6z" stroke="#FF9B37" stroke-width="1.5" data-v-ceadf9f5></path><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" stroke="#FF9B37" stroke-width="1.5" data-v-ceadf9f5></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "request_service.info.address",
        page: "request_service",
        default: "575 8th Ave, 10th Floor, New York, NY 10018"
      }, null, _parent));
      _push(`</li></ul></div><div class="rs-info-card" data-v-ceadf9f5>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "rs-info-card__label",
        "content-key": "request_service.hours.label",
        page: "request_service",
        default: "Working Hours"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "rs-info-card__title",
        "content-key": "request_service.hours.title",
        page: "request_service",
        default: "We're Available"
      }, null, _parent));
      _push(`<ul class="rs-info-card__hours" data-v-ceadf9f5><li data-v-ceadf9f5><span data-v-ceadf9f5>Mon - Fri</span>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "request_service.hours.weekday",
        page: "request_service",
        default: "9:00 AM - 5:00 PM"
      }, null, _parent));
      _push(`</li><li class="rs-info-card__hours-closed" data-v-ceadf9f5><span data-v-ceadf9f5>Sat &amp; Sun</span>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "request_service.hours.weekend",
        page: "request_service",
        default: "Closed"
      }, null, _parent));
      _push(`</li></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/RequestService/HireStaffFormSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HireStaffFormSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ceadf9f5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RequestService",
  __ssrInlineRender: true,
  props: {
    services: {},
    service: {}
  },
  setup(__props) {
    const props = __props;
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        page: "request_service",
        path: "/requestService",
        "default-title": "Request Qualified Healthcare Staff | TNY Staffing",
        "default-description": "Need immediate coverage or long-term rehab staff? Submit your staffing request to TNY Staffing and get matched with qualified PTs, OTs, and SLPs in NYC."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HireStaffHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HireStaffFormSection, {
              services: props.services,
              preselected: props.service ?? ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HireStaffHeroSection),
              createVNode(HireStaffFormSection, {
                services: props.services,
                preselected: props.service ?? ""
              }, null, 8, ["services", "preselected"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/RequestService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
