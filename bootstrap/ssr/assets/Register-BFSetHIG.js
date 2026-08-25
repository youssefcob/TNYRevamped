import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelRadio, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { Link, router } from "@inertiajs/vue3";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "maska/vue";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object
    }
  },
  setup(__props) {
    const form = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      type: "job_seeker"
    };
    const loading = ref(false);
    const props = __props;
    const submit = () => {
      router.post("/register", form, {
        onStart: () => {
          loading.value = true;
        },
        onFinish: () => {
          loading.value = false;
          if (props.errors && Object.keys(props.errors).length > 0) {
            Object.values(props.errors).forEach((errorArray) => {
              if (Array.isArray(errorArray)) {
                errorArray.forEach((error) => snack.error(error));
              } else if (typeof errorArray === "string") {
                snack.error(errorArray);
              }
            });
          }
        },
        preserveState: true,
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form method="POST" action="/register" class="container" data-v-7506160d${_scopeId}><div class="box-wrapper-border" data-v-7506160d${_scopeId}><h2 class="title" data-v-7506160d${_scopeId}>Sign Up</h2>`);
            _push2(ssrRenderComponent(InputField, {
              type: "text",
              name: "name",
              label: "Name",
              placeHolder: "Enter your name",
              modelValue: form.name,
              "onUpdate:modelValue": ($event) => form.name = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              type: "text",
              name: "email",
              label: "Email",
              placeHolder: "Enter your email",
              modelValue: form.email,
              "onUpdate:modelValue": ($event) => form.email = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              type: "text",
              name: "password",
              label: "Password",
              placeHolder: "Enter your password",
              modelValue: form.password,
              "onUpdate:modelValue": ($event) => form.password = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              type: "text",
              name: "confirm_password",
              label: "Confirm Password",
              placeHolder: "Re-enter your password",
              modelValue: form.password_confirmation,
              "onUpdate:modelValue": ($event) => form.password_confirmation = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="radio-group" data-v-7506160d${_scopeId}><div class="radio" data-v-7506160d${_scopeId}><input type="radio" name="type" id="job_seeker" value="job_seeker"${ssrIncludeBooleanAttr(ssrLooseEqual(form.type, "job_seeker")) ? " checked" : ""} checked data-v-7506160d${_scopeId}><label for="job_seeker" data-v-7506160d${_scopeId}>Job Seeker</label></div><div class="radio" data-v-7506160d${_scopeId}><input type="radio" name="type" id="employer" value="employer"${ssrIncludeBooleanAttr(ssrLooseEqual(form.type, "employer")) ? " checked" : ""} data-v-7506160d${_scopeId}><label for="employer" data-v-7506160d${_scopeId}>Employer</label></div></div><div class="btn-wrapper" data-v-7506160d${_scopeId}><button type="submit" class="btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-7506160d${_scopeId}>${ssrInterpolate(loading.value ? "Loading..." : "Register")}</button></div><div class="text-center" data-v-7506160d${_scopeId}><p data-v-7506160d${_scopeId}>Already have an account? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/login",
              class: "text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Login`);
                } else {
                  return [
                    createTextVNode("Login")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                method: "POST",
                action: "/register",
                class: "container",
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "box-wrapper-border" }, [
                  createVNode("h2", { class: "title" }, "Sign Up"),
                  createVNode(InputField, {
                    type: "text",
                    name: "name",
                    label: "Name",
                    placeHolder: "Enter your name",
                    modelValue: form.name,
                    "onUpdate:modelValue": ($event) => form.name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(InputField, {
                    type: "text",
                    name: "email",
                    label: "Email",
                    placeHolder: "Enter your email",
                    modelValue: form.email,
                    "onUpdate:modelValue": ($event) => form.email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(InputField, {
                    type: "text",
                    name: "password",
                    label: "Password",
                    placeHolder: "Enter your password",
                    modelValue: form.password,
                    "onUpdate:modelValue": ($event) => form.password = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(InputField, {
                    type: "text",
                    name: "confirm_password",
                    label: "Confirm Password",
                    placeHolder: "Re-enter your password",
                    modelValue: form.password_confirmation,
                    "onUpdate:modelValue": ($event) => form.password_confirmation = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "radio-group" }, [
                    createVNode("div", { class: "radio" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        name: "type",
                        id: "job_seeker",
                        value: "job_seeker",
                        "onUpdate:modelValue": ($event) => form.type = $event,
                        checked: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, form.type]
                      ]),
                      createVNode("label", { for: "job_seeker" }, "Job Seeker")
                    ]),
                    createVNode("div", { class: "radio" }, [
                      withDirectives(createVNode("input", {
                        type: "radio",
                        name: "type",
                        id: "employer",
                        value: "employer",
                        "onUpdate:modelValue": ($event) => form.type = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, form.type]
                      ]),
                      createVNode("label", { for: "employer" }, "Employer")
                    ])
                  ]),
                  createVNode("div", { class: "btn-wrapper" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "btn",
                      disabled: loading.value
                    }, toDisplayString(loading.value ? "Loading..." : "Register"), 9, ["disabled"])
                  ]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("p", null, [
                      createTextVNode("Already have an account? "),
                      createVNode(unref(Link), {
                        href: "/login",
                        class: "text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Login")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7506160d"]]);
export {
  Register as default
};
