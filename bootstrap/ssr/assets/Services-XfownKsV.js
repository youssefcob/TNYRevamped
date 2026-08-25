import { defineComponent, ref, onMounted, mergeProps, unref, useSSRContext, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { w as serviceState, a as EditableText } from "./NavBarV2-BlC3_Oet.js";
import { S as SingleService } from "./SingleService-D5X5w3CN.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { _ as _sfc_main$2 } from "./PageMeta-DrybHnC5.js";
import "vue3-toastify";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    services: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const serviceRef = ref([]);
    onMounted(() => {
      if (props.services) {
        serviceRef.value = props.services;
      } else {
        serviceRef.value = serviceState.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-6c62b653>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "title",
        "content-key": "services.title",
        page: "services",
        default: "Services"
      }, null, _parent));
      _push(`<br data-v-6c62b653>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "subtitle",
        "content-key": "services.subtitle",
        page: "services",
        default: "TNY Staffing Corporation - redefining staffing solutions"
      }, null, _parent));
      _push(`<br data-v-6c62b653>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "subtitle blue",
        "content-key": "services.why_title",
        page: "services",
        default: "Why TNY Staffing Corporation?"
      }, null, _parent));
      _push(`<div class="services-wrapper" data-v-6c62b653><!--[-->`);
      ssrRenderList(unref(serviceState), (service) => {
        _push(ssrRenderComponent(SingleService, {
          key: service.id,
          service
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Views/Services.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServicesView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c62b653"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    services: {
      type: Object
    }
  },
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        page: "services",
        path: "/services",
        "default-title": "Our Services | TNY Staffing Corporation",
        "default-description": "Explore TNY Staffing Corporation's healthcare staffing services, connecting NYC facilities with credentialed therapy professionals."
      }, null, _parent));
      _push(ssrRenderComponent(MainOverLay, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ServicesView, { services: __props.services }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ServicesView, { services: __props.services }, null, 8, ["services"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
