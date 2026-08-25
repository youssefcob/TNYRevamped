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
  __name: "ApplyHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "apply-hero" }, _attrs))} data-v-25c6ca50><div class="apply-hero__inner" data-v-25c6ca50>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "apply-hero__title",
        "content-key": "apply.hero.title",
        page: "apply",
        default: "Find Your Next Healthcare Opportunity"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "apply-hero__subtitle",
        "content-key": "apply.hero.subtitle",
        page: "apply",
        default: "Whether you're a Physical Therapist, Occupational Therapist, Speech-Language Pathologist, Rehab Aide, Massage Therapist, Acupuncturist, Medical Sales Representative, or Flyer Distributor, TNY Staffing Corporation can help connect you with rewarding opportunities across New York City."
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Apply/ApplyHeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ApplyHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-25c6ca50"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ApplyFormSection",
  __ssrInlineRender: true,
  props: {
    jobs: {},
    preselected: {}
  },
  setup(__props) {
    const props = __props;
    const professions = computed(() => {
      const titles = (props.jobs ?? []).map((j) => j.title);
      return [...new Set(titles)];
    });
    const licenseOptions = ["Licensed", "In Process", "Student / Intern"];
    const experienceOptions = ["0–1 years", "1–3 years", "3–5 years", "5+ years"];
    const settingOptions = ["Outpatient", "SNF / Subacute", "Home Health", "School-Based", "Hospital", "Other"];
    const employmentOptions = ["Full-Time", "Part-Time", "Per Diem", "Contract"];
    const form = reactive({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      profession: props.preselected ?? "",
      license_status: "",
      years_experience: "",
      preferred_setting: "",
      employment_type: "",
      start_date: "",
      message: "",
      resume: null
    });
    const openDropdown = ref(null);
    const resumeFileName = ref("");
    const isDragging = ref(false);
    const submitted = ref(false);
    const isLoading = ref(false);
    function onDocClick(e) {
      const t = e.target;
      if (!t.closest(".apply-dropdown")) {
        openDropdown.value = null;
      }
    }
    onMounted(() => document.addEventListener("mousedown", onDocClick));
    onUnmounted(() => document.removeEventListener("mousedown", onDocClick));
    function fillTestData() {
      Object.assign(form, {
        first_name: "Jamie",
        last_name: "Rivera",
        email: "jamie.rivera@example.com",
        phone: "(212) 555-0100",
        city: "New York",
        state: "NY",
        profession: professions.value[0] ?? "Physical Therapist",
        license_status: licenseOptions[0],
        years_experience: experienceOptions[1],
        preferred_setting: settingOptions[0],
        employment_type: employmentOptions[0],
        start_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10),
        message: "Available to start as soon as needed.",
        resume: new File(["%PDF-1.4\n%test resume content"], "test-resume.pdf", { type: "application/pdf" })
      });
      resumeFileName.value = form.resume.name;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "apply-form" }, _attrs))} data-v-e1060680><div class="apply-form__inner" data-v-e1060680><div class="apply-form__card" data-v-e1060680>`);
      if (!submitted.value) {
        _push(`<!--[--><div class="apply-form__card-header" data-v-e1060680>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "apply-form__label",
          "content-key": "apply.form.label",
          page: "apply",
          default: "APPLY TODAY"
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "h2",
          class: "apply-form__heading",
          "content-key": "apply.form.heading",
          page: "apply",
          default: "Tell Us About Yourself"
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "apply-form__desc",
          "content-key": "apply.form.desc",
          page: "apply",
          default: "Complete the form below and our recruitment team will review your experience, credentials, and career goals to match you with opportunities that fit your skills and preferences."
        }, null, _parent));
        _push(`</div><div class="apply-form__grid" data-v-e1060680><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>First Name</label><input${ssrRenderAttr("value", form.first_name)} class="apply-form__input" placeholder="John" data-v-e1060680></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Last Name</label><input${ssrRenderAttr("value", form.last_name)} class="apply-form__input" placeholder="Doe" data-v-e1060680></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Email Address</label><input${ssrRenderAttr("value", form.email)} type="email" class="apply-form__input" placeholder="john@example.com" data-v-e1060680></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Phone Number</label><input${ssrRenderAttr("value", form.phone)} class="apply-form__input" placeholder="(212) 555-0100" data-v-e1060680></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>City</label><input${ssrRenderAttr("value", form.city)} class="apply-form__input" placeholder="NewYork" data-v-e1060680></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>State</label><input${ssrRenderAttr("value", form.state)} class="apply-form__input" placeholder="NY" data-v-e1060680></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Profession</label><div class="${ssrRenderClass([{ "apply-dropdown--open": openDropdown.value === "profession" }, "apply-dropdown"])}" data-v-e1060680><button type="button" class="apply-dropdown__trigger" data-v-e1060680><span class="${ssrRenderClass({ "apply-dropdown__placeholder": !form.profession })}" data-v-e1060680>${ssrInterpolate(form.profession || "PT / PTA / OT.....")}</span><svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e1060680></path></svg></button>`);
        if (openDropdown.value === "profession") {
          _push(`<div class="apply-dropdown__menu" data-v-e1060680><!--[-->`);
          ssrRenderList(professions.value, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "apply-dropdown__item--active": form.profession === opt }, "apply-dropdown__item"])}" data-v-e1060680>${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>License Status</label><div class="${ssrRenderClass([{ "apply-dropdown--open": openDropdown.value === "license" }, "apply-dropdown"])}" data-v-e1060680><button type="button" class="apply-dropdown__trigger" data-v-e1060680><span class="${ssrRenderClass({ "apply-dropdown__placeholder": !form.license_status })}" data-v-e1060680>${ssrInterpolate(form.license_status || "Licensed / In Process")}</span><svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e1060680></path></svg></button>`);
        if (openDropdown.value === "license") {
          _push(`<div class="apply-dropdown__menu" data-v-e1060680><!--[-->`);
          ssrRenderList(licenseOptions, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "apply-dropdown__item--active": form.license_status === opt }, "apply-dropdown__item"])}" data-v-e1060680>${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Years of Experience</label><div class="${ssrRenderClass([{ "apply-dropdown--open": openDropdown.value === "experience" }, "apply-dropdown"])}" data-v-e1060680><button type="button" class="apply-dropdown__trigger" data-v-e1060680><span class="${ssrRenderClass({ "apply-dropdown__placeholder": !form.years_experience })}" data-v-e1060680>${ssrInterpolate(form.years_experience || "0–1 / 1–3 / 3–5 / 5+")}</span><svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e1060680></path></svg></button>`);
        if (openDropdown.value === "experience") {
          _push(`<div class="apply-dropdown__menu" data-v-e1060680><!--[-->`);
          ssrRenderList(experienceOptions, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "apply-dropdown__item--active": form.years_experience === opt }, "apply-dropdown__item"])}" data-v-e1060680>${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Preferred Setting</label><div class="${ssrRenderClass([{ "apply-dropdown--open": openDropdown.value === "setting" }, "apply-dropdown"])}" data-v-e1060680><button type="button" class="apply-dropdown__trigger" data-v-e1060680><span class="${ssrRenderClass({ "apply-dropdown__placeholder": !form.preferred_setting })}" data-v-e1060680>${ssrInterpolate(form.preferred_setting || "Outpatient / SNF...")}</span><svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e1060680></path></svg></button>`);
        if (openDropdown.value === "setting") {
          _push(`<div class="apply-dropdown__menu" data-v-e1060680><!--[-->`);
          ssrRenderList(settingOptions, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "apply-dropdown__item--active": form.preferred_setting === opt }, "apply-dropdown__item"])}" data-v-e1060680>${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Employment Type</label><div class="${ssrRenderClass([{ "apply-dropdown--open": openDropdown.value === "employment" }, "apply-dropdown"])}" data-v-e1060680><button type="button" class="apply-dropdown__trigger" data-v-e1060680><span class="${ssrRenderClass({ "apply-dropdown__placeholder": !form.employment_type })}" data-v-e1060680>${ssrInterpolate(form.employment_type || "Full-Time / Part-Time...")}</span><svg class="apply-dropdown__chevron" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e1060680></path></svg></button>`);
        if (openDropdown.value === "employment") {
          _push(`<div class="apply-dropdown__menu" data-v-e1060680><!--[-->`);
          ssrRenderList(employmentOptions, (opt) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "apply-dropdown__item--active": form.employment_type === opt }, "apply-dropdown__item"])}" data-v-e1060680>${ssrInterpolate(opt)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="apply-form__field" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Desired Start Date</label><input${ssrRenderAttr("value", form.start_date)} type="date" class="apply-form__input apply-form__input--date" data-v-e1060680></div></div><div class="apply-form__resume" data-v-e1060680><label class="apply-form__field-label" data-v-e1060680>Upload your Resume</label><label class="${ssrRenderClass([{ "apply-form__dropzone--active": isDragging.value, "apply-form__dropzone--filled": resumeFileName.value }, "apply-form__dropzone"])}" data-v-e1060680><input type="file" class="apply-form__file-input" accept=".pdf,.doc,.docx" data-v-e1060680>`);
        if (resumeFileName.value) {
          _push(`<span class="apply-form__file-name" data-v-e1060680><svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M9 12l2 2 4-4" stroke="#2F8F83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e1060680></path><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" stroke="#2F8F83" stroke-width="2" data-v-e1060680></path></svg> ${ssrInterpolate(resumeFileName.value)}</span>`);
        } else {
          _push(`<span class="apply-form__dropzone-hint" data-v-e1060680> Drag &amp; drop your resume here or <u data-v-e1060680>browse files</u></span>`);
        }
        _push(`</label></div><div class="apply-form__actions" data-v-e1060680><button class="${ssrRenderClass([{ "apply-form__submit--loading": isLoading.value }, "apply-form__submit"])}"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-e1060680>`);
        if (isLoading.value) {
          _push(`<span data-v-e1060680>Submitting...</span>`);
        } else {
          _push(ssrRenderComponent(EditableText, {
            tag: "span",
            "content-key": "apply.form.submit_label",
            page: "apply",
            default: "Submit Application"
          }, null, _parent));
        }
        _push(`</button>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "apply-form__disclaimer",
          "content-key": "apply.form.disclaimer",
          page: "apply",
          default: "By submitting the application you agree to be contacted by TNY regarding opportunities"
        }, null, _parent));
        _push(ssrRenderComponent(DevFillButton, { onFill: fillTestData }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<div class="apply-form__success" data-v-e1060680><svg class="apply-form__success-icon" viewBox="0 0 80 80" fill="none" data-v-e1060680><circle cx="40" cy="40" r="39" stroke="#2F8F83" stroke-width="2" data-v-e1060680></circle><path d="M24 40l12 12 20-24" stroke="#2F8F83" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-e1060680></path></svg>`);
        _push(ssrRenderComponent(EditableText, {
          tag: "h3",
          class: "apply-form__success-title",
          "content-key": "apply.form.success_title",
          page: "apply",
          default: "Application Received!"
        }, null, _parent));
        _push(ssrRenderComponent(EditableText, {
          tag: "p",
          class: "apply-form__success-text",
          "content-key": "apply.form.success_text",
          page: "apply",
          default: "Thank you for applying. Our recruitment team will review your profile and reach out within 1–2 business days."
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="apply-form__sidebar" data-v-e1060680>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "apply.form.image",
        page: "apply",
        "default-src": "https://res.cloudinary.com/dzilc11zf/image/upload/v1782994261/Tell_Us_About_Your_Staffing_Needs_588x889_dykgjl.webp",
        "default-object-fit": "cover",
        "default-alt": "Tell us about your staffing needs",
        class: "apply-form__sidebar-image"
      }, null, _parent));
      _push(`<div class="apply-form__info-card" data-v-e1060680>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "apply-form__info-label",
        "content-key": "apply.info.label",
        page: "apply",
        default: "Contact Information"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "apply-form__info-heading",
        "content-key": "apply.info.heading",
        page: "apply",
        default: "Talk To Our Recruitment Team"
      }, null, _parent));
      _push(`<div class="apply-form__contacts" data-v-e1060680><div class="apply-form__contact-row" data-v-e1060680><svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#222" data-v-e1060680></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "apply.info.phone",
        page: "apply",
        default: "(347) 441-4283"
      }, null, _parent));
      _push(`</div><div class="apply-form__contact-row" data-v-e1060680><svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#222" data-v-e1060680></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "apply.info.email",
        page: "apply",
        default: "staffing@therapyofnewyork.com"
      }, null, _parent));
      _push(`</div><div class="apply-form__contact-row" data-v-e1060680><svg width="20" height="20" viewBox="0 0 24 24" fill="none" data-v-e1060680><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#222" data-v-e1060680></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "apply.info.address",
        page: "apply",
        default: "575 8th Ave, 10th Floor, New York, NY 10018"
      }, null, _parent));
      _push(`</div></div></div><div class="apply-form__info-card" data-v-e1060680>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "apply-form__info-label",
        "content-key": "apply.hours.label",
        page: "apply",
        default: "RECRUITMENT HOURS"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h3",
        class: "apply-form__info-heading",
        "content-key": "apply.hours.heading",
        page: "apply",
        default: "We're Available"
      }, null, _parent));
      _push(`<div class="apply-form__hours" data-v-e1060680><div class="apply-form__hours-row" data-v-e1060680><span data-v-e1060680>Mon - Fri</span>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "apply.hours.weekday",
        page: "apply",
        default: "9:00 AM - 5:00 PM"
      }, null, _parent));
      _push(`</div><div class="apply-form__hours-row" data-v-e1060680><span data-v-e1060680>Sat &amp; Sun</span>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "apply.hours.weekend",
        page: "apply",
        default: "Closed"
      }, null, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Apply/ApplyFormSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ApplyFormSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1060680"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Apply",
  __ssrInlineRender: true,
  props: {
    jobs: {},
    position: {}
  },
  setup(__props) {
    const props = __props;
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        page: "apply",
        path: "/apply",
        "default-title": "Apply for Healthcare & Therapy Jobs in NYC | TNY Staffing",
        "default-description": "Ready for your next healthcare role? Apply online today with TNY Staffing. We hire PTs, OTs, SLPs, massage therapists, and acupuncturists in NYC."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplyHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ApplyFormSection, {
              jobs: props.jobs,
              preselected: props.position ?? ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplyHeroSection),
              createVNode(ApplyFormSection, {
                jobs: props.jobs,
                preselected: props.position ?? ""
              }, null, 8, ["jobs", "preselected"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/JobSeekers/Apply.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
