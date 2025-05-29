<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import InputField from '@/SharedComponents/InputField.vue';
import { Link } from '@inertiajs/vue3';



</script>

<template>
    <MainOverLay>
        <div class="container">
            <div class="login-wrapper">

                <h2 class="title">Login</h2>



                <InputField type="text" name="email" label="Email" placeHolder="Enter your email" />

                <InputField type="text" name="password" label="Password" placeHolder="Enter your password" />

                <div class="btn-wrapper">
                    <Btn class="btn">Login</Btn>
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
        // align-items: center;

        .title {
            align-self: center;
        }

        .btn-wrapper {
            margin-top: 2rem;
            width: 40%;
            align-self: center;
        }
    }

}
</style>