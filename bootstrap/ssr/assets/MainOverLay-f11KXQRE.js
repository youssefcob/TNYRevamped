import { defineComponent, provide, onMounted, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { s as snack, N as Navbar } from "./NavBarV2-BlC3_Oet.js";
import { F as Footer } from "./Foot-6aX9-mt3.js";
import { A as AdminEditToggle, S as StyleToolbarHost } from "./StyleToolbarHost-C7NtTTfW.js";
import { usePage } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const user = {
  setToken: (data) => {
    localStorage.setItem("token", data.access_token);
  },
  token: () => {
    return localStorage.getItem("token");
  },
  set: (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    window.dispatchEvent(new Event("user-updated"));
  },
  get: () => {
    let user2 = localStorage.getItem("user");
    if (user2) {
      return JSON.parse(user2);
    }
    return null;
  },
  loggedIn: () => {
    const token = (() => {
      const cookie = document.cookie.match(/token=([^;]+)/);
      const token2 = localStorage.getItem("token");
      const user2 = localStorage.getItem("user");
      if (cookie && token2 && user2) {
        return true;
      }
      return false;
    })();
    const tokenExpired = (() => {
      const tokenInfoStr = localStorage.getItem("token_info");
      if (!token || !tokenInfoStr) {
        return false;
      }
      const tokenInfo = JSON.parse(tokenInfoStr);
      return tokenInfo.expires_at > Date.now();
    })();
    if (token && !tokenExpired) {
      return true;
    } else {
      return false;
    }
  },
  type: () => {
    const user2 = localStorage.getItem("user");
    if (user2) {
      const parsedUser = JSON.parse(user2);
      return parsedUser.user_type || "";
    }
    return "";
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("user-logged-out"));
    window.location.href = "/login";
  }
  // user: (() => {
  //     const userStr = localStorage.getItem('user');
  //     return userStr ? JSON.parse(userStr) as User : {
  //         email: '',
  //         name: '',
  //         user_type: ''
  //     } as User;
  // })(),
  // token_info: (() => {
  //     const tokenStr = localStorage.getItem('token_info');
  //     return tokenStr ? JSON.parse(tokenStr) as Token : {
  //         access_token: '',
  //         token_type: '',
  //         expires_at: 0,
  //         scopes: []
  //     } as Token;
  // })(),
  // set(res: { user: User, token: Token }) {
  //     this.user = res.user;
  //     this.token_info = res.token;
  //     localStorage.setItem('user', JSON.stringify(this.user));
  //     localStorage.setItem('token_info', JSON.stringify(this.token_info));
  // },
  // token(){
  //     return this.token_info.access_token;
  // },
  // tokenIsExpired() {
  //     return this.token_info.expires_at < Date.now();
  // },
  // type(){
  //     return this.user.user_type;
  // }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainOverLay",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    provide("pageContent", page.props.pageContent ?? {});
    onMounted(() => {
      const flash = page.props.flash;
      const flashSnack = flash == null ? void 0 : flash.snack;
      if (flashSnack) {
        if (flashSnack.type === "success") {
          snack.success(flashSnack.message);
        } else if (flashSnack.type === "error") {
          snack.error(flashSnack.message);
        }
      }
      if (page.props.user) {
        user.set(page.props.user);
      }
      if (page.props.token) {
        user.setToken(page.props.token);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="main-body" data-v-cf457693>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(AdminEditToggle, null, null, _parent));
      _push(ssrRenderComponent(StyleToolbarHost, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Overlays/MainOverLay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainOverLay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf457693"]]);
export {
  MainOverLay as M,
  user as u
};
