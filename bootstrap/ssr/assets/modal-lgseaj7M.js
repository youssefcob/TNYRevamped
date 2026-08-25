import { defineComponent, ref, onMounted, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modal",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const modal = ref(null);
    let modalState = ref(false);
    const container = ref(null);
    const openModal = () => {
      if (modal.value) modal.value.showModal();
      setTimeout(() => {
        modalState.value = true;
      }, 100);
    };
    const closeModal = () => {
      if (modal.value) modal.value.close();
      modalState.value = false;
    };
    onMounted(() => {
      document.addEventListener("click", (e) => {
        var _a;
        if (modalState.value == true && !((_a = container.value) == null ? void 0 : _a.contains(e.target))) {
          modalState.value = false;
          closeModal();
        }
      });
    });
    __expose({
      openModal,
      closeModal
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8007288b><div class="modal-container" data-v-8007288b><dialog data-v-8007288b><div data-v-8007288b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></dialog></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8007288b"]]);
export {
  Modal as M
};
