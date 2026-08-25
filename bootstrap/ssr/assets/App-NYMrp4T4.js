import { defineComponent, onMounted, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { b as assignHero, c as assignService, d as assignEmployer, e as assignJob, f as assignNews, g as assignClient, h as assignTestimonial, i as assignTeam, N as Navbar } from "./NavBarV2-BlC3_Oet.js";
import { F as Footer } from "./Foot-6aX9-mt3.js";
import "@inertiajs/vue3";
import "vue3-toastify";
import "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./modal-lgseaj7M.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  props: {
    hero: {
      type: Object
    },
    services: {
      type: Object
    },
    employers: {
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
      if (props.employers) {
        assignEmployer(props.employers);
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
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
