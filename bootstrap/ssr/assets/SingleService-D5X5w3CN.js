import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SingleService",
  __ssrInlineRender: true,
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-card" }, _attrs))} data-v-ea11dfc2><div class="img" style="${ssrRenderStyle(`background-image:url(${(_a = __props.service) == null ? void 0 : _a.image})`)}" data-v-ea11dfc2></div><div class="info" data-v-ea11dfc2><h2 class="title blue" data-v-ea11dfc2>${ssrInterpolate((_b = __props.service) == null ? void 0 : _b.title)}</h2><p class="big" data-v-ea11dfc2>${ssrInterpolate((_c = __props.service) == null ? void 0 : _c.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Services/SingleService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea11dfc2"]]);
export {
  SingleService as S
};
