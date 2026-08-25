import { defineComponent, useSSRContext, ref, withCtx, createTextVNode, createVNode, toDisplayString, unref, createBlock, createCommentVNode, openBlock } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { J as JobSeekerCard } from "./JobSeekerCard-Cs8a0tCA.js";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { B as Btn } from "./btn-Dy2Hq9NM.js";
import { M as Modal } from "./modal-lgseaj7M.js";
import { V as VacancyCard } from "./VacancyCard-DB-5vshZ.js";
import axios from "axios";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./InputField-DzB3f-5L.js";
import "maska/vue";
import "vue3-toastify";
import "./Foot-6aX9-mt3.js";
import "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "JobSeekers",
  __ssrInlineRender: true,
  props: {
    bids: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.bids, (bid) => {
        _push(ssrRenderComponent(JobSeekerCard, {
          key: bid.id,
          "job-seeker": bid
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dashboard/Employer/JobSeekers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Vacancies",
  __ssrInlineRender: true,
  props: {
    vacancies: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const vacanciesState = ref(props.vacancies);
    const editableVacancy = ref(null);
    const deletableVacancy = ref(null);
    const editModal = ref(null);
    const deleteModal = ref(null);
    const deleteLoading = ref(false);
    const openEditModal = (vacancyId) => {
      var _a;
      editableVacancy.value = vacanciesState.value.find((v) => v.id === vacancyId) || null;
      if (editableVacancy.value) {
        (_a = editModal.value) == null ? void 0 : _a.openModal();
      }
    };
    const openDeleteModal = (vacancyId) => {
      var _a;
      deletableVacancy.value = vacanciesState.value.find((v) => v.id === vacancyId) || null;
      if (deletableVacancy.value) {
        (_a = deleteModal.value) == null ? void 0 : _a.openModal();
      }
    };
    const deleteVacancy = async (vacancyId) => {
      var _a, _b;
      if (!vacancyId) return;
      if (!deletableVacancy.value) return;
      deleteLoading.value = true;
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`/api/vacancies/delete/${vacancyId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        vacanciesState.value = vacanciesState.value.filter((v) => v.id !== vacancyId);
        deletableVacancy.value = null;
        (_a = deleteModal.value) == null ? void 0 : _a.closeModal();
      } catch (error) {
        console.error("Error deleting vacancy:", error);
        (_b = deleteModal.value) == null ? void 0 : _b.closeModal();
        snack.error("Failed to delete vacancy. Please try again.");
      } finally {
        deleteLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Modal, {
        ref_key: "deleteModal",
        ref: deleteModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="delete-wrapper"${_scopeId}>${ssrInterpolate((_a = deletableVacancy.value) == null ? void 0 : _a.position.title)} - Delete Vacancy <p${_scopeId}>Are you sure you want to delete this vacancy?</p>`);
            _push2(ssrRenderComponent(Btn, {
              loading: deleteLoading.value,
              class: "btn delete",
              onClick: ($event) => {
                var _a2;
                return deleteVacancy((_a2 = deletableVacancy.value) == null ? void 0 : _a2.id);
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Delete`);
                } else {
                  return [
                    createTextVNode("Delete")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "delete-wrapper" }, [
                createTextVNode(toDisplayString((_b = deletableVacancy.value) == null ? void 0 : _b.position.title) + " - Delete Vacancy ", 1),
                createVNode("p", null, "Are you sure you want to delete this vacancy?"),
                createVNode(Btn, {
                  loading: deleteLoading.value,
                  class: "btn delete",
                  onClick: ($event) => {
                    var _a2;
                    return deleteVacancy((_a2 = deletableVacancy.value) == null ? void 0 : _a2.id);
                  }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Delete")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="vacancies-wrapper"><!--[-->`);
      ssrRenderList(vacanciesState.value, (vacancy) => {
        _push(ssrRenderComponent(VacancyCard, {
          key: vacancy.id,
          vacancy,
          employer: "",
          onEdit: ($event) => openEditModal($event),
          onDelete: ($event) => openDeleteModal($event)
        }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dashboard/Employer/Vacancies.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmployersDashboard",
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
    }
  },
  setup(__props) {
    const path = window.location.pathname.split("/").pop();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container" data-v-7d54a291${_scopeId}><h1 class="title" data-v-7d54a291${_scopeId}>Dashboard</h1><br data-v-7d54a291${_scopeId}><br data-v-7d54a291${_scopeId}><br data-v-7d54a291${_scopeId}><ul class="nav" data-v-7d54a291${_scopeId}><li data-v-7d54a291${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/dashboard/vacancies",
              class: { active: unref(path) === "vacancies" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Vacancies `);
                } else {
                  return [
                    createTextVNode(" Vacancies ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li data-v-7d54a291${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/dashboard/bids",
              class: { active: unref(path) === "bids" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bids`);
                } else {
                  return [
                    createTextVNode("Bids")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul><br data-v-7d54a291${_scopeId}><br data-v-7d54a291${_scopeId}>`);
            if (unref(path) === "vacancies") {
              _push2(ssrRenderComponent(_sfc_main$1, { vacancies: __props.vacancies }, null, _parent2, _scopeId));
            } else if (unref(path) === "bids") {
              _push2(ssrRenderComponent(_sfc_main$2, { bids: __props.bids }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
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
                      href: "/dashboard/vacancies",
                      class: { active: unref(path) === "vacancies" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Vacancies ")
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: "/dashboard/bids",
                      class: { active: unref(path) === "bids" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bids")
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                unref(path) === "vacancies" ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  vacancies: __props.vacancies
                }, null, 8, ["vacancies"])) : unref(path) === "bids" ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 1,
                  bids: __props.bids
                }, null, 8, ["bids"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Employers/EmployersDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmployersDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d54a291"]]);
export {
  EmployersDashboard as default
};
