import { defineComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./NavBarV2-BlC3_Oet.js";
import "vue3-toastify";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JobSeekerProfile",
  __ssrInlineRender: true,
  props: {
    job_seeker: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const calculateAge = (dob) => {
      const birthDate = new Date(dob);
      const today = /* @__PURE__ */ new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main data-v-45ef033f${_scopeId}><div class="container" style="${ssrRenderStyle(`background-image: url('/images/profile.jpg');`)}" data-v-45ef033f${_scopeId}><div class="profile" data-v-45ef033f${_scopeId}><div class="grid-wrapper" data-v-45ef033f${_scopeId}><p data-v-45ef033f${_scopeId}>Name: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.user.name)}</span></p><p data-v-45ef033f${_scopeId}>Email: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.user.email)}</span></p><p data-v-45ef033f${_scopeId}>Position: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.position.title)}</span></p><p data-v-45ef033f${_scopeId}>Phone No: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.phone_number)}</span></p><p data-v-45ef033f${_scopeId}>Borough: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.preferred_location)}</span></p><p data-v-45ef033f${_scopeId}>Shift Type: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.shift_type)}</span></p><p data-v-45ef033f${_scopeId}>Salary/hr: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.rate_per_hour)}</span></p><p data-v-45ef033f${_scopeId}>Age: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(calculateAge(__props.job_seeker.dob))} years</span></p><p data-v-45ef033f${_scopeId}>Facility Type: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.facility_type)}</span></p><p data-v-45ef033f${_scopeId}>Availability to Start: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.availability_to_start)}</span></p><p data-v-45ef033f${_scopeId}>Payment Type: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.payment_type)}</span></p><p data-v-45ef033f${_scopeId}>Employment Status: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.is_employed ? "Employed" : "Unemployed")}</span></p><p data-v-45ef033f${_scopeId}>Experience: <span data-v-45ef033f${_scopeId}>${ssrInterpolate(__props.job_seeker.experience)}</span></p><p data-v-45ef033f${_scopeId}>Resume: <span data-v-45ef033f${_scopeId}>`);
            if (__props.job_seeker.resume) {
              _push2(`<a${ssrRenderAttr("href", __props.job_seeker.resume)} data-v-45ef033f${_scopeId}>Downloaded</a>`);
            } else {
              _push2(`<span data-v-45ef033f${_scopeId}>No Resume Uploaded</span>`);
            }
            _push2(`</span></p></div>`);
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
                        createTextVNode("Position: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.position.title), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Phone No: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.phone_number), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Borough: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.preferred_location), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Shift Type: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.shift_type), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Salary/hr: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.rate_per_hour), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Age: "),
                        createVNode("span", null, toDisplayString(calculateAge(__props.job_seeker.dob)) + " years", 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Facility Type: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.facility_type), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Availability to Start: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.availability_to_start), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Payment Type: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.payment_type), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Employment Status: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.is_employed ? "Employed" : "Unemployed"), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Experience: "),
                        createVNode("span", null, toDisplayString(__props.job_seeker.experience), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Resume: "),
                        createVNode("span", null, [
                          __props.job_seeker.resume ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: __props.job_seeker.resume
                          }, "Downloaded", 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, "No Resume Uploaded"))
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/JobSeekers/JobSeekerProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JobSeekerProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45ef033f"]]);
export {
  JobSeekerProfile as default
};
