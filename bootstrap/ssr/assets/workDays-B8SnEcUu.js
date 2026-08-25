import { defineComponent, ref, watch, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "workDays",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const props = __props;
    const emit = __emit;
    const selected = ref([...props.value]);
    watch(
      () => props.modelValue,
      (val) => {
        selected.value = [...val];
      }
    );
    onMounted(() => {
      emit("update:modelValue", selected.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "workdays-container" }, _attrs))} data-v-b3514df1><div class="workdays-label" data-v-b3514df1>Work Days</div><div class="workdays-box input-field" data-v-b3514df1><div class="workdays-list" data-v-b3514df1><!--[-->`);
      ssrRenderList(days, (day) => {
        _push(`<button class="${ssrRenderClass(["workday-btn", { selected: selected.value.includes(day) }])}" type="button" data-v-b3514df1>${ssrInterpolate(day)}</button>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/workDays.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WorkDays = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3514df1"]]);
export {
  WorkDays as W
};
