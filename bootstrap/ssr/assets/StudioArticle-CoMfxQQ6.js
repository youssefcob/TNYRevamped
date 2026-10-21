import { defineComponent, computed, onMounted, unref, withCtx, createVNode, resolveDynamicComponent, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { L as LayoutV2 } from "./LayoutV2-Cv_msxRR.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./FooterV2-L8NNvjgt.js";
import "vue3-toastify";
import "./StyleToolbarHost-99_vtE-Q.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StudioArticle",
  __ssrInlineRender: true,
  props: {
    article: {},
    entry: {},
    path: {}
  },
  setup(__props) {
    const props = __props;
    function esc(value) {
      return (value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const title = computed(() => esc(props.article.title) || `${esc(props.entry.title)} | TNY Staffing`);
    const description = computed(() => esc(props.article.description || props.entry.description));
    const image = computed(() => esc(props.entry.image));
    const canonicalUrl = computed(() => `https://www.tnystaffingco.com${props.path}`);
    const jsonLd = computed(() => props.article.jsonLd.map((entry) => JSON.stringify(entry).replace(/</g, "\\u003c")));
    onMounted(() => {
      var _a;
      const src = props.article.js;
      if (!src) return;
      if (Array.from(document.scripts).some((script2) => script2.src === src)) {
        (_a = window.__studioBlocks) == null ? void 0 : _a.init();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      document.body.appendChild(script);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-e8d6e402${_scopeId}>${ssrInterpolate(title.value)}</title>`);
            if (description.value) {
              _push2(`<meta name="description"${ssrRenderAttr("content", description.value)} data-v-e8d6e402${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta name="robots" content="index, follow" data-v-e8d6e402${_scopeId}><link rel="canonical"${ssrRenderAttr("href", canonicalUrl.value)} data-v-e8d6e402${_scopeId}><meta property="og:type" content="article" data-v-e8d6e402${_scopeId}><meta property="og:url"${ssrRenderAttr("content", canonicalUrl.value)} data-v-e8d6e402${_scopeId}><meta property="og:title"${ssrRenderAttr("content", title.value)} data-v-e8d6e402${_scopeId}>`);
            if (description.value) {
              _push2(`<meta property="og:description"${ssrRenderAttr("content", description.value)} data-v-e8d6e402${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (image.value) {
              _push2(`<meta property="og:image"${ssrRenderAttr("content", image.value)} data-v-e8d6e402${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<meta property="og:site_name" content="TNY Staffing Corporation" data-v-e8d6e402${_scopeId}><meta name="twitter:card"${ssrRenderAttr("content", image.value ? "summary_large_image" : "summary")} data-v-e8d6e402${_scopeId}><meta name="twitter:url"${ssrRenderAttr("content", canonicalUrl.value)} data-v-e8d6e402${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", title.value)} data-v-e8d6e402${_scopeId}>`);
            if (description.value) {
              _push2(`<meta name="twitter:description"${ssrRenderAttr("content", description.value)} data-v-e8d6e402${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (image.value) {
              _push2(`<meta name="twitter:image"${ssrRenderAttr("content", image.value)} data-v-e8d6e402${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.article.meta, (tag) => {
              _push2(`<meta${ssrRenderAttr("name", esc(tag.name))}${ssrRenderAttr("content", esc(tag.value))} data-v-e8d6e402${_scopeId}>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(_ctx.article.fontStylesheets, (href) => {
              _push2(`<link rel="stylesheet"${ssrRenderAttr("href", esc(href))} data-v-e8d6e402${_scopeId}>`);
            });
            _push2(`<!--]-->`);
            if (_ctx.article.css) {
              _push2(`<link rel="stylesheet"${ssrRenderAttr("href", esc(_ctx.article.css))} data-v-e8d6e402${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(jsonLd.value, (json, index) => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent("script"), {
                key: index,
                type: "application/ld+json"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(json)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(json), 1)
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("title", null, toDisplayString(title.value), 1),
              description.value ? (openBlock(), createBlock("meta", {
                key: 0,
                name: "description",
                content: description.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
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
                content: "article"
              }),
              createVNode("meta", {
                property: "og:url",
                content: canonicalUrl.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:title",
                content: title.value
              }, null, 8, ["content"]),
              description.value ? (openBlock(), createBlock("meta", {
                key: 1,
                property: "og:description",
                content: description.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
              image.value ? (openBlock(), createBlock("meta", {
                key: 2,
                property: "og:image",
                content: image.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode("meta", {
                property: "og:site_name",
                content: "TNY Staffing Corporation"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: image.value ? "summary_large_image" : "summary"
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:url",
                content: canonicalUrl.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:title",
                content: title.value
              }, null, 8, ["content"]),
              description.value ? (openBlock(), createBlock("meta", {
                key: 3,
                name: "twitter:description",
                content: description.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
              image.value ? (openBlock(), createBlock("meta", {
                key: 4,
                name: "twitter:image",
                content: image.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.article.meta, (tag) => {
                return openBlock(), createBlock("meta", {
                  key: tag.name,
                  name: esc(tag.name),
                  content: esc(tag.value)
                }, null, 8, ["name", "content"]);
              }), 128)),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.article.fontStylesheets, (href) => {
                return openBlock(), createBlock("link", {
                  key: href,
                  rel: "stylesheet",
                  href: esc(href)
                }, null, 8, ["href"]);
              }), 128)),
              _ctx.article.css ? (openBlock(), createBlock("link", {
                key: 5,
                rel: "stylesheet",
                href: esc(_ctx.article.css)
              }, null, 8, ["href"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(jsonLd.value, (json, index) => {
                return openBlock(), createBlock(resolveDynamicComponent("script"), {
                  key: index,
                  type: "application/ld+json"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(json), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="studio-article" data-v-e8d6e402${_scopeId}>${_ctx.article.html ?? ""}</article>`);
          } else {
            return [
              createVNode("article", {
                class: "studio-article",
                innerHTML: _ctx.article.html
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Articles/StudioArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StudioArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8d6e402"]]);
export {
  StudioArticle as default
};
