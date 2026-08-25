import { defineComponent, ref, watch, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Paginator",
  __ssrInlineRender: true,
  props: {
    current_page: {
      type: Number,
      required: true
    },
    last_page: {
      type: Number,
      required: true
    }
  },
  emits: ["page-changed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const goToInput = ref(props.current_page);
    watch(() => props.current_page, (newPage) => {
      goToInput.value = newPage;
    });
    const pageNumbers = computed(() => {
      const pages = [];
      const current = props.current_page;
      const last = props.last_page;
      if (last <= 7) {
        for (let i = 1; i <= last; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        const startRange = Math.max(2, current - 2);
        const endRange = Math.min(last - 1, current + 2);
        if (startRange > 2) {
          pages.push("ellipsis");
        }
        for (let i = startRange; i <= endRange; i++) {
          if (i !== 1 && i !== last) {
            pages.push(i);
          }
        }
        if (endRange < last - 1) {
          pages.push("ellipsis");
        }
        pages.push(last);
      }
      return pages;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination-container" }, _attrs))} data-v-9d7db4bc><a href="#" class="${ssrRenderClass([{ disabled: __props.current_page === 1 }, "pagination-item nav-arrow"])}" data-v-9d7db4bc> &lt; </a><!--[-->`);
      ssrRenderList(pageNumbers.value, (page, index) => {
        _push(`<!--[-->`);
        if (page === "ellipsis") {
          _push(`<span class="pagination-item ellipsis" data-v-9d7db4bc> ... </span>`);
        } else {
          _push(`<a href="#" class="${ssrRenderClass([{ active: page === __props.current_page }, "pagination-item"])}" data-v-9d7db4bc>${ssrInterpolate(page)}</a>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><a href="#" class="${ssrRenderClass([{ disabled: __props.current_page === __props.last_page }, "pagination-item nav-arrow"])}" data-v-9d7db4bc> &gt; </a><div class="pagination-divider" data-v-9d7db4bc></div><div class="goto-section" data-v-9d7db4bc><span data-v-9d7db4bc>Go to</span><input type="number"${ssrRenderAttr("min", 1)}${ssrRenderAttr("max", __props.last_page)}${ssrRenderAttr("value", goToInput.value)} data-v-9d7db4bc></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/Paginator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Paginator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d7db4bc"]]);
export {
  Paginator as P
};
