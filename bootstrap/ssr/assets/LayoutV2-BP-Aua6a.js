import { defineComponent, mergeProps, useSSRContext, provide } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { E as EditableImage, a as EditableText, N as Navbar } from "./NavBarV2-BlC3_Oet.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { A as AdminEditToggle, S as StyleToolbarHost } from "./StyleToolbarHost-C7NtTTfW.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FooterV2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer2",
        id: "contact"
      }, _attrs))} data-v-17bafdee><div class="footer2__main" data-v-17bafdee><div class="footer2__col footer2__col--brand" data-v-17bafdee><div class="footer2__brand" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableImage, {
        "content-key": "global.footer_logo",
        page: "global",
        "default-src": "/images/tnylogofooter.png",
        "default-alt": "TNY Staffing Corporation",
        class: "footer2__logo"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__desc",
        "content-key": "global.footer.desc",
        page: "global",
        default: "Connecting therapy professionals with healthcare facilities across New York. Premium staffing solutions built for modern care."
      }, null, _parent));
      _push(`<div class="footer2__socials" data-v-17bafdee><a href="https://www.linkedin.com/company/therapy-of-new-york" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="LinkedIn" data-v-17bafdee><svg width="14" height="14" viewBox="0 0 24 24" fill="white" data-v-17bafdee><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" data-v-17bafdee></path><circle cx="4" cy="4" r="2" data-v-17bafdee></circle></svg></a><a href="https://www.facebook.com/Therapyofnewyorkstaffingcompany/" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="Facebook" data-v-17bafdee><svg width="14" height="14" viewBox="0 0 24 24" fill="white" data-v-17bafdee><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" data-v-17bafdee></path></svg></a><a href="https://www.instagram.com/therapyofnewyork/" target="_blank" rel="noopener noreferrer" class="footer2__social" aria-label="Instagram" data-v-17bafdee><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-17bafdee><rect x="2" y="2" width="20" height="20" rx="5" data-v-17bafdee></rect><circle cx="12" cy="12" r="4" data-v-17bafdee></circle><circle cx="17.5" cy="6.5" r=".5" fill="white" stroke="none" data-v-17bafdee></circle></svg></a></div></div><div class="footer2__col" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__col-heading",
        "content-key": "global.footer.solutions.heading",
        page: "global",
        default: "Solutions"
      }, null, _parent));
      _push(`<ul class="footer2__links" data-v-17bafdee><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.0",
        page: "global",
        default: "Physical Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.1",
        page: "global",
        default: "Occupational Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.2",
        page: "global",
        default: "Speech Therapy Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.3",
        page: "global",
        default: "School-Based Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.4",
        page: "global",
        default: "Emergency Staffing"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.5",
        page: "global",
        default: "Acupuncturist"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.6",
        page: "global",
        default: "Massage Therapist"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/services" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.solutions.link.7",
        page: "global",
        default: 'Patient Care Coordinator "Front Desk"'
      }, null, _parent));
      _push(`</a></li></ul></div><div class="footer2__col" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__col-heading",
        "content-key": "global.footer.company.heading",
        page: "global",
        default: "Company"
      }, null, _parent));
      _push(`<ul class="footer2__links" data-v-17bafdee><li data-v-17bafdee><a href="/about" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.company.link.0",
        page: "global",
        default: "About Us"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/news" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.company.link.1",
        page: "global",
        default: "Resources"
      }, null, _parent));
      _push(`</a></li><li data-v-17bafdee><a href="/contact" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.company.link.2",
        page: "global",
        default: "Contact"
      }, null, _parent));
      _push(`</a></li></ul></div><div class="footer2__col" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__col-heading",
        "content-key": "global.footer.stay_informed.heading",
        page: "global",
        default: "Stay Informed"
      }, null, _parent));
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__stay-desc",
        "content-key": "global.footer.stay_informed.desc",
        page: "global",
        default: "Staffing insights and healthcare workforce updates, direct to your inbox."
      }, null, _parent));
      _push(`<div class="footer2__newsletter" data-v-17bafdee><input type="email" placeholder="Your email address" class="footer2__email-input" data-v-17bafdee><button class="footer2__email-btn" aria-label="Subscribe" data-v-17bafdee>→</button></div><div class="footer2__contact-info" data-v-17bafdee><div class="footer2__contact-item" data-v-17bafdee><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-17bafdee><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" data-v-17bafdee></path></svg><a href="tel:+13474414283" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.phone",
        page: "global",
        default: "(347) 441-4283"
      }, null, _parent));
      _push(`</a></div><div class="footer2__contact-item" data-v-17bafdee><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-17bafdee><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-17bafdee></path><polyline points="22,6 12,13 2,6" data-v-17bafdee></polyline></svg><a href="mailto:staffing@therapyofnewyork.com" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.email",
        page: "global",
        default: "staffing@therapyofnewyork.com"
      }, null, _parent));
      _push(`</a></div><div class="footer2__contact-item" data-v-17bafdee><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-v-17bafdee><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-17bafdee></path></svg>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.address",
        page: "global",
        default: "575 8th Ave, 10th Floor, New York, NY 10018"
      }, null, _parent));
      _push(`</div></div></div></div><div class="footer2__bottom" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "p",
        class: "footer2__copyright",
        "content-key": "global.footer.copyright",
        page: "global",
        default: "© 2026 TNY Staffing Corporation. All rights reserved."
      }, null, _parent));
      _push(`<div class="footer2__legal" data-v-17bafdee><a href="#" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.legal.privacy",
        page: "global",
        default: "Privacy Policy"
      }, null, _parent));
      _push(`</a><a href="#" data-v-17bafdee>`);
      _push(ssrRenderComponent(EditableText, {
        tag: "span",
        "content-key": "global.footer.legal.terms",
        page: "global",
        default: "Terms of Service"
      }, null, _parent));
      _push(`</a></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/FooterV2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterV2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-17bafdee"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LayoutV2",
  __ssrInlineRender: true,
  setup(__props) {
    provide("pageContent", usePage().props.pageContent ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-v2" }, _attrs))} data-v-bcbdd32e>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<main class="layout-v2__body" data-v-bcbdd32e>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(FooterV2, null, null, _parent));
      _push(ssrRenderComponent(AdminEditToggle, null, null, _parent));
      _push(ssrRenderComponent(StyleToolbarHost, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeV2/LayoutV2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LayoutV2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bcbdd32e"]]);
export {
  LayoutV2 as L
};
