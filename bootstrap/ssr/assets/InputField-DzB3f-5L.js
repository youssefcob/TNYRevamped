import { defineComponent, ref, watch, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { vMaska } from "maska/vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputField",
  __ssrInlineRender: true,
  props: {
    required: Boolean,
    optional: Boolean,
    placeHolder: String,
    asteriskPosition: String,
    height: String,
    mask: String,
    name: String,
    disabled: Boolean,
    error: Boolean,
    date: Boolean,
    minYear: String,
    maxYear: String,
    lettersOnly: Boolean,
    numbersOnly: Boolean,
    value: String,
    background: String,
    label: String,
    type: {
      type: String,
      default: "text"
    }
  },
  emits: [`input`, "update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const clear = () => {
      input.value = "";
      emitInput();
    };
    const setValue = (value) => {
      var _a, _b;
      input.value = value;
      if (input.value.length > 0) {
        (_a = asterisk.value) == null ? void 0 : _a.classList.add("active");
      } else {
        (_b = asterisk.value) == null ? void 0 : _b.classList.remove("active");
      }
      emitInput();
    };
    let input = ref(props.value || "");
    const emit = __emit;
    const emitInput = () => {
      emit(`update:modelValue`, input.value);
      emit(`input`, input.value);
    };
    watch(() => input.value, () => {
      handleInput();
    });
    const asterisk = ref(null);
    const handleInput = () => {
      var _a, _b;
      if (props.date) {
        let value = input.value;
        if (value.length === 2) {
          if (parseInt(value) > 12) {
            input.value = "12-";
          }
          if (parseInt(value) === 0) {
            input.value = "01-";
          }
        }
        if (value.length === 5) {
          let dayValue = parseInt(value.split("-")[1]);
          if (dayValue > 31) {
            input.value = `${value.split("-")[0]}-31-`;
          }
          if (dayValue === 0) {
            input.value = `${value.split("-")[0]}-01-`;
          }
        }
        if (value.length === 10) {
          if (props.maxYear) {
            if (parseInt(value.split("-")[2]) > (/* @__PURE__ */ new Date()).getFullYear() + parseInt(props.maxYear)) {
              input.value = `${value.split("-")[0]}-${value.split("-")[1]}-${(/* @__PURE__ */ new Date()).getFullYear() + parseInt(props.maxYear)}`;
            }
          }
          if (props.minYear) {
            if (parseInt(value.split("-")[2]) < (/* @__PURE__ */ new Date()).getFullYear() + parseInt(props.minYear)) {
              input.value = `${value.split("-")[0]}-${value.split("-")[1]}-${(/* @__PURE__ */ new Date()).getFullYear() + parseInt(props.minYear)}`;
            }
          }
        }
      }
      if (props.lettersOnly) {
        let value = input.value;
        let regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(value)) {
          input.value = value.slice(0, -1);
          return;
        }
      }
      if (props.numbersOnly) {
        let value = input.value;
        let regex = /^[0-9]*$/;
        if (!regex.test(value)) {
          input.value = value.slice(0, -1);
          return;
        }
      }
      if (input.value.length > 0) {
        (_a = asterisk.value) == null ? void 0 : _a.classList.add("active");
      } else {
        (_b = asterisk.value) == null ? void 0 : _b.classList.remove("active");
      }
      emitInput();
    };
    const CalcHeight = () => {
      if (props.height) {
        return `height:${props.height}`;
      }
      return "";
    };
    const CalcTop = () => {
      if (props.height) {
        return `top:16px`;
      }
      return "";
    };
    onMounted(() => {
      var _a, _b;
      if (input.value.length > 0) {
        (_a = asterisk.value) == null ? void 0 : _a.classList.add("active");
      } else {
        (_b = asterisk.value) == null ? void 0 : _b.classList.remove("active");
      }
      if (props.value) {
        emitInput();
      }
    });
    __expose({
      clear,
      setValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3535460e><label${ssrRenderAttr("for", __props.label)} class="label" data-v-3535460e>${ssrInterpolate(__props.label)}</label><div class="required" data-v-3535460e>`);
      if (!_ctx.$props.height) {
        _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
          disabled: _ctx.$props.disabled,
          class: "input-field",
          style: `width:100%; ${CalcHeight()};${_ctx.$props.error ? "border-color:red" : ""};${props.background ? `background-color:${props.background}` : "white"}`,
          type: props.type,
          name: __props.name
        }, ssrGetDirectiveProps(_ctx, unref(vMaska), __props.mask)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(input)))))} data-v-3535460e>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$props.height) {
        _push(`<textarea${ssrIncludeBooleanAttr(_ctx.$props.disabled) ? " disabled" : ""} class="input-field" style="${ssrRenderStyle(`width:100%;resize:none; ${CalcHeight()};${_ctx.$props.error ? "border-color:red" : ""}`)}"${ssrRenderAttr("type", props.type)} data-v-3535460e>${ssrInterpolate(unref(input))}</textarea>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="asterisk" style="${ssrRenderStyle(`${CalcTop()};`)}" data-v-3535460e>${ssrInterpolate(_ctx.$props.placeHolder)}`);
      if (props.required) {
        _push(`<span style="${ssrRenderStyle({ "color": "red" })}" data-v-3535460e>  *</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` `);
      if (_ctx.$props.optional) {
        _push(`<span class="ps" data-v-3535460e>(Optional)</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/InputField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputField = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3535460e"]]);
export {
  InputField as I
};
