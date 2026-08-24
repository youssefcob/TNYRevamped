<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { snack } from '@/mixins/toast';
import InputField from '@/SharedComponents/InputField.vue';
import { router } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';


const loading = ref(false);
const csrfToken = ref<null | string | undefined>('');

const props = defineProps({
    errors: {
        type: Object
    },
})


const form = {
    email: '',
    password: ''
}

onMounted(() => {
    csrfToken.value = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
});



function submit() {

    router.post('/admin/login', form, {
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
}


</script>

<template>
    <MainOverLay>
        <form method="POST" action="/admin/login" class="container" @submit.prevent="submit">
            <input type="hidden" name="_token" :value="csrfToken">
            <div class="box-wrapper-border">
                <h2 class="title">Admin Login</h2>

                <InputField type="text" name="email" label="Email" placeHolder="Enter your email"
                    v-model="form.email" />

                <InputField type="password" name="password" label="Password" placeHolder="Enter your password"
                    v-model="form.password" />

                <div class="btn-wrapper">
                    <button type="submit" class="btn" :disabled="loading">
                        {{ loading ? 'Loading...' : 'Login' }}
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
        .title {
            align-self: center;
        }
    }
}
</style>
