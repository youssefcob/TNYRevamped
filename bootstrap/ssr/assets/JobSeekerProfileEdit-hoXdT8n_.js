import { defineComponent, ref, mergeProps, useSSRContext, withCtx, createVNode, withModifiers, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { F as FileInputField } from "./FileInputField-DiFnzUgw.js";
import { D as DropDownInputField } from "./DropDownInputField-D_O-50WP.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { W as WorkDays } from "./workDays-B8SnEcUu.js";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { router } from "@inertiajs/vue3";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "maska/vue";
import "vue3-toastify";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "checkBox",
  __ssrInlineRender: true,
  props: {
    label: String,
    value: Boolean,
    trueText: String,
    falseText: String
  },
  emits: ["update:value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const currentValue = ref(props.value ? true : false);
    console.log(currentValue.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox-container" }, _attrs))} data-v-df1a52db><label class="label" data-v-df1a52db>${ssrInterpolate(__props.label)}</label><div class="checkbox-wrapper input-field" data-v-df1a52db><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(currentValue.value) ? ssrLooseContain(currentValue.value, null) : currentValue.value) ? " checked" : ""} class="checkbox-input" id="custom-checkbox" data-v-df1a52db><span class="custom-checkbox" data-v-df1a52db>`);
      if (currentValue.value) {
        _push(`<svg width="20" height="20" viewBox="0 0 20 20" data-v-df1a52db><polyline points="4,11 9,16 16,6" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-df1a52db></polyline></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span><label class="asterisk" data-v-df1a52db>${ssrInterpolate(currentValue.value ? __props.trueText || "yes" : __props.falseText || "no")}</label></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/checkBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CheckBox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-df1a52db"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JobSeekerProfileEdit",
  __ssrInlineRender: true,
  props: {
    job_seeker: {
      type: Object
    },
    user: {
      type: Object,
      required: true
    },
    positions: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    errors: {
      type: Object
    }
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const props = __props;
    const form = ref({
      name: props.user.name,
      phone_number: (_a = props.job_seeker) == null ? void 0 : _a.phone_number,
      dob: (_b = props.job_seeker) == null ? void 0 : _b.dob,
      facility_type: (_c = props.job_seeker) == null ? void 0 : _c.facility_type,
      position: (_d = props.job_seeker) == null ? void 0 : _d.position.title,
      rate_per_hour: (_e = props.job_seeker) == null ? void 0 : _e.rate_per_hour,
      availability_to_start: (_f = props.job_seeker) == null ? void 0 : _f.availability_to_start,
      payment_type: (_g = props.job_seeker) == null ? void 0 : _g.payment_type,
      language: (_h = props.job_seeker) == null ? void 0 : _h.language,
      is_licensed: ((_i = props.job_seeker) == null ? void 0 : _i.is_licensed) || false,
      is_employed: ((_j = props.job_seeker) == null ? void 0 : _j.is_employed) || false,
      legal_status: (_k = props.job_seeker) == null ? void 0 : _k.legal_status,
      work_days: ((_l = props.job_seeker) == null ? void 0 : _l.work_days) || [],
      shift_type: (_m = props.job_seeker) == null ? void 0 : _m.shift_type,
      experience: (_n = props.job_seeker) == null ? void 0 : _n.experience,
      gender: (_o = props.job_seeker) == null ? void 0 : _o.gender,
      preferred_location: (_p = props.job_seeker) == null ? void 0 : _p.preferred_location
    });
    const resume = new FormData();
    const assignResume = (event) => {
      event.forEach((value, key) => {
        resume.append("resume", value);
      });
    };
    const positionId = () => {
      const position = props.positions.find((p) => p.title === form.value.position);
      return position ? position.id : null;
    };
    const languageId = () => {
      const language = props.languages.find((l) => l.name === form.value.language);
      console.log(language);
      return language ? language.id : null;
    };
    const appendToFormData = (formData, key, value) => {
      if (value === null || value === void 0) {
        formData.append(key, "");
      } else if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value.toString());
      }
    };
    const modifyForm = () => {
      var _a2;
      let l = [];
      l.push(languageId());
      const formFields = {
        name: form.value.name,
        phone_number: form.value.phone_number || "",
        dob: form.value.dob || "",
        facility_type: form.value.facility_type || "",
        position_id: positionId(),
        experience: form.value.experience || 0,
        rate_per_hour: form.value.rate_per_hour || 0,
        availability_to_start: form.value.availability_to_start || 0,
        payment_type: form.value.payment_type || "",
        is_licensed: form.value.is_licensed || false,
        is_employed: form.value.is_employed || false,
        legal_status: form.value.legal_status || "",
        // work_days: form.value.work_days || [],
        shift_type: form.value.shift_type || "",
        gender: ((_a2 = form.value.gender) == null ? void 0 : _a2.toLowerCase()) || "",
        preferred_location: form.value.preferred_location || ""
      };
      Object.entries(formFields).forEach(([key, value]) => {
        appendToFormData(resume, key, value);
      });
      l.forEach((languageId2) => {
        resume.append("languages[]", languageId2);
      });
      form.value.work_days.forEach((day) => {
        resume.append("work_days[]", day);
      });
      return resume;
    };
    const loading = ref(false);
    const handleSubmit = async () => {
      const formData = modifyForm();
      console.log(formData);
      const token = localStorage.getItem("token");
      router.post("/job-seeker/profile/update", formData, {
        headers: {
          // 'Accept': 'application/json',
          // Add other headers as needed, e.g. Authorization
          "Authorization": `Bearer ${token}`
        },
        onStart: () => {
          loading.value = true;
        },
        onFinish: () => {
          loading.value = false;
          if (props.errors && Object.keys(props.errors).length > 0) {
            if (props.errors) {
              const firstError = Object.values(props.errors)[0];
              if (Array.isArray(firstError)) {
                snack.error(firstError[0]);
              } else if (typeof firstError === "string") {
                snack.error(firstError);
              }
            }
          }
        },
        preserveState: true,
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
          if (_push2) {
            _push2(`<main data-v-db7d3d62${_scopeId}><div class="container" style="${ssrRenderStyle(`background-image: url('/images/profile.jpg');`)}" data-v-db7d3d62${_scopeId}><div class="form-container" data-v-db7d3d62${_scopeId}><div class="form-wrapper" data-v-db7d3d62${_scopeId}><h3 data-v-db7d3d62${_scopeId}>Edit Profile </h3><br data-v-db7d3d62${_scopeId}><form action="" class="form" data-v-db7d3d62${_scopeId}><div class="flex-container" data-v-db7d3d62${_scopeId}><div class="left-flex" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(InputField, {
              label: "Your Name",
              placeHolder: "Enter your name",
              type: "text",
              value: __props.user.name,
              modelValue: form.value.name,
              "onUpdate:modelValue": ($event) => form.value.name = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="split" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(InputField, {
              label: "Salary/Hour",
              placeHolder: "Enter salary per hour",
              type: "number",
              value: (_b2 = (_a2 = __props.job_seeker) == null ? void 0 : _a2.rate_per_hour) == null ? void 0 : _b2.toString(),
              modelValue: form.value.rate_per_hour,
              "onUpdate:modelValue": ($event) => form.value.rate_per_hour = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              label: "Availability to start",
              placeHolder: "days",
              type: "number",
              value: (_d2 = (_c2 = __props.job_seeker) == null ? void 0 : _c2.availability_to_start) == null ? void 0 : _d2.toString(),
              modelValue: form.value.availability_to_start,
              "onUpdate:modelValue": ($event) => form.value.availability_to_start = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Payment Type",
              placeHolder: "Select payment type",
              type: "text",
              list: ["W2", "1099 with Corp"],
              value: (_e2 = __props.job_seeker) == null ? void 0 : _e2.payment_type,
              modelValue: form.value.payment_type,
              "onUpdate:modelValue": ($event) => form.value.payment_type = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Language",
              placeHolder: "Select language",
              type: "text",
              list: __props.languages.map((l) => l.name),
              value: (_g2 = (_f2 = __props.job_seeker) == null ? void 0 : _f2.languages[0]) == null ? void 0 : _g2.name,
              modelValue: form.value.language,
              "onUpdate:modelValue": ($event) => form.value.language = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(CheckBox, {
              label: "License Required",
              value: (_h2 = __props.job_seeker) == null ? void 0 : _h2.is_licensed,
              trueText: "Licensed",
              falseText: "Not Licensed",
              modelValue: form.value.is_licensed,
              "onUpdate:modelValue": ($event) => form.value.is_licensed = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CheckBox, {
              label: "Employment Status",
              value: (_i2 = __props.job_seeker) == null ? void 0 : _i2.is_employed,
              trueText: "Employed",
              falseText: "Not Employed",
              modelValue: form.value.is_employed,
              "onUpdate:modelValue": ($event) => form.value.is_employed = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(WorkDays, {
              label: "Work Days",
              modelValue: form.value.work_days,
              "onUpdate:modelValue": ($event) => form.value.work_days = $event,
              value: (_j2 = __props.job_seeker) == null ? void 0 : _j2.work_days
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Legal Status",
              placeHolder: "Select legal status",
              type: "text",
              list: ["US Citizen", "Green Card Holder", "H-1B", "F1 CPT", "F1 OPT", "F1 no EAD", "B1B2"],
              value: (_k2 = __props.job_seeker) == null ? void 0 : _k2.legal_status,
              modelValue: form.value.legal_status,
              "onUpdate:modelValue": ($event) => form.value.legal_status = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="right-flex" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(InputField, {
              label: "Mobile Number",
              placeHolder: "Enter your mobile number",
              type: "tel",
              value: (_l2 = __props.job_seeker) == null ? void 0 : _l2.phone_number,
              modelValue: form.value.phone_number,
              "onUpdate:modelValue": ($event) => form.value.phone_number = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              label: "Date of Birth",
              placeHolder: "00/00/0000",
              type: "date",
              mask: "##/##/####",
              value: (_m2 = __props.job_seeker) == null ? void 0 : _m2.dob,
              modelValue: form.value.dob,
              "onUpdate:modelValue": ($event) => form.value.dob = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="split" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Facility Type",
              placeHolder: "Enter Facility type",
              type: "text",
              list: ["Outpatient", "Inpatient", "SNF", "Home Therapy"],
              value: (_n2 = __props.job_seeker) == null ? void 0 : _n2.facility_type,
              modelValue: form.value.facility_type,
              "onUpdate:modelValue": ($event) => form.value.facility_type = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Position",
              placeHolder: "Enter position",
              type: "text",
              list: __props.positions.map((p) => p.title),
              value: (_o2 = __props.job_seeker) == null ? void 0 : _o2.position.title,
              modelValue: form.value.position,
              "onUpdate:modelValue": ($event) => form.value.position = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Shift Type",
              placeHolder: "Enter shift type",
              type: "text",
              list: ["Hours", "Full Time", "Part Time", "Coverage", "Per Diem", "Coverage", "Ongoing"],
              value: (_p2 = __props.job_seeker) == null ? void 0 : _p2.shift_type,
              modelValue: form.value.shift_type,
              "onUpdate:modelValue": ($event) => form.value.shift_type = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              label: "Experience (Months)",
              placeHolder: "Enter experience in months",
              type: "number",
              value: (_q = __props.job_seeker) == null ? void 0 : _q.experience.toString(),
              modelValue: form.value.experience,
              "onUpdate:modelValue": ($event) => form.value.experience = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-db7d3d62${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Gender",
              placeHolder: "Select gender",
              type: "text",
              list: ["Male", "Female", "Other"],
              value: (_r = __props.job_seeker) == null ? void 0 : _r.gender,
              modelValue: form.value.gender,
              "onUpdate:modelValue": ($event) => form.value.gender = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Borough",
              placeHolder: "Select borough",
              type: "text",
              list: ["Manhattan", "The Bronx", "Brooklyn", "Queens", "Staten Island", "Long Island", "New Jersey", "Jersey City"],
              value: (_s = __props.job_seeker) == null ? void 0 : _s.preferred_location,
              modelValue: form.value.preferred_location,
              "onUpdate:modelValue": ($event) => form.value.preferred_location = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(FileInputField, {
              label: "Resume",
              accept: ".pdf,.doc,.docx",
              placeHolder: "Upload your resume",
              onInput: ($event) => assignResume($event)
            }, null, _parent2, _scopeId));
            _push2(`<p class="ps" data-v-db7d3d62${_scopeId}>Resume Must include Contact Info such as Phone/Mobile Number and Email. Clear details of previous experience is required</p></div></div><div class="btn-container" data-v-db7d3d62${_scopeId}><button type="submit" class="btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-db7d3d62${_scopeId}>${ssrInterpolate(loading.value ? "Loading..." : "Save")}</button></div></form></div></div></div></main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("div", {
                  class: "container",
                  style: `background-image: url('/images/profile.jpg');`
                }, [
                  createVNode("div", { class: "form-container" }, [
                    createVNode("div", { class: "form-wrapper" }, [
                      createVNode("h3", null, "Edit Profile "),
                      createVNode("br"),
                      createVNode("form", {
                        action: "",
                        class: "form",
                        onSubmit: withModifiers(handleSubmit, ["prevent"])
                      }, [
                        createVNode("div", { class: "flex-container" }, [
                          createVNode("div", { class: "left-flex" }, [
                            createVNode(InputField, {
                              label: "Your Name",
                              placeHolder: "Enter your name",
                              type: "text",
                              value: __props.user.name,
                              modelValue: form.value.name,
                              "onUpdate:modelValue": ($event) => form.value.name = $event
                            }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "split" }, [
                              createVNode(InputField, {
                                label: "Salary/Hour",
                                placeHolder: "Enter salary per hour",
                                type: "number",
                                value: (_u = (_t = __props.job_seeker) == null ? void 0 : _t.rate_per_hour) == null ? void 0 : _u.toString(),
                                modelValue: form.value.rate_per_hour,
                                "onUpdate:modelValue": ($event) => form.value.rate_per_hour = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                              createVNode(InputField, {
                                label: "Availability to start",
                                placeHolder: "days",
                                type: "number",
                                value: (_w = (_v = __props.job_seeker) == null ? void 0 : _v.availability_to_start) == null ? void 0 : _w.toString(),
                                modelValue: form.value.availability_to_start,
                                "onUpdate:modelValue": ($event) => form.value.availability_to_start = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "split" }, [
                              createVNode(DropDownInputField, {
                                label: "Payment Type",
                                placeHolder: "Select payment type",
                                type: "text",
                                list: ["W2", "1099 with Corp"],
                                value: (_x = __props.job_seeker) == null ? void 0 : _x.payment_type,
                                modelValue: form.value.payment_type,
                                "onUpdate:modelValue": ($event) => form.value.payment_type = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                              createVNode(DropDownInputField, {
                                label: "Language",
                                placeHolder: "Select language",
                                type: "text",
                                list: __props.languages.map((l) => l.name),
                                value: (_z = (_y = __props.job_seeker) == null ? void 0 : _y.languages[0]) == null ? void 0 : _z.name,
                                modelValue: form.value.language,
                                "onUpdate:modelValue": ($event) => form.value.language = $event
                              }, null, 8, ["list", "value", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "split" }, [
                              createVNode(CheckBox, {
                                label: "License Required",
                                value: (_A = __props.job_seeker) == null ? void 0 : _A.is_licensed,
                                trueText: "Licensed",
                                falseText: "Not Licensed",
                                modelValue: form.value.is_licensed,
                                "onUpdate:modelValue": ($event) => form.value.is_licensed = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                              createVNode(CheckBox, {
                                label: "Employment Status",
                                value: (_B = __props.job_seeker) == null ? void 0 : _B.is_employed,
                                trueText: "Employed",
                                falseText: "Not Employed",
                                modelValue: form.value.is_employed,
                                "onUpdate:modelValue": ($event) => form.value.is_employed = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(WorkDays, {
                              label: "Work Days",
                              modelValue: form.value.work_days,
                              "onUpdate:modelValue": ($event) => form.value.work_days = $event,
                              value: (_C = __props.job_seeker) == null ? void 0 : _C.work_days
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                            createVNode(DropDownInputField, {
                              label: "Legal Status",
                              placeHolder: "Select legal status",
                              type: "text",
                              list: ["US Citizen", "Green Card Holder", "H-1B", "F1 CPT", "F1 OPT", "F1 no EAD", "B1B2"],
                              value: (_D = __props.job_seeker) == null ? void 0 : _D.legal_status,
                              modelValue: form.value.legal_status,
                              "onUpdate:modelValue": ($event) => form.value.legal_status = $event
                            }, null, 8, ["value", "modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "right-flex" }, [
                            createVNode(InputField, {
                              label: "Mobile Number",
                              placeHolder: "Enter your mobile number",
                              type: "tel",
                              value: (_E = __props.job_seeker) == null ? void 0 : _E.phone_number,
                              modelValue: form.value.phone_number,
                              "onUpdate:modelValue": ($event) => form.value.phone_number = $event
                            }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                            createVNode(InputField, {
                              label: "Date of Birth",
                              placeHolder: "00/00/0000",
                              type: "date",
                              mask: "##/##/####",
                              value: (_F = __props.job_seeker) == null ? void 0 : _F.dob,
                              modelValue: form.value.dob,
                              "onUpdate:modelValue": ($event) => form.value.dob = $event
                            }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "split" }, [
                              createVNode(DropDownInputField, {
                                label: "Facility Type",
                                placeHolder: "Enter Facility type",
                                type: "text",
                                list: ["Outpatient", "Inpatient", "SNF", "Home Therapy"],
                                value: (_G = __props.job_seeker) == null ? void 0 : _G.facility_type,
                                modelValue: form.value.facility_type,
                                "onUpdate:modelValue": ($event) => form.value.facility_type = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                              createVNode(DropDownInputField, {
                                label: "Position",
                                placeHolder: "Enter position",
                                type: "text",
                                list: __props.positions.map((p) => p.title),
                                value: (_H = __props.job_seeker) == null ? void 0 : _H.position.title,
                                modelValue: form.value.position,
                                "onUpdate:modelValue": ($event) => form.value.position = $event
                              }, null, 8, ["list", "value", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "split" }, [
                              createVNode(DropDownInputField, {
                                label: "Shift Type",
                                placeHolder: "Enter shift type",
                                type: "text",
                                list: ["Hours", "Full Time", "Part Time", "Coverage", "Per Diem", "Coverage", "Ongoing"],
                                value: (_I = __props.job_seeker) == null ? void 0 : _I.shift_type,
                                modelValue: form.value.shift_type,
                                "onUpdate:modelValue": ($event) => form.value.shift_type = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                              createVNode(InputField, {
                                label: "Experience (Months)",
                                placeHolder: "Enter experience in months",
                                type: "number",
                                value: (_J = __props.job_seeker) == null ? void 0 : _J.experience.toString(),
                                modelValue: form.value.experience,
                                "onUpdate:modelValue": ($event) => form.value.experience = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "split" }, [
                              createVNode(DropDownInputField, {
                                label: "Gender",
                                placeHolder: "Select gender",
                                type: "text",
                                list: ["Male", "Female", "Other"],
                                value: (_K = __props.job_seeker) == null ? void 0 : _K.gender,
                                modelValue: form.value.gender,
                                "onUpdate:modelValue": ($event) => form.value.gender = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                              createVNode(DropDownInputField, {
                                label: "Borough",
                                placeHolder: "Select borough",
                                type: "text",
                                list: ["Manhattan", "The Bronx", "Brooklyn", "Queens", "Staten Island", "Long Island", "New Jersey", "Jersey City"],
                                value: (_L = __props.job_seeker) == null ? void 0 : _L.preferred_location,
                                modelValue: form.value.preferred_location,
                                "onUpdate:modelValue": ($event) => form.value.preferred_location = $event
                              }, null, 8, ["value", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(FileInputField, {
                              label: "Resume",
                              accept: ".pdf,.doc,.docx",
                              placeHolder: "Upload your resume",
                              onInput: ($event) => assignResume($event)
                            }, null, 8, ["onInput"]),
                            createVNode("p", { class: "ps" }, "Resume Must include Contact Info such as Phone/Mobile Number and Email. Clear details of previous experience is required")
                          ])
                        ]),
                        createVNode("div", { class: "btn-container" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "btn",
                            disabled: loading.value
                          }, toDisplayString(loading.value ? "Loading..." : "Save"), 9, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/JobSeekers/JobSeekerProfileEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JobSeekerProfileEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db7d3d62"]]);
export {
  JobSeekerProfileEdit as default
};
