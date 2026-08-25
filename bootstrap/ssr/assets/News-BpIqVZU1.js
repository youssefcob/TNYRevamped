import { defineComponent, mergeProps, useSSRContext, computed, unref, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./NavBarV2-BlC3_Oet.js";
import "vue3-toastify";
import "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArticleHeroSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "art-hero" }, _attrs))} data-v-1107c714><div class="art-hero__inner" data-v-1107c714><div class="art-hero__content" data-v-1107c714><h1 class="art-hero__title" data-v-1107c714>${ssrInterpolate(_ctx.title)}</h1>`);
      if (_ctx.description) {
        _push(`<p class="art-hero__subtitle" data-v-1107c714>${ssrInterpolate(_ctx.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.image) {
        _push(`<div class="art-hero__image" data-v-1107c714><img${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.title)} data-v-1107c714></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Resources/ArticleHeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1107c714"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "News",
  __ssrInlineRender: true,
  props: {
    news: {}
  },
  setup(__props) {
    const props = __props;
    function excerpt(text) {
      if (!text) return "";
      const stripped = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      return stripped.length > 160 ? stripped.slice(0, 160).trimEnd() + "..." : stripped;
    }
    const metaDescription = computed(() => props.news.description || excerpt(props.news.content));
    const canonicalUrl = computed(() => `https://www.tnystaffingco.com/news/${props.news.url}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-0df40fdd${_scopeId}>${ssrInterpolate(_ctx.news.title)} | TNY Staffing</title><meta name="description"${ssrRenderAttr("content", metaDescription.value)} data-v-0df40fdd${_scopeId}><meta name="robots" content="index, follow" data-v-0df40fdd${_scopeId}><link rel="canonical"${ssrRenderAttr("href", canonicalUrl.value)} data-v-0df40fdd${_scopeId}><meta property="og:type" content="article" data-v-0df40fdd${_scopeId}><meta property="og:url"${ssrRenderAttr("content", canonicalUrl.value)} data-v-0df40fdd${_scopeId}><meta property="og:title"${ssrRenderAttr("content", _ctx.news.title)} data-v-0df40fdd${_scopeId}><meta property="og:description"${ssrRenderAttr("content", metaDescription.value)} data-v-0df40fdd${_scopeId}><meta property="og:image"${ssrRenderAttr("content", _ctx.news.image)} data-v-0df40fdd${_scopeId}><meta property="og:site_name" content="TNY Staffing Corporation" data-v-0df40fdd${_scopeId}><meta name="twitter:card" content="summary_large_image" data-v-0df40fdd${_scopeId}><meta name="twitter:url"${ssrRenderAttr("content", canonicalUrl.value)} data-v-0df40fdd${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", _ctx.news.title)} data-v-0df40fdd${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", metaDescription.value)} data-v-0df40fdd${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", _ctx.news.image)} data-v-0df40fdd${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(_ctx.news.title) + " | TNY Staffing", 1),
              createVNode("meta", {
                name: "description",
                content: metaDescription.value
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
                content: "article"
              }),
              createVNode("meta", {
                property: "og:url",
                content: canonicalUrl.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:title",
                content: _ctx.news.title
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: metaDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: _ctx.news.image
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:site_name",
                content: "TNY Staffing Corporation"
              }),
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
                content: _ctx.news.title
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: metaDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: _ctx.news.image
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ArticleHeroSection, {
              title: _ctx.news.title,
              description: _ctx.news.description,
              image: _ctx.news.image
            }, null, _parent2, _scopeId));
            _push2(`<article class="news-content" data-v-0df40fdd${_scopeId}><div class="news-content__inner" data-v-0df40fdd${_scopeId}>${_ctx.news.content ?? ""}</div></article>`);
          } else {
            return [
              createVNode(ArticleHeroSection, {
                title: _ctx.news.title,
                description: _ctx.news.description,
                image: _ctx.news.image
              }, null, 8, ["title", "description", "image"]),
              createVNode("article", { class: "news-content" }, [
                createVNode("div", {
                  class: "news-content__inner",
                  innerHTML: _ctx.news.content
                }, null, 8, ["innerHTML"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/News.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const News = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0df40fdd"]]);
export {
  News as default
};
