import { defineComponent, ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "vue3-toastify";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import "@inertiajs/vue3";
import "maska/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdminLogin",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: Object
    }
  },
  setup(__props) {
    const loading = ref(false);
    const csrfToken = ref("");
    const form = {
      email: "",
      password: ""
    };
    onMounted(() => {
      var _a;
      csrfToken.value = (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-login" }, _attrs))} data-v-29c2efd0><form method="POST" action="/admin/login" class="admin-login__card" data-v-29c2efd0><input type="hidden" name="_token"${ssrRenderAttr("value", csrfToken.value)} data-v-29c2efd0><a href="/" class="admin-login__logo" data-v-29c2efd0><img src="/images/tnylogo.png" alt="TNY Staffing Corporation" data-v-29c2efd0></a><h1 class="admin-login__title" data-v-29c2efd0>Admin Login</h1><p class="admin-login__subtitle" data-v-29c2efd0>Sign in to manage the TNY Staffing site.</p><div class="admin-login__fields" data-v-29c2efd0>`);
      _push(ssrRenderComponent(InputField, {
        type: "text",
        name: "email",
        label: "Email",
        placeHolder: "Enter your email",
        modelValue: form.email,
        "onUpdate:modelValue": ($event) => form.email = $event
      }, null, _parent));
      _push(ssrRenderComponent(InputField, {
        type: "password",
        name: "password",
        label: "Password",
        placeHolder: "Enter your password",
        modelValue: form.password,
        "onUpdate:modelValue": ($event) => form.password = $event
      }, null, _parent));
      _push(`</div><button type="submit" class="admin-login__submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-29c2efd0>${ssrInterpolate(loading.value ? "Signing in…" : "Sign In")}</button></form><a href="/" class="admin-login__back" data-v-29c2efd0>← Back to site</a></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/AdminLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29c2efd0"]]);
export {
  AdminLogin as default
};
