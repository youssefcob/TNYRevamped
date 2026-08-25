import { defineComponent, ref, onMounted, withCtx, unref, createTextVNode, createVNode, withModifiers, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { Link, router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
import "maska/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
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
    const csrfToken = ref("");
    const props = __props;
    const form = {
      email: "",
      password: ""
    };
    onMounted(() => {
      var _a;
      csrfToken.value = (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content");
      if (props.type === "success") {
        snack.success(props.message);
      }
    });
    function submit() {
      router.post("/login", form, {
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form method="POST" action="/login" class="container" data-v-e603dfc0${_scopeId}><input type="hidden" name="_token"${ssrRenderAttr("value", csrfToken.value)} data-v-e603dfc0${_scopeId}><div class="box-wrapper-border" data-v-e603dfc0${_scopeId}><h2 class="title" data-v-e603dfc0${_scopeId}>Login</h2>`);
            _push2(ssrRenderComponent(InputField, {
              type: "text",
              name: "email",
              label: "Email",
              placeHolder: "Enter your email",
              value: "jobSeeker@example.com",
              modelValue: form.email,
              "onUpdate:modelValue": ($event) => form.email = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(InputField, {
              type: "password",
              name: "password",
              label: "Password",
              placeHolder: "Enter your password",
              value: "y",
              modelValue: form.password,
              "onUpdate:modelValue": ($event) => form.password = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-right" data-v-e603dfc0${_scopeId}><p data-v-e603dfc0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/forget-password",
              class: "text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Forget Password`);
                } else {
                  return [
                    createTextVNode("Forget Password")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div><div class="btn-wrapper" data-v-e603dfc0${_scopeId}><button type="submit" class="btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-e603dfc0${_scopeId}>${ssrInterpolate(loading.value ? "Loading..." : "Login")}</button></div><div class="text-center" data-v-e603dfc0${_scopeId}><p data-v-e603dfc0${_scopeId}>Don&#39;t have an account? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/register",
              class: "text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
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
                action: "/login",
                class: "container",
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("input", {
                  type: "hidden",
                  name: "_token",
                  value: csrfToken.value
                }, null, 8, ["value"]),
                createVNode("div", { class: "box-wrapper-border" }, [
                  createVNode("h2", { class: "title" }, "Login"),
                  createVNode(InputField, {
                    type: "text",
                    name: "email",
                    label: "Email",
                    placeHolder: "Enter your email",
                    value: "jobSeeker@example.com",
                    modelValue: form.email,
                    "onUpdate:modelValue": ($event) => form.email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(InputField, {
                    type: "password",
                    name: "password",
                    label: "Password",
                    placeHolder: "Enter your password",
                    value: "y",
                    modelValue: form.password,
                    "onUpdate:modelValue": ($event) => form.password = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "text-right" }, [
                    createVNode("p", null, [
                      createVNode(unref(Link), {
                        href: "/forget-password",
                        class: "text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Forget Password")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "btn-wrapper" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "btn",
                      disabled: loading.value
                    }, toDisplayString(loading.value ? "Loading..." : "Login"), 9, ["disabled"])
                  ]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("p", null, [
                      createTextVNode("Don't have an account? "),
                      createVNode(unref(Link), {
                        href: "/register",
                        class: "text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Register")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e603dfc0"]]);
export {
  Login as default
};
