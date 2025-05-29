<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import Http from '@/mixins/Http';
import Btn from '@/SharedComponents/btn.vue';
import InputField from '@/SharedComponents/InputField.vue';
import { Link, useForm } from '@inertiajs/vue3';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { snack } from '@/mixins/toast';
import user from '@/mixins/user';


const form = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    type: 'job_seeker'
}

const loading = ref(false);

const submit = async () => {

    try {
        loading.value = true;

        const res = await axios.post('/api/user/register', form);

        snack.success('Form Submitted Successfully')

        console.log(res.data);
        user.set(res.data);
        loading.value = false;
    } catch (error) {
        loading.value = false;
        if (axios.isAxiosError(error)) {
            // console.log('Registration failed:', error.response?.data);
            let errorMessages = error.response?.data.error
            console.log(errorMessages);
            if (errorMessages && typeof errorMessages === 'object') {
                Object.values(errorMessages).forEach(msgArr => {
                    if (Array.isArray(msgArr)) {
                        msgArr.forEach(msg => snack.error(msg));
                    } else if (typeof msgArr === 'string') {
                        snack.error(msgArr);
                    }
                });
            }
            // Handle error, e.g., show a notification or alert
        } else {
            console.log('An unexpected error occurred:', error);
        }
    }
};

</script>

<template>
    <MainOverLay>
        <div class="container">
            <div class="login-wrapper">
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
                    <Btn :loading="loading" class="btn" @click="submit">Register</Btn>
                </div>


                <div class="text-center">
                    <p>Already have an account?
                        <Link href="/login" class="text-blue-500 hover:underline">Login</Link>
                    </p>


                </div>
            </div>
        </div>
    </MainOverLay>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/images/login-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


    .login-wrapper {
        width: 100%;
        max-width: 40vw;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 3px solid $navy;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .title {
            align-self: center;
        }

        .radio-group {
            display: flex;
            justify-content: space-around;
        }

        .btn-wrapper {
            margin-top: 2rem;
            width: 40%;
            align-self: center;
        }
    }

}
</style>