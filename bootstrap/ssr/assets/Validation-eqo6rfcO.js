var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import axios from "axios";
import moment from "moment";
function extractErrorMessage(error) {
  var _a;
  if (!(error == null ? void 0 : error.response)) {
    return "Network error. Please check your connection and try again.";
  }
  const body = ((_a = error.response.data) == null ? void 0 : _a.response) ?? error.response.data;
  const errors = body == null ? void 0 : body.errors;
  if (errors && typeof errors === "object") {
    return Object.values(errors).flat().join(" ");
  }
  return (body == null ? void 0 : body.message) || "Something went wrong. Please try again.";
}
const Http = {
  url: window.location.origin + "/api/",
  methods: {
    async get(url) {
      url = Http.url + url;
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error(error);
        throw extractErrorMessage(error);
      }
    },
    async post(url, data) {
      url = Http.url + url;
      try {
        const response = await axios.post(url, data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw extractErrorMessage(error);
      }
    },
    async put(url, data) {
      url = Http.url + url;
      try {
        const response = await axios.put(url, data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw extractErrorMessage(error);
      }
    },
    async delete(url) {
      url = Http.url + url;
      try {
        const response = await axios.delete(url);
        return response.data;
      } catch (error) {
        console.error(error);
        throw extractErrorMessage(error);
      }
    }
  }
};
const Http$1 = Http.methods;
class validation {
  constructor(validationObject, form) {
    __publicField(this, "validator");
    __publicField(this, "isValid", false);
    __publicField(this, "errors", []);
    __publicField(this, "element");
    __publicField(this, "data");
    __publicField(this, "key");
    __publicField(this, "keys", []);
    this.validationObject = validationObject;
    this.form = form;
    this.validator = {
      required: (arr) => {
        const pushError = () => {
          if (this.element.message && this.element.message.required) {
            this.errors.push({
              [this.key]: this.element.message.required
            });
          } else {
            this.errors.push({
              [this.key]: `${this.key} is required`
            });
          }
        };
        if (arr && arr.length > 0) {
          const firstElement = arr[0];
          if (firstElement === "if") {
            let data = this.form[arr[1]];
            if (data && data === arr[2]) {
              if (!this.data) {
                pushError();
              }
            }
          }
        } else {
          if (!this.data) {
            pushError();
          }
        }
      },
      date: (arr) => {
        const pushError = (s) => {
          if (this.element.message && this.element.message.date) {
            this.errors.push({
              [this.key]: this.element.message.date
            });
          } else {
            this.errors.push({
              [this.key]: `date ${s}`
            });
          }
        };
        if (arr && arr.length > 0) {
          const firstElement = arr[0];
          let parsedDate = moment(this.data, "MM-DD-YYYY", true);
          if (firstElement === "past") {
            if (moment(parsedDate).isAfter()) {
              pushError("cannot be in the past");
            }
          } else if (firstElement === "future") {
            if (moment(parsedDate).isBefore()) {
              pushError("cannot be in the future");
            }
          } else {
            console.error("Invalid date rule");
          }
          if (!parsedDate.isValid()) {
            pushError("is invalid");
          }
        }
      },
      min: (arr) => {
        const pushError = () => {
          if (this.element.message && this.element.message.min) {
            this.errors.push({
              [this.key]: this.element.message.min
            });
          } else {
            this.errors.push({
              [this.key]: `${this.key} is invalid`
            });
          }
        };
        if (arr && arr.length > 0) {
          const firstElement = arr[0];
          if (typeof this.data === "string") {
            if (this.data.length < parseInt(firstElement)) {
              pushError();
            }
          }
        }
      },
      dropdown: (arr) => {
        if (this.data && this.data.length > 0) {
          if (arr && !arr[0].includes(this.data)) {
            if (this.element.message && this.element.message.dropdown) {
              this.errors.push({
                [this.key]: this.element.message.dropdown
              });
            } else {
              this.errors.push({
                [this.key]: `${this.key} is invalid`
              });
            }
          }
        }
      },
      letters: (arr) => {
        const pushError = () => {
          if (this.element.message && this.element.message.letters) {
            this.errors.push({
              [this.key]: this.element.message.letters
            });
          } else {
            this.errors.push({
              [this.key]: `${this.key} is invalid`
            });
          }
        };
        if (arr && arr.length > 0) {
          const firstElement = arr[0];
          if (firstElement === "only") {
            if (!this.data.match(/^[a-zA-Z]+$/)) {
              pushError();
            }
          }
        }
      },
      file: (arr) => {
        const pushError = () => {
          if (this.element.message && this.element.message.file) {
            this.errors.push({
              [this.key]: this.element.message.file
            });
          } else {
            this.errors.push({
              [this.key]: `${this.key} is invalid`
            });
          }
        };
        if (arr && arr.length > 0) {
          const file = this.data;
          if (!file) return;
          for (let [key, value] of file.entries()) {
            if (value instanceof File) {
              console.log(value);
              const fileType = value.name.split(".").pop();
              console.log(fileType);
              if (fileType && !arr.includes(fileType)) {
                pushError();
              }
            }
          }
        }
      },
      email: (arr) => {
        const pushError = () => {
          if (this.element.message && this.element.message.email) {
            this.errors.push({
              [this.key]: this.element.message.email
            });
          } else {
            this.errors.push({
              [this.key]: `${this.key} is invalid`
            });
          }
        };
        if (!(arr && arr.length > 0)) {
          if (!this.data.match(/\S+@\S+\.\S+/)) {
            pushError();
          }
        }
      }
    };
  }
  validate() {
    this.errors = [];
    this.keys = [];
    for (const key in this.validationObject) {
      this.element = this.validationObject[key];
      this.data = this.form[key];
      this.key = key;
      if (this.element.rules && this.element.rules.length > 0) {
        this.checkRules();
      }
    }
    this.isValid = this.errors.length === 0;
    this.assignKeys();
    return this.errors;
  }
  checkRules() {
    let rules = this.element.rules;
    for (const rule of rules) {
      if (this.handleRule(rule)) {
        return true;
      }
    }
  }
  handleRule(rule) {
    const errorsBefore = this.errors.length;
    if (typeof rule === "string") {
      if (rule.includes(":")) {
        let ruleArr = rule.split(":");
        let ruleName = ruleArr[0];
        let ruleValue = ruleArr.splice(1);
        const validationFunction = this.validator[ruleName];
        if (validationFunction && typeof validationFunction === "function") {
          validationFunction(ruleValue);
        }
      } else {
        const validationFunction = this.validator[rule];
        if (validationFunction && typeof validationFunction === "function") {
          validationFunction();
        }
      }
    } else if (typeof rule === "object") {
      for (const key in rule) {
        const validationFunction = this.validator[key];
        if (validationFunction && typeof validationFunction === "function") {
          validationFunction([rule[key]]);
        }
      }
    }
    return this.errors.length > errorsBefore;
  }
  assignKeys() {
    this.keys = this.errors.reduce((keys, obj) => {
      Object.keys(obj).forEach((key) => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      });
      return keys;
    }, []);
  }
}
export {
  Http$1 as H,
  validation as v
};
