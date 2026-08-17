<script setup lang="ts">
import Btn from '@/SharedComponents/btn.vue';
import InputField from '@/SharedComponents/InputField.vue';
import Http from '@/mixins/Http';
import validation from '@/mixins/Validation';
import { onMounted, reactive, ref, Ref } from 'vue';
// import { useSnackbar } from 'vue3-snackbar';
import DropDownInputField from '@/SharedComponents/DropDownInputField.vue';

// import { serviceState } from '@/state/state';
import { serviceState } from '@/state/state';
import { computed } from '@vue/reactivity';
import { snack } from '@/mixins/toast';
import DevFillButton from '@/SharedComponents/DevFillButton.vue';

const isLoading: Ref<boolean> = ref(false);
const name: Ref<InstanceType<typeof InputField> | null> = ref(null);
const phone: Ref<InstanceType<typeof InputField> | null> = ref(null);
const email: Ref<InstanceType<typeof InputField> | null> = ref(null);
const company_name: Ref<InstanceType<typeof InputField> | null> = ref(null);
const address: Ref<InstanceType<typeof InputField> | null> = ref(null);
const message: Ref<InstanceType<typeof InputField> | null> = ref(null);
// const snackbar = useSnackbar();

const serviceNames = computed(() => serviceState.value.map(job => job.title));

const props = defineProps({
    service: String
})

const form = reactive({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    address: '',
    requirements: '',
    service: ''
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
    address: {
        rules: ['required'],
        message: {
            required: 'Message Is Required'
        }
    },
    company_name: {
        rules: ['required'],
        message: {
            required: 'Please select a company_name',
        }
    },
    requirements: {
        rules: ['required'],
        message: {
            required: 'Please select a message',
        }
    },
    service: {
        rules: ['required', { dropdown: serviceNames.value }],
        message: {
            required: 'Please select a service',
        }
    }
}
const formErrors = reactive({
    company_name: false,
    name: false,
    email: false,
    phone: false,
    address: false,
    requirements: false,
    service: false
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
        snack.error(error);
        
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
        let response = await Http.post('request', ModdedForm);

        snack.success('Form Submitted Successfully');
 
        isLoading.value = false;
        resetForm();
        console.log(response)
    } catch (e) {
        console.error(e)
        snack.error(e as string);
    
        isLoading.value = false;
    }
    isLoading.value = false;
}

const serviceComp: Ref<InstanceType<typeof DropDownInputField> | null> = ref(null);

onMounted(() => {
    if (props.service) {
        serviceComp.value?.defaultValue(props.service);
    }
})

const fillTestData = () => {
    name.value?.setValue('Jamie Rivera');
    phone.value?.setValue('(212) 555-0100');
    email.value?.setValue('jamie.rivera@example.com');
    company_name.value?.setValue('Acme Rehab Group');
    address.value?.setValue('575 8th Ave, New York, NY');
    serviceComp.value?.defaultValue(serviceNames.value[0] ?? 'Physical Therapy');
    message.value?.setValue('Looking for licensed therapists to cover an outpatient caseload starting next month.');
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
        <InputField ref="company_name" @input="form.company_name = $event" label="Company Name" placeHolder="Enter Your company_name.."
            :error="formErrors.company_name" />



        <div class="split">
            <InputField ref="address" @input="form.address = $event" label="Address" placeHolder="Service You Need"
                :error="formErrors.address" />
            <!-- <InputField ref="service" @input="form.service = $event" label="service"
                placeHolder="Enter Your service" :error="formErrors.service" /> -->
            <DropDownInputField ref="serviceComp" @input="form.service = $event" :list="serviceNames"
                label="Services Available" placeHolder="Service You Need.." :error="formErrors.service" :default="service" />
        </div>
        <InputField ref="message" @input="form.requirements = $event" label="Your requirements"
            placeHolder="Enter Your requirements ..." height="12.5rem" :error="formErrors.requirements" />
        <Btn class="btn" @click="validate" :loading="isLoading">Send Email</Btn>
        <DevFillButton @fill="fillTestData" />
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