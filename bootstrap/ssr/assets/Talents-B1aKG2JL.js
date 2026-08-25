import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { J as JobSeekerCard } from "./JobSeekerCard-Cs8a0tCA.js";
import { t as talentState } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Talents",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(talentState).length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e978887f><h2 class="title" data-v-e978887f>Talents</h2><br data-v-e978887f><h2 class="subtitle" data-v-e978887f>TNY Staffing Corporation </h2><h3 data-v-e978887f>Your Gateway to Top-tier Talent and Seamless Integration</h3><br data-v-e978887f><br data-v-e978887f><br data-v-e978887f><div class="job-seeker-wrapper" data-v-e978887f><!--[-->`);
        ssrRenderList(unref(talentState), (talent) => {
          _push(ssrRenderComponent(JobSeekerCard, {
            key: talent.id,
            jobSeeker: talent
          }, null, _parent));
        });
        _push(`<!--]--></div><a href="talents" class="more" data-v-e978887f>Show More Talents</a></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Talents/Talents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Talents = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e978887f"]]);
export {
  Talents as T
};
