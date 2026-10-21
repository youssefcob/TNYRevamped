import { defineComponent, reactive, ref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, vModelSelect, vModelCheckbox, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-FFij45lP.js";
import { s as snack } from "./FooterV2-L8NNvjgt.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-B8KdpqeN.js";
import "./StyleToolbarHost-99_vtE-Q.js";
import "@inertiajs/vue3";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sitemap",
  __ssrInlineRender: true,
  props: {
    entries: {}
  },
  setup(__props) {
    const props = __props;
    const CHANGEFREQ_OPTIONS = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
    const rows = reactive(props.entries.map((e) => ({ ...e })));
    const savingUrl = ref(null);
    async function saveRow(row) {
      var _a, _b, _c;
      savingUrl.value = row.url;
      try {
        const { data } = await window.axios.post("/content/sitemap", {
          url: row.url,
          priority: row.priority,
          changefreq: row.changefreq,
          excluded: row.excluded
        });
        row.id = data.response.data.id;
        snack.success("Sitemap entry saved.");
      } catch (e) {
        snack.error(((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.response) == null ? void 0 : _c.message) || "Failed to save sitemap entry.");
      } finally {
        savingUrl.value = null;
      }
    }
    async function removeRow(row) {
      if (!row.id) return;
      if (!confirm(`Remove ${row.url} from the sitemap entirely?`)) return;
      try {
        await window.axios.delete(`/content/sitemap/${row.id}`);
        const index = rows.findIndex((r) => r.url === row.url);
        if (index !== -1) rows.splice(index, 1);
        snack.success("Sitemap entry removed.");
      } catch (e) {
        snack.error("Failed to remove sitemap entry.");
      }
    }
    function blankNewUrl() {
      return { url: "", priority: "0.5", changefreq: "monthly" };
    }
    const newUrl = reactive(blankNewUrl());
    const addingUrl = ref(false);
    async function addUrl() {
      var _a, _b, _c;
      const url = newUrl.url.trim();
      if (!url.startsWith("/")) {
        snack.error("URL must be a path starting with /, e.g. /careers-fair");
        return;
      }
      if (rows.some((r) => r.url === url)) {
        snack.error("That URL is already in the sitemap.");
        return;
      }
      addingUrl.value = true;
      try {
        const { data } = await window.axios.post("/content/sitemap", {
          url,
          priority: newUrl.priority ? Number(newUrl.priority) : null,
          changefreq: newUrl.changefreq || null,
          excluded: false
        });
        rows.push({
          id: data.response.data.id,
          url,
          source: "manual",
          priority: data.response.data.priority,
          changefreq: data.response.data.changefreq,
          excluded: false,
          lastmod: null
        });
        Object.assign(newUrl, blankNewUrl());
        snack.success("URL added to sitemap.");
      } catch (e) {
        snack.error(((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.response) == null ? void 0 : _c.message) || "Failed to add URL.");
      } finally {
        addingUrl.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sitemap-admin" data-v-e8c781da${_scopeId}><h1 class="sitemap-admin__title" data-v-e8c781da${_scopeId}>Manage Sitemap</h1><table class="sitemap-admin__table" data-v-e8c781da${_scopeId}><thead data-v-e8c781da${_scopeId}><tr data-v-e8c781da${_scopeId}><th data-v-e8c781da${_scopeId}>URL</th><th data-v-e8c781da${_scopeId}>Source</th><th data-v-e8c781da${_scopeId}>Priority</th><th data-v-e8c781da${_scopeId}>Change Frequency</th><th data-v-e8c781da${_scopeId}>Excluded</th><th data-v-e8c781da${_scopeId}></th></tr></thead><tbody data-v-e8c781da${_scopeId}><!--[-->`);
            ssrRenderList(rows, (row) => {
              _push2(`<tr class="${ssrRenderClass({ "sitemap-admin__row--excluded": row.excluded })}" data-v-e8c781da${_scopeId}><td class="sitemap-admin__url" data-v-e8c781da${_scopeId}>${ssrInterpolate(row.url)}</td><td data-v-e8c781da${_scopeId}><span class="${ssrRenderClass([`sitemap-admin__badge--${row.source}`, "sitemap-admin__badge"])}" data-v-e8c781da${_scopeId}>${ssrInterpolate(row.source)}</span></td><td data-v-e8c781da${_scopeId}><input type="number" min="0" max="1" step="0.1"${ssrRenderAttr("value", row.priority)}${ssrIncludeBooleanAttr(savingUrl.value === row.url) ? " disabled" : ""} data-v-e8c781da${_scopeId}></td><td data-v-e8c781da${_scopeId}><select${ssrIncludeBooleanAttr(savingUrl.value === row.url) ? " disabled" : ""} data-v-e8c781da${_scopeId}><option${ssrRenderAttr("value", null)} data-v-e8c781da${ssrIncludeBooleanAttr(Array.isArray(row.changefreq) ? ssrLooseContain(row.changefreq, null) : ssrLooseEqual(row.changefreq, null)) ? " selected" : ""}${_scopeId}>Default</option><!--[-->`);
              ssrRenderList(CHANGEFREQ_OPTIONS, (f) => {
                _push2(`<option${ssrRenderAttr("value", f)} data-v-e8c781da${ssrIncludeBooleanAttr(Array.isArray(row.changefreq) ? ssrLooseContain(row.changefreq, f) : ssrLooseEqual(row.changefreq, f)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(f)}</option>`);
              });
              _push2(`<!--]--></select></td><td data-v-e8c781da${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(row.excluded) ? ssrLooseContain(row.excluded, null) : row.excluded) ? " checked" : ""}${ssrIncludeBooleanAttr(savingUrl.value === row.url) ? " disabled" : ""} data-v-e8c781da${_scopeId}></td><td data-v-e8c781da${_scopeId}>`);
              if (row.source === "manual") {
                _push2(`<button type="button" class="sitemap-admin__remove" data-v-e8c781da${_scopeId}> Remove </button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table><form class="sitemap-admin__add" data-v-e8c781da${_scopeId}><h2 data-v-e8c781da${_scopeId}>Add a URL</h2><div class="sitemap-admin__add-row" data-v-e8c781da${_scopeId}><input${ssrRenderAttr("value", newUrl.url)} type="text" placeholder="/careers-fair" data-v-e8c781da${_scopeId}><input${ssrRenderAttr("value", newUrl.priority)} type="number" min="0" max="1" step="0.1" placeholder="Priority" data-v-e8c781da${_scopeId}><select data-v-e8c781da${_scopeId}><!--[-->`);
            ssrRenderList(CHANGEFREQ_OPTIONS, (f) => {
              _push2(`<option${ssrRenderAttr("value", f)} data-v-e8c781da${ssrIncludeBooleanAttr(Array.isArray(newUrl.changefreq) ? ssrLooseContain(newUrl.changefreq, f) : ssrLooseEqual(newUrl.changefreq, f)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(f)}</option>`);
            });
            _push2(`<!--]--></select><button type="submit"${ssrIncludeBooleanAttr(addingUrl.value) ? " disabled" : ""} data-v-e8c781da${_scopeId}>${ssrInterpolate(addingUrl.value ? "Adding…" : "Add URL")}</button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "sitemap-admin" }, [
                createVNode("h1", { class: "sitemap-admin__title" }, "Manage Sitemap"),
                createVNode("table", { class: "sitemap-admin__table" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "URL"),
                      createVNode("th", null, "Source"),
                      createVNode("th", null, "Priority"),
                      createVNode("th", null, "Change Frequency"),
                      createVNode("th", null, "Excluded"),
                      createVNode("th")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(rows, (row) => {
                      return openBlock(), createBlock("tr", {
                        key: row.url,
                        class: { "sitemap-admin__row--excluded": row.excluded }
                      }, [
                        createVNode("td", { class: "sitemap-admin__url" }, toDisplayString(row.url), 1),
                        createVNode("td", null, [
                          createVNode("span", {
                            class: ["sitemap-admin__badge", `sitemap-admin__badge--${row.source}`]
                          }, toDisplayString(row.source), 3)
                        ]),
                        createVNode("td", null, [
                          withDirectives(createVNode("input", {
                            type: "number",
                            min: "0",
                            max: "1",
                            step: "0.1",
                            "onUpdate:modelValue": ($event) => row.priority = $event,
                            disabled: savingUrl.value === row.url,
                            onChange: ($event) => saveRow(row)
                          }, null, 40, ["onUpdate:modelValue", "disabled", "onChange"]), [
                            [
                              vModelText,
                              row.priority,
                              void 0,
                              { number: true }
                            ]
                          ])
                        ]),
                        createVNode("td", null, [
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => row.changefreq = $event,
                            disabled: savingUrl.value === row.url,
                            onChange: ($event) => saveRow(row)
                          }, [
                            createVNode("option", { value: null }, "Default"),
                            (openBlock(), createBlock(Fragment, null, renderList(CHANGEFREQ_OPTIONS, (f) => {
                              return createVNode("option", {
                                key: f,
                                value: f
                              }, toDisplayString(f), 9, ["value"]);
                            }), 64))
                          ], 40, ["onUpdate:modelValue", "disabled", "onChange"]), [
                            [vModelSelect, row.changefreq]
                          ])
                        ]),
                        createVNode("td", null, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => row.excluded = $event,
                            disabled: savingUrl.value === row.url,
                            onChange: ($event) => saveRow(row)
                          }, null, 40, ["onUpdate:modelValue", "disabled", "onChange"]), [
                            [vModelCheckbox, row.excluded]
                          ])
                        ]),
                        createVNode("td", null, [
                          row.source === "manual" ? (openBlock(), createBlock("button", {
                            key: 0,
                            type: "button",
                            class: "sitemap-admin__remove",
                            onClick: ($event) => removeRow(row)
                          }, " Remove ", 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ], 2);
                    }), 128))
                  ])
                ]),
                createVNode("form", {
                  class: "sitemap-admin__add",
                  onSubmit: withModifiers(addUrl, ["prevent"])
                }, [
                  createVNode("h2", null, "Add a URL"),
                  createVNode("div", { class: "sitemap-admin__add-row" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => newUrl.url = $event,
                      type: "text",
                      placeholder: "/careers-fair"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, newUrl.url]
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => newUrl.priority = $event,
                      type: "number",
                      min: "0",
                      max: "1",
                      step: "0.1",
                      placeholder: "Priority"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, newUrl.priority]
                    ]),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => newUrl.changefreq = $event
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(CHANGEFREQ_OPTIONS, (f) => {
                        return createVNode("option", {
                          key: f,
                          value: f
                        }, toDisplayString(f), 9, ["value"]);
                      }), 64))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, newUrl.changefreq]
                    ]),
                    createVNode("button", {
                      type: "submit",
                      disabled: addingUrl.value
                    }, toDisplayString(addingUrl.value ? "Adding…" : "Add URL"), 9, ["disabled"])
                  ])
                ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Sitemap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sitemap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8c781da"]]);
export {
  Sitemap as default
};
