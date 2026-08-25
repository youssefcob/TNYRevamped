import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FileInputField",
  __ssrInlineRender: true,
  props: {
    placeHolder: String,
    required: Boolean,
    label: String
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const makeid = (length) => {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    };
    let id = makeid(5);
    ref(null);
    let initialFileName = props.placeHolder || "";
    let fileName = ref(props.placeHolder || "");
    const checkName = () => {
      return fileName.value === initialFileName;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f3ad867b><input type="file" class="${ssrRenderClass(`real-file-input ${unref(id)}`)}" data-v-f3ad867b><label${ssrRenderAttr("for", __props.label)} class="label" data-v-f3ad867b>${ssrInterpolate(__props.label)}</label><div class="${ssrRenderClass(`file-input ${unref(id)} big-screen`)}" data-v-f3ad867b><div class="file-placeHolder" data-v-f3ad867b><div data-v-f3ad867b><label data-v-f3ad867b>${ssrInterpolate(unref(fileName))}</label>`);
      if (__props.required && checkName()) {
        _push(`<span style="${ssrRenderStyle({ "color": "red" })}" data-v-f3ad867b>*</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-f3ad867b><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f3ad867b><path d="M21 15.5938V19.5938C21 20.1242 20.7893 20.6329 20.4142 21.008C20.0391 21.383 19.5304 21.5938 19 21.5938H5C4.46957 21.5938 3.96086 21.383 3.58579 21.008C3.21071 20.6329 3 20.1242 3 19.5938V15.5938" stroke="#135672" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f3ad867b></path><path d="M7 10.5938L12 15.5938L17 10.5938" stroke="#135672" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f3ad867b></path><path d="M12 15.5938V3.59375" stroke="#135672" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f3ad867b></path></svg></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/FileInputField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FileInputField = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3ad867b"]]);
export {
  FileInputField as F
};
