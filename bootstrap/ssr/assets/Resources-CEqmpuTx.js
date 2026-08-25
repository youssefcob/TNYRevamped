import { defineComponent, mergeProps, useSSRContext, ref, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./PageMeta-DrybHnC5.js";
import { L as LayoutV2 } from "./LayoutV2-BP-Aua6a.js";
import { a as EditableText } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "vue3-toastify";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResourcesHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "res-hero" }, _attrs))} data-v-73629930><div class="res-hero__inner" data-v-73629930>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "res-hero__title",
        "content-key": "resources.hero.title",
        page: "resources",
        default: "Resources For Modern Healthcare Teams."
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "res-hero__subtitle",
        "content-key": "resources.hero.subtitle",
        page: "resources",
        default: "Explore educational articles, staffing insights, rehabilitation trends, and real-world case studies designed for healthcare employers and therapy professionals."
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Resources/ResourcesHeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ResourcesHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-73629930"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArticleGridSection",
  __ssrInlineRender: true,
  props: {
    articles: {}
  },
  setup(__props) {
    const activeTab = ref("articles");
    function readTime(text) {
      if (!text) return "3 min read";
      const words = text.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
      return `${Math.max(1, Math.round(words / 200))} min read`;
    }
    function excerpt(text) {
      if (!text) return "";
      const stripped = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      return stripped.length > 120 ? stripped.slice(0, 120).trimEnd() + "..." : stripped;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "art-section" }, _attrs))} data-v-cdb60749><div class="art-section__tabs-wrap" data-v-cdb60749><div class="art-section__tabs" data-v-cdb60749><button class="${ssrRenderClass([{ "art-section__tab--active": activeTab.value === "articles" }, "art-section__tab"])}" data-v-cdb60749>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "resources.tabs.articles",
        page: "resources",
        default: "Articles"
      }, null, _parent));
      _push(`</button></div></div><div class="art-section__content" data-v-cdb60749>`);
      if (activeTab.value === "articles") {
        _push(`<!--[-->`);
        if (_ctx.articles.length > 0) {
          _push(`<div class="art-section__grid" data-v-cdb60749><!--[-->`);
          ssrRenderList(_ctx.articles, (article, idx) => {
            _push(`<div class="art-card" data-v-cdb60749><div class="art-card__banner" data-v-cdb60749><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="art-card__image" data-v-cdb60749></div><div class="art-card__body" data-v-cdb60749><h3 class="art-card__title" data-v-cdb60749>${ssrInterpolate(article.title)}</h3><p class="art-card__excerpt" data-v-cdb60749>${ssrInterpolate(excerpt(article.content))}</p><div class="art-card__footer" data-v-cdb60749><span class="art-card__read-time" data-v-cdb60749>${ssrInterpolate(readTime(article.content))}</span><a${ssrRenderAttr("href", `/news/${article.url}`)} class="art-card__link" data-v-cdb60749>Read more →</a></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="art-section__empty" data-v-cdb60749><p data-v-cdb60749>No articles available yet.</p></div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div class="art-section__empty" data-v-cdb60749><p data-v-cdb60749>Case studies coming soon.</p></div>`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Resources/ArticleGridSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleGridSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cdb60749"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Resources",
  __ssrInlineRender: true,
  props: {
    articles: {}
  },
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        page: "resources",
        path: "/resources",
        "default-title": "Healthcare Staffing Resources & Insights | TNY Staffing",
        "default-description": "Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ResourcesHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArticleGridSection, { articles: _ctx.articles }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ResourcesHeroSection),
              createVNode(ArticleGridSection, { articles: _ctx.articles }, null, 8, ["articles"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
