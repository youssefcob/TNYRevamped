import { defineComponent, ref, onMounted, withCtx, createVNode, withModifiers, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { D as DropDownInputField } from "./DropDownInputField-D_O-50WP.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { router } from "@inertiajs/vue3";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { W as WorkDays } from "./workDays-B8SnEcUu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "maska/vue";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostVacancy",
  __ssrInlineRender: true,
  props: {
    positions: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const form = {
      borough: "",
      address: "",
      shift_details: "",
      position: "",
      experience: "",
      facility_type: "",
      payment_type: "",
      rate_per_hour: "",
      license_required: "",
      legal_status: "",
      gender_pref: "",
      work_days: [],
      availability_to_start: "",
      language_pref: "",
      position_id: 0
    };
    const loading = ref(false);
    const csrfToken = ref("");
    const submit = async () => {
      var _a;
      const token = localStorage.getItem("token");
      if (!token) {
        snack.error("You are not authenticated. Please log in again.");
        return;
      }
      form.position_id = ((_a = props.positions.find((p) => p.title === form.position)) == null ? void 0 : _a.id) || 0;
      router.post("/post-vacancy", form, {
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
    onMounted(() => {
      var _a;
      csrfToken.value = (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container" data-v-d4800f66${_scopeId}><div class="box-wrapper-border" data-v-d4800f66${_scopeId}><h2 class="title" data-v-d4800f66${_scopeId}>Welcome</h2><form method="POST" data-v-d4800f66${_scopeId}><input type="hidden" name="_token"${ssrRenderAttr("value", csrfToken.value)} data-v-d4800f66${_scopeId}>`);
            _push2(ssrRenderComponent(InputField, {
              type: "text",
              name: "address",
              label: "Address",
              placeHolder: "Enter address",
              modelValue: form.address,
              "onUpdate:modelValue": ($event) => form.address = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="split" data-v-d4800f66${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              name: "facility_type",
              label: "Facility Type",
              placeHolder: "Choose Your Facility Type",
              modelValue: form.facility_type,
              "onUpdate:modelValue": ($event) => form.facility_type = $event,
              list: ["Outpatient", "Inpatient", "SNF", "Home Therapy"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Role",
              placeHolder: "Enter Position",
              type: "text",
              list: __props.positions.map((p) => p.title),
              name: "position",
              modelValue: form.position,
              "onUpdate:modelValue": ($event) => form.position = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-d4800f66${_scopeId}>`);
            _push2(ssrRenderComponent(InputField, {
              label: "Availability to start",
              placeHolder: "days",
              type: "number",
              name: "availability_to_start",
              modelValue: form.availability_to_start,
              "onUpdate:modelValue": ($event) => form.availability_to_start = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Gender",
              placeHolder: "Select gender",
              type: "text",
              list: ["Male", "Female", "Any"],
              modelValue: form.gender_pref,
              "onUpdate:modelValue": ($event) => form.gender_pref = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-d4800f66${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Shift Type",
              placeHolder: "Enter shift type",
              type: "text",
              list: ["Hours", "Full Time", "Part Time", "Coverage", "Per Diem", "Coverage", "Ongoing"],
              name: "shift_details",
              modelValue: form.shift_details,
              "onUpdate:modelValue": ($event) => form.shift_details = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              label: "Minimum Experience (Months)",
              placeHolder: "Enter experience in months",
              type: "number",
              name: "experience",
              modelValue: form.experience,
              "onUpdate:modelValue": ($event) => form.experience = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-d4800f66${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Borough",
              placeHolder: "Select borough",
              type: "text",
              list: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
              modelValue: form.borough,
              "onUpdate:modelValue": ($event) => form.borough = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Language",
              placeHolder: "Select language",
              type: "text",
              list: __props.languages.map((l) => l.name),
              modelValue: form.language_pref,
              "onUpdate:modelValue": ($event) => form.language_pref = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="split" data-v-d4800f66${_scopeId}>`);
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Payment Type",
              placeHolder: "Select payment type",
              type: "text",
              list: ["W2", "1099 with Corp"],
              modelValue: form.payment_type,
              "onUpdate:modelValue": ($event) => form.payment_type = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Legal Status",
              placeHolder: "Select legal status",
              type: "text",
              list: ["US Citizen", "Green Card Holder", "H-1B", "F1 CPT", "F1 OPT", "F1 no EAD", "B1B2"],
              modelValue: form.legal_status,
              "onUpdate:modelValue": ($event) => form.legal_status = $event
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(WorkDays, {
              modelValue: form.work_days,
              "onUpdate:modelValue": ($event) => form.work_days = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="btn-container" data-v-d4800f66${_scopeId}><button type="submit" class="btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-d4800f66${_scopeId}>${ssrInterpolate(loading.value ? "Loading..." : "Save")}</button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container" }, [
                createVNode("div", { class: "box-wrapper-border" }, [
                  createVNode("h2", { class: "title" }, "Welcome"),
                  createVNode("form", {
                    method: "POST",
                    onSubmit: withModifiers(($event) => submit(), ["prevent"])
                  }, [
                    createVNode("input", {
                      type: "hidden",
                      name: "_token",
                      value: csrfToken.value
                    }, null, 8, ["value"]),
                    createVNode(InputField, {
                      type: "text",
                      name: "address",
                      label: "Address",
                      placeHolder: "Enter address",
                      modelValue: form.address,
                      "onUpdate:modelValue": ($event) => form.address = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "split" }, [
                      createVNode(DropDownInputField, {
                        name: "facility_type",
                        label: "Facility Type",
                        placeHolder: "Choose Your Facility Type",
                        modelValue: form.facility_type,
                        "onUpdate:modelValue": ($event) => form.facility_type = $event,
                        list: ["Outpatient", "Inpatient", "SNF", "Home Therapy"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(DropDownInputField, {
                        label: "Role",
                        placeHolder: "Enter Position",
                        type: "text",
                        list: __props.positions.map((p) => p.title),
                        name: "position",
                        modelValue: form.position,
                        "onUpdate:modelValue": ($event) => form.position = $event
                      }, null, 8, ["list", "modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "split" }, [
                      createVNode(InputField, {
                        label: "Availability to start",
                        placeHolder: "days",
                        type: "number",
                        name: "availability_to_start",
                        modelValue: form.availability_to_start,
                        "onUpdate:modelValue": ($event) => form.availability_to_start = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(DropDownInputField, {
                        label: "Gender",
                        placeHolder: "Select gender",
                        type: "text",
                        list: ["Male", "Female", "Any"],
                        modelValue: form.gender_pref,
                        "onUpdate:modelValue": ($event) => form.gender_pref = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "split" }, [
                      createVNode(DropDownInputField, {
                        label: "Shift Type",
                        placeHolder: "Enter shift type",
                        type: "text",
                        list: ["Hours", "Full Time", "Part Time", "Coverage", "Per Diem", "Coverage", "Ongoing"],
                        name: "shift_details",
                        modelValue: form.shift_details,
                        "onUpdate:modelValue": ($event) => form.shift_details = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(InputField, {
                        label: "Minimum Experience (Months)",
                        placeHolder: "Enter experience in months",
                        type: "number",
                        name: "experience",
                        modelValue: form.experience,
                        "onUpdate:modelValue": ($event) => form.experience = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "split" }, [
                      createVNode(DropDownInputField, {
                        label: "Borough",
                        placeHolder: "Select borough",
                        type: "text",
                        list: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
                        modelValue: form.borough,
                        "onUpdate:modelValue": ($event) => form.borough = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(DropDownInputField, {
                        label: "Language",
                        placeHolder: "Select language",
                        type: "text",
                        list: __props.languages.map((l) => l.name),
                        modelValue: form.language_pref,
                        "onUpdate:modelValue": ($event) => form.language_pref = $event
                      }, null, 8, ["list", "modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "split" }, [
                      createVNode(DropDownInputField, {
                        label: "Payment Type",
                        placeHolder: "Select payment type",
                        type: "text",
                        list: ["W2", "1099 with Corp"],
                        modelValue: form.payment_type,
                        "onUpdate:modelValue": ($event) => form.payment_type = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(DropDownInputField, {
                        label: "Legal Status",
                        placeHolder: "Select legal status",
                        type: "text",
                        list: ["US Citizen", "Green Card Holder", "H-1B", "F1 CPT", "F1 OPT", "F1 no EAD", "B1B2"],
                        modelValue: form.legal_status,
                        "onUpdate:modelValue": ($event) => form.legal_status = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(WorkDays, {
                      modelValue: form.work_days,
                      "onUpdate:modelValue": ($event) => form.work_days = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "btn-container" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "btn",
                        disabled: loading.value
                      }, toDisplayString(loading.value ? "Loading..." : "Save"), 9, ["disabled"])
                    ])
                  ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Employers/PostVacancy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PostVacancy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4800f66"]]);
export {
  PostVacancy as default
};
