import { defineComponent, reactive, ref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, withDirectives, vModelText, toDisplayString, vModelSelect, vModelCheckbox, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-FFij45lP.js";
import { s as snack } from "./FooterV2-L8NNvjgt.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-B8KdpqeN.js";
import "./StyleToolbarHost-99_vtE-Q.js";
import "@inertiajs/vue3";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Redirects",
  __ssrInlineRender: true,
  props: {
    redirects: {},
    statusCodes: {}
  },
  setup(__props) {
    const props = __props;
    const STATUS_LABELS = {
      301: "301 — Permanent",
      302: "302 — Temporary"
    };
    const rows = reactive(props.redirects.map((r) => ({ ...r })));
    const savingId = ref(null);
    async function saveRow(row) {
      var _a, _b, _c;
      savingId.value = row.id;
      try {
        const { data } = await window.axios.post("/content/redirects", {
          id: row.id,
          source: row.source,
          destination: row.destination,
          status_code: row.status_code,
          enabled: row.enabled
        });
        Object.assign(row, data.response.data);
        snack.success("Redirect saved.");
      } catch (e) {
        snack.error(((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.response) == null ? void 0 : _c.message) || "Failed to save redirect.");
      } finally {
        savingId.value = null;
      }
    }
    async function removeRow(row) {
      if (!row.id) return;
      if (!confirm(`Delete the redirect from ${row.source}?`)) return;
      try {
        await window.axios.delete(`/content/redirects/${row.id}`);
        const index = rows.findIndex((r) => r.id === row.id);
        if (index !== -1) rows.splice(index, 1);
        snack.success("Redirect removed.");
      } catch (e) {
        snack.error("Failed to remove redirect.");
      }
    }
    function blankNewRedirect() {
      return { source: "", destination: "", status_code: 301 };
    }
    const newRedirect = reactive(blankNewRedirect());
    const adding = ref(false);
    async function addRedirect() {
      var _a, _b, _c;
      const source = newRedirect.source.trim();
      const destination = newRedirect.destination.trim();
      if (!source.startsWith("/")) {
        snack.error("Source must be a path starting with /, e.g. /old-page");
        return;
      }
      if (!destination) {
        snack.error("Destination is required.");
        return;
      }
      adding.value = true;
      try {
        const { data } = await window.axios.post("/content/redirects", {
          source,
          destination,
          status_code: newRedirect.status_code,
          enabled: true
        });
        rows.unshift({ ...data.response.data });
        Object.assign(newRedirect, blankNewRedirect());
        snack.success("Redirect added.");
      } catch (e) {
        snack.error(((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.response) == null ? void 0 : _c.message) || "Failed to add redirect.");
      } finally {
        adding.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="redirects-admin" data-v-be4c8318${_scopeId}><h1 class="redirects-admin__title" data-v-be4c8318${_scopeId}>Manage Redirects</h1><table class="redirects-admin__table" data-v-be4c8318${_scopeId}><thead data-v-be4c8318${_scopeId}><tr data-v-be4c8318${_scopeId}><th data-v-be4c8318${_scopeId}>From</th><th data-v-be4c8318${_scopeId}>To</th><th data-v-be4c8318${_scopeId}>Type</th><th data-v-be4c8318${_scopeId}>Enabled</th><th data-v-be4c8318${_scopeId}>Hits</th><th data-v-be4c8318${_scopeId}></th></tr></thead><tbody data-v-be4c8318${_scopeId}><!--[-->`);
            ssrRenderList(rows, (row) => {
              _push2(`<tr class="${ssrRenderClass({ "redirects-admin__row--off": !row.enabled })}" data-v-be4c8318${_scopeId}><td data-v-be4c8318${_scopeId}><input type="text"${ssrRenderAttr("value", row.source)}${ssrIncludeBooleanAttr(savingId.value === row.id) ? " disabled" : ""} data-v-be4c8318${_scopeId}></td><td data-v-be4c8318${_scopeId}><input type="text"${ssrRenderAttr("value", row.destination)}${ssrIncludeBooleanAttr(savingId.value === row.id) ? " disabled" : ""} data-v-be4c8318${_scopeId}></td><td data-v-be4c8318${_scopeId}><select${ssrIncludeBooleanAttr(savingId.value === row.id) ? " disabled" : ""} data-v-be4c8318${_scopeId}><!--[-->`);
              ssrRenderList(props.statusCodes, (code) => {
                _push2(`<option${ssrRenderAttr("value", code)} data-v-be4c8318${ssrIncludeBooleanAttr(Array.isArray(row.status_code) ? ssrLooseContain(row.status_code, code) : ssrLooseEqual(row.status_code, code)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(STATUS_LABELS[code] ?? code)}</option>`);
              });
              _push2(`<!--]--></select></td><td data-v-be4c8318${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(row.enabled) ? ssrLooseContain(row.enabled, null) : row.enabled) ? " checked" : ""}${ssrIncludeBooleanAttr(savingId.value === row.id) ? " disabled" : ""} data-v-be4c8318${_scopeId}></td><td class="redirects-admin__hits" data-v-be4c8318${_scopeId}>${ssrInterpolate(row.hits)}</td><td data-v-be4c8318${_scopeId}><button type="button" class="redirects-admin__remove" data-v-be4c8318${_scopeId}>Delete</button></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (!rows.length) {
              _push2(`<tr data-v-be4c8318${_scopeId}><td colspan="6" class="redirects-admin__empty" data-v-be4c8318${_scopeId}>No redirects yet.</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table><form class="redirects-admin__add" data-v-be4c8318${_scopeId}><h2 data-v-be4c8318${_scopeId}>Add a redirect</h2><div class="redirects-admin__add-row" data-v-be4c8318${_scopeId}><input${ssrRenderAttr("value", newRedirect.source)} type="text" placeholder="/old-page" data-v-be4c8318${_scopeId}><span class="redirects-admin__arrow" data-v-be4c8318${_scopeId}>→</span><input${ssrRenderAttr("value", newRedirect.destination)} type="text" placeholder="/new-page or https://…" data-v-be4c8318${_scopeId}><select data-v-be4c8318${_scopeId}><!--[-->`);
            ssrRenderList(props.statusCodes, (code) => {
              _push2(`<option${ssrRenderAttr("value", code)} data-v-be4c8318${ssrIncludeBooleanAttr(Array.isArray(newRedirect.status_code) ? ssrLooseContain(newRedirect.status_code, code) : ssrLooseEqual(newRedirect.status_code, code)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(STATUS_LABELS[code] ?? code)}</option>`);
            });
            _push2(`<!--]--></select><button type="submit"${ssrIncludeBooleanAttr(adding.value) ? " disabled" : ""} data-v-be4c8318${_scopeId}>${ssrInterpolate(adding.value ? "Adding…" : "Add redirect")}</button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "redirects-admin" }, [
                createVNode("h1", { class: "redirects-admin__title" }, "Manage Redirects"),
                createVNode("table", { class: "redirects-admin__table" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "From"),
                      createVNode("th", null, "To"),
                      createVNode("th", null, "Type"),
                      createVNode("th", null, "Enabled"),
                      createVNode("th", null, "Hits"),
                      createVNode("th")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(rows, (row) => {
                      return openBlock(), createBlock("tr", {
                        key: row.id ?? row.source,
                        class: { "redirects-admin__row--off": !row.enabled }
                      }, [
                        createVNode("td", null, [
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => row.source = $event,
                            disabled: savingId.value === row.id,
                            onChange: ($event) => saveRow(row)
                          }, null, 40, ["onUpdate:modelValue", "disabled", "onChange"]), [
                            [vModelText, row.source]
                          ])
                        ]),
                        createVNode("td", null, [
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => row.destination = $event,
                            disabled: savingId.value === row.id,
                            onChange: ($event) => saveRow(row)
                          }, null, 40, ["onUpdate:modelValue", "disabled", "onChange"]), [
                            [vModelText, row.destination]
                          ])
                        ]),
                        createVNode("td", null, [
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => row.status_code = $event,
                            disabled: savingId.value === row.id,
                            onChange: ($event) => saveRow(row)
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.statusCodes, (code) => {
                              return openBlock(), createBlock("option", {
                                key: code,
                                value: code
                              }, toDisplayString(STATUS_LABELS[code] ?? code), 9, ["value"]);
                            }), 128))
                          ], 40, ["onUpdate:modelValue", "disabled", "onChange"]), [
                            [
                              vModelSelect,
                              row.status_code,
                              void 0,
                              { number: true }
                            ]
                          ])
                        ]),
                        createVNode("td", null, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => row.enabled = $event,
                            disabled: savingId.value === row.id,
                            onChange: ($event) => saveRow(row)
                          }, null, 40, ["onUpdate:modelValue", "disabled", "onChange"]), [
                            [vModelCheckbox, row.enabled]
                          ])
                        ]),
                        createVNode("td", { class: "redirects-admin__hits" }, toDisplayString(row.hits), 1),
                        createVNode("td", null, [
                          createVNode("button", {
                            type: "button",
                            class: "redirects-admin__remove",
                            onClick: ($event) => removeRow(row)
                          }, "Delete", 8, ["onClick"])
                        ])
                      ], 2);
                    }), 128)),
                    !rows.length ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "6",
                        class: "redirects-admin__empty"
                      }, "No redirects yet.")
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("form", {
                  class: "redirects-admin__add",
                  onSubmit: withModifiers(addRedirect, ["prevent"])
                }, [
                  createVNode("h2", null, "Add a redirect"),
                  createVNode("div", { class: "redirects-admin__add-row" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => newRedirect.source = $event,
                      type: "text",
                      placeholder: "/old-page"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, newRedirect.source]
                    ]),
                    createVNode("span", { class: "redirects-admin__arrow" }, "→"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => newRedirect.destination = $event,
                      type: "text",
                      placeholder: "/new-page or https://…"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, newRedirect.destination]
                    ]),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => newRedirect.status_code = $event
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.statusCodes, (code) => {
                        return openBlock(), createBlock("option", {
                          key: code,
                          value: code
                        }, toDisplayString(STATUS_LABELS[code] ?? code), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [
                        vModelSelect,
                        newRedirect.status_code,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    createVNode("button", {
                      type: "submit",
                      disabled: adding.value
                    }, toDisplayString(adding.value ? "Adding…" : "Add redirect"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Redirects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Redirects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be4c8318"]]);
export {
  Redirects as default
};
