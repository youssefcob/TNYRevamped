<script setup lang="ts">
import NavBar from '../NavBar/NavBar.vue';
import Footer from '../Footer/Foot.vue';

import { usePage } from '@inertiajs/vue3'
import { onMounted, ref } from 'vue';
import { snack } from '@/mixins/toast';
import user, { Token } from '@/mixins/user';
import { User } from '@/interface/Types';

const page = usePage();

const navbar = ref<InstanceType<typeof NavBar> | null>(null);

onMounted(() => {
    type FlashType = {
        snack?: { type: string, message: string } | null
        [key: string]: any
    };
    const flash = page.props.flash as FlashType;
    const flashSnack = flash?.snack as { type: string, message: string } | null;
    if (flashSnack) {
        if (flashSnack.type === 'success') {
            snack.success(flashSnack.message);
        } else if (flashSnack.type === 'error') {
            snack.error(flashSnack.message);
        }
    }

    if (page.props.user) {
        user.set(page.props.user as User);
        
        if (navbar.value) {
            navbar.value.userData = user.get();
        }

    }
    if (page.props.token) {
        user.setToken(page.props.token as Token);

    }
});


</script>

<template>
    <NavBar ref="navbar"/>
    <main class="main-body">
        <slot></slot>
    </main>
    <Footer />

</template>

<style scoped lang="scss">
.main-body {
    padding-top: 9vh;
    // padding-bottom:2vh;
}
</style>