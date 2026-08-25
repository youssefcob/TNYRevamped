import { defineComponent, ref, onMounted, onUnmounted, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DropDownInputField",
  __ssrInlineRender: true,
  props: {
    required: Boolean,
    list: Array,
    placeHolder: String,
    watch: Boolean,
    disabled: Boolean,
    error: Boolean,
    default: String,
    background: String,
    label: String,
    value: String
  },
  emits: [`input`, "update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    let filteredList = ref(props.list);
    const emit = __emit;
    const emitInput = () => {
      emit(`update:modelValue`, input.value);
      emit(`input`, input.value);
    };
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
    ref(null);
    let id = makeid(5);
    const input = ref("");
    const show = ref(false);
    const clear = () => {
      input.value = "";
      emit(`update:modelValue`, input.value);
      emit(`input`, input.value);
    };
    const defaultValue = (value) => {
      var _a, _b;
      input.value = value;
      if (input.value.length > 0) {
        (_a = asterisk.value) == null ? void 0 : _a.classList.add("active");
      } else {
        (_b = asterisk.value) == null ? void 0 : _b.classList.remove("active");
      }
      emit(`update:modelValue`, input.value);
      emit(`input`, input.value);
    };
    const asterisk = ref(null);
    let handleClickOutside;
    onMounted(() => {
      handleClickOutside = (e) => {
        const dropdownElement = document.querySelector(`.drpdown-btn.${id}`);
        if (dropdownElement && !dropdownElement.contains(e.target)) {
          show.value = false;
        }
      };
      document.addEventListener("click", handleClickOutside);
      if (props.default) {
        input.value = props.default;
        emitInput();
      }
      if (props.value) {
        input.value = props.value;
        emitInput();
      }
    });
    onMounted(() => {
      var _a, _b;
      if (input.value.length > 0) {
        (_a = asterisk.value) == null ? void 0 : _a.classList.add("active");
      } else {
        (_b = asterisk.value) == null ? void 0 : _b.classList.remove("active");
      }
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    __expose({
      clear,
      defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4dfdf4fa><label${ssrRenderAttr("for", __props.label)} class="label" data-v-4dfdf4fa>${ssrInterpolate(__props.label)}</label><div class="${ssrRenderClass(`drpdown-btn ${unref(id)}`)}" data-v-4dfdf4fa><div class="required" data-v-4dfdf4fa><input${ssrRenderAttr("name", __props.label)}${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""} class="input-field"${ssrRenderAttr("value", input.value)} style="${ssrRenderStyle(`width:100%;$;${_ctx.$props.error ? "border-color:red" : ""};${__props.background ? `background-color:${__props.background}` : "white"}`)}" type="text" data-v-4dfdf4fa><label class="${ssrRenderClass(`asterisk `)}" data-v-4dfdf4fa>${ssrInterpolate(_ctx.$props.placeHolder)}`);
      if (props.required) {
        _push(`<span style="${ssrRenderStyle({ "color": "red" })}" data-v-4dfdf4fa> *</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(`arrowdown `)}" data-v-4dfdf4fa><svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 7" fill="none" data-v-4dfdf4fa><path d="M1 1L6 6L11 1" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-4dfdf4fa></path></svg></label></div>`);
      if (show.value && ((_a = unref(filteredList)) == null ? void 0 : _a.length) && !_ctx.$props.disabled) {
        _push(`<div class="dropdown-wrapper {{ id }}" data-v-4dfdf4fa><div class="dropdown-list {{ identifier }}" data-v-4dfdf4fa><!--[-->`);
        ssrRenderList(unref(filteredList), (insurance) => {
          _push(`<div class="dropdown-item" data-v-4dfdf4fa>${ssrInterpolate(insurance)}</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/DropDownInputField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DropDownInputField = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4dfdf4fa"]]);
export {
  DropDownInputField as D
};
