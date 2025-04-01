<script setup lang="ts">
import Btn from '@/SharedComponents/btn.vue';
import InputField from '@/SharedComponents/InputField.vue';
import Http from '@/mixins/Http';
import validation from '@/mixins/Validation';
import { reactive, ref, Ref } from 'vue';
import { useSnackbar } from 'vue3-snackbar';
import DropDownInputField from '@/SharedComponents/DropDownInputField.vue';

import { jobState } from '@/state/state';
import { computed } from '@vue/reactivity';
import FileInputField from '@/SharedComponents/FileInputField.vue';
const name: Ref<InstanceType<typeof InputField> | null> = ref(null);
const email: Ref<InstanceType<typeof InputField> | null> = ref(null);
const phone: Ref<InstanceType<typeof InputField> | null> = ref(null);
const resume: Ref<InstanceType<typeof InputField> | null> = ref(null);
const zip: Ref<InstanceType<typeof InputField> | null> = ref(null);

const isLoading: Ref<boolean> = ref(false);
const snackbar = useSnackbar();

const jobNames = computed(() => jobState.value.map(job => job.title));

const form = reactive({
    name: '',
    email: '',
    phone: '',
    resume: null,
    zip: '',
    message: '',
    position: ''
})

const formValidation = {
    name: {
        rules: ['required'],
        message: {
            required: 'Please enter your name',
        }
    },
    phone: {
        rules: ['required'],
        message: {
            required: 'Phone Number Is Required',
            phone: 'Please Enter A Valid Phone Number'
        }
    },
    email: {
        rules: ['required', 'email'],
        message: {
            required: 'email Is Required',
            email: 'Please Enter A Valid Email'
        }
    },
   
    zip: {
        rules: ['required'],
        message: {
            required: 'Message Is Required'
        }
    },
    resume: {
        rules: ['required'],
        message: {
            required: 'Please select a resume',
        }
    },
    message: {
        rules: ['required'],
        message: {
            required: 'Please select a message',
        }
    },
    position: {
        rules: ['required',{dropdown: jobNames.value}],
        message: {
            required: 'Please select a position',
        }
    }
}
const formErrors = reactive({
    resume: false,
    name: false,
    email: false,
    phone: false,
    zip: false,
    message: false,
    position: false
})

const resetForm = () => {
    // name.value?.clear;
    // email.value?.clear;
    // phone.value?.clear;
    // subject.value?.clear;
    // message.value?.clear;
}

const validate = () => {
    let v = new validation(formValidation, form)
    v.validate()
    let errors = v.errors;
    // console.log(errors);
    if (errors.length) {
        handleErrors(v);
    } else {
        submitForm();
    }
}

const handleErrors = (v: validation) => {
    let errors = v.errors;
    let errorsArr = Object.values(errors[0])
    // console.log(errorsArr)
    let keys = v.keys
    errorsArr.forEach((error) => {
        snackbar.add({

            text: error,

        })
    })

    keys.forEach((key) => {
        setTimeout(() => {
            formErrors[key as keyof typeof formErrors] = false

        }, 500)
        formErrors[key as keyof typeof formErrors] = true

    })
}

const submitForm = async () => {
    try {
        isLoading.value = true;
        let ModdedForm = modifyForm();

        // let recapatchaToken = await recaptcha('career');
        // if(recapatchaToken) Object.assign(ModdedForm, {
        // recaptcha: recapatchaToken
        // });
        let response = await Http.post('application', ModdedForm);

        snackbar.add({

            text: 'Form Submitted Successfully',

        })
        isLoading.value = false;
        resetForm();
        console.log(response)
    } catch (e) {
        snackbar.add({

            text: e as string,

        })
        isLoading.value = false;
    }
    isLoading.value = false;
}

const modifyForm = () => {
    let formData = new FormData();

    formData.append('position', form.position);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone.replace(/\D/g, ''));
    formData.append('zip', form.zip);
    formData.append('message', form.message);
    if (form.resume) {
        let resume = form.resume as FormData;
        for (let [key, value] of resume.entries()) {
            if (value instanceof File) {
                formData.append('resume', value);
                break;
            }
        }
    }

    return formData;

}

</script>

<template>
    <div class="wrapper">

        <span class="title">Welcome</span>
        <InputField ref="name" @input="form.name = $event" label="Name" placeHolder="Enter Your Name.."
            :error="formErrors.name" />
        <InputField ref="phone" @input="form.phone = $event" label="Mobile number" placeHolder="Enter Your Number..."
            :error="formErrors.phone" mask="(###) ###-####" />
        <InputField ref="email" @input="form.email = $event" label="Email" placeHolder="Enter Your Email.."
            :error="formErrors.email" />
            
        <FileInputField ref="resume" @input="form.resume = $event" label="Your Resume" placeHolder="Upload Your Resume"
            :error="formErrors.resume" />
        <div class="split">
            <InputField ref="zip" @input="form.zip = $event" label="Zip" placeHolder="Enter Your Zip Code"
                :error="formErrors.zip" />
            <!-- <InputField ref="position" @input="form.position = $event" label="Position"
                placeHolder="Enter Your Position" :error="formErrors.position" /> -->
            <DropDownInputField ref="position" @input="form.position = $event" :list="jobNames" label="Position"
                placeHolder="Enter Your Position" :error="formErrors.position" />
        </div>
        <InputField ref="message" @input="form.message = $event" label="Your Message"
            placeHolder="Enter Your message ..." height="12.5rem" :error="formErrors.message" />
        <Btn class="btn" @click="validate" :loading="isLoading">Send Email</Btn>
    </div>
</template>

<style scoped lang="scss">
$gap: 1rem;

.wrapper {
    display: flex;
    flex-direction: column;
    gap: $gap;
}

.split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $gap;

    @include media-max(phone) {
        grid-template-columns: 1fr;
    }
}

.title {
    text-align: center;
    font-size: 2rem;
    color: $navy;
}

.btn {
    width: 40%;
    margin: auto;
    margin-top: 2rem;

    @include media-max(phone) {
        width: 100%;
    }
}
</style>