<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { snack } from '@/mixins/toast';
import InputField from '@/SharedComponents/InputField.vue';
import { Link, router } from '@inertiajs/vue3';
import { ref, onMounted, watch } from 'vue';


const loading = ref(false);
const resetEmailSent = ref(false);
const csrfToken = ref<null | string | undefined>('');

const props = defineProps({
    errors: {
        type: Object
    },
    type: {
        type: String
    },
    message: {
        type: String
    }
})


const forgetPasswordForm = {
    email: '',
}

const resetPasswordForm = {
    email: '',
    otp: '',
    password: '',
}



onMounted(() => {
    csrfToken.value = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
});


const handleErrors = (errors: any) => {
    if (errors && Object.keys(errors).length > 0) {
        Object.values(errors).forEach(errorArray => {
            if (Array.isArray(errorArray)) {
                errorArray.forEach(error => snack.error(error));
            } else if (typeof errorArray === 'string') {
                snack.error(errorArray);
            }
        });
    }
}


function forgetPasswordSubmit() {
    loading.value = true;
    resetEmailSent.value = false;

    router.post('/forget-password', forgetPasswordForm, {
        onStart: () => {
            loading.value = true;

        },
        onFinish: () => {
            loading.value = false;
            if (props.type === 'success') {
                // snack.success(props.message as string);
                resetEmailSent.value = true;
                resetPasswordForm.email = forgetPasswordForm.email;
            }
             else {
                handleErrors(props.errors);
            }
            

            
        },
    });
}
function resetPasswordSubmit() {
    loading.value = true;
    router.post('/reset-password', resetPasswordForm, {
        onStart: () => {
            loading.value = true;
        },
        onFinish: () => {
            loading.value = false;
            if (props.type === 'success') {
                // snack.success(props.message as string);
                
            }
            else {
                handleErrors(props.errors);
            }
        },
    })
}


</script>

<template>
    <MainOverLay>

        <form v-if="!resetEmailSent" method="POST" action="/login" class="container" @submit.prevent="forgetPasswordSubmit">
            <input type="hidden" name="_token" :value="csrfToken">
            <div class="box-wrapper-border">
                <h2 class="title">Forget Password</h2>

                <InputField type="text" name="email" label="Email" placeHolder="Enter your email" value=""
                    v-model="forgetPasswordForm.email" />

                <div class="btn-wrapper">
                    <button type="submit" class="btn" :disabled="loading">
                        {{ loading ? 'Loading...' :  'Send OTP' }}
                    </button>
                </div>


            </div>
        </form>

        <form v-if="resetEmailSent" method="POST" action="/login" class="container" @submit.prevent="resetPasswordSubmit">
            <input type="hidden" name="_token" :value="csrfToken">
            <div class="box-wrapper-border">
                <h2 class="title">Forget Password</h2>

                <InputField type="text" name="email" label="Email" placeHolder="Enter your email" :value="resetPasswordForm.email"
                    v-model="resetPasswordForm.email" :disabled="resetEmailSent" />

                <InputField v-if="resetEmailSent" type="number" name="otp" label="OTP" placeHolder="Enter OTP" value=""
                    v-model="resetPasswordForm.otp"  />

                <InputField v-if="resetEmailSent" type="password" name="password" label="New Password" placeHolder="Enter new password" value=""
                    v-model="resetPasswordForm.password"  />

                <div class="btn-wrapper">
                    <button type="submit" class="btn" :disabled="loading">
                        {{ loading ? 'Loading...' : 'Reset Password'  }}
                    </button>
                </div>


            </div>
        </form>
    </MainOverLay>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/images/login-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .box-wrapper-border {

        // align-items: center;

        .title {
            align-self: center;
        }

    }

    .text-center {
        text-align: center;

        a {
            color: $blue;
        }
    }

}
</style>