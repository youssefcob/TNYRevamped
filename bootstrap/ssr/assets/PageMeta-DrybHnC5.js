import { defineComponent, computed, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { usePage, Head } from "@inertiajs/vue3";
import { F as FEATURES } from "./NavBarV2-BlC3_Oet.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  __ssrInlineRender: true,
  props: {
    page: { type: String, required: true },
    path: { type: String, required: true },
    defaultTitle: { type: String, required: true },
    defaultDescription: { type: String, required: true },
    defaultOgImage: { type: String, default: null }
  },
  setup(__props) {
    const props = __props;
    const pageMeta = computed(() => FEATURES.metaTags ? usePage().props.pageMeta ?? null : null);
    const title = computed(() => {
      var _a;
      return ((_a = pageMeta.value) == null ? void 0 : _a.title) || props.defaultTitle;
    });
    const description = computed(() => {
      var _a;
      return ((_a = pageMeta.value) == null ? void 0 : _a.description) || props.defaultDescription;
    });
    const ogImage = computed(() => {
      var _a;
      return ((_a = pageMeta.value) == null ? void 0 : _a.ogImage) || props.defaultOgImage;
    });
    const customTags = computed(() => {
      var _a;
      return ((_a = pageMeta.value) == null ? void 0 : _a.customTags) ?? [];
    });
    const canonicalUrl = computed(() => {
      var _a;
      const override = (_a = pageMeta.value) == null ? void 0 : _a.canonical;
      if (!override) return `https://www.tnystaffingco.com${props.path}`;
      return override.startsWith("http") ? override : `https://www.tnystaffingco.com${override}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(title.value)}</title><meta name="title"${ssrRenderAttr("content", title.value)}${_scopeId}><meta name="description"${ssrRenderAttr("content", description.value)}${_scopeId}><meta name="robots" content="index, follow"${_scopeId}><link rel="canonical"${ssrRenderAttr("href", canonicalUrl.value)}${_scopeId}><meta property="og:type" content="website"${_scopeId}><meta property="og:url"${ssrRenderAttr("content", canonicalUrl.value)}${_scopeId}><meta property="og:title"${ssrRenderAttr("content", title.value)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", description.value)}${_scopeId}><meta property="og:site_name" content="TNY Staffing Corporation"${_scopeId}>`);
            if (ogImage.value) {
              _push2(`<meta property="og:image"${ssrRenderAttr("content", ogImage.value)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:url"${ssrRenderAttr("content", canonicalUrl.value)}${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", title.value)}${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", description.value)}${_scopeId}>`);
            if (ogImage.value) {
              _push2(`<meta name="twitter:image"${ssrRenderAttr("content", ogImage.value)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(customTags.value, (tag) => {
              _push2(`<meta${ssrRenderAttr("name", tag.attribute === "name" ? tag.meta_key : void 0)}${ssrRenderAttr("property", tag.attribute === "property" ? tag.meta_key : void 0)}${ssrRenderAttr("content", tag.content)}${_scopeId}>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("title", null, toDisplayString(title.value), 1),
              createVNode("meta", {
                name: "title",
                content: title.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "description",
                content: description.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "robots",
                content: "index, follow"
              }),
              createVNode("link", {
                rel: "canonical",
                href: canonicalUrl.value
              }, null, 8, ["href"]),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:url",
                content: canonicalUrl.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:title",
                content: title.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: description.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:site_name",
                content: "TNY Staffing Corporation"
              }),
              ogImage.value ? (openBlock(), createBlock("meta", {
                key: 0,
                property: "og:image",
                content: ogImage.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:url",
                content: canonicalUrl.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:title",
                content: title.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: description.value
              }, null, 8, ["content"]),
              ogImage.value ? (openBlock(), createBlock("meta", {
                key: 1,
                name: "twitter:image",
                content: ogImage.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(customTags.value, (tag) => {
                return openBlock(), createBlock("meta", {
                  key: `${tag.attribute}:${tag.meta_key}`,
                  name: tag.attribute === "name" ? tag.meta_key : void 0,
                  property: tag.attribute === "property" ? tag.meta_key : void 0,
                  content: tag.content
                }, null, 8, ["name", "property", "content"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/PageMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
