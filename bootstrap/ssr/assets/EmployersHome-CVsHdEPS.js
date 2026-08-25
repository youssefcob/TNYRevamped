import { defineComponent, onMounted, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, A as AboutUs, N as Numbers, W as WhatSetsUs, S as Services, a as NewsAndEvents, C as Clients, T as Testimonials, b as Team, c as ContactUs, M as Map } from "./Services-D9r0IgR9.js";
import { J as Jobs } from "./Jobs-XKyZ9k8Y.js";
import { u as user, M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { b as assignHero, c as assignService, e as assignJob, f as assignNews, g as assignClient, h as assignTestimonial, i as assignTeam, k as assignTalent, l as assignVacancies, m as assignJobSeekerProfile, s as snack } from "./NavBarV2-BlC3_Oet.js";
import { T as Talents } from "./Talents-B1aKG2JL.js";
import "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./btn-Dy2Hq9NM.js";
import "./InputField-DzB3f-5L.js";
import "maska/vue";
import "./Validation-eqo6rfcO.js";
import "axios";
import "moment";
import "./DevFillButton-C8XbAzkC.js";
import "@inertiajs/vue3";
import "./SingleService-D5X5w3CN.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
import "./JobSeekerCard-Cs8a0tCA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmployersHome",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object
    },
    token: {
      type: Object
    },
    hero: {
      type: Object
    },
    services: {
      type: Object
    },
    talent: {
      type: Object
    },
    jobs: {
      type: Object
    },
    news: {
      type: Object
    },
    clients: {
      type: Object
    },
    testimonials: {
      type: Object
    },
    team: {
      type: Object
    },
    vacancies: {
      type: Object
    },
    employer: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      if (props.hero) {
        assignHero(props.hero);
      }
      if (props.services) {
        assignService(props.services);
      }
      if (props.jobs) {
        assignJob(props.jobs);
      }
      if (props.news) {
        assignNews(props.news);
      }
      if (props.clients) {
        assignClient(props.clients);
      }
      if (props.testimonials) {
        assignTestimonial(props.testimonials);
      }
      if (props.team) {
        assignTeam(props.team);
      }
      if (props.talent) {
        assignTalent(props.talent);
      }
      if (props.user) {
        user.set(props.user);
      }
      if (props.token) {
        user.setToken(props.token);
      }
      if (props.vacancies) {
        assignVacancies(props.vacancies);
      }
      if (props.employer) {
        assignJobSeekerProfile(props.employer);
      }
    });
    onMounted(() => {
      if (!props.employer) {
        snack.error("Complete your profile to apply for jobs");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section id="home"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</section><section id="about"${_scopeId}>`);
            _push2(ssrRenderComponent(AboutUs, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(Numbers, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(Talents, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(WhatSetsUs, null, null, _parent2, _scopeId));
            _push2(`</section><section id="services"${_scopeId}>`);
            _push2(ssrRenderComponent(Services, null, null, _parent2, _scopeId));
            _push2(`</section><section id="jobs"${_scopeId}>`);
            _push2(ssrRenderComponent(Jobs, null, null, _parent2, _scopeId));
            _push2(`</section><section id="news"${_scopeId}>`);
            _push2(ssrRenderComponent(NewsAndEvents, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(Clients, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(Testimonials, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(Team, null, null, _parent2, _scopeId));
            _push2(`</section><section id="contact"${_scopeId}>`);
            _push2(ssrRenderComponent(ContactUs, null, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(Map, null, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { id: "home" }, [
                createVNode(_sfc_main$1)
              ]),
              createVNode("section", { id: "about" }, [
                createVNode(AboutUs)
              ]),
              createVNode("section", null, [
                createVNode(Numbers)
              ]),
              createVNode("section", null, [
                createVNode(Talents)
              ]),
              createVNode("section", null, [
                createVNode(WhatSetsUs)
              ]),
              createVNode("section", { id: "services" }, [
                createVNode(Services)
              ]),
              createVNode("section", { id: "jobs" }, [
                createVNode(Jobs)
              ]),
              createVNode("section", { id: "news" }, [
                createVNode(NewsAndEvents)
              ]),
              createVNode("section", null, [
                createVNode(Clients)
              ]),
              createVNode("section", null, [
                createVNode(Testimonials)
              ]),
              createVNode("section", null, [
                createVNode(Team)
              ]),
              createVNode("section", { id: "contact" }, [
                createVNode(ContactUs)
              ]),
              createVNode("section", null, [
                createVNode(Map)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Employers/EmployersHome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
