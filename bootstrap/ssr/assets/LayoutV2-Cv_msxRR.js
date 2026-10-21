import { defineComponent, provide, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { N as Navbar, x as FooterV2 } from "./FooterV2-L8NNvjgt.js";
import { A as AdminEditToggle, S as StyleToolbarHost } from "./StyleToolbarHost-99_vtE-Q.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LayoutV2",
  __ssrInlineRender: true,
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-v2" }, _attrs))} data-v-bcbdd32e>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="layout-v2__body" data-v-bcbdd32e>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(FooterV2, null, null, _parent));
      _push(ssrRenderComponent(AdminEditToggle, null, null, _parent));
      _push(ssrRenderComponent(StyleToolbarHost, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/LayoutV2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LayoutV2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bcbdd32e"]]);
export {
  LayoutV2 as L
};
