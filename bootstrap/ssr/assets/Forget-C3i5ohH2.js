import { defineComponent, ref, onMounted, withCtx, createBlock, createCommentVNode, openBlock, withModifiers, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
import "maska/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Forget",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object
    },
    type: {
      type: String
    },
    message: {
      type: String
    }
  },
  setup(__props) {
    const loading = ref(false);
    const resetEmailSent = ref(false);
    const csrfToken = ref("");
    const props = __props;
    const forgetPasswordForm = {
      email: ""
    };
    const resetPasswordForm = {
      email: "",
      otp: "",
      password: ""
    };
    onMounted(() => {
      var _a;
      csrfToken.value = (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content");
    });
    const handleErrors = (errors) => {
      if (errors && Object.keys(errors).length > 0) {
        Object.values(errors).forEach((errorArray) => {
          if (Array.isArray(errorArray)) {
            errorArray.forEach((error) => snack.error(error));
          } else if (typeof errorArray === "string") {
            snack.error(errorArray);
          }
        });
      }
    };
    function forgetPasswordSubmit() {
      loading.value = true;
      resetEmailSent.value = false;
      router.post("/forget-password", forgetPasswordForm, {
        onStart: () => {
          loading.value = true;
        },
        onFinish: () => {
          loading.value = false;
          if (props.type === "success") {
            resetEmailSent.value = true;
            resetPasswordForm.email = forgetPasswordForm.email;
          } else {
            handleErrors(props.errors);
          }
        }
      });
    }
    function resetPasswordSubmit() {
      loading.value = true;
      router.post("/reset-password", resetPasswordForm, {
        onStart: () => {
          loading.value = true;
        },
        onFinish: () => {
          loading.value = false;
          if (props.type === "success") ;
          else {
            handleErrors(props.errors);
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!resetEmailSent.value) {
              _push2(`<form method="POST" action="/login" class="container" data-v-d297e511${_scopeId}><input type="hidden" name="_token"${ssrRenderAttr("value", csrfToken.value)} data-v-d297e511${_scopeId}><div class="box-wrapper-border" data-v-d297e511${_scopeId}><h2 class="title" data-v-d297e511${_scopeId}>Forget Password</h2>`);
              _push2(ssrRenderComponent(InputField, {
                type: "text",
                name: "email",
                label: "Email",
                placeHolder: "Enter your email",
                value: "",
                modelValue: forgetPasswordForm.email,
                "onUpdate:modelValue": ($event) => forgetPasswordForm.email = $event
              }, null, _parent2, _scopeId));
              _push2(`<div class="btn-wrapper" data-v-d297e511${_scopeId}><button type="submit" class="btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-d297e511${_scopeId}>${ssrInterpolate(loading.value ? "Loading..." : "Send OTP")}</button></div></div></form>`);
            } else {
              _push2(`<!---->`);
            }
            if (resetEmailSent.value) {
              _push2(`<form method="POST" action="/login" class="container" data-v-d297e511${_scopeId}><input type="hidden" name="_token"${ssrRenderAttr("value", csrfToken.value)} data-v-d297e511${_scopeId}><div class="box-wrapper-border" data-v-d297e511${_scopeId}><h2 class="title" data-v-d297e511${_scopeId}>Forget Password</h2>`);
              _push2(ssrRenderComponent(InputField, {
                type: "text",
                name: "email",
                label: "Email",
                placeHolder: "Enter your email",
                value: resetPasswordForm.email,
                modelValue: resetPasswordForm.email,
                "onUpdate:modelValue": ($event) => resetPasswordForm.email = $event,
                disabled: resetEmailSent.value
              }, null, _parent2, _scopeId));
              if (resetEmailSent.value) {
                _push2(ssrRenderComponent(InputField, {
                  type: "number",
                  name: "otp",
                  label: "OTP",
                  placeHolder: "Enter OTP",
                  value: "",
                  modelValue: resetPasswordForm.otp,
                  "onUpdate:modelValue": ($event) => resetPasswordForm.otp = $event
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (resetEmailSent.value) {
                _push2(ssrRenderComponent(InputField, {
                  type: "password",
                  name: "password",
                  label: "New Password",
                  placeHolder: "Enter new password",
                  value: "",
                  modelValue: resetPasswordForm.password,
                  "onUpdate:modelValue": ($event) => resetPasswordForm.password = $event
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="btn-wrapper" data-v-d297e511${_scopeId}><button type="submit" class="btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-d297e511${_scopeId}>${ssrInterpolate(loading.value ? "Loading..." : "Reset Password")}</button></div></div></form>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !resetEmailSent.value ? (openBlock(), createBlock("form", {
                key: 0,
                method: "POST",
                action: "/login",
                class: "container",
                onSubmit: withModifiers(forgetPasswordSubmit, ["prevent"])
              }, [
                createVNode("input", {
                  type: "hidden",
                  name: "_token",
                  value: csrfToken.value
                }, null, 8, ["value"]),
                createVNode("div", { class: "box-wrapper-border" }, [
                  createVNode("h2", { class: "title" }, "Forget Password"),
                  createVNode(InputField, {
                    type: "text",
                    name: "email",
                    label: "Email",
                    placeHolder: "Enter your email",
                    value: "",
                    modelValue: forgetPasswordForm.email,
                    "onUpdate:modelValue": ($event) => forgetPasswordForm.email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "btn-wrapper" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "btn",
                      disabled: loading.value
                    }, toDisplayString(loading.value ? "Loading..." : "Send OTP"), 9, ["disabled"])
                  ])
                ])
              ], 32)) : createCommentVNode("", true),
              resetEmailSent.value ? (openBlock(), createBlock("form", {
                key: 1,
                method: "POST",
                action: "/login",
                class: "container",
                onSubmit: withModifiers(resetPasswordSubmit, ["prevent"])
              }, [
                createVNode("input", {
                  type: "hidden",
                  name: "_token",
                  value: csrfToken.value
                }, null, 8, ["value"]),
                createVNode("div", { class: "box-wrapper-border" }, [
                  createVNode("h2", { class: "title" }, "Forget Password"),
                  createVNode(InputField, {
                    type: "text",
                    name: "email",
                    label: "Email",
                    placeHolder: "Enter your email",
                    value: resetPasswordForm.email,
                    modelValue: resetPasswordForm.email,
                    "onUpdate:modelValue": ($event) => resetPasswordForm.email = $event,
                    disabled: resetEmailSent.value
                  }, null, 8, ["value", "modelValue", "onUpdate:modelValue", "disabled"]),
                  resetEmailSent.value ? (openBlock(), createBlock(InputField, {
                    key: 0,
                    type: "number",
                    name: "otp",
                    label: "OTP",
                    placeHolder: "Enter OTP",
                    value: "",
                    modelValue: resetPasswordForm.otp,
                    "onUpdate:modelValue": ($event) => resetPasswordForm.otp = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  resetEmailSent.value ? (openBlock(), createBlock(InputField, {
                    key: 1,
                    type: "password",
                    name: "password",
                    label: "New Password",
                    placeHolder: "Enter new password",
                    value: "",
                    modelValue: resetPasswordForm.password,
                    "onUpdate:modelValue": ($event) => resetPasswordForm.password = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  createVNode("div", { class: "btn-wrapper" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "btn",
                      disabled: loading.value
                    }, toDisplayString(loading.value ? "Loading..." : "Reset Password"), 9, ["disabled"])
                  ])
                ])
              ], 32)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Forget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Forget = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d297e511"]]);
export {
  Forget as default
};
