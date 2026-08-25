import { defineComponent, reactive, onMounted, watch, withCtx, createVNode, withDirectives, vModelText, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { V as VacancyCard } from "./VacancyCard-DB-5vshZ.js";
import { router } from "@inertiajs/vue3";
import { P as Paginator } from "./Paginator-t87Uvf_g.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./NavBarV2-BlC3_Oet.js";
import "vue3-toastify";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "./btn-Dy2Hq9NM.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vacancies",
  __ssrInlineRender: true,
  props: {
    vacancies: {
      type: Object,
      required: true
    },
    positions: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const filters = reactive({
      position: "",
      borough: "",
      search: "",
      page: 1
    });
    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search);
      filters.position = urlParams.get("position") || "";
      filters.borough = urlParams.get("borough") || "";
      filters.search = urlParams.get("search") || "";
      filters.page = parseInt(urlParams.get("page") || "1", 10);
    });
    let debounceTimeout = null;
    watch(
      filters,
      (newFilters) => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          const params = new URLSearchParams();
          if (newFilters.position) params.append("position", newFilters.position);
          if (newFilters.borough) params.append("borough", newFilters.borough);
          if (newFilters.search) params.append("search", newFilters.search);
          newFilters.page = 1;
          router.get(`/vacancies?${params.toString()}`, {}, { preserveState: true, replace: true });
        }, 400);
      },
      { deep: true }
    );
    const goToPage = (page) => {
      router.get(`/vacancies`, { page }, {
        preserveState: true,
        replace: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container" data-v-e5bdcd1b${_scopeId}><h2 class="title" data-v-e5bdcd1b${_scopeId}>Vacancies</h2><div class="paginator" data-v-e5bdcd1b${_scopeId}>`);
            _push2(ssrRenderComponent(Paginator, {
              current_page: __props.vacancies.current_page,
              last_page: __props.vacancies.last_page,
              onPageChanged: ($event) => goToPage($event)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="filters-container" data-v-e5bdcd1b${_scopeId}><input type="text" class="form-control mb-4" placeholder="Search"${ssrRenderAttr("value", filters.search)} data-v-e5bdcd1b${_scopeId}><div class="dropdowns" data-v-e5bdcd1b${_scopeId}><select class="form-select mb-4" data-v-e5bdcd1b${_scopeId}><option value="" data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.position) ? ssrLooseContain(filters.position, "") : ssrLooseEqual(filters.position, "")) ? " selected" : ""}${_scopeId}>All Positions</option><!--[-->`);
            ssrRenderList(__props.positions, (position) => {
              _push2(`<option${ssrRenderAttr("value", position.title)} data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.position) ? ssrLooseContain(filters.position, position.title) : ssrLooseEqual(filters.position, position.title)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(position.title)}</option>`);
            });
            _push2(`<!--]--></select><select class="form-select mb-4" data-v-e5bdcd1b${_scopeId}><option value="" data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.borough) ? ssrLooseContain(filters.borough, "") : ssrLooseEqual(filters.borough, "")) ? " selected" : ""}${_scopeId}>All Boroughs</option><option value="Manhattan" data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.borough) ? ssrLooseContain(filters.borough, "Manhattan") : ssrLooseEqual(filters.borough, "Manhattan")) ? " selected" : ""}${_scopeId}>Manhattan</option><option value="Brooklyn" data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.borough) ? ssrLooseContain(filters.borough, "Brooklyn") : ssrLooseEqual(filters.borough, "Brooklyn")) ? " selected" : ""}${_scopeId}>Brooklyn</option><option value="Queens" data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.borough) ? ssrLooseContain(filters.borough, "Queens") : ssrLooseEqual(filters.borough, "Queens")) ? " selected" : ""}${_scopeId}>Queens</option><option value="Bronx" data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.borough) ? ssrLooseContain(filters.borough, "Bronx") : ssrLooseEqual(filters.borough, "Bronx")) ? " selected" : ""}${_scopeId}>Bronx</option><option value="Staten Island" data-v-e5bdcd1b${ssrIncludeBooleanAttr(Array.isArray(filters.borough) ? ssrLooseContain(filters.borough, "Staten Island") : ssrLooseEqual(filters.borough, "Staten Island")) ? " selected" : ""}${_scopeId}>Staten Island</option></select></div></div><div class="vacancies" data-v-e5bdcd1b${_scopeId}><!--[-->`);
            ssrRenderList(props.vacancies.data, (vacancy) => {
              _push2(ssrRenderComponent(VacancyCard, {
                key: vacancy.id,
                vacancy
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="paginator" data-v-e5bdcd1b${_scopeId}>`);
            _push2(ssrRenderComponent(Paginator, {
              current_page: __props.vacancies.current_page,
              last_page: __props.vacancies.last_page,
              onPageChanged: ($event) => goToPage($event)
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "container" }, [
                createVNode("h2", { class: "title" }, "Vacancies"),
                createVNode("div", { class: "paginator" }, [
                  createVNode(Paginator, {
                    current_page: __props.vacancies.current_page,
                    last_page: __props.vacancies.last_page,
                    onPageChanged: ($event) => goToPage($event)
                  }, null, 8, ["current_page", "last_page", "onPageChanged"])
                ]),
                createVNode("div", { class: "filters-container" }, [
                  withDirectives(createVNode("input", {
                    type: "text",
                    class: "form-control mb-4",
                    placeholder: "Search",
                    "onUpdate:modelValue": ($event) => filters.search = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, filters.search]
                  ]),
                  createVNode("div", { class: "dropdowns" }, [
                    withDirectives(createVNode("select", {
                      class: "form-select mb-4",
                      "onUpdate:modelValue": ($event) => filters.position = $event
                    }, [
                      createVNode("option", { value: "" }, "All Positions"),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.positions, (position) => {
                        return openBlock(), createBlock("option", {
                          key: position.id,
                          value: position.title
                        }, toDisplayString(position.title), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, filters.position]
                    ]),
                    withDirectives(createVNode("select", {
                      class: "form-select mb-4",
                      "onUpdate:modelValue": ($event) => filters.borough = $event
                    }, [
                      createVNode("option", { value: "" }, "All Boroughs"),
                      createVNode("option", { value: "Manhattan" }, "Manhattan"),
                      createVNode("option", { value: "Brooklyn" }, "Brooklyn"),
                      createVNode("option", { value: "Queens" }, "Queens"),
                      createVNode("option", { value: "Bronx" }, "Bronx"),
                      createVNode("option", { value: "Staten Island" }, "Staten Island")
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, filters.borough]
                    ])
                  ])
                ]),
                createVNode("div", { class: "vacancies" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.vacancies.data, (vacancy) => {
                    return openBlock(), createBlock(VacancyCard, {
                      key: vacancy.id,
                      vacancy
                    }, null, 8, ["vacancy"]);
                  }), 128))
                ]),
                createVNode("div", { class: "paginator" }, [
                  createVNode(Paginator, {
                    current_page: __props.vacancies.current_page,
                    last_page: __props.vacancies.last_page,
                    onPageChanged: ($event) => goToPage($event)
                  }, null, 8, ["current_page", "last_page", "onPageChanged"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/JobSeekers/Vacancies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Vacancies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5bdcd1b"]]);
export {
  Vacancies as default
};
