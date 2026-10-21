import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => title || "TNY",
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/About.vue": () => import("./assets/About-DQURUjYf.js"), "./Pages/Admin/MetaTags.vue": () => import("./assets/MetaTags-DWMEe3M2.js"), "./Pages/Admin/Redirects.vue": () => import("./assets/Redirects-D1yP1KIP.js"), "./Pages/Admin/Sitemap.vue": () => import("./assets/Sitemap-DVSgQNBp.js"), "./Pages/Admin/TextStyles.vue": () => import("./assets/TextStyles-7jiXufg5.js"), "./Pages/App.vue": () => import("./assets/App-Dq5IDPCi.js"), "./Pages/Apply.vue": () => import("./assets/Apply-BM3cZ1T_.js"), "./Pages/Articles.vue": () => import("./assets/Articles-zjLGYj-e.js"), "./Pages/Articles/StudioArticle.vue": () => import("./assets/StudioArticle-CoMfxQQ6.js"), "./Pages/Auth/AdminLogin.vue": () => import("./assets/AdminLogin-CPF2xhZ4.js"), "./Pages/Auth/Forget.vue": () => import("./assets/Forget-BSiKOC0J.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-15evI2Hn.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-Z1oV1__t.js"), "./Pages/Candidates.vue": () => import("./assets/Candidates-Dn_CiCMD.js"), "./Pages/Contact.vue": () => import("./assets/Contact-l8mM8pJ9.js"), "./Pages/Employers.vue": () => import("./assets/Employers-BMPYtZEg.js"), "./Pages/Employers/EditVacancy.vue": () => import("./assets/EditVacancy-0UJSfegg.js"), "./Pages/Employers/EmployersDashboard.vue": () => import("./assets/EmployersDashboard-ChHhHob1.js"), "./Pages/Employers/EmployersHome.vue": () => import("./assets/EmployersHome-BYVnZ67o.js"), "./Pages/Employers/EmployersProfile.vue": () => import("./assets/EmployersProfile-CWXWAgJH.js"), "./Pages/Employers/EmployersProfileEdit.vue": () => import("./assets/EmployersProfileEdit-BfAGummJ.js"), "./Pages/Employers/PostVacancy.vue": () => import("./assets/PostVacancy-Bm8ouHYX.js"), "./Pages/Home.vue": () => import("./assets/Home-DsYpKvVn.js"), "./Pages/HomeV2.vue": () => import("./assets/HomeV2-Dkkzw9F0.js"), "./Pages/JobSeekers/Apply.vue": () => import("./assets/Apply-D5Qw6Bgt.js"), "./Pages/JobSeekers/JobSeekerProfile.vue": () => import("./assets/JobSeekerProfile-BYCET3h9.js"), "./Pages/JobSeekers/JobSeekerProfileEdit.vue": () => import("./assets/JobSeekerProfileEdit-BZKWp2rT.js"), "./Pages/JobSeekers/JobSeekersDashboard.vue": () => import("./assets/JobSeekersDashboard-CV0D0_11.js"), "./Pages/JobSeekers/JobSeekersHome.vue": () => import("./assets/JobSeekersHome-BuHMnGJ0.js"), "./Pages/JobSeekers/Vacancies.vue": () => import("./assets/Vacancies-Cg6FgEJL.js"), "./Pages/RequestService.vue": () => import("./assets/RequestService-DgF13x93.js"), "./Pages/Services.vue": () => import("./assets/Services-DdqsSEuL.js"), "./Pages/Solutions.vue": () => import("./assets/Solutions-C83QpBJA.js"), "./Pages/Solutions/SolutionDetail.vue": () => import("./assets/SolutionDetail-B94tXBqs.js"), "./Pages/Talents.vue": () => import("./assets/Talents-ZgqWRPQB.js"), "./Pages/ThankYou.vue": () => import("./assets/ThankYou-Xz98QXFu.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    }
  })
);
