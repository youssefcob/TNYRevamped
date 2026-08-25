import { defineComponent, withCtx, unref, createTextVNode, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./NavBarV2-BlC3_Oet.js";
import "vue3-toastify";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmployersProfile",
  __ssrInlineRender: true,
  props: {
    employer: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main data-v-842b72fc${_scopeId}><div class="container" style="${ssrRenderStyle(`background-image: url('/images/profile.jpg');`)}" data-v-842b72fc${_scopeId}><div class="profile" data-v-842b72fc${_scopeId}><div class="grid-wrapper" data-v-842b72fc${_scopeId}><p data-v-842b72fc${_scopeId}>Name: <span data-v-842b72fc${_scopeId}>${ssrInterpolate(__props.user.name)}</span></p><p data-v-842b72fc${_scopeId}>Email: <span data-v-842b72fc${_scopeId}>${ssrInterpolate(__props.user.email)}</span></p><p data-v-842b72fc${_scopeId}>Phone No: <span data-v-842b72fc${_scopeId}>${ssrInterpolate(__props.employer.phone_number)}</span></p>`);
            if (__props.employer.borough) {
              _push2(`<p data-v-842b72fc${_scopeId}>Borough: <span data-v-842b72fc${_scopeId}>${ssrInterpolate(__props.employer.borough)}</span></p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p data-v-842b72fc${_scopeId}>Facility Name: <span data-v-842b72fc${_scopeId}>${ssrInterpolate(__props.employer.facility_name)}</span></p></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/profile/edit",
              class: "btn"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`update profile`);
                } else {
                  return [
                    createTextVNode("update profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("div", {
                  class: "container",
                  style: `background-image: url('/images/profile.jpg');`
                }, [
                  createVNode("div", { class: "profile" }, [
                    createVNode("div", { class: "grid-wrapper" }, [
                      createVNode("p", null, [
                        createTextVNode("Name: "),
                        createVNode("span", null, toDisplayString(__props.user.name), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Email: "),
                        createVNode("span", null, toDisplayString(__props.user.email), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Phone No: "),
                        createVNode("span", null, toDisplayString(__props.employer.phone_number), 1)
                      ]),
                      __props.employer.borough ? (openBlock(), createBlock("p", { key: 0 }, [
                        createTextVNode("Borough: "),
                        createVNode("span", null, toDisplayString(__props.employer.borough), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("p", null, [
                        createTextVNode("Facility Name: "),
                        createVNode("span", null, toDisplayString(__props.employer.facility_name), 1)
                      ])
                    ]),
                    createVNode(unref(Link), {
                      href: "/profile/edit",
                      class: "btn"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("update profile")
                      ]),
                      _: 1
                    })
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Employers/EmployersProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmployersProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-842b72fc"]]);
export {
  EmployersProfile as default
};
