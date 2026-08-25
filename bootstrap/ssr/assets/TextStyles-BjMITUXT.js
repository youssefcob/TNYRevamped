import { defineComponent, ref, reactive, computed, withCtx, createVNode, withModifiers, createBlock, createCommentVNode, toDisplayString, createTextVNode, withDirectives, vModelText, openBlock, Fragment, renderList, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "@inertiajs/vue3";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextStyles",
  __ssrInlineRender: true,
  props: {
    styles: {}
  },
  setup(__props) {
    const props = __props;
    const styles = ref([...props.styles]);
    const FONT_FAMILIES = ["heading", "body", "switzer", "inherit"];
    const FONT_WEIGHTS = [400, 500, 600, 700];
    const FONT_STACKS = {
      heading: "'Montserrat', sans-serif",
      body: "'Poppins', sans-serif",
      switzer: "'Switzer', sans-serif",
      inherit: "inherit"
    };
    function blankForm() {
      return {
        name: "",
        font_family: "inherit",
        font_weight: 400,
        italic: false,
        underline: false,
        hasColor: false,
        color: "#222222",
        min_font_size: 1,
        max_font_size: 1.5,
        font_size_vw: 1.5,
        hasLineHeight: false,
        line_height: 1.4
      };
    }
    const editingId = ref(null);
    const saving = ref(false);
    const form = reactive(blankForm());
    const previewStyle = computed(() => ({
      fontFamily: FONT_STACKS[form.font_family],
      fontWeight: form.font_weight,
      fontStyle: form.italic ? "italic" : "normal",
      textDecoration: form.underline ? "underline" : "none",
      color: form.hasColor ? form.color : void 0,
      lineHeight: form.hasLineHeight ? form.line_height : void 0,
      fontSize: `clamp(${form.min_font_size}rem, ${form.font_size_vw}vw, ${form.max_font_size}rem)`
    }));
    function startCreate() {
      editingId.value = null;
      Object.assign(form, blankForm());
    }
    function startEdit(style) {
      editingId.value = style.id;
      Object.assign(form, {
        name: style.name,
        font_family: style.font_family,
        font_weight: style.font_weight,
        italic: style.italic,
        underline: style.underline,
        hasColor: !!style.color,
        color: style.color ?? "#222222",
        min_font_size: style.min_font_size,
        max_font_size: style.max_font_size,
        font_size_vw: style.font_size_vw,
        hasLineHeight: style.line_height !== null,
        line_height: style.line_height ?? 1.4
      });
    }
    async function save() {
      var _a, _b, _c;
      saving.value = true;
      const payload = {
        name: form.name,
        font_family: form.font_family,
        font_weight: form.font_weight,
        italic: form.italic,
        underline: form.underline,
        color: form.hasColor ? form.color : null,
        min_font_size: form.min_font_size,
        max_font_size: form.max_font_size,
        font_size_vw: form.font_size_vw,
        line_height: form.hasLineHeight ? form.line_height : null
      };
      try {
        if (editingId.value) {
          const { data } = await window.axios.put(`/content/text-styles/${editingId.value}`, payload);
          const updated = data.response.data;
          const idx = styles.value.findIndex((s) => s.id === updated.id);
          if (idx !== -1) styles.value[idx] = updated;
        } else {
          const { data } = await window.axios.post("/content/text-styles", payload);
          styles.value.push(data.response.data);
        }
        snack.success("Text style saved.");
        startCreate();
      } catch (e) {
        snack.error(((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.response) == null ? void 0 : _c.message) || "Failed to save text style.");
      } finally {
        saving.value = false;
      }
    }
    async function remove(style) {
      if (!confirm(`Delete the "${style.name}" text style? Any text using it will fall back to its default look.`)) {
        return;
      }
      try {
        await window.axios.delete(`/content/text-styles/${style.id}`);
        styles.value = styles.value.filter((s) => s.id !== style.id);
        if (editingId.value === style.id) startCreate();
        snack.success("Text style deleted.");
      } catch (e) {
        snack.error("Failed to delete text style.");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-styles" data-v-4de4af06${_scopeId}><h1 class="text-styles__title" data-v-4de4af06${_scopeId}>Manage Text Styles</h1><p class="text-styles__subtitle" data-v-4de4af06${_scopeId}> Named text styles admins can assign to any editable field on the site. Editing a style here updates every field that uses it. </p><div class="text-styles__layout" data-v-4de4af06${_scopeId}><form class="text-styles__form" data-v-4de4af06${_scopeId}><h2 data-v-4de4af06${_scopeId}>${ssrInterpolate(editingId.value ? "Edit Style" : "New Style")}</h2><label data-v-4de4af06${_scopeId}> Name <input${ssrRenderAttr("value", form.name)} type="text" required placeholder="e.g. Heading 1" data-v-4de4af06${_scopeId}></label><label data-v-4de4af06${_scopeId}> Font family <select data-v-4de4af06${_scopeId}><!--[-->`);
            ssrRenderList(FONT_FAMILIES, (f) => {
              _push2(`<option${ssrRenderAttr("value", f)} data-v-4de4af06${ssrIncludeBooleanAttr(Array.isArray(form.font_family) ? ssrLooseContain(form.font_family, f) : ssrLooseEqual(form.font_family, f)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(f)}</option>`);
            });
            _push2(`<!--]--></select></label><label data-v-4de4af06${_scopeId}> Font weight <select data-v-4de4af06${_scopeId}><!--[-->`);
            ssrRenderList(FONT_WEIGHTS, (w) => {
              _push2(`<option${ssrRenderAttr("value", w)} data-v-4de4af06${ssrIncludeBooleanAttr(Array.isArray(form.font_weight) ? ssrLooseContain(form.font_weight, w) : ssrLooseEqual(form.font_weight, w)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(w)}</option>`);
            });
            _push2(`<!--]--></select></label><div class="text-styles__row" data-v-4de4af06${_scopeId}><label class="text-styles__checkbox" data-v-4de4af06${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.italic) ? ssrLooseContain(form.italic, null) : form.italic) ? " checked" : ""} type="checkbox" data-v-4de4af06${_scopeId}> Italic </label><label class="text-styles__checkbox" data-v-4de4af06${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.underline) ? ssrLooseContain(form.underline, null) : form.underline) ? " checked" : ""} type="checkbox" data-v-4de4af06${_scopeId}> Underline </label></div><label class="text-styles__checkbox" data-v-4de4af06${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.hasColor) ? ssrLooseContain(form.hasColor, null) : form.hasColor) ? " checked" : ""} type="checkbox" data-v-4de4af06${_scopeId}> Override color </label>`);
            if (form.hasColor) {
              _push2(`<label data-v-4de4af06${_scopeId}><input${ssrRenderAttr("value", form.color)} type="color" data-v-4de4af06${_scopeId}></label>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-styles__row" data-v-4de4af06${_scopeId}><label data-v-4de4af06${_scopeId}> Min size (rem) <input${ssrRenderAttr("value", form.min_font_size)} type="number" step="0.125" min="0.5" max="6" data-v-4de4af06${_scopeId}></label><label data-v-4de4af06${_scopeId}> Max size (rem) <input${ssrRenderAttr("value", form.max_font_size)} type="number" step="0.125" min="0.5" max="6" data-v-4de4af06${_scopeId}></label><label data-v-4de4af06${_scopeId}> Fluid slope (vw) <input${ssrRenderAttr("value", form.font_size_vw)} type="number" step="0.1" min="0" max="10" data-v-4de4af06${_scopeId}></label></div><label class="text-styles__checkbox" data-v-4de4af06${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.hasLineHeight) ? ssrLooseContain(form.hasLineHeight, null) : form.hasLineHeight) ? " checked" : ""} type="checkbox" data-v-4de4af06${_scopeId}> Override line height </label>`);
            if (form.hasLineHeight) {
              _push2(`<label data-v-4de4af06${_scopeId}><input${ssrRenderAttr("value", form.line_height)} type="number" step="0.05" min="0.8" max="3" data-v-4de4af06${_scopeId}></label>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-styles__preview" data-v-4de4af06${_scopeId}><span class="text-styles__preview-label" data-v-4de4af06${_scopeId}>Preview</span><p style="${ssrRenderStyle(previewStyle.value)}" data-v-4de4af06${_scopeId}>The quick brown fox jumps over the lazy dog</p></div><div class="text-styles__actions" data-v-4de4af06${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-4de4af06${_scopeId}>${ssrInterpolate(editingId.value ? "Save Changes" : "Create Style")}</button>`);
            if (editingId.value) {
              _push2(`<button type="button" class="text-styles__cancel" data-v-4de4af06${_scopeId}>Cancel</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form><div class="text-styles__list" data-v-4de4af06${_scopeId}><h2 data-v-4de4af06${_scopeId}>Existing Styles</h2>`);
            if (styles.value.length === 0) {
              _push2(`<p class="text-styles__empty" data-v-4de4af06${_scopeId}>No text styles yet.</p>`);
            } else {
              _push2(`<table data-v-4de4af06${_scopeId}><thead data-v-4de4af06${_scopeId}><tr data-v-4de4af06${_scopeId}><th data-v-4de4af06${_scopeId}>Name</th><th data-v-4de4af06${_scopeId}>Family</th><th data-v-4de4af06${_scopeId}>Weight</th><th data-v-4de4af06${_scopeId}>Size range</th><th data-v-4de4af06${_scopeId}></th></tr></thead><tbody data-v-4de4af06${_scopeId}><!--[-->`);
              ssrRenderList(styles.value, (style) => {
                _push2(`<tr data-v-4de4af06${_scopeId}><td data-v-4de4af06${_scopeId}>${ssrInterpolate(style.name)}</td><td data-v-4de4af06${_scopeId}>${ssrInterpolate(style.font_family)}</td><td data-v-4de4af06${_scopeId}>${ssrInterpolate(style.font_weight)}</td><td data-v-4de4af06${_scopeId}>${ssrInterpolate(style.min_font_size)}rem – ${ssrInterpolate(style.max_font_size)}rem</td><td class="text-styles__row-actions" data-v-4de4af06${_scopeId}><button type="button" data-v-4de4af06${_scopeId}>Edit</button><button type="button" class="text-styles__delete" data-v-4de4af06${_scopeId}>Delete</button></td></tr>`);
              });
              _push2(`<!--]--></tbody></table>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-styles" }, [
                createVNode("h1", { class: "text-styles__title" }, "Manage Text Styles"),
                createVNode("p", { class: "text-styles__subtitle" }, " Named text styles admins can assign to any editable field on the site. Editing a style here updates every field that uses it. "),
                createVNode("div", { class: "text-styles__layout" }, [
                  createVNode("form", {
                    class: "text-styles__form",
                    onSubmit: withModifiers(save, ["prevent"])
                  }, [
                    createVNode("h2", null, toDisplayString(editingId.value ? "Edit Style" : "New Style"), 1),
                    createVNode("label", null, [
                      createTextVNode(" Name "),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.name = $event,
                        type: "text",
                        required: "",
                        placeholder: "e.g. Heading 1"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, form.name]
                      ])
                    ]),
                    createVNode("label", null, [
                      createTextVNode(" Font family "),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => form.font_family = $event
                      }, [
                        (openBlock(), createBlock(Fragment, null, renderList(FONT_FAMILIES, (f) => {
                          return createVNode("option", {
                            key: f,
                            value: f
                          }, toDisplayString(f), 9, ["value"]);
                        }), 64))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, form.font_family]
                      ])
                    ]),
                    createVNode("label", null, [
                      createTextVNode(" Font weight "),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => form.font_weight = $event
                      }, [
                        (openBlock(), createBlock(Fragment, null, renderList(FONT_WEIGHTS, (w) => {
                          return createVNode("option", {
                            key: w,
                            value: w
                          }, toDisplayString(w), 9, ["value"]);
                        }), 64))
                      ], 8, ["onUpdate:modelValue"]), [
                        [
                          vModelSelect,
                          form.font_weight,
                          void 0,
                          { number: true }
                        ]
                      ])
                    ]),
                    createVNode("div", { class: "text-styles__row" }, [
                      createVNode("label", { class: "text-styles__checkbox" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.italic = $event,
                          type: "checkbox"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, form.italic]
                        ]),
                        createTextVNode(" Italic ")
                      ]),
                      createVNode("label", { class: "text-styles__checkbox" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.underline = $event,
                          type: "checkbox"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, form.underline]
                        ]),
                        createTextVNode(" Underline ")
                      ])
                    ]),
                    createVNode("label", { class: "text-styles__checkbox" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.hasColor = $event,
                        type: "checkbox"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, form.hasColor]
                      ]),
                      createTextVNode(" Override color ")
                    ]),
                    form.hasColor ? (openBlock(), createBlock("label", { key: 0 }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.color = $event,
                        type: "color"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, form.color]
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "text-styles__row" }, [
                      createVNode("label", null, [
                        createTextVNode(" Min size (rem) "),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.min_font_size = $event,
                          type: "number",
                          step: "0.125",
                          min: "0.5",
                          max: "6"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [
                            vModelText,
                            form.min_font_size,
                            void 0,
                            { number: true }
                          ]
                        ])
                      ]),
                      createVNode("label", null, [
                        createTextVNode(" Max size (rem) "),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.max_font_size = $event,
                          type: "number",
                          step: "0.125",
                          min: "0.5",
                          max: "6"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [
                            vModelText,
                            form.max_font_size,
                            void 0,
                            { number: true }
                          ]
                        ])
                      ]),
                      createVNode("label", null, [
                        createTextVNode(" Fluid slope (vw) "),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.font_size_vw = $event,
                          type: "number",
                          step: "0.1",
                          min: "0",
                          max: "10"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [
                            vModelText,
                            form.font_size_vw,
                            void 0,
                            { number: true }
                          ]
                        ])
                      ])
                    ]),
                    createVNode("label", { class: "text-styles__checkbox" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.hasLineHeight = $event,
                        type: "checkbox"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, form.hasLineHeight]
                      ]),
                      createTextVNode(" Override line height ")
                    ]),
                    form.hasLineHeight ? (openBlock(), createBlock("label", { key: 1 }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.line_height = $event,
                        type: "number",
                        step: "0.05",
                        min: "0.8",
                        max: "3"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [
                          vModelText,
                          form.line_height,
                          void 0,
                          { number: true }
                        ]
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "text-styles__preview" }, [
                      createVNode("span", { class: "text-styles__preview-label" }, "Preview"),
                      createVNode("p", { style: previewStyle.value }, "The quick brown fox jumps over the lazy dog", 4)
                    ]),
                    createVNode("div", { class: "text-styles__actions" }, [
                      createVNode("button", {
                        type: "submit",
                        disabled: saving.value
                      }, toDisplayString(editingId.value ? "Save Changes" : "Create Style"), 9, ["disabled"]),
                      editingId.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        class: "text-styles__cancel",
                        onClick: startCreate
                      }, "Cancel")) : createCommentVNode("", true)
                    ])
                  ], 32),
                  createVNode("div", { class: "text-styles__list" }, [
                    createVNode("h2", null, "Existing Styles"),
                    styles.value.length === 0 ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-styles__empty"
                    }, "No text styles yet.")) : (openBlock(), createBlock("table", { key: 1 }, [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", null, "Name"),
                          createVNode("th", null, "Family"),
                          createVNode("th", null, "Weight"),
                          createVNode("th", null, "Size range"),
                          createVNode("th")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(styles.value, (style) => {
                          return openBlock(), createBlock("tr", {
                            key: style.id
                          }, [
                            createVNode("td", null, toDisplayString(style.name), 1),
                            createVNode("td", null, toDisplayString(style.font_family), 1),
                            createVNode("td", null, toDisplayString(style.font_weight), 1),
                            createVNode("td", null, toDisplayString(style.min_font_size) + "rem – " + toDisplayString(style.max_font_size) + "rem", 1),
                            createVNode("td", { class: "text-styles__row-actions" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => startEdit(style)
                              }, "Edit", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "text-styles__delete",
                                onClick: ($event) => remove(style)
                              }, "Delete", 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/TextStyles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextStyles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4de4af06"]]);
export {
  TextStyles as default
};
