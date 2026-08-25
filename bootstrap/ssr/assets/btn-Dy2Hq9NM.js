import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Spinner",
  __ssrInlineRender: true,
  props: {
    balls: {
      type: Number,
      default: 4
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner" }, _attrs))} data-v-d96e4ca3><!--[-->`);
      ssrRenderList(__props.balls, (ball) => {
        _push(`<div class="spinner__circle" data-v-d96e4ca3></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/Spinner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d96e4ca3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "btn",
  __ssrInlineRender: true,
  props: {
    class: {
      type: String,
      default: "btn"
    },
    loading: {
      type: Boolean,
      default: false
    },
    balls: {
      type: Number,
      default: 4
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "btn " + props.class,
        disabled: props.loading
      }, _attrs))} data-v-10529982>`);
      if (!props.loading) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(ssrRenderComponent(Spinner, { balls: __props.balls }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/btn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Btn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10529982"]]);
export {
  Btn as B
};
