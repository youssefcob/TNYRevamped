import { defineComponent, withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { V as VacancyCard } from "./VacancyCard-DB-5vshZ.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./NavBarV2-BlC3_Oet.js";
import "vue3-toastify";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "./btn-Dy2Hq9NM.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JobSeekersDashboard",
  __ssrInlineRender: true,
  props: {
    vacancies: {
      type: Array,
      default: () => []
    },
    bids: {
      type: Array,
      default: () => []
    },
    snack: {
      type: Object,
      default: null
    },
    applications: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    console.log(props.applications);
    const path = window.location.pathname.split("/").pop();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container" data-v-80b0c3de${_scopeId}><h1 class="title" data-v-80b0c3de${_scopeId}>Dashboard</h1><br data-v-80b0c3de${_scopeId}><br data-v-80b0c3de${_scopeId}><br data-v-80b0c3de${_scopeId}><ul class="nav" data-v-80b0c3de${_scopeId}><li data-v-80b0c3de${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/dashboard/applications",
              class: { active: unref(path) === "applications" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Applications `);
                } else {
                  return [
                    createTextVNode(" Applications ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-80b0c3de${_scopeId}></li></ul><br data-v-80b0c3de${_scopeId}><br data-v-80b0c3de${_scopeId}><div class="vacancies-wrapper" data-v-80b0c3de${_scopeId}><!--[-->`);
            ssrRenderList(__props.applications, (application) => {
              _push2(ssrRenderComponent(VacancyCard, {
                vacancy: application.vacancy,
                applied: "",
                applicationStatus: application.status
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container" }, [
                createVNode("h1", { class: "title" }, "Dashboard"),
                createVNode("br"),
                createVNode("br"),
                createVNode("br"),
                createVNode("ul", { class: "nav" }, [
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: "/dashboard/applications",
                      class: { active: unref(path) === "applications" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Applications ")
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  createVNode("li")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("div", { class: "vacancies-wrapper" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.applications, (application) => {
                    return openBlock(), createBlock(VacancyCard, {
                      vacancy: application.vacancy,
                      applied: "",
                      applicationStatus: application.status
                    }, null, 8, ["vacancy", "applicationStatus"]);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/JobSeekers/JobSeekersDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JobSeekersDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80b0c3de"]]);
export {
  JobSeekersDashboard as default
};
