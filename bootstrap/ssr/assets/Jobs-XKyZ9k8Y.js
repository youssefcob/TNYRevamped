import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext, ref, onMounted, onUnmounted, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { j as jobState } from "./NavBarV2-BlC3_Oet.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { d as Carousel } from "./Services-D9r0IgR9.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "JobCard",
  __ssrInlineRender: true,
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "job-card" }, _attrs))} data-v-d868a690><div class="job-wrapper" data-v-d868a690><div class="info" data-v-d868a690><h2 class="title blue" data-v-d868a690>${ssrInterpolate((_a = __props.job) == null ? void 0 : _a.title)}</h2><p class="big" data-v-d868a690>${ssrInterpolate((_b = __props.job) == null ? void 0 : _b.description)}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: `/apply/${(_c = __props.job) == null ? void 0 : _c.title}`,
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Apply Now`);
          } else {
            return [
              createTextVNode("Apply Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Jobs/JobCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JobCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d868a690"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const numberOfCarouselItems = ref(1);
    const updateCarouselItems = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (isMobile) {
        numberOfCarouselItems.value = 1;
      } else if (isDesktop) {
        numberOfCarouselItems.value = 2;
      } else {
        numberOfCarouselItems.value = 2;
      }
    };
    const carousel = ref(null);
    onMounted(() => {
      updateCarouselItems();
      window.addEventListener("resize", updateCarouselItems);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateCarouselItems);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-b1296562><h2 class="title" data-v-b1296562>Job Seekers</h2><br data-v-b1296562><h2 class="subtitle" data-v-b1296562>TNY Staffing Corporation ... Navigating Careers, Fulfilling Dreams</h2><br data-v-b1296562><br data-v-b1296562><p data-v-b1296562>At TNY Staffing Corporation , we prioritize your success. Access tailored opportunities and expert matching with top employers. Benefit from personalized support and prepare to excel in your physical therapy career journey. Partner with us for confidence in unlocking growth opportunities.</p><br data-v-b1296562><br data-v-b1296562><span data-v-b1296562>From Job Seeker to Job Success: Let&#39;s Make It Happen!</span><br data-v-b1296562><br data-v-b1296562><h2 class="subtitle blue" data-v-b1296562>The Available Positions</h2><br data-v-b1296562><br data-v-b1296562><div class="employers-container" data-v-b1296562>`);
      _push(ssrRenderComponent(Carousel, {
        ref_key: "carousel",
        ref: carousel,
        snap: "",
        numberOfItems: numberOfCarouselItems.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(jobState), (job) => {
              _push2(ssrRenderComponent(JobCard, {
                class: "jobCard",
                job
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(jobState), (job) => {
                return openBlock(), createBlock(JobCard, {
                  class: "jobCard",
                  job
                }, null, 8, ["job"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="scroll-btns" data-v-b1296562><div class="left" data-v-b1296562><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b1296562><path d="M16.5001 35.34C16.1201 35.34 15.7401 35.2 15.4401 34.9L2.40006 21.86C0.280059 19.74 0.280059 16.26 2.40006 14.14L15.4401 1.10004C16.0201 0.520039 16.9801 0.520039 17.5601 1.10004C18.1401 1.68004 18.1401 2.64004 17.5601 3.22004L4.52006 16.26C3.56006 17.22 3.56006 18.78 4.52006 19.74L17.5601 32.78C18.1401 33.36 18.1401 34.32 17.5601 34.9C17.2601 35.18 16.8801 35.34 16.5001 35.34Z" fill="#969696" data-v-b1296562></path></svg></div><div class="right" data-v-b1296562><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b1296562><path d="M16.5001 35.34C16.1201 35.34 15.7401 35.2 15.4401 34.9L2.40006 21.86C0.280059 19.74 0.280059 16.26 2.40006 14.14L15.4401 1.10004C16.0201 0.520039 16.9801 0.520039 17.5601 1.10004C18.1401 1.68004 18.1401 2.64004 17.5601 3.22004L4.52006 16.26C3.56006 17.22 3.56006 18.78 4.52006 19.74L17.5601 32.78C18.1401 33.36 18.1401 34.32 17.5601 34.9C17.2601 35.18 16.8801 35.34 16.5001 35.34Z" fill="#969696" data-v-b1296562></path></svg></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Jobs/Jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Jobs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b1296562"]]);
export {
  Jobs as J
};
