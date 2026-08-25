import { defineComponent, mergeProps, useSSRContext, ref, computed, withCtx, createBlock, createCommentVNode, openBlock, createVNode, toDisplayString, provide } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { a as EditableText } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { M as Modal } from "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CandidateHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cand-hero" }, _attrs))} data-v-91755ede><div class="cand-hero__inner" data-v-91755ede>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "cand-hero__title",
        "content-key": "candidates.hero.title",
        page: "candidates",
        default: "The Flexible Therapy Career You've Been Looking For."
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "cand-hero__subtitle",
        "content-key": "candidates.hero.subtitle",
        page: "candidates",
        default: "Join a growing community of rehabilitation professionals working where they're needed most—across hospitals, outpatient clinics, skilled nursing facilities, schools, and home healthcare throughout NYC."
      }, null, _parent));
      _push(`<a href="#openings" class="cand-hero__btn" data-v-91755ede>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "candidates.hero.cta",
        page: "candidates",
        default: "Browse Openings"
      }, null, _parent));
      _push(`</a></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ForCandidates/CandidateHeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CandidateHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-91755ede"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "JobListingsSection",
  __ssrInlineRender: true,
  props: {
    positions: {}
  },
  setup(__props) {
    const props = __props;
    const search = ref("");
    const filtered = computed(() => {
      const q = search.value.toLowerCase().trim();
      if (!q) return props.positions;
      return props.positions.filter(
        (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    });
    const detailsModal = ref(null);
    const activePosition = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "openings",
        class: "listings"
      }, _attrs))} data-v-a6978be5><div class="listings__inner" data-v-a6978be5><div class="listings__header" data-v-a6978be5>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "listings__label",
        "content-key": "candidates.listings.label",
        page: "candidates",
        default: "Open Positions"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "h2",
        class: "listings__title",
        "content-key": "candidates.listings.title",
        page: "candidates",
        default: "Explore Current Opportunities"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "listings__subtitle",
        "content-key": "candidates.listings.subtitle",
        page: "candidates",
        default: "Explore flexible therapy opportunities across specialties, healthcare environments, and every NYC borough."
      }, null, _parent));
      _push(`</div><div class="listings__filters" data-v-a6978be5><div class="listings__search-wrap" data-v-a6978be5><svg class="listings__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-a6978be5><circle cx="11" cy="11" r="8" data-v-a6978be5></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-a6978be5></line></svg><input${ssrRenderAttr("value", search.value)} type="text" class="listings__search" placeholder="Search by role, specialty, or location" data-v-a6978be5></div></div><div class="listings__table-wrap" data-v-a6978be5><div class="listings__table" data-v-a6978be5><div class="listings__thead" data-v-a6978be5><div class="listings__th listings__th--position" data-v-a6978be5>Position</div><div class="listings__th listings__th--cols" data-v-a6978be5><span data-v-a6978be5>Location</span><span data-v-a6978be5>Type</span><span data-v-a6978be5>Setting</span><span data-v-a6978be5>Action</span></div></div>`);
      if (filtered.value.length === 0) {
        _push(`<div class="listings__empty" data-v-a6978be5><p data-v-a6978be5>No open positions found${ssrInterpolate(search.value ? " matching your search" : "")}.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(filtered.value, (pos, idx) => {
        _push(`<div class="${ssrRenderClass([{ "listings__row--last": idx === filtered.value.length - 1 }, "listings__row"])}" data-v-a6978be5><div class="listings__cell listings__cell--position" data-v-a6978be5><p class="listings__pos-title" data-v-a6978be5>${ssrInterpolate(pos.title)}</p></div><div class="listings__cell listings__cell--cols" data-v-a6978be5><span class="listings__cell-text" data-v-a6978be5>New York, NY</span><span class="listings__cell-text" data-v-a6978be5>Full-Time</span><span class="listings__cell-text" data-v-a6978be5>—</span><div class="listings__actions" data-v-a6978be5><button type="button" class="listings__view-btn" data-v-a6978be5>View</button><a${ssrRenderAttr("href", `/apply/${encodeURIComponent(pos.title)}`)} class="listings__apply-btn" data-v-a6978be5>Apply</a></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(Modal, {
        ref_key: "detailsModal",
        ref: detailsModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (activePosition.value) {
              _push2(`<div class="job-details" data-v-a6978be5${_scopeId}><h3 data-v-a6978be5${_scopeId}>${ssrInterpolate(activePosition.value.title)}</h3><p class="job-details__meta" data-v-a6978be5${_scopeId}>${ssrInterpolate(activePosition.value.address || "New York, NY")} · Full-Time </p><p class="job-details__desc" data-v-a6978be5${_scopeId}>${ssrInterpolate(activePosition.value.description)}</p><a${ssrRenderAttr("href", `/apply/${encodeURIComponent(activePosition.value.title)}`)} class="listings__apply-btn job-details__apply" data-v-a6978be5${_scopeId}>Apply</a></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              activePosition.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "job-details"
              }, [
                createVNode("h3", null, toDisplayString(activePosition.value.title), 1),
                createVNode("p", { class: "job-details__meta" }, toDisplayString(activePosition.value.address || "New York, NY") + " · Full-Time ", 1),
                createVNode("p", { class: "job-details__desc" }, toDisplayString(activePosition.value.description), 1),
                createVNode("a", {
                  href: `/apply/${encodeURIComponent(activePosition.value.title)}`,
                  class: "listings__apply-btn job-details__apply"
                }, "Apply", 8, ["href"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ForCandidates/JobListingsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JobListingsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a6978be5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Candidates",
  __ssrInlineRender: true,
  props: {
    positions: {}
  },
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        page: "candidates",
        path: "/candidates",
        "default-title": "Therapy Jobs in NYC | PT, OT & SLP Careers | TNY Staffing",
        "default-description": "Explore flexible therapy jobs in NYC. TNY Staffing hires PTs, OTs, SLPs, Medical Assistants, and Exercise Physiologists for top healthcare facilities. Apply today."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CandidateHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(JobListingsSection, { positions: _ctx.positions }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(CandidateHeroSection),
              createVNode(JobListingsSection, { positions: _ctx.positions }, null, 8, ["positions"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Candidates.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
