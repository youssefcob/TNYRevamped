import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { j as jobState, s as snack, e as assignJob } from "./NavBarV2-BlC3_Oet.js";
import { B as Btn } from "./btn-Dy2Hq9NM.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { v as validation, H as Http } from "./Validation-eqo6rfcO.js";
import { D as DropDownInputField } from "./DropDownInputField-D_O-50WP.js";
import { computed } from "@vue/reactivity";
import { F as FileInputField } from "./FileInputField-DiFnzUgw.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "@inertiajs/vue3";
import "vue3-toastify";
import "maska/vue";
import "axios";
import "moment";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ApplicationForm",
  __ssrInlineRender: true,
  props: {
    position: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const name = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const resume = ref(null);
    const zip = ref(null);
    const isLoading = ref(false);
    const jobNames = computed(() => jobState.value.map((job) => job.title));
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      resume: null,
      zip: "",
      message: "",
      position: ""
    });
    const formValidation = {
      name: {
        rules: ["required"],
        message: {
          required: "Please enter your name"
        }
      },
      phone: {
        rules: ["required"],
        message: {
          required: "Phone Number Is Required",
          phone: "Please Enter A Valid Phone Number"
        }
      },
      email: {
        rules: ["required", "email"],
        message: {
          required: "email Is Required",
          email: "Please Enter A Valid Email"
        }
      },
      zip: {
        rules: ["required"],
        message: {
          required: "Message Is Required"
        }
      },
      resume: {
        rules: ["required"],
        message: {
          required: "Please select a resume"
        }
      },
      message: {
        rules: ["required"],
        message: {
          required: "Please select a message"
        }
      },
      position: {
        rules: ["required", { dropdown: jobNames.value }],
        message: {
          required: "Please select a position"
        }
      }
    };
    const formErrors = reactive({
      resume: false,
      name: false,
      email: false,
      phone: false,
      zip: false,
      message: false,
      position: false
    });
    const resetForm = () => {
    };
    const validate = () => {
      let v = new validation(formValidation, form);
      v.validate();
      let errors = v.errors;
      if (errors.length) {
        handleErrors(v);
      } else {
        submitForm();
      }
    };
    const handleErrors = (v) => {
      let errors = v.errors;
      let errorsArr = Object.values(errors[0]);
      let keys = v.keys;
      errorsArr.forEach((error) => {
        snack.error(error);
      });
      keys.forEach((key) => {
        setTimeout(() => {
          formErrors[key] = false;
        }, 500);
        formErrors[key] = true;
      });
    };
    const submitForm = async () => {
      try {
        isLoading.value = true;
        let ModdedForm = modifyForm();
        let response = await Http.post("application", ModdedForm);
        snack.success("Form Submitted Successfully");
        isLoading.value = false;
        resetForm();
        console.log(response);
      } catch (e) {
        snack.error(e);
        isLoading.value = false;
      }
      isLoading.value = false;
    };
    const modifyForm = () => {
      let formData = new FormData();
      formData.append("position", form.position);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone.replace(/\D/g, ""));
      formData.append("zip", form.zip);
      formData.append("message", form.message);
      if (form.resume) {
        let resume2 = form.resume;
        for (let [key, value] of resume2.entries()) {
          if (value instanceof File) {
            formData.append("resume", value);
            break;
          }
        }
      }
      return formData;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-7f9d2bbb><span class="title" data-v-7f9d2bbb>Welcome</span>`);
      _push(ssrRenderComponent(InputField, {
        ref_key: "name",
        ref: name,
        onInput: ($event) => form.name = $event,
        label: "Name",
        placeHolder: "Enter Your Name..",
        error: formErrors.name
      }, null, _parent));
      _push(ssrRenderComponent(InputField, {
        ref_key: "phone",
        ref: phone,
        onInput: ($event) => form.phone = $event,
        label: "Mobile number",
        placeHolder: "Enter Your Number...",
        error: formErrors.phone,
        mask: "(###) ###-####"
      }, null, _parent));
      _push(ssrRenderComponent(InputField, {
        ref_key: "email",
        ref: email,
        onInput: ($event) => form.email = $event,
        label: "Email",
        placeHolder: "Enter Your Email..",
        error: formErrors.email
      }, null, _parent));
      _push(ssrRenderComponent(FileInputField, {
        ref_key: "resume",
        ref: resume,
        onInput: ($event) => form.resume = $event,
        label: "Your Resume",
        placeHolder: "Upload Your Resume",
        error: formErrors.resume
      }, null, _parent));
      _push(`<div class="split" data-v-7f9d2bbb>`);
      _push(ssrRenderComponent(InputField, {
        ref_key: "zip",
        ref: zip,
        onInput: ($event) => form.zip = $event,
        label: "Zip",
        placeHolder: "Enter Your Zip Code",
        error: formErrors.zip
      }, null, _parent));
      _push(ssrRenderComponent(DropDownInputField, {
        ref: "position",
        onInput: ($event) => form.position = $event,
        list: unref(jobNames),
        label: "Position",
        placeHolder: "Enter Your Position",
        error: formErrors.position,
        default: __props.position
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(InputField, {
        ref: "message",
        onInput: ($event) => form.message = $event,
        label: "Your Message",
        placeHolder: "Enter Your message ...",
        height: "12.5rem",
        error: formErrors.message
      }, null, _parent));
      _push(ssrRenderComponent(Btn, {
        class: "btn",
        onClick: validate,
        loading: isLoading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Send Email`);
          } else {
            return [
              createTextVNode("Send Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Applications/ApplicationForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ApplicationForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7f9d2bbb"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Apply",
  __ssrInlineRender: true,
  props: {
    position: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-54599071><div class="form" data-v-54599071>`);
      _push(ssrRenderComponent(ApplicationForm, { position: __props.position }, null, _parent));
      _push(`</div><div class="img" style="${ssrRenderStyle(`background-image:url(/images/applications.png)`)}" data-v-54599071></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Views/Apply.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Apply = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-54599071"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Apply",
  __ssrInlineRender: true,
  props: {
    jobs: {
      type: Object
    },
    position: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    if (props.jobs) {
      assignJob(props.jobs);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Apply, { position: __props.position }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Apply, { position: __props.position }, null, 8, ["position"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Apply.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
