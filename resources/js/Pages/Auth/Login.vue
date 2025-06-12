<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { snack } from '@/mixins/toast';
import user from '@/mixins/user';
import Btn from '@/SharedComponents/btn.vue';
import InputField from '@/SharedComponents/InputField.vue';
import { Link } from '@inertiajs/vue3';
import axios from 'axios';
import { ref } from 'vue';

const loading = ref(false);

const form = {
    email:'',
    password:''
}
const submit = async () => {
     try {
        loading.value = true;

        const res = await axios.post('/api/user/login', form);

        snack.success('Form Submitted Successfully')

        console.log(res.data);
        user.setToken(res.data.tokens);
        user.set(res.data.user)
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
}

</script>

<template>
    <MainOverLay>
        <div class="container">
            <div class="box-wrapper-border">

                <h2 class="title">Login</h2>



                <InputField type="text" name="email" label="Email" placeHolder="Enter your email" value="jobSeeker@example.com" v-model="form.email"/>

                <InputField type="text" name="password" label="Password" placeHolder="Enter your password" value="y" v-model="form.password"/>

                <div class="btn-wrapper">
                    <Btn class="btn" @click="submit()" :loading="loading">Login</Btn>
                </div>

                <div class="text-center">
                    <p>Don't have an account?
                        <Link href="/register" class="text-blue-500 hover:underline">Register</Link>
                    </p>


                </div>
            </div>
        </div>
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

}
</style>