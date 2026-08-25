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
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/About.vue": () => import("./assets/About-Dm4Y7vYY.js"), "./Pages/Admin/MetaTags.vue": () => import("./assets/MetaTags-BLj2-L-8.js"), "./Pages/Admin/TextStyles.vue": () => import("./assets/TextStyles-BjMITUXT.js"), "./Pages/App.vue": () => import("./assets/App-NYMrp4T4.js"), "./Pages/Apply.vue": () => import("./assets/Apply-D251amz8.js"), "./Pages/Auth/AdminLogin.vue": () => import("./assets/AdminLogin-CPF2xhZ4.js"), "./Pages/Auth/Forget.vue": () => import("./assets/Forget-C3i5ohH2.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-Bu3MCcTG.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-BFSetHIG.js"), "./Pages/Candidates.vue": () => import("./assets/Candidates-vGW0h7DD.js"), "./Pages/Contact.vue": () => import("./assets/Contact-BBiPHg5Y.js"), "./Pages/Employers.vue": () => import("./assets/Employers-D_TQdV0c.js"), "./Pages/Employers/EditVacancy.vue": () => import("./assets/EditVacancy-JN3Bn3W7.js"), "./Pages/Employers/EmployersDashboard.vue": () => import("./assets/EmployersDashboard-Yz_oCAUI.js"), "./Pages/Employers/EmployersHome.vue": () => import("./assets/EmployersHome-CVsHdEPS.js"), "./Pages/Employers/EmployersProfile.vue": () => import("./assets/EmployersProfile-rYHGwWpk.js"), "./Pages/Employers/EmployersProfileEdit.vue": () => import("./assets/EmployersProfileEdit-Dlky1tl4.js"), "./Pages/Employers/PostVacancy.vue": () => import("./assets/PostVacancy-Cb5egQb1.js"), "./Pages/Home.vue": () => import("./assets/Home-8nin8kIi.js"), "./Pages/HomeV2.vue": () => import("./assets/HomeV2-DvQRIhpi.js"), "./Pages/JobSeekers/Apply.vue": () => import("./assets/Apply-rLmbIIUH.js"), "./Pages/JobSeekers/JobSeekerProfile.vue": () => import("./assets/JobSeekerProfile-BAJQ5Ojz.js"), "./Pages/JobSeekers/JobSeekerProfileEdit.vue": () => import("./assets/JobSeekerProfileEdit-hoXdT8n_.js"), "./Pages/JobSeekers/JobSeekersDashboard.vue": () => import("./assets/JobSeekersDashboard-BhZ5UEdk.js"), "./Pages/JobSeekers/JobSeekersHome.vue": () => import("./assets/JobSeekersHome-Y0IX3WKL.js"), "./Pages/JobSeekers/Vacancies.vue": () => import("./assets/Vacancies-CZTmegnc.js"), "./Pages/News.vue": () => import("./assets/News-BpIqVZU1.js"), "./Pages/RequestService.vue": () => import("./assets/RequestService-3AT7nEt3.js"), "./Pages/Resources.vue": () => import("./assets/Resources-CEqmpuTx.js"), "./Pages/Services.vue": () => import("./assets/Services-XfownKsV.js"), "./Pages/Solutions.vue": () => import("./assets/Solutions-DToVt4jy.js"), "./Pages/Talents.vue": () => import("./assets/Talents-PDOqDFJ-.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    }
  })
);
