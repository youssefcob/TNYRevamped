<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import InputField from '@/SharedComponents/InputField.vue';
import { Link, router } from '@inertiajs/vue3';
import { snack } from '@/mixins/toast';
import { ref } from 'vue';


const form = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    type: 'job_seeker'
}

const loading = ref(false);


const props = defineProps({
    errors: {
        type: Object
    },
})
const submit = () => {

     router.post('/register', form, {
        onStart: () => {
            loading.value = true;
        },
        onFinish: () => {
            loading.value = false;
            if (props.errors && Object.keys(props.errors).length > 0) {
                Object.values(props.errors).forEach(errorArray => {
                    if (Array.isArray(errorArray)) {
                        errorArray.forEach(error => snack.error(error));
                    } else if (typeof errorArray === 'string') {
                        snack.error(errorArray);
                    }
                });
            }
        },
        preserveState: true,
        preserveScroll: true,
    });
    
};

</script>

<template>
    <MainOverLay>
        <form method="POST" action="/register" class="container" @submit.prevent="submit">
            <div class="box-wrapper-border">
                <h2 class="title">Sign Up</h2>

                <InputField type="text" name="name" label="Name" placeHolder="Enter your name" v-model="form.name" />

                <InputField type="text" name="email" label="Email" placeHolder="Enter your email"
                    v-model="form.email" />

                <InputField type="text" name="password" label="Password" placeHolder="Enter your password"
                    v-model="form.password" />

                <InputField type="text" name="confirm_password" label="Confirm Password"
                    placeHolder="Re-enter your password" v-model="form.password_confirmation" />

                <div class="radio-group">
                    <div class="radio">
                        <input type="radio" name="type" id="job_seeker" value="job_seeker" v-model="form.type" checked>
                        <label for="job_seeker">Job Seeker</label>
                    </div>
                    <div class="radio">
                        <input type="radio" name="type" id="employer" value="employer" v-model="form.type">
                        <label for="employer">Employer</label>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <button type="submit" class="btn" :disabled="loading">
                        {{ loading ? 'Loading...' : 'Register' }}
                    </button>
                </div>


                <div class="text-center">
                    <p>Already have an account?
                        <Link href="/login" class="text-blue-500 hover:underline">Login</Link>
                    </p>


                </div>
            </div>
            </form>
    </MainOverLay>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    // height: 110vh;
    padding: 15vh 0 8vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/images/login-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


    .box-wrapper-border {


        .title {
            align-self: center;
        }

        .radio-group {
            display: flex;
            justify-content: space-around;

            label {
                margin-left: 1rem;
            }
        }


    }
        .text-center {
        text-align: center;
        a{
            color:$blue;
        }
    }

}
</style>