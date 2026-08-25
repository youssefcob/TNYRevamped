import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext, ref, onMounted, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { F as FEATURES, x as editModeEnabled, y as activeEditableField, z as setActiveEditableField } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdminEditToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const isAdmin = computed(() => {
      var _a;
      return !!((_a = page.props.auth) == null ? void 0 : _a.admin);
    });
    const canToggleEditMode = computed(() => FEATURES.textEditing || FEATURES.imageEditing);
    return (_ctx, _push, _parent, _attrs) => {
      if (isAdmin.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-edit-toolbar" }, _attrs))} data-v-31aa9f5e>`);
        if (unref(FEATURES).textStyles) {
          _push(ssrRenderComponent(unref(Link), {
            href: "/admin/text-styles",
            class: "admin-edit-toolbar__link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Manage Styles`);
              } else {
                return [
                  createTextVNode("Manage Styles")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(FEATURES).metaTags) {
          _push(ssrRenderComponent(unref(Link), {
            href: "/admin/meta-tags",
            class: "admin-edit-toolbar__link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Manage Meta Tags`);
              } else {
                return [
                  createTextVNode("Manage Meta Tags")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (canToggleEditMode.value) {
          _push(`<button type="button" class="${ssrRenderClass([{ "admin-edit-toggle--active": unref(editModeEnabled) }, "admin-edit-toggle"])}" data-v-31aa9f5e>${ssrInterpolate(unref(editModeEnabled) ? "Editing: On" : "Edit Page")}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/AdminEditToggle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminEditToggle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-31aa9f5e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StyleToolbarHost",
  __ssrInlineRender: true,
  setup(__props) {
    const TAG_OPTIONS = ["h1", "h2", "h3", "h4", "p", "span"];
    const OBJECT_FIT_OPTIONS = ["cover", "contain", "fill", "none"];
    const POSITION_GRID = [
      { value: "left top", label: "↖" },
      { value: "top", label: "↑" },
      { value: "right top", label: "↗" },
      { value: "left", label: "←" },
      { value: "center", label: "•" },
      { value: "right", label: "→" },
      { value: "left bottom", label: "↙" },
      { value: "bottom", label: "↓" },
      { value: "right bottom", label: "↘" }
    ];
    const inertiaPage = usePage();
    const textStyles = computed(() => inertiaPage.props.textStyles ?? []);
    const pos = computed(() => {
      const f = activeEditableField.value;
      if (!f) return { top: "0px", left: "0px" };
      return {
        top: `${Math.max(8, f.rect.top - 48)}px`,
        left: `${Math.max(8, Math.min(f.rect.left, window.innerWidth - 260))}px`
      };
    });
    ref(null);
    function onDocMouseDown(e) {
      const target = e.target;
      if (target.closest(".editable-text") || target.closest(".editable-image")) return;
      if (target.closest(".style-toolbar-host")) return;
      setActiveEditableField(null);
    }
    onMounted(() => document.addEventListener("mousedown", onDocMouseDown));
    onUnmounted(() => document.removeEventListener("mousedown", onDocMouseDown));
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(activeEditableField)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "style-toolbar-host",
          style: pos.value
        }, _attrs))} data-v-62dd00da>`);
        if (unref(activeEditableField).kind === "text") {
          _push(`<!--[-->`);
          if (unref(FEATURES).textStyles) {
            _push(`<select class="style-toolbar-host__select"${ssrRenderAttr("value", unref(activeEditableField).styleId ?? "")} data-v-62dd00da><option value="" data-v-62dd00da>Default style</option><!--[-->`);
            ssrRenderList(textStyles.value, (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-62dd00da>${ssrInterpolate(s.name)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<select class="style-toolbar-host__select"${ssrRenderAttr("value", unref(activeEditableField).tag ?? "")} data-v-62dd00da><option value="" data-v-62dd00da>Default tag</option><!--[-->`);
          ssrRenderList(TAG_OPTIONS, (t) => {
            _push(`<option${ssrRenderAttr("value", t)} data-v-62dd00da>${ssrInterpolate(t.toUpperCase())}</option>`);
          });
          _push(`<!--]--></select><!--]-->`);
        } else {
          _push(`<!--[--><button type="button" class="style-toolbar-host__btn" data-v-62dd00da>Replace Image</button><input type="file" accept="image/*" class="style-toolbar-host__file-input" data-v-62dd00da><select class="style-toolbar-host__select"${ssrRenderAttr("value", unref(activeEditableField).objectFit ?? "")} data-v-62dd00da><option value="" data-v-62dd00da>Default fit</option><!--[-->`);
          ssrRenderList(OBJECT_FIT_OPTIONS, (f) => {
            _push(`<option${ssrRenderAttr("value", f)} data-v-62dd00da>${ssrInterpolate(f)}</option>`);
          });
          _push(`<!--]--></select><div class="style-toolbar-host__grid" data-v-62dd00da><!--[-->`);
          ssrRenderList(POSITION_GRID, (cell) => {
            _push(`<button type="button" class="${ssrRenderClass([{ "style-toolbar-host__grid-cell--active": unref(activeEditableField).objectPosition === cell.value }, "style-toolbar-host__grid-cell"])}"${ssrRenderAttr("title", cell.value)} data-v-62dd00da>${ssrInterpolate(cell.label)}</button>`);
          });
          _push(`<!--]--></div><label class="style-toolbar-host__alt" data-v-62dd00da> Alt text <input type="text" maxlength="255" placeholder="Describe this image for SEO"${ssrRenderAttr("value", unref(activeEditableField).alt ?? "")} data-v-62dd00da></label><!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/StyleToolbarHost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StyleToolbarHost = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62dd00da"]]);
export {
  AdminEditToggle as A,
  StyleToolbarHost as S
};
