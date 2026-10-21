import { defineComponent, mergeProps, useSSRContext, ref, provide, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./PageMeta-RDJ3sdSO.js";
import { L as LayoutV2 } from "./LayoutV2-Cv_msxRR.js";
import { a as EditableText } from "./FooterV2-L8NNvjgt.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./StyleToolbarHost-99_vtE-Q.js";
import "vue3-toastify";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ArticlesHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "art-hero" }, _attrs))} data-v-c2998b8b><div class="art-hero__inner" data-v-c2998b8b>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "h1",
        class: "art-hero__title",
        "content-key": "articles.hero.title",
        page: "articles",
        default: "Articles For Modern Healthcare Teams."
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "art-hero__subtitle",
        "content-key": "articles.hero.subtitle",
        page: "articles",
        default: "Explore educational articles, staffing insights, rehabilitation trends, and real-world case studies designed for healthcare employers and therapy professionals."
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Articles/ArticlesHeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ArticlesHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c2998b8b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArticleGridSection",
  __ssrInlineRender: true,
  props: {
    articles: {}
  },
  setup(__props) {
    const activeTab = ref("articles");
    function excerpt(text) {
      if (!text) return "";
      const stripped = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      return stripped.length > 120 ? stripped.slice(0, 120).trimEnd() + "..." : stripped;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "art-section" }, _attrs))} data-v-ef64f162><div class="art-section__tabs-wrap" data-v-ef64f162><div class="art-section__tabs" data-v-ef64f162><button class="${ssrRenderClass([{ "art-section__tab--active": activeTab.value === "articles" }, "art-section__tab"])}" data-v-ef64f162>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "articles.tabs.articles",
        page: "articles",
        default: "Articles"
      }, null, _parent));
      _push(`</button></div></div><div class="art-section__content" data-v-ef64f162>`);
      if (activeTab.value === "articles") {
        _push(`<!--[-->`);
        if (_ctx.articles.length > 0) {
          _push(`<div class="art-section__grid" data-v-ef64f162><!--[-->`);
          ssrRenderList(_ctx.articles, (article, idx) => {
            _push(`<div class="art-card" data-v-ef64f162><div class="art-card__banner" data-v-ef64f162><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="art-card__image" data-v-ef64f162></div><div class="art-card__body" data-v-ef64f162><h3 class="art-card__title" data-v-ef64f162>${ssrInterpolate(article.title)}</h3><p class="art-card__excerpt" data-v-ef64f162>${ssrInterpolate(excerpt(article.description || article.content))}</p><div class="art-card__footer" data-v-ef64f162><a${ssrRenderAttr("href", `/articles/${article.url}`)} class="art-card__link" data-v-ef64f162>Read more →</a></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="art-section__empty" data-v-ef64f162><p data-v-ef64f162>No articles available yet.</p></div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div class="art-section__empty" data-v-ef64f162><p data-v-ef64f162>Case studies coming soon.</p></div>`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Articles/ArticleGridSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticleGridSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ef64f162"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Articles",
  __ssrInlineRender: true,
  props: {
    articles: {}
  },
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        page: "articles",
        path: "/articles",
        "default-title": "Healthcare Staffing Articles & Insights | TNY Staffing",
        "default-description": "Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York."
      }, null, _parent));
      _push(ssrRenderComponent(LayoutV2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ArticlesHeroSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArticleGridSection, { articles: _ctx.articles }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ArticlesHeroSection),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Articles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
