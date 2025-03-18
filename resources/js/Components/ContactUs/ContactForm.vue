<script setup lang="ts">
import Btn from '@/SharedComponents/btn.vue';
import InputField from '@/SharedComponents/InputField.vue';
import Http from '@/mixins/Http';
import validation from '@/mixins/Validation';
import { reactive, ref, Ref } from 'vue';
import { useSnackbar } from 'vue3-snackbar';

const name: Ref<InstanceType<typeof InputField> | null> = ref(null);
const email: Ref<InstanceType<typeof InputField> | null> = ref(null);
const phone: Ref<InstanceType<typeof InputField> | null> = ref(null);
const subject: Ref<InstanceType<typeof InputField> | null> = ref(null);
const message: Ref<InstanceType<typeof InputField> | null> = ref(null);

const isLoading: Ref<boolean> = ref(false);
const snackbar = useSnackbar();

const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const formValidation = {
    name: {
        rules: ['required'],
        message: {
            required: 'Please enter your name',
        }
    },
    email: {
        rules: ['required', 'email'],
        message: {
            required: 'email Is Required',
            email: 'Please Enter A Valid Email'
        }
    },
    phone: {
        rules: ['required'],
        message: {
            required: 'Phone Number Is Required',
            phone: 'Please Enter A Valid Phone Number'
        }
    },
    message: {
        rules: ['required'],
        message: {
            required: 'Message Is Required'
        }
    },
    subject: {
        rules: ['required'],
        message: {
            required: 'Please select a subject',
        }
    },
}
const formErrors = reactive({
    subject: false,
    name: false,
    email: false,
    phone: false,
    message: false
})

const resetForm = () => {
    name.value?.clear;
    email.value?.clear;
    phone.value?.clear;
    subject.value?.clear;
    message.value?.clear;
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
            background: '#F58E8E',
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
        let ModdedForm = form;
        ModdedForm.phone = ModdedForm.phone.replace(/\D/g, '');
        // let recapatchaToken = await recaptcha('career');
        // if(recapatchaToken) Object.assign(ModdedForm, {
        // recaptcha: recapatchaToken
        // });
        let response = await Http.post('message', ModdedForm);

        snackbar.add({
            background: '#8EF5E8',
            text: 'Form Submitted Successfully',

        })
        isLoading.value = false;
        resetForm();
        console.log(response)
    } catch (e) {
        snackbar.add({
            background: '#F58E8E',
            text: e as string,

        })
        isLoading.value = false;
    }
    isLoading.value = false;
}

</script>

<template>
    <InputField ref="name" @input="form.name = $event" label="Name" placeHolder="Enter Your Name ..." :error="formErrors.name" />
    <InputField ref="email" @input="form.email = $event" label="Email" placeHolder="Enter Your Email ..."  :error="formErrors.email" />
    <InputField ref="phone" @input="form.phone = $event" label="Phone Number" placeHolder="Enter Your Number..."  :error="formErrors.phone"
    mask="(###) ###-####" />
    <InputField ref="subject" @input="form.subject = $event" label="Subject"  placeHolder="Service You Need ..." :error="formErrors.subject" />

    <InputField ref="message" @input="form.message = $event" label="Message" placeHolder="Enter Your Message ..." height="12.5rem" 
        :error="formErrors.message" />
    <Btn class="btn" @click="validate" :loading="isLoading">Send Email</Btn>
</template>

<style scoped lang="scss">
.btn {
    width: 40%;
    margin: auto;
    margin-top: 2rem;

    @include media-max(phone) {
        width: 100%;
    }
}
</style>