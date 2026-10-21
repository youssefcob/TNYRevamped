import { defineComponent, computed, mergeProps, useSSRContext, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./PageMeta-RDJ3sdSO.js";
import { L as LayoutV2 } from "./LayoutV2-Cv_msxRR.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./FooterV2-L8NNvjgt.js";
import "vue3-toastify";
import "./StyleToolbarHost-99_vtE-Q.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThankYouSection",
  __ssrInlineRender: true,
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const content = {
      contact: {
        label: "Message Sent",
        title: "Thanks For Reaching Out!",
        body: "We've received your message and a member of our team will get back to you shortly.",
        secondaryCta: { label: "Browse Our Services", href: "/services" }
      },
      apply: {
        label: "Application Received",
        title: "You're All Set!",
        body: "Thank you for applying. Our recruitment team will review your profile and reach out within 1–2 business days.",
        secondaryCta: { label: "View Open Positions", href: "/candidates" }
      },
      "request-service": {
        label: "Request Submitted",
        title: "We've Got Your Request!",
        body: "Our staffing specialists will review your requirements and reach out within one business day.",
        secondaryCta: { label: "Explore Our Services", href: "/services" }
      }
    };
    const copy = computed(() => content[props.type] ?? content.contact);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "ty-hero" }, _attrs))} data-v-1ef657d0><div class="ty-hero__inner" data-v-1ef657d0><div class="ty-hero__icon" data-v-1ef657d0><svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true" data-v-1ef657d0><circle cx="32" cy="32" r="32" fill="#FF9B37" fill-opacity="0.15" data-v-1ef657d0></circle><path d="M19 33L28 42L45 23" stroke="#FF9B37" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-1ef657d0></path></svg></div><p class="ty-hero__label" data-v-1ef657d0>${ssrInterpolate(copy.value.label)}</p><h1 class="ty-hero__title" data-v-1ef657d0>${ssrInterpolate(copy.value.title)}</h1><p class="ty-hero__body" data-v-1ef657d0>${ssrInterpolate(copy.value.body)}</p><div class="ty-hero__actions" data-v-1ef657d0><a href="/" class="ty-hero__btn ty-hero__btn--orange" data-v-1ef657d0>Back To Home</a><a${ssrRenderAttr("href", copy.value.secondaryCta.href)} class="ty-hero__btn ty-hero__btn--white" data-v-1ef657d0>${ssrInterpolate(copy.value.secondaryCta.label)}</a></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ThankYou/ThankYouSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ThankYouSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1ef657d0"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThankYou",
  __ssrInlineRender: true,
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const meta = {
      contact: {
        title: "Message Sent | TNY Staffing",
        description: "Thanks for reaching out to TNY Staffing. We've received your message and will be in touch shortly."
      },
      apply: {
        title: "Application Received | TNY Staffing",
        description: "Thank you for applying to TNY Staffing. Our recruitment team will review your profile and reach out soon."
      },
      "request-service": {
        title: "Request Submitted | TNY Staffing",
        description: "Thank you for your staffing request. Our team will review your requirements and reach out within one business day."
      }
    };
    const currentMeta = computed(() => meta[props.type] ?? meta.contact);
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        page: `thank-you-${_ctx.type}`,
        path: `/thank-you/${_ctx.type}`,
        "default-title": currentMeta.value.title,
        "default-description": currentMeta.value.description
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ThankYouSection, { type: _ctx.type }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ThankYouSection, { type: _ctx.type }, null, 8, ["type"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ThankYou.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
