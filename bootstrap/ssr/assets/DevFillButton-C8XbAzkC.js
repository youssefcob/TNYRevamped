import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DevFillButton",
  __ssrInlineRender: true,
  emits: ["fill"],
  setup(__props) {
    const isDev = typeof localStorage !== "undefined" && localStorage.getItem("test") === "1";
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isDev)) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: "button",
          class: "dev-fill-btn",
          title: "Fill form with test data (dev only, hidden in production)"
        }, _attrs))} data-v-55436553> Fill Test Data </button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/DevFillButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DevFillButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55436553"]]);
export {
  DevFillButton as D
};
