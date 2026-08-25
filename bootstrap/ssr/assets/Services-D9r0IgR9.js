import { defineComponent, mergeProps, useSSRContext, withCtx, unref, createBlock, openBlock, Fragment, renderList, ref, reactive, createTextVNode, toDisplayString, watch, onMounted, nextTick, onUnmounted, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-CbIyAVkJ.js";
import { n as clientState, s as snack, o as missingFieldsMessage, p as heroState, q as newsState, r as teamState, u as testimonialState, w as serviceState } from "./NavBarV2-BlC3_Oet.js";
import { B as Btn } from "./btn-Dy2Hq9NM.js";
import { I as InputField } from "./InputField-DzB3f-5L.js";
import { v as validation, H as Http } from "./Validation-eqo6rfcO.js";
import { D as DevFillButton } from "./DevFillButton-C8XbAzkC.js";
import { Link } from "@inertiajs/vue3";
import { S as SingleService } from "./SingleService-D5X5w3CN.js";
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "InfiniteCarousel",
  __ssrInlineRender: true,
  props: {
    animationDuration: {
      type: Number,
      default: 10
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "infinite-carousel" }, _attrs))} data-v-af5f17bb><div class="carousel-inner" style="${ssrRenderStyle({ animationDuration: `${props.animationDuration}s` })}" data-v-af5f17bb>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/InfiniteCarousel.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const InfiniteCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-af5f17bb"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-ac325e96><h2 class="title" data-v-ac325e96>Our Clients</h2><h2 class="subtitle" data-v-ac325e96>Simplifying Staffing For Maximum Results</h2><br data-v-ac325e96><br data-v-ac325e96><div class="caoursel-wrapper" data-v-ac325e96>`);
      _push(ssrRenderComponent(InfiniteCarousel, { animationDuration: 10 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(clientState), (c) => {
              _push2(`<div class="card" style="${ssrRenderStyle(`background-image:url(${c.image})`)}" data-v-ac325e96${_scopeId}></div>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(unref(clientState), (c) => {
              _push2(`<div class="card" style="${ssrRenderStyle(`background-image:url(${c.image})`)}" data-v-ac325e96${_scopeId}></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(clientState), (c) => {
                return openBlock(), createBlock("div", {
                  class: "card",
                  style: `background-image:url(${c.image})`
                }, null, 4);
              }), 256)),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(clientState), (c) => {
                return openBlock(), createBlock("div", {
                  class: "card",
                  style: `background-image:url(${c.image})`
                }, null, 4);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Clients/Clients.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Clients = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-ac325e96"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const subject = ref(null);
    const message = ref(null);
    const isLoading = ref(false);
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    const formValidation = {
      name: {
        rules: ["required"],
        message: {
          required: "Please enter your name"
        }
      },
      email: {
        rules: ["required", "email"],
        message: {
          required: "email Is Required",
          email: "Please Enter A Valid Email"
        }
      },
      phone: {
        rules: ["required"],
        message: {
          required: "Phone Number Is Required",
          phone: "Please Enter A Valid Phone Number"
        }
      },
      message: {
        rules: ["required"],
        message: {
          required: "Message Is Required"
        }
      },
      subject: {
        rules: ["required"],
        message: {
          required: "Please select a subject"
        }
      }
    };
    const formErrors = reactive({
      subject: false,
      name: false,
      email: false,
      phone: false,
      message: false
    });
    const fieldLabels = {
      name: "Name",
      email: "Email",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message"
    };
    const resetForm = () => {
      var _a, _b, _c, _d, _e;
      (_a = name.value) == null ? void 0 : _a.clear;
      (_b = email.value) == null ? void 0 : _b.clear;
      (_c = phone.value) == null ? void 0 : _c.clear;
      (_d = subject.value) == null ? void 0 : _d.clear;
      (_e = message.value) == null ? void 0 : _e.clear;
    };
    const fillTestData = () => {
      var _a, _b, _c, _d, _e;
      (_a = name.value) == null ? void 0 : _a.setValue("Jamie Rivera");
      (_b = email.value) == null ? void 0 : _b.setValue("jamie.rivera@example.com");
      (_c = phone.value) == null ? void 0 : _c.setValue("(212) 555-0100");
      (_d = subject.value) == null ? void 0 : _d.setValue("Staffing Services");
      (_e = message.value) == null ? void 0 : _e.setValue("Hi, I'd like to learn more about your staffing services.");
    };
    const validate = () => {
      let v = new validation(formValidation, form);
      v.validate();
      let errors = v.errors;
      if (errors.length) {
        handleErrors(v);
      } else {
        submitForm();
      }
    };
    const handleErrors = (v) => {
      let keys = v.keys;
      let labels = keys.map((key) => fieldLabels[key] ?? key);
      snack.error(missingFieldsMessage(labels));
      keys.forEach((key) => {
        setTimeout(() => {
          formErrors[key] = false;
        }, 500);
        formErrors[key] = true;
      });
    };
    const submitForm = async () => {
      try {
        isLoading.value = true;
        let ModdedForm = form;
        ModdedForm.phone = ModdedForm.phone.replace(/\D/g, "");
        let response = await Http.post("message", ModdedForm);
        snack.success("Form Submitted Successfully");
        isLoading.value = false;
        resetForm();
        console.log(response);
      } catch (e) {
        snack.error(e);
        isLoading.value = false;
      }
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(InputField, {
        ref_key: "name",
        ref: name,
        onInput: ($event) => form.name = $event,
        label: "Name",
        placeHolder: "Enter Your Name ...",
        error: formErrors.name
      }, null, _parent));
      _push(ssrRenderComponent(InputField, {
        ref_key: "email",
        ref: email,
        onInput: ($event) => form.email = $event,
        label: "Email",
        placeHolder: "Enter Your Email ...",
        error: formErrors.email
      }, null, _parent));
      _push(ssrRenderComponent(InputField, {
        ref_key: "phone",
        ref: phone,
        onInput: ($event) => form.phone = $event,
        label: "Phone Number",
        placeHolder: "Enter Your Number...",
        error: formErrors.phone,
        mask: "(###) ###-####"
      }, null, _parent));
      _push(ssrRenderComponent(InputField, {
        ref_key: "subject",
        ref: subject,
        onInput: ($event) => form.subject = $event,
        label: "Subject",
        placeHolder: "Service You Need ...",
        error: formErrors.subject
      }, null, _parent));
      _push(ssrRenderComponent(InputField, {
        ref_key: "message",
        ref: message,
        onInput: ($event) => form.message = $event,
        label: "Message",
        placeHolder: "Enter Your Message ...",
        height: "12.5rem",
        error: formErrors.message
      }, null, _parent));
      _push(ssrRenderComponent(Btn, {
        class: "btn",
        onClick: validate,
        loading: isLoading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Send Email`);
          } else {
            return [
              createTextVNode("Send Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(DevFillButton, { onFill: fillTestData }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/ContactUs/ContactForm.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-15340580"]]);
const _sfc_main$f = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="contact-wrapper" data-v-b9fe6920><div class="contact-info" data-v-b9fe6920><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9fe6920><path d="M34.6673 1.33301L16.334 19.6663" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b9fe6920></path><path d="M34.6673 1.33301L23.0007 34.6663L16.334 19.6663L1.33398 12.9997L34.6673 1.33301Z" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b9fe6920></path></svg><span class="text" data-v-b9fe6920>htttp://maps.app.googln./NewYork Md</span></div><div class="contact-info" data-v-b9fe6920><svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9fe6920><path d="M31 16.667C31 28.3337 16 38.3337 16 38.3337C16 38.3337 1 28.3337 1 16.667C1 12.6887 2.58035 8.87344 5.3934 6.06039C8.20644 3.24734 12.0218 1.66699 16 1.66699C19.9782 1.66699 23.7936 3.24734 26.6066 6.06039C29.4196 8.87344 31 12.6887 31 16.667Z" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b9fe6920></path><path d="M16 21.667C18.7614 21.667 21 19.4284 21 16.667C21 13.9056 18.7614 11.667 16 11.667C13.2386 11.667 11 13.9056 11 16.667C11 19.4284 13.2386 21.667 16 21.667Z" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b9fe6920></path></svg><span class="text" data-v-b9fe6920>575 8th Ave, 10th Floor, New York, NY 10018</span></div><div class="contact-info" data-v-b9fe6920><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9fe6920><path d="M34.6664 26.1998V31.1998C34.6683 31.664 34.5732 32.1235 34.3872 32.5487C34.2013 32.974 33.9286 33.3558 33.5865 33.6696C33.2445 33.9834 32.8407 34.2223 32.401 34.371C31.9613 34.5197 31.4953 34.5749 31.0331 34.5332C25.9044 33.9759 20.9781 32.2234 16.6497 29.4165C12.6228 26.8576 9.20862 23.4435 6.64973 19.4165C3.83302 15.0685 2.08013 10.1182 1.53306 4.9665C1.49141 4.50561 1.54618 4.0411 1.69389 3.60254C1.8416 3.16398 2.07901 2.76098 2.391 2.4192C2.70299 2.07742 3.08273 1.80435 3.50604 1.61737C3.92935 1.43039 4.38696 1.33361 4.84973 1.33317H9.84973C10.6586 1.32521 11.4427 1.61163 12.056 2.13906C12.6693 2.66648 13.0699 3.39891 13.1831 4.19984C13.3941 5.79995 13.7855 7.37105 14.3497 8.88317C14.574 9.47971 14.6225 10.128 14.4896 10.7513C14.3566 11.3746 14.0478 11.9467 13.5997 12.3998L11.4831 14.5165C13.8557 18.6891 17.3105 22.1439 21.4831 24.5165L23.5997 22.3998C24.0529 21.9517 24.625 21.6429 25.2483 21.51C25.8715 21.3771 26.5199 21.4256 27.1164 21.6498C28.6285 22.2141 30.1996 22.6055 31.7997 22.8165C32.6093 22.9307 33.3487 23.3385 33.8773 23.9623C34.4058 24.5861 34.6867 25.3825 34.6664 26.1998Z" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b9fe6920></path></svg><span class="text" data-v-b9fe6920> (347)441-4283</span></div><div class="contact-info" data-v-b9fe6920><svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9fe6920><path d="M4.66732 1.66699H31.334C33.1673 1.66699 34.6673 3.16699 34.6673 5.00033V25.0003C34.6673 26.8337 33.1673 28.3337 31.334 28.3337H4.66732C2.83398 28.3337 1.33398 26.8337 1.33398 25.0003V5.00033C1.33398 3.16699 2.83398 1.66699 4.66732 1.66699Z" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b9fe6920></path><path d="M34.6673 5L18.0007 16.6667L1.33398 5" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b9fe6920></path></svg><span class="text" data-v-b9fe6920>staffing@therapyofnewyork.com</span></div></div><div class="socials" data-v-b9fe6920><div class="social-box" data-v-b9fe6920><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9fe6920><path d="M40 20.0029C39.9767 24.9134 38.1477 29.6438 34.8614 33.2926C31.5751 36.9414 27.0613 39.2537 22.18 39.7889V25.4429H26.88C27.0868 25.4441 27.2869 25.3694 27.4424 25.2331C27.5979 25.0967 27.6981 24.9081 27.724 24.7029L28.232 20.2989C28.2504 20.1833 28.2432 20.065 28.2111 19.9524C28.179 19.8399 28.1227 19.7356 28.0462 19.6471C27.9696 19.5585 27.8746 19.4877 27.7678 19.4397C27.6611 19.3916 27.5451 19.3675 27.428 19.3689H22.18V15.7689C22.18 14.0969 22.646 12.9549 25.036 12.9549H27.26C27.4809 12.9492 27.6908 12.8572 27.8447 12.6988C27.9987 12.5403 28.0846 12.3279 28.084 12.1069V8.31893C28.0788 8.09804 27.9873 7.88796 27.8293 7.73361C27.6712 7.57925 27.459 7.49287 27.238 7.49293H23.64C22.6293 7.42067 21.6151 7.56981 20.668 7.92996C19.721 8.29011 18.8639 8.85258 18.1566 9.57813C17.4494 10.3037 16.9089 11.1748 16.5731 12.1308C16.2372 13.0867 16.114 14.1044 16.212 15.1129V19.3449H12.678C12.5677 19.3449 12.4584 19.367 12.3567 19.4098C12.2551 19.4527 12.163 19.5155 12.086 19.5946C12.009 19.6736 11.9486 19.7673 11.9084 19.8701C11.8683 19.9728 11.8491 20.0826 11.852 20.1929V24.5929C11.852 24.812 11.939 25.0221 12.0939 25.177C12.2488 25.3319 12.4589 25.4189 12.678 25.4189H16.212V39.4929C11.6739 38.6177 7.57906 36.1978 4.62352 32.6447C1.66798 29.0916 0.034225 24.6245 0 20.0029C0 14.6986 2.10714 9.61152 5.85786 5.86079C9.60859 2.11007 14.6957 0.00292969 20 0.00292969C25.3043 0.00292969 30.3914 2.11007 34.1421 5.86079C37.8929 9.61152 40 14.6986 40 20.0029Z" fill="#21A8E0" data-v-b9fe6920></path></svg></div><div class="social-box" data-v-b9fe6920><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9fe6920><path d="M36.75 0.842773H11.25C5.0368 0.842773 0 5.87957 0 12.0928V37.5928C0 43.806 5.0368 48.8428 11.25 48.8428H36.75C42.9632 48.8428 48 43.806 48 37.5928V12.0928C48 5.87957 42.9632 0.842773 36.75 0.842773Z" fill="url(#paint0_radial_1366_1108)" data-v-b9fe6920></path><path d="M36.75 0.842773H11.25C5.0368 0.842773 0 5.87957 0 12.0928V37.5928C0 43.806 5.0368 48.8428 11.25 48.8428H36.75C42.9632 48.8428 48 43.806 48 37.5928V12.0928C48 5.87957 42.9632 0.842773 36.75 0.842773Z" fill="url(#paint1_radial_1366_1108)" data-v-b9fe6920></path><path d="M24.0017 6.09277C18.9096 6.09277 18.2704 6.11509 16.2705 6.20602C14.2744 6.29752 12.9118 6.61346 11.7197 7.07715C10.4863 7.55602 9.44025 8.19671 8.39813 9.23921C7.35506 10.2815 6.71438 11.3276 6.234 12.5604C5.769 13.7529 5.45269 15.116 5.36287 17.1112C5.27344 19.1113 5.25 19.7506 5.25 24.843C5.25 29.9353 5.2725 30.5724 5.36325 32.5723C5.45513 34.5684 5.77106 35.931 6.23438 37.1231C6.71362 38.3565 7.35431 39.4025 8.39681 40.4446C9.43875 41.4877 10.4848 42.1299 11.7172 42.6088C12.9103 43.0725 14.2731 43.3884 16.2688 43.4799C18.2689 43.5708 18.9075 43.5931 23.9994 43.5931C29.0921 43.5931 29.7292 43.5708 31.7291 43.4799C33.7253 43.3884 35.0893 43.0725 36.2824 42.6088C37.5152 42.1299 38.5597 41.4877 39.6015 40.4446C40.6446 39.4025 41.2851 38.3565 41.7656 37.1236C42.2265 35.931 42.543 34.568 42.6367 32.5726C42.7266 30.5728 42.75 29.9353 42.75 24.843C42.75 19.7506 42.7266 19.1116 42.6367 17.1116C42.543 15.1155 42.2265 13.7531 41.7656 12.561C41.2851 11.3276 40.6446 10.2815 39.6015 9.23921C38.5586 8.19634 37.5156 7.55565 36.2812 7.07734C35.0859 6.61346 33.7226 6.29734 31.7265 6.20602C29.7264 6.11509 29.0897 6.09277 23.9959 6.09277H24.0017ZM22.3196 9.47171C22.8189 9.47096 23.376 9.47171 24.0017 9.47171C29.0081 9.47171 29.6014 9.48971 31.5784 9.57952C33.4065 9.66315 34.3988 9.96859 35.0597 10.2253C35.9347 10.565 36.5586 10.9713 37.2144 11.6278C37.8707 12.284 38.2768 12.909 38.6175 13.784C38.8742 14.444 39.18 15.4363 39.2633 17.2644C39.3531 19.241 39.3726 19.8346 39.3726 24.8386C39.3726 29.8426 39.3531 30.4365 39.2633 32.4129C39.1796 34.241 38.8742 35.2333 38.6175 35.8935C38.2778 36.7685 37.8707 37.3916 37.2144 38.0475C36.5582 38.7037 35.9351 39.1098 35.0597 39.4498C34.3995 39.7076 33.4065 40.0123 31.5784 40.0959C29.6017 40.1857 29.0081 40.2052 24.0017 40.2052C18.9951 40.2052 18.4016 40.1857 16.4252 40.0959C14.5971 40.0115 13.6048 39.7061 12.9433 39.4494C12.0684 39.1095 11.4433 38.7033 10.7871 38.0471C10.1308 37.3908 9.72469 36.7674 9.384 35.892C9.12731 35.2318 8.8215 34.2395 8.73825 32.4114C8.64844 30.4348 8.63044 29.8411 8.63044 24.834C8.63044 19.827 8.64844 19.2363 8.73825 17.2597C8.82188 15.4316 9.12731 14.4393 9.384 13.7784C9.72394 12.9033 10.1308 12.2784 10.7873 11.6221C11.4435 10.9659 12.0684 10.5596 12.9435 10.2191C13.6044 9.96127 14.5971 9.65659 16.4252 9.57259C18.1549 9.4944 18.8252 9.47096 22.3196 9.46702V9.47171ZM34.0104 12.585C32.7683 12.585 31.7604 13.5918 31.7604 14.8342C31.7604 16.0764 32.7683 17.0842 34.0104 17.0842C35.2526 17.0842 36.2604 16.0764 36.2604 14.8342C36.2604 13.592 35.2526 12.5842 34.0104 12.5842V12.585ZM24.0017 15.2139C18.6842 15.2139 14.3728 19.5253 14.3728 24.843C14.3728 30.1607 18.6842 34.47 24.0017 34.47C29.3194 34.47 33.6292 30.1607 33.6292 24.843C33.6292 19.5255 29.319 15.2139 24.0013 15.2139H24.0017ZM24.0017 18.5928C27.4534 18.5928 30.2518 21.3909 30.2518 24.843C30.2518 28.2946 27.4534 31.0931 24.0017 31.0931C20.5498 31.0931 17.7518 28.2946 17.7518 24.843C17.7518 21.3909 20.5498 18.5928 24.0017 18.5928Z" fill="white" data-v-b9fe6920></path><defs data-v-b9fe6920><radialGradient id="paint0_radial_1366_1108" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.75 52.5397) rotate(-90) scale(47.5716 44.2453)" data-v-b9fe6920><stop stop-color="#FFDD55" data-v-b9fe6920></stop><stop offset="0.1" stop-color="#FFDD55" data-v-b9fe6920></stop><stop offset="0.5" stop-color="#FF543E" data-v-b9fe6920></stop><stop offset="1" stop-color="#C837AB" data-v-b9fe6920></stop></radialGradient><radialGradient id="paint1_radial_1366_1108" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-8.04019 4.30046) rotate(78.681) scale(21.2648 87.654)" data-v-b9fe6920><stop stop-color="#3771C8" data-v-b9fe6920></stop><stop offset="0.128" stop-color="#3771C8" data-v-b9fe6920></stop><stop offset="1" stop-color="#6600FF" stop-opacity="0" data-v-b9fe6920></stop></radialGradient></defs></svg></div><div class="social-box" data-v-b9fe6920><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b9fe6920><path d="M36.75 0.842773H11.25C5.0368 0.842773 0 5.87957 0 12.0928V37.5928C0 43.806 5.0368 48.8428 11.25 48.8428H36.75C42.9632 48.8428 48 43.806 48 37.5928V12.0928C48 5.87957 42.9632 0.842773 36.75 0.842773Z" fill="#21A8E0" data-v-b9fe6920></path><path d="M34.6341 41.6587H40.1222C40.3211 41.6587 40.5118 41.5797 40.6525 41.4391C40.7931 41.2985 40.8721 41.1078 40.8722 40.9089L40.875 29.3135C40.875 23.253 39.5691 18.5945 32.4866 18.5945C29.7943 18.4944 27.2554 19.8823 25.8853 22.1998C25.8786 22.211 25.8684 22.2198 25.8563 22.2247C25.8441 22.2296 25.8307 22.2304 25.8181 22.227C25.8054 22.2236 25.7943 22.2161 25.7863 22.2058C25.7782 22.1954 25.7739 22.1827 25.7738 22.1696V19.904C25.7738 19.7051 25.6947 19.5143 25.5541 19.3737C25.4134 19.233 25.2227 19.154 25.0238 19.154H19.8156C19.6166 19.154 19.4259 19.233 19.2852 19.3737C19.1446 19.5143 19.0656 19.7051 19.0656 19.904V40.9078C19.0656 41.1067 19.1446 41.2975 19.2852 41.4381C19.4259 41.5788 19.6166 41.6578 19.8156 41.6578H25.3033C25.5022 41.6578 25.693 41.5788 25.8336 41.4381C25.9743 41.2975 26.0533 41.1067 26.0533 40.9078V30.5253C26.0533 27.5896 26.6102 24.7466 30.2498 24.7466C33.8376 24.7466 33.8841 28.1058 33.8841 30.7155V40.9087C33.8841 41.1076 33.9631 41.2984 34.1037 41.439C34.2444 41.5797 34.4352 41.6587 34.6341 41.6587ZM7.125 12.023C7.125 14.2475 8.95631 16.0779 11.181 16.0779C13.4051 16.0777 15.2353 14.2462 15.2353 12.0221C15.2349 9.79796 13.4046 7.96777 11.1802 7.96777C8.95537 7.96777 7.125 9.79852 7.125 12.023ZM8.42981 41.6587H13.9249C14.1238 41.6587 14.3146 41.5797 14.4552 41.439C14.5959 41.2984 14.6749 41.1076 14.6749 40.9087V19.904C14.6749 19.7051 14.5959 19.5143 14.4552 19.3737C14.3146 19.233 14.1238 19.154 13.9249 19.154H8.42981C8.2309 19.154 8.04013 19.233 7.89948 19.3737C7.75883 19.5143 7.67981 19.7051 7.67981 19.904V40.9087C7.67981 41.1076 7.75883 41.2984 7.89948 41.439C8.04013 41.5797 8.2309 41.6587 8.42981 41.6587Z" fill="#D3EEF9" data-v-b9fe6920></path></svg></div></div><!--]-->`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/ContactUs/ContactInfo.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const ContactInfo = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b9fe6920"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-ef1542e6><div class="box form" data-v-ef1542e6><h1 class="title" data-v-ef1542e6>Get in touch with us</h1>`);
      _push(ssrRenderComponent(ContactForm, null, null, _parent));
      _push(`</div><div class="box" data-v-ef1542e6><h1 class="title" data-v-ef1542e6>Contact info</h1>`);
      _push(ssrRenderComponent(ContactInfo, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/ContactUs/ContactUs.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-ef1542e6"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "HeroCard",
  __ssrInlineRender: true,
  props: {
    hero: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "hero-container",
        style: { backgroundImage: `url(${(_a = __props.hero) == null ? void 0 : _a.image})` }
      }, _attrs))} data-v-a72048f1><h1 class="card-title" data-v-a72048f1>${ssrInterpolate((_b = __props.hero) == null ? void 0 : _b.title)}</h1><h3 class="card-subtitle" data-v-a72048f1>${ssrInterpolate((_c = __props.hero) == null ? void 0 : _c.subtitles)}</h3><div class="buttons-wrapper" data-v-a72048f1><!--[-->`);
      ssrRenderList((_d = __props.hero) == null ? void 0 : _d.buttons, (button) => {
        _push(ssrRenderComponent(unref(Link), {
          href: button.link,
          class: `btn ${button.color}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(button.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(button.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Hero/HeroCard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const HeroCard = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-a72048f1"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    // NoIndicator: Boolean,
    NoButtons: Boolean,
    behavior: String,
    numberOfItems: {
      type: Number,
      default: 1
    },
    snap: Boolean,
    indicator: Boolean
  },
  setup(__props, { expose: __expose }) {
    const wheel = ref(null);
    let currentIndex = ref(0);
    let carouselItemsNo = ref(0);
    const props = __props;
    const updateCurrentIndexBasedOnScroll = () => {
      if (!wheel.value) return;
      const el = wheel.value;
      const totalScroll = el.scrollWidth - el.clientWidth;
      const currentScroll = el.scrollLeft;
      const parts = carouselItemsNo.value;
      if (!parts) return;
      const scrollPerPart = totalScroll / parts;
      currentIndex.value = Math.min(parts - 1, Math.floor(currentScroll / scrollPerPart));
    };
    const scroll = (direction) => {
      if (wheel.value) {
        const el = wheel.value;
        if (el) {
          const width = el.clientWidth;
          const threshold = 100;
          const isNearEnd = el.scrollLeft + threshold >= el.scrollWidth - el.clientWidth;
          if (direction === 1 && (isNearEnd || el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
            currentIndex.value = 0;
            el.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            if (direction === -1 && currentIndex.value === 0) {
              currentIndex.value = 0;
            } else if (direction === 1 && carouselItemsNo.value && currentIndex.value === carouselItemsNo.value - 1) {
              currentIndex.value = 0;
            } else {
              currentIndex.value += direction;
            }
            el.scrollTo({
              left: el.scrollLeft + (width * direction - width / 4),
              behavior: "smooth"
            });
          }
        }
      }
    };
    __expose({
      scroll
    });
    watch(() => props.numberOfItems, () => {
      defineStyle();
    });
    const defineStyle = () => {
      const carouselItems = wheel.value;
      if (carouselItems) {
        const children = Array.from(carouselItems.children);
        const percentage = props.numberOfItems === 1 ? 100 : 100 / props.numberOfItems;
        const margin = props.numberOfItems === 1 ? 0 : 1;
        children.forEach((el) => {
          const htmlEl = el;
          htmlEl.style.scrollSnapAlign = props.snap ? "start" : "none";
          htmlEl.style.flex = `0 0 calc(${percentage}% - ${margin}rem)`;
        });
      }
    };
    onMounted(() => {
      if (wheel.value) {
        wheel.value.addEventListener("scroll", updateCurrentIndexBasedOnScroll);
      }
      nextTick(() => {
        var _a;
        carouselItemsNo.value = ((_a = wheel.value) == null ? void 0 : _a.childElementCount) || 0;
        defineStyle();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel-wrapper" }, _attrs))} data-v-21b55687><div class="carousel" data-v-21b55687><div class="carousel-items" data-v-21b55687>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (__props.indicator) {
        _push(`<div class="indicator-container" data-v-21b55687><!--[-->`);
        ssrRenderList(unref(carouselItemsNo), (i) => {
          _push(`<div class="${ssrRenderClass([{ active: i - 1 === unref(currentIndex) }, "indicator"])}" data-v-21b55687></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/SharedComponents/Carousel.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-21b55687"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Carousel, mergeProps({ snap: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(heroState), (hero) => {
              _push2(ssrRenderComponent(HeroCard, { hero }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(heroState), (hero) => {
                return openBlock(), createBlock(HeroCard, { hero }, null, 8, ["hero"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Hero/Hero.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-7f4fa2a5><h1 class="title" data-v-7f4fa2a5>TNY Location</h1><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14923.099327552874!2d-74.00558361520827!3d40.75457454790991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24500b8df1303%3A0xde9c6d7d8d5ad416!2sTherapy%20of%20New%20York!5e0!3m2!1sen!2seg!4v1742267792358!5m2!1sen!2seg" width="800" height="350" style="${ssrRenderStyle({ "border": "0" })}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-7f4fa2a5></iframe><p data-v-7f4fa2a5><svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7f4fa2a5><path d="M27.8339 21.5605V25.5605C27.8354 25.9318 27.7593 26.2993 27.6106 26.6396C27.4618 26.9798 27.2436 27.2852 26.97 27.5363C26.6964 27.7873 26.3733 27.9784 26.0216 28.0974C25.6698 28.2164 25.2971 28.2605 24.9272 28.2271C20.8243 27.7813 16.8832 26.3793 13.4206 24.1338C10.199 22.0867 7.46768 19.3554 5.42056 16.1338C3.1672 12.6554 1.76489 8.69511 1.32723 4.57379C1.29391 4.20508 1.33773 3.83347 1.4559 3.48262C1.57406 3.13177 1.76399 2.80937 2.01358 2.53595C2.26318 2.26253 2.56697 2.04407 2.90562 1.89448C3.24426 1.7449 3.61035 1.66747 3.98056 1.66712H7.98056C8.62764 1.66075 9.25495 1.88989 9.74558 2.31183C10.2362 2.73377 10.5567 3.31972 10.6472 3.96045C10.8161 5.24054 11.1292 6.49742 11.5806 7.70712C11.76 8.18435 11.7988 8.70301 11.6924 9.20163C11.5861 9.70025 11.339 10.1579 10.9806 10.5205L9.28723 12.2138C11.1853 15.5518 13.9492 18.3157 17.2872 20.2138L18.9806 18.5205C19.3431 18.162 19.8008 17.9149 20.2994 17.8086C20.798 17.7022 21.3167 17.7411 21.7939 17.9205C23.0036 18.3719 24.2605 18.685 25.5406 18.8538C26.1883 18.9452 26.7798 19.2714 27.2026 19.7704C27.6254 20.2695 27.8501 20.9066 27.8339 21.5605Z" stroke="#21A8E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7f4fa2a5></path></svg> Call Us  (347)441-4283 – (917)985-8327</p></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Map/Map.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Map = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7f4fa2a5"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NewsCard",
  __ssrInlineRender: true,
  props: {
    news: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: `background-image:url(${(_a = __props.news) == null ? void 0 : _a.image})`
      }, _attrs))} data-v-acf4a46a><h2 data-v-acf4a46a>${ssrInterpolate((_b = __props.news) == null ? void 0 : _b.title)}</h2></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/News/NewsCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const NewsCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-acf4a46a"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "News",
  __ssrInlineRender: true,
  setup(__props) {
    const numberOfCarouselItems = ref(1);
    const updateCarouselItems = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (isMobile) {
        numberOfCarouselItems.value = 1;
      } else if (isDesktop) {
        numberOfCarouselItems.value = 2;
      } else {
        numberOfCarouselItems.value = 2;
      }
    };
    onMounted(() => {
      updateCarouselItems();
      window.addEventListener("resize", updateCarouselItems);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateCarouselItems);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel-container" }, _attrs))} data-v-90c09aa7>`);
      _push(ssrRenderComponent(Carousel, {
        ref: "carousel",
        snap: "",
        numberOfItems: numberOfCarouselItems.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(newsState), (news) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: `/news/${news.id}`,
                class: "news-card"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(NewsCard, { news }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(NewsCard, { news }, null, 8, ["news"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(newsState), (news) => {
                return openBlock(), createBlock(unref(Link), {
                  key: news.id,
                  href: `/news/${news.id}`,
                  class: "news-card"
                }, {
                  default: withCtx(() => [
                    createVNode(NewsCard, { news }, null, 8, ["news"])
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/News/News.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const News = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-90c09aa7"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NewsAndEvents",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-921a2cd6><h2 class="title" data-v-921a2cd6>TNY News</h2><br data-v-921a2cd6><br data-v-921a2cd6><div class="news-container" data-v-921a2cd6>`);
      _push(ssrRenderComponent(News, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/News/NewsAndEvents.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const NewsAndEvents = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-921a2cd6"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    let showmore = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "teamContainer" }, _attrs))} data-v-677cbd10><h1 class="title" data-v-677cbd10>Team photos</h1><br data-v-677cbd10><br data-v-677cbd10><br data-v-677cbd10><div class="teams some-hidden" data-v-677cbd10><!--[-->`);
      ssrRenderList(unref(teamState), (teamMember) => {
        _push(`<div class="single-team" data-v-677cbd10><div class="img-wrapper" data-v-677cbd10><div class="img" style="${ssrRenderStyle(`background-image:url(${teamMember.image})`)}" alt="" data-v-677cbd10></div></div><div class="name" data-v-677cbd10><span data-v-677cbd10>${ssrInterpolate(teamMember.name)}</span></div><div class="position" data-v-677cbd10><span data-v-677cbd10>${ssrInterpolate(teamMember.position)}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="more" data-v-677cbd10>`);
      if (!unref(showmore)) {
        _push(`<!--[-->Show More<!--]-->`);
      } else {
        _push(`<!--[-->Show Less<!--]-->`);
      }
      _push(`<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none" data-v-677cbd10><path d="M1 1L6 6L11 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-677cbd10></path></svg></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Team/Team.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Team = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-677cbd10"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialCard",
  __ssrInlineRender: true,
  props: {
    testimonial: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-5d199d93><div class="image-wrapper" data-v-5d199d93><div class="image" data-v-5d199d93><img${ssrRenderAttr("src", (_a = __props.testimonial) == null ? void 0 : _a.image)} data-v-5d199d93></div></div><h3 data-v-5d199d93>${ssrInterpolate((_b = __props.testimonial) == null ? void 0 : _b.name)}</h3><span data-v-5d199d93>${ssrInterpolate((_c = __props.testimonial) == null ? void 0 : _c.position)}</span><p class="big" data-v-5d199d93>${ssrInterpolate((_d = __props.testimonial) == null ? void 0 : _d.review)}</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Testimonials/TestimonialCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TestimonialCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5d199d93"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const carousel = ref(null);
    onMounted(() => {
      setInterval(() => {
        if (carousel.value) {
          carousel.value.scroll(1);
        }
      }, 3e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-d279a990><h1 class="title" data-v-d279a990>Testimonials</h1><div class="carousel-container" data-v-d279a990>`);
      _push(ssrRenderComponent(Carousel, {
        ref_key: "carousel",
        ref: carousel,
        numberOfItems: 1,
        snap: "",
        indicator: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(testimonialState), (testimonial) => {
              _push2(ssrRenderComponent(TestimonialCard, {
                key: testimonial.id,
                testimonial
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(testimonialState), (testimonial) => {
                return openBlock(), createBlock(TestimonialCard, {
                  key: testimonial.id,
                  testimonial
                }, null, 8, ["testimonial"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><svg width="465" height="504" viewBox="0 0 465 504" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d279a990><path d="M465 0H241.851C241.851 0 125.485 56.1522 74.8321 93.587C24.1787 131.022 8.66649 145.174 0.449209 217.761C-7.76807 290.348 99.4743 341.022 99.4743 341.022L465 504V0Z" fill="#A6DCF3" data-v-d279a990></path></svg></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Testimonials/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Testimonials = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d279a990"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WhatSetsUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-bf46ac63><h2 class="title" data-v-bf46ac63>What Sets Us Apart</h2><div class="first-wrapper" data-v-bf46ac63><p class="big" data-v-bf46ac63>Our ability to provide high-quality candidates, responsive service, industry expertise, a strong network, transparency, compliance, and a focus on building long-term relationships with our clients.</p><div class="img" style="${ssrRenderStyle(`background-image:url(/images/whatsetsus/small.png)`)}" data-v-bf46ac63></div></div><div class="second-wrapper" data-v-bf46ac63><div class="img" style="${ssrRenderStyle(`background-image:url(/images/whatsetsus/big.png)`)}" data-v-bf46ac63></div><div class="content" data-v-bf46ac63><div class="box" data-v-bf46ac63><h3 class="big" data-v-bf46ac63>Our Vision</h3><p class="big" data-v-bf46ac63>Our vision is to become the leading partner in the delivery of highly efficient professionals in the healthcare staffing industry and the staffing agency of choice by helping people find the best organization where they can practice their skills, bringing out their best talent possible. </p></div><div class="box" data-v-bf46ac63><h3 class="big" data-v-bf46ac63>Our Mission</h3><p class="big" data-v-bf46ac63>Our ongoing commitment revolves around elevating the caliber of patient care through the meticulous selection and employment of highly skilled and accredited professionals.</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/WhatSetsUs/WhatSetsUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const WhatSetsUs = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bf46ac63"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Numbers",
  __ssrInlineRender: true,
  setup(__props) {
    const numbers = ref([
      {
        title: "Candidates",
        number: 56974,
        img: "images/numbers/candidates.png"
      },
      {
        title: "Candidates",
        number: 56974,
        img: "images/numbers/candidates.png"
      },
      {
        title: "Candidates",
        number: 56974,
        img: "images/numbers/candidates.png"
      },
      {
        title: "Candidates",
        number: 56974,
        img: "images/numbers/candidates.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e7313679><h2 data-v-e7313679>Rapidly provision one to thousands of droplets in seconds</h2><div class="numbers-wrapper" data-v-e7313679><!--[-->`);
      ssrRenderList(numbers.value, (number) => {
        _push(`<div class="number" data-v-e7313679><div class="img-wrapper" data-v-e7313679><img${ssrRenderAttr("src", number.img)} data-v-e7313679></div><span class="title" data-v-e7313679>${ssrInterpolate(number.title)}</span><span class="nmbr" data-v-e7313679>${ssrInterpolate(number.number)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Numbers/Numbers.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Numbers = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e7313679"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-56f79073><h2 class="title" data-v-56f79073>About us</h2><div class="wrapper" data-v-56f79073><div class="text-wrapper" data-v-56f79073><p data-v-56f79073>TNY Staffing Corporation is a well-recognized leader in Medical staffing including Physical, Occupational &amp; Speech therapy for medical facilities in New York and New Jersey. We strive to recruit highly-trained, compassionate medical professionals who possess exceptional skills and a strong work ethic to meet the high standards of healthcare facilities. We’re dedicated to providing the highest-quality medical staffing solutions that are customized to the needs of each client. Taking this into action, over the past years we have placed hundreds of clinical staff with several clients across New York and Jersey City. </p></div><div class="img" style="${ssrRenderStyle(`background-image:url(/images/aboutus/aboutus.png)`)}" data-v-56f79073></div></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/about",
        class: "more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Read More`);
          } else {
            return [
              createTextVNode("Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/AboutUs/AboutUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-56f79073"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-3161b7fd><h2 class="title" data-v-3161b7fd>Services</h2><br data-v-3161b7fd><h2 class="subtitle" data-v-3161b7fd>TNY Staffing Corporation - redefining staffing solutions</h2><br data-v-3161b7fd><h2 class="subtitle blue" data-v-3161b7fd>Why TNY Staffing Corporation ?</h2><div class="services-container" data-v-3161b7fd><!--[-->`);
      ssrRenderList(unref(serviceState), (service) => {
        _push(`<!--[-->`);
        if (service.onMainPage) {
          _push(ssrRenderComponent(SingleService, { service }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/services",
        class: "more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Read More`);
          } else {
            return [
              createTextVNode("Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/Services/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3161b7fd"]]);
export {
  AboutUs as A,
  Clients as C,
  Map as M,
  Numbers as N,
  Services as S,
  Testimonials as T,
  WhatSetsUs as W,
  _sfc_main$b as _,
  NewsAndEvents as a,
  Team as b,
  ContactUs as c,
  Carousel as d
};
