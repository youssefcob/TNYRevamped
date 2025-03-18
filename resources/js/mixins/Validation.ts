import moment from 'moment';

interface dropdown {
    dropdown: string[];
}

interface ValidationBody {
    rules?: (string | dropdown)[];
    message?: {
        [key: string]: string;

    }

}
interface FormValidation {
    [key: string]: ValidationBody;
}

interface date {
    day: number;
    month: number;
    year: number;

}

interface Form {
    [key: string]: string | string[] | FormData |null;

}


interface errors {
    [key: string]: string;
}

class validation {
    constructor(public validationObject: FormValidation, public form: Form) {
        this.validator = {
            required: (arr?: string[]) => {
                const pushError = (): void => {
                    if (this.element.message && this.element.message.required) {
                        this.errors.push({
                            [this.key]: this.element.message.required
                        });
                    } else {
                        this.errors.push({
                            [this.key]: `${this.key} is required`
                        });
                    }
                }


                if (arr && arr.length > 0) {
                    const firstElement = arr[0];
                    if (firstElement === 'if') {
                        let data = this.form[arr[1] as keyof typeof this.form];
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
            date: (arr?: string[]) => {
                const pushError = (s: string): void => {
                    if (this.element.message && this.element.message.date) {
                        this.errors.push({
                            [this.key]: this.element.message.date
                        });
                    } else {
                        this.errors.push({
                            [this.key]: `date ${s}`
                        });
                    }
                }

                if (arr && arr.length > 0) {
                    const firstElement = arr[0];
                    let parsedDate = moment(this.data, 'MM-DD-YYYY', true);
                    if (firstElement === 'past') {

                        if (moment(parsedDate).isAfter()) {
                            pushError('cannot be in the past');
                        }
                    } else if (firstElement === 'future') {
                        if (moment(parsedDate).isBefore()) {
                            pushError('cannot be in the future');
                        }
                    } else {
                        console.error('Invalid date rule');
                    }

                    if (!parsedDate.isValid()) {
                        pushError('is invalid');
                    }
                }

            },
            min: (arr?: string[]) => {
                const pushError = (): void => {
                    if (this.element.message && this.element.message.min) {
                        this.errors.push({
                            [this.key]: this.element.message.min
                        });
                    } else {
                        this.errors.push({
                            [this.key]: `${this.key} is invalid`
                        });
                    }
                }

                if (arr && arr.length > 0) {
                    const firstElement = arr[0];
                    if (typeof this.data === 'string') {
                        if (this.data.length < parseInt(firstElement)) {
                            pushError();
                        }
                    }
                }

            },
            dropdown: (arr?: string[]) => {


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
            letters: (arr?: string[]) => {
                const pushError = (): void => {
                    if (this.element.message && this.element.message.letters) {
                        this.errors.push({
                            [this.key]: this.element.message.letters
                        });
                    } else {
                        this.errors.push({
                            [this.key]: `${this.key} is invalid`
                        });
                    }
                }

                if (arr && arr.length > 0) {
                    const firstElement = arr[0];
                    if (firstElement === 'only') {
                        if (!this.data.match(/^[a-zA-Z]+$/)) {
                            pushError();
                        }
                    }
                }
            },
            file: (arr?: string[]) => {
                const pushError = (): void => {
                    if (this.element.message && this.element.message.file) {
                        this.errors.push({
                            [this.key]: this.element.message.file
                        });
                    } else {
                        this.errors.push({
                            [this.key]: `${this.key} is invalid`
                        });
                    }
                }
                if (arr && arr.length > 0) {
                // console.log(arr)

                    const file = this.data as FormData;
                    if(!file) return;
                    for (let [key, value] of file.entries()) {
                        if (value instanceof File) {
                            console.log(value);
                            const fileType = value.name.split('.').pop();
                            console.log(fileType);
                            if (fileType && !arr.includes(fileType)) {
                                pushError();
                            }
                        }
                    }
                }

            },
            email: (arr?: string[]) => {
                const pushError = (): void => {
                    if (this.element.message && this.element.message.email) {
                        this.errors.push({
                            [this.key]: this.element.message.email
                        });
                    } else {
                        this.errors.push({
                            [this.key]: `${this.key} is invalid`
                        });
                    }
                }

                if (!(arr && arr.length > 0)) {
                    if (!this.data.match(/\S+@\S+\.\S+/)) {
                        pushError();
                    }
                }
            }
        }
    }

    
    protected validator: any;



    isValid: boolean = false;
    errors: errors[] = [];

    element: any;
    data: any;
    key: any;

    keys: string[] = [];


    validate(): errors[] {
        this.errors = [];
        this.keys = [];
        for (const key in this.validationObject) {

            this.element = this.validationObject[key as keyof typeof this.validationObject];
            this.data = this.form[key as keyof typeof this.form];
            this.key = key;
            if (this.element.rules && this.element.rules.length > 0) {

                if (this.checkRules()) break;

            }

        }
        this.isValid = (this.errors.length === 0);
        this.assignKeys();
        return this.errors;
    }

    private checkRules(): any {
        let rules = this.element.rules as (string | dropdown)[];
        for (const rule of rules) {
            // this.handleRule(rule);
            if (this.handleRule(rule)) {
                return true;
            };
        }

    }

    private handleRule(rule: string | dropdown,) {
        if (typeof rule === 'string') {
            if (rule.includes(':')) {
                let ruleArr = rule.split(':');
                let ruleName = ruleArr[0];
                let ruleValue = ruleArr.splice(1);
                const validationFunction = this.validator[ruleName];

                if (validationFunction && typeof validationFunction === 'function') {
                    validationFunction(ruleValue);
                }
            } else {
                const validationFunction = this.validator[rule];

                if (validationFunction && typeof validationFunction === 'function') {
                    validationFunction();

                }
            }


        } else if (typeof rule === 'object') {
            for (const key in rule) {
                const validationFunction = this.validator[key];
                if (validationFunction && typeof validationFunction === 'function') {
                    validationFunction([rule[key as keyof typeof rule]]);

                }
            }
        }
        return !(this.errors.length === 0);

    }

    private assignKeys(): void {
        this.keys = this.errors.reduce((keys, obj) => {
            Object.keys(obj).forEach(key => {
                if (!keys.includes(key)) {
                    keys.push(key);
                }
            });
            return keys;
        }, [] as string[]);

    }

}

export default validation;
