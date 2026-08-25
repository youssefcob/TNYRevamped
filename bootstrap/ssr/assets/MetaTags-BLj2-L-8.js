import { defineComponent, reactive, ref, computed, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, withModifiers, createTextVNode, withDirectives, vModelText, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { M as MainOverLay } from "./MainOverLay-f11KXQRE.js";
import { s as snack } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import "./Foot-6aX9-mt3.js";
import "./modal-lgseaj7M.js";
import "./StyleToolbarHost-C7NtTTfW.js";
import "@inertiajs/vue3";
import "vue3-toastify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MetaTags",
  __ssrInlineRender: true,
  props: {
    metas: {},
    customTags: {}
  },
  setup(__props) {
    const props = __props;
    const metas = reactive({ ...props.metas });
    const customTagsByPage = reactive({ ...props.customTags });
    const PAGES = [
      { page: "home", label: "Home", path: "/", defaultTitle: "Therapy Staffing Agency in NYC | TNY Staffing Corporation", defaultDescription: "TNY Staffing connects NY healthcare facilities with credentialed therapy professionals (PT, OT, SLP). Fast 24h placements for hospitals, schools, and clinics." },
      { page: "about", label: "About", path: "/about", defaultTitle: "About TNY Staffing | NYC Therapy Staffing Agency", defaultDescription: "Learn how TNY Staffing creates meaningful connections between rehab professionals and NYC healthcare organizations. Proudly serving all five boroughs." },
      { page: "solutions", label: "Solutions", path: "/solutions", defaultTitle: "Healthcare Staffing Solutions in NYC | TNY Staffing", defaultDescription: "Explore specialized healthcare staffing solutions in NYC. We connect facilities with qualified PTs, OTs, SLPs, and specialized therapists for per diem and permanent roles." },
      { page: "employers", label: "For Employers", path: "/employers", defaultTitle: "Reliable Healthcare Staffing in NYC | TNY Staffing", defaultDescription: "TNY Staffing provides reliable healthcare staffing in NYC. We supply credentialed PTs, OTs, and SLPs for emergency coverage and long-term workforce solutions." },
      { page: "candidates", label: "For Candidates", path: "/candidates", defaultTitle: "Therapy Jobs in NYC | PT, OT & SLP Careers | TNY Staffing", defaultDescription: "Explore flexible therapy jobs in NYC. TNY Staffing hires PTs, OTs, SLPs, Medical Assistants, and Exercise Physiologists for top healthcare facilities. Apply today." },
      { page: "apply", label: "Apply", path: "/apply", defaultTitle: "Apply for Healthcare & Therapy Jobs in NYC | TNY Staffing", defaultDescription: "Ready for your next healthcare role? Apply online today with TNY Staffing. We hire PTs, OTs, SLPs, massage therapists, and acupuncturists in NYC." },
      { page: "request_service", label: "Request Service", path: "/requestService", defaultTitle: "Request Qualified Healthcare Staff | TNY Staffing", defaultDescription: "Need immediate coverage or long-term rehab staff? Submit your staffing request to TNY Staffing and get matched with qualified PTs, OTs, and SLPs in NYC." },
      { page: "contact", label: "Contact", path: "/contact", defaultTitle: "Contact TNY Staffing | NYC Therapy Staffing Agency", defaultDescription: "Contact TNY Staffing today. Call (347) 441-4283 to hire rehab professionals or find therapy jobs in NYC. Urgent staffing support available." },
      { page: "resources", label: "Resources", path: "/resources", defaultTitle: "Healthcare Staffing Resources & Insights | TNY Staffing", defaultDescription: "Explore educational articles, staffing insights, and rehabilitation trends designed for healthcare employers and therapy professionals in New York." },
      { page: "services", label: "Services (legacy)", path: "/services", defaultTitle: "Our Services | TNY Staffing Corporation", defaultDescription: "Explore TNY Staffing Corporation's healthcare staffing services, connecting NYC facilities with credentialed therapy professionals." }
    ];
    const selectedPage = ref(PAGES[0].page);
    const selected = computed(() => PAGES.find((p) => p.page === selectedPage.value));
    function formFor(page) {
      const meta = metas[page];
      return {
        title: (meta == null ? void 0 : meta.title) ?? "",
        description: (meta == null ? void 0 : meta.description) ?? "",
        canonical: (meta == null ? void 0 : meta.canonical) ?? ""
      };
    }
    const form = reactive(formFor(selectedPage.value));
    function selectPage(page) {
      selectedPage.value = page;
      Object.assign(form, formFor(page));
      Object.assign(newTag, blankNewTag());
    }
    const saving = ref(false);
    async function save() {
      var _a, _b, _c;
      saving.value = true;
      try {
        const { data } = await window.axios.post("/content/meta-tags", {
          page: selectedPage.value,
          title: form.title || null,
          description: form.description || null,
          canonical: form.canonical || null
        });
        metas[selectedPage.value] = data.response.data;
        snack.success("Meta tags saved.");
      } catch (e) {
        snack.error(((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.response) == null ? void 0 : _c.message) || "Failed to save meta tags.");
      } finally {
        saving.value = false;
      }
    }
    const uploadingOgImage = ref(false);
    const ogImageInput = ref(null);
    function triggerOgImagePicker() {
      var _a;
      (_a = ogImageInput.value) == null ? void 0 : _a.click();
    }
    async function onOgImageChange(e) {
      var _a;
      const file = (_a = e.target.files) == null ? void 0 : _a[0];
      e.target.value = "";
      if (!file) return;
      uploadingOgImage.value = true;
      try {
        const upload = new FormData();
        upload.append("page", selectedPage.value);
        upload.append("image", file);
        const { data } = await window.axios.post("/content/meta-tags/og-image", upload, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        metas[selectedPage.value] = data.response.data;
        snack.success("Social share image updated.");
      } catch (e2) {
        snack.error("Failed to upload social share image.");
      } finally {
        uploadingOgImage.value = false;
      }
    }
    const effectiveTitle = computed(() => form.title || selected.value.defaultTitle);
    const effectiveDescription = computed(() => form.description || selected.value.defaultDescription);
    const currentOgImage = computed(() => {
      var _a;
      return ((_a = metas[selectedPage.value]) == null ? void 0 : _a.og_image) ?? null;
    });
    const currentCustomTags = computed(() => customTagsByPage[selectedPage.value] ?? []);
    function blankNewTag() {
      return { attribute: "name", meta_key: "", content: "" };
    }
    const newTag = reactive(blankNewTag());
    const addingTag = ref(false);
    async function addCustomTag() {
      var _a, _b, _c;
      if (!newTag.meta_key.trim() || !newTag.content.trim()) {
        snack.error("Enter both a tag name and content.");
        return;
      }
      addingTag.value = true;
      try {
        const { data } = await window.axios.post("/content/meta-tags/custom-tags", {
          page: selectedPage.value,
          attribute: newTag.attribute,
          meta_key: newTag.meta_key.trim(),
          content: newTag.content.trim()
        });
        const tag = data.response.data;
        if (!customTagsByPage[selectedPage.value]) customTagsByPage[selectedPage.value] = [];
        customTagsByPage[selectedPage.value].push(tag);
        Object.assign(newTag, blankNewTag());
        snack.success("Meta tag added.");
      } catch (e) {
        snack.error(((_c = (_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.response) == null ? void 0 : _c.message) || "Failed to add meta tag.");
      } finally {
        addingTag.value = false;
      }
    }
    async function removeCustomTag(tag) {
      if (!confirm(`Remove the <meta ${tag.attribute}="${tag.meta_key}"> tag from this page?`)) return;
      try {
        await window.axios.delete(`/content/meta-tags/custom-tags/${tag.id}`);
        customTagsByPage[selectedPage.value] = currentCustomTags.value.filter((t) => t.id !== tag.id);
        snack.success("Meta tag removed.");
      } catch (e) {
        snack.error("Failed to remove meta tag.");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MainOverLay, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="meta-tags" data-v-7c561aed${_scopeId}><h1 class="meta-tags__title" data-v-7c561aed${_scopeId}>Manage Meta Tags</h1><p class="meta-tags__subtitle" data-v-7c561aed${_scopeId}> Set the page title, description, and social share image search engines and social platforms show for each page. Leave a field blank to keep the site&#39;s default copy. </p><div class="meta-tags__layout" data-v-7c561aed${_scopeId}><div class="meta-tags__pages" data-v-7c561aed${_scopeId}><!--[-->`);
            ssrRenderList(PAGES, (p) => {
              var _a, _b, _c, _d;
              _push2(`<button type="button" class="${ssrRenderClass([{ "meta-tags__page-btn--active": p.page === selectedPage.value }, "meta-tags__page-btn"])}" data-v-7c561aed${_scopeId}><span data-v-7c561aed${_scopeId}>${ssrInterpolate(p.label)}</span>`);
              if (((_a = metas[p.page]) == null ? void 0 : _a.title) || ((_b = metas[p.page]) == null ? void 0 : _b.description) || ((_c = metas[p.page]) == null ? void 0 : _c.canonical) || ((_d = customTagsByPage[p.page]) == null ? void 0 : _d.length)) {
                _push2(`<span class="meta-tags__badge" data-v-7c561aed${_scopeId}>Customized</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button>`);
            });
            _push2(`<!--]--></div><div class="meta-tags__main" data-v-7c561aed${_scopeId}><form class="meta-tags__form" data-v-7c561aed${_scopeId}><h2 data-v-7c561aed${_scopeId}>${ssrInterpolate(selected.value.label)} <span class="meta-tags__path" data-v-7c561aed${_scopeId}>${ssrInterpolate(selected.value.path)}</span></h2><label data-v-7c561aed${_scopeId}> Title <input${ssrRenderAttr("value", form.title)} type="text" maxlength="255"${ssrRenderAttr("placeholder", selected.value.defaultTitle)} data-v-7c561aed${_scopeId}><span class="meta-tags__hint" data-v-7c561aed${_scopeId}>${ssrInterpolate(form.title.length)} characters (aim for ~60)</span></label><label data-v-7c561aed${_scopeId}> Description <textarea rows="3" maxlength="500"${ssrRenderAttr("placeholder", selected.value.defaultDescription)} data-v-7c561aed${_scopeId}>${ssrInterpolate(form.description)}</textarea><span class="meta-tags__hint" data-v-7c561aed${_scopeId}>${ssrInterpolate(form.description.length)} characters (aim for ~155)</span></label><label data-v-7c561aed${_scopeId}> Canonical URL override <input${ssrRenderAttr("value", form.canonical)} type="text" maxlength="255"${ssrRenderAttr("placeholder", `https://www.tnystaffingco.com${selected.value.path}`)} data-v-7c561aed${_scopeId}><span class="meta-tags__hint" data-v-7c561aed${_scopeId}>Leave blank to use the page&#39;s own URL.</span></label><div class="meta-tags__og-image" data-v-7c561aed${_scopeId}><span class="meta-tags__og-image-label" data-v-7c561aed${_scopeId}>Social share image (og:image)</span><div class="meta-tags__og-image-row" data-v-7c561aed${_scopeId}>`);
            if (currentOgImage.value) {
              _push2(`<img${ssrRenderAttr("src", currentOgImage.value)} alt="" class="meta-tags__og-image-preview" data-v-7c561aed${_scopeId}>`);
            } else {
              _push2(`<div class="meta-tags__og-image-empty" data-v-7c561aed${_scopeId}>No image set</div>`);
            }
            _push2(`<button type="button"${ssrIncludeBooleanAttr(uploadingOgImage.value) ? " disabled" : ""} data-v-7c561aed${_scopeId}>${ssrInterpolate(uploadingOgImage.value ? "Uploading…" : currentOgImage.value ? "Replace Image" : "Upload Image")}</button><input type="file" accept="image/*" class="meta-tags__og-image-input" data-v-7c561aed${_scopeId}></div></div><div class="meta-tags__preview" data-v-7c561aed${_scopeId}><span class="meta-tags__preview-label" data-v-7c561aed${_scopeId}>Search preview</span><div class="meta-tags__preview-box" data-v-7c561aed${_scopeId}><p class="meta-tags__preview-title" data-v-7c561aed${_scopeId}>${ssrInterpolate(effectiveTitle.value)}</p><p class="meta-tags__preview-url" data-v-7c561aed${_scopeId}>tnystaffingco.com${ssrInterpolate(selected.value.path)}</p><p class="meta-tags__preview-desc" data-v-7c561aed${_scopeId}>${ssrInterpolate(effectiveDescription.value)}</p></div></div><div class="meta-tags__actions" data-v-7c561aed${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-7c561aed${_scopeId}>${ssrInterpolate(saving.value ? "Saving…" : "Save Changes")}</button></div></form><div class="meta-tags__custom" data-v-7c561aed${_scopeId}><h2 data-v-7c561aed${_scopeId}>Custom Meta Tags</h2><p class="meta-tags__custom-subtitle" data-v-7c561aed${_scopeId}> Add any other &lt;meta&gt; tag this page needs — author, keywords, twitter:site, verification codes, and so on. </p>`);
            if (currentCustomTags.value.length) {
              _push2(`<table class="meta-tags__custom-table" data-v-7c561aed${_scopeId}><thead data-v-7c561aed${_scopeId}><tr data-v-7c561aed${_scopeId}><th data-v-7c561aed${_scopeId}>Attribute</th><th data-v-7c561aed${_scopeId}>Key</th><th data-v-7c561aed${_scopeId}>Content</th><th data-v-7c561aed${_scopeId}></th></tr></thead><tbody data-v-7c561aed${_scopeId}><!--[-->`);
              ssrRenderList(currentCustomTags.value, (tag) => {
                _push2(`<tr data-v-7c561aed${_scopeId}><td data-v-7c561aed${_scopeId}>${ssrInterpolate(tag.attribute)}</td><td data-v-7c561aed${_scopeId}>${ssrInterpolate(tag.meta_key)}</td><td class="meta-tags__custom-content" data-v-7c561aed${_scopeId}>${ssrInterpolate(tag.content)}</td><td data-v-7c561aed${_scopeId}><button type="button" class="meta-tags__custom-remove" data-v-7c561aed${_scopeId}>Remove</button></td></tr>`);
              });
              _push2(`<!--]--></tbody></table>`);
            } else {
              _push2(`<p class="meta-tags__empty" data-v-7c561aed${_scopeId}>No custom tags on this page yet.</p>`);
            }
            _push2(`<form class="meta-tags__custom-form" data-v-7c561aed${_scopeId}><select data-v-7c561aed${_scopeId}><option value="name" data-v-7c561aed${ssrIncludeBooleanAttr(Array.isArray(newTag.attribute) ? ssrLooseContain(newTag.attribute, "name") : ssrLooseEqual(newTag.attribute, "name")) ? " selected" : ""}${_scopeId}>name</option><option value="property" data-v-7c561aed${ssrIncludeBooleanAttr(Array.isArray(newTag.attribute) ? ssrLooseContain(newTag.attribute, "property") : ssrLooseEqual(newTag.attribute, "property")) ? " selected" : ""}${_scopeId}>property</option></select><input${ssrRenderAttr("value", newTag.meta_key)} type="text" maxlength="255" placeholder="e.g. author, og:site_name" data-v-7c561aed${_scopeId}><input${ssrRenderAttr("value", newTag.content)} type="text" maxlength="1000" placeholder="Tag content" data-v-7c561aed${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(addingTag.value) ? " disabled" : ""} data-v-7c561aed${_scopeId}>${ssrInterpolate(addingTag.value ? "Adding…" : "Add Tag")}</button></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "meta-tags" }, [
                createVNode("h1", { class: "meta-tags__title" }, "Manage Meta Tags"),
                createVNode("p", { class: "meta-tags__subtitle" }, " Set the page title, description, and social share image search engines and social platforms show for each page. Leave a field blank to keep the site's default copy. "),
                createVNode("div", { class: "meta-tags__layout" }, [
                  createVNode("div", { class: "meta-tags__pages" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(PAGES, (p) => {
                      var _a, _b, _c, _d;
                      return createVNode("button", {
                        key: p.page,
                        type: "button",
                        class: ["meta-tags__page-btn", { "meta-tags__page-btn--active": p.page === selectedPage.value }],
                        onClick: ($event) => selectPage(p.page)
                      }, [
                        createVNode("span", null, toDisplayString(p.label), 1),
                        ((_a = metas[p.page]) == null ? void 0 : _a.title) || ((_b = metas[p.page]) == null ? void 0 : _b.description) || ((_c = metas[p.page]) == null ? void 0 : _c.canonical) || ((_d = customTagsByPage[p.page]) == null ? void 0 : _d.length) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "meta-tags__badge"
                        }, "Customized")) : createCommentVNode("", true)
                      ], 10, ["onClick"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "meta-tags__main" }, [
                    createVNode("form", {
                      class: "meta-tags__form",
                      onSubmit: withModifiers(save, ["prevent"])
                    }, [
                      createVNode("h2", null, [
                        createTextVNode(toDisplayString(selected.value.label) + " ", 1),
                        createVNode("span", { class: "meta-tags__path" }, toDisplayString(selected.value.path), 1)
                      ]),
                      createVNode("label", null, [
                        createTextVNode(" Title "),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.title = $event,
                          type: "text",
                          maxlength: "255",
                          placeholder: selected.value.defaultTitle
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, form.title]
                        ]),
                        createVNode("span", { class: "meta-tags__hint" }, toDisplayString(form.title.length) + " characters (aim for ~60)", 1)
                      ]),
                      createVNode("label", null, [
                        createTextVNode(" Description "),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => form.description = $event,
                          rows: "3",
                          maxlength: "500",
                          placeholder: selected.value.defaultDescription
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, form.description]
                        ]),
                        createVNode("span", { class: "meta-tags__hint" }, toDisplayString(form.description.length) + " characters (aim for ~155)", 1)
                      ]),
                      createVNode("label", null, [
                        createTextVNode(" Canonical URL override "),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.canonical = $event,
                          type: "text",
                          maxlength: "255",
                          placeholder: `https://www.tnystaffingco.com${selected.value.path}`
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, form.canonical]
                        ]),
                        createVNode("span", { class: "meta-tags__hint" }, "Leave blank to use the page's own URL.")
                      ]),
                      createVNode("div", { class: "meta-tags__og-image" }, [
                        createVNode("span", { class: "meta-tags__og-image-label" }, "Social share image (og:image)"),
                        createVNode("div", { class: "meta-tags__og-image-row" }, [
                          currentOgImage.value ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: currentOgImage.value,
                            alt: "",
                            class: "meta-tags__og-image-preview"
                          }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "meta-tags__og-image-empty"
                          }, "No image set")),
                          createVNode("button", {
                            type: "button",
                            disabled: uploadingOgImage.value,
                            onClick: triggerOgImagePicker
                          }, toDisplayString(uploadingOgImage.value ? "Uploading…" : currentOgImage.value ? "Replace Image" : "Upload Image"), 9, ["disabled"]),
                          createVNode("input", {
                            ref_key: "ogImageInput",
                            ref: ogImageInput,
                            type: "file",
                            accept: "image/*",
                            class: "meta-tags__og-image-input",
                            onChange: onOgImageChange
                          }, null, 544)
                        ])
                      ]),
                      createVNode("div", { class: "meta-tags__preview" }, [
                        createVNode("span", { class: "meta-tags__preview-label" }, "Search preview"),
                        createVNode("div", { class: "meta-tags__preview-box" }, [
                          createVNode("p", { class: "meta-tags__preview-title" }, toDisplayString(effectiveTitle.value), 1),
                          createVNode("p", { class: "meta-tags__preview-url" }, "tnystaffingco.com" + toDisplayString(selected.value.path), 1),
                          createVNode("p", { class: "meta-tags__preview-desc" }, toDisplayString(effectiveDescription.value), 1)
                        ])
                      ]),
                      createVNode("div", { class: "meta-tags__actions" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: saving.value
                        }, toDisplayString(saving.value ? "Saving…" : "Save Changes"), 9, ["disabled"])
                      ])
                    ], 32),
                    createVNode("div", { class: "meta-tags__custom" }, [
                      createVNode("h2", null, "Custom Meta Tags"),
                      createVNode("p", { class: "meta-tags__custom-subtitle" }, " Add any other <meta> tag this page needs — author, keywords, twitter:site, verification codes, and so on. "),
                      currentCustomTags.value.length ? (openBlock(), createBlock("table", {
                        key: 0,
                        class: "meta-tags__custom-table"
                      }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "Attribute"),
                            createVNode("th", null, "Key"),
                            createVNode("th", null, "Content"),
                            createVNode("th")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(currentCustomTags.value, (tag) => {
                            return openBlock(), createBlock("tr", {
                              key: tag.id
                            }, [
                              createVNode("td", null, toDisplayString(tag.attribute), 1),
                              createVNode("td", null, toDisplayString(tag.meta_key), 1),
                              createVNode("td", { class: "meta-tags__custom-content" }, toDisplayString(tag.content), 1),
                              createVNode("td", null, [
                                createVNode("button", {
                                  type: "button",
                                  class: "meta-tags__custom-remove",
                                  onClick: ($event) => removeCustomTag(tag)
                                }, "Remove", 8, ["onClick"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "meta-tags__empty"
                      }, "No custom tags on this page yet.")),
                      createVNode("form", {
                        class: "meta-tags__custom-form",
                        onSubmit: withModifiers(addCustomTag, ["prevent"])
                      }, [
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => newTag.attribute = $event
                        }, [
                          createVNode("option", { value: "name" }, "name"),
                          createVNode("option", { value: "property" }, "property")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, newTag.attribute]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => newTag.meta_key = $event,
                          type: "text",
                          maxlength: "255",
                          placeholder: "e.g. author, og:site_name"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, newTag.meta_key]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => newTag.content = $event,
                          type: "text",
                          maxlength: "1000",
                          placeholder: "Tag content"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, newTag.content]
                        ]),
                        createVNode("button", {
                          type: "submit",
                          disabled: addingTag.value
                        }, toDisplayString(addingTag.value ? "Adding…" : "Add Tag"), 9, ["disabled"])
                      ], 32)
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/MetaTags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MetaTags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c561aed"]]);
export {
  MetaTags as default
};
