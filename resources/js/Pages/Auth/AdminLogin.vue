<script setup lang="ts">
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
    <div class="admin-login">
        <form method="POST" action="/admin/login" class="admin-login__card" @submit.prevent="submit">
            <input type="hidden" name="_token" :value="csrfToken">

            <a href="/" class="admin-login__logo">
                <img src="/images/tnylogo.png" alt="TNY Staffing Corporation" />
            </a>

            <h1 class="admin-login__title">Admin Login</h1>
            <p class="admin-login__subtitle">Sign in to manage the TNY Staffing site.</p>

            <div class="admin-login__fields">
                <InputField type="text" name="email" label="Email" placeHolder="Enter your email"
                    v-model="form.email" />

                <InputField type="password" name="password" label="Password" placeHolder="Enter your password"
                    v-model="form.password" />
            </div>

            <button type="submit" class="admin-login__submit" :disabled="loading">
                {{ loading ? 'Signing in…' : 'Sign In' }}
            </button>
        </form>

        <a href="/" class="admin-login__back">&larr; Back to site</a>
    </div>
</template>

<style scoped lang="scss">
.admin-login {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem 1.25rem;
    background: linear-gradient(-51.8deg,
        rgb(214, 185, 140) 0.24%,
        rgba(0, 33, 71, 0.9) 61%,
        rgb(0, 33, 71) 99.76%);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('https://res.cloudinary.com/dzilc11zf/image/upload/v1783517430/pattern_TNY_leyhl2.webp');
        background-size: cover;
        opacity: 0.5;
        pointer-events: none;
    }

    &__card {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 24rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.375rem;
        background: $color-white;
        border-radius: 1.25rem;
        padding: 2.5rem 2rem;
        box-shadow: 0 20px 45px rgba(0, 33, 71, 0.35);
    }

    &__logo {
        margin-bottom: 1rem;

        img {
            height: 2.75rem;
            width: auto;
        }
    }

    &__title {
        font-family: $font-heading;
        font-weight: 700;
        font-size: 1.5rem;
        color: $color-navy;
        margin: 0;
    }

    &__subtitle {
        font-family: $font-body;
        font-size: 0.9rem;
        color: $text-body;
        margin: 0 0 1.5rem;
        text-align: center;
    }

    &__fields {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    &__submit {
        width: 100%;
        margin-top: 1.75rem;
        height: 3rem;
        border-radius: 80px;
        border: none;
        background: $color-orange;
        color: $color-navy;
        font-family: $font-heading;
        font-size: $btn-size;
        font-weight: $btn-weight;
        cursor: pointer;
        transition: background 0.25s;

        &:hover:not(:disabled) {
            background: darken(#FF9B37, 8%);
        }

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }

    &__back {
        position: relative;
        z-index: 1;
        font-family: $font-body;
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;

        &:hover {
            color: $color-white;
            text-decoration: underline;
        }
    }
}
</style>
