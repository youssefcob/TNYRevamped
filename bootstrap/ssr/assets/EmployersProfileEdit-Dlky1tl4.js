import { defineComponent, ref, withCtx, createVNode, withModifiers, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { D as DropDownInputField } from "./DropDownInputField-D_O-50WP.js";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "maska/vue";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmployersProfileEdit",
  __ssrInlineRender: true,
  props: {
    employer: {
      type: Object
    },
    user: {
      type: Object,
      required: true
    },
    errors: {
      type: Object
    }
  },
  setup(__props) {
    var _a, _b, _c;
    const props = __props;
    const form = ref({
      name: props.user.name,
      phone_number: (_a = props.employer) == null ? void 0 : _a.phone_number,
      facility_name: (_b = props.employer) == null ? void 0 : _b.facility_name,
      borough: (_c = props.employer) == null ? void 0 : _c.borough
    });
    const modifyForm = () => {
      const formFields = {
        name: form.value.name,
        phone_number: form.value.phone_number || "",
        facility_name: form.value.facility_name || "",
        borough: form.value.borough || ""
      };
      return formFields;
    };
    const loading = ref(false);
    const handleSubmit = async () => {
      const formData = modifyForm();
      const token = localStorage.getItem("token");
      router.post("/employer/profile/update", formData, {
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
          var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<main data-v-9d54f797${_scopeId}><div class="container" style="${ssrRenderStyle(`background-image: url('/images/profile.jpg');`)}" data-v-9d54f797${_scopeId}><div class="form-container" data-v-9d54f797${_scopeId}><div class="form-wrapper" data-v-9d54f797${_scopeId}><h3 data-v-9d54f797${_scopeId}>Edit Profile </h3><br data-v-9d54f797${_scopeId}><form action="" class="form" data-v-9d54f797${_scopeId}>`);
            _push2(ssrRenderComponent(InputField, {
              label: "Your Name",
              placeHolder: "Enter your name",
              type: "text",
              value: __props.user.name,
              modelValue: form.value.name,
              "onUpdate:modelValue": ($event) => form.value.name = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              label: "Phone Number",
              placeHolder: "Enter your phone number",
              type: "number",
              value: (_b2 = (_a2 = __props.employer) == null ? void 0 : _a2.phone_number) == null ? void 0 : _b2.toString(),
              modelValue: form.value.phone_number,
              "onUpdate:modelValue": ($event) => form.value.phone_number = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              label: "Facility Name",
              placeHolder: "Facility name",
              type: "number",
              value: (_d = (_c2 = __props.employer) == null ? void 0 : _c2.facility_name) == null ? void 0 : _d.toString(),
              modelValue: form.value.facility_name,
              "onUpdate:modelValue": ($event) => form.value.facility_name = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(DropDownInputField, {
              label: "Borough",
              placeHolder: "Select borough",
              type: "text",
              list: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
              value: ((_e = __props.employer) == null ? void 0 : _e.borough) || void 0,
              modelValue: form.value.borough,
              "onUpdate:modelValue": ($event) => form.value.borough = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="btn-container" data-v-9d54f797${_scopeId}><button type="submit" class="btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-9d54f797${_scopeId}>${ssrInterpolate(loading.value ? "Loading..." : "Save")}</button></div></form></div></div></div></main>`);
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
                        createVNode(InputField, {
                          label: "Your Name",
                          placeHolder: "Enter your name",
                          type: "text",
                          value: __props.user.name,
                          modelValue: form.value.name,
                          "onUpdate:modelValue": ($event) => form.value.name = $event
                        }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                        createVNode(InputField, {
                          label: "Phone Number",
                          placeHolder: "Enter your phone number",
                          type: "number",
                          value: (_g = (_f = __props.employer) == null ? void 0 : _f.phone_number) == null ? void 0 : _g.toString(),
                          modelValue: form.value.phone_number,
                          "onUpdate:modelValue": ($event) => form.value.phone_number = $event
                        }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                        createVNode(InputField, {
                          label: "Facility Name",
                          placeHolder: "Facility name",
                          type: "number",
                          value: (_i = (_h = __props.employer) == null ? void 0 : _h.facility_name) == null ? void 0 : _i.toString(),
                          modelValue: form.value.facility_name,
                          "onUpdate:modelValue": ($event) => form.value.facility_name = $event
                        }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
                        createVNode(DropDownInputField, {
                          label: "Borough",
                          placeHolder: "Select borough",
                          type: "text",
                          list: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
                          value: ((_j = __props.employer) == null ? void 0 : _j.borough) || void 0,
                          modelValue: form.value.borough,
                          "onUpdate:modelValue": ($event) => form.value.borough = $event
                        }, null, 8, ["value", "modelValue", "onUpdate:modelValue"]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Employers/EmployersProfileEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmployersProfileEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d54f797"]]);
export {
  EmployersProfileEdit as default
};
