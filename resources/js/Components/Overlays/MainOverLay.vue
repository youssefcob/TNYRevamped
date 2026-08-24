<script setup lang="ts">
import NavBarV2 from '../HomeV2/NavBarV2.vue';
import Footer from '../Footer/Foot.vue';
import AdminEditToggle from '@/Components/Admin/AdminEditToggle.vue';

import { usePage } from '@inertiajs/vue3'
import { onMounted, provide } from 'vue';
import { snack } from '@/mixins/toast';
import user, { Token } from '@/mixins/user';
import { User } from '@/interface/Types';

const page = usePage();

// NavBarV2/Footer are direct (non-slot) children here, so they need this
// component itself to provide pageContent — a page's own provide() only
// reaches its slotted section components, not these.
provide('pageContent', (page.props.pageContent as Record<string, string | null>) ?? {});

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
    }
    if (page.props.token) {
        user.setToken(page.props.token as Token);
    }
});
</script>

<template>
    <NavBarV2 />
    <main class="main-body">
        <slot></slot>
    </main>
    <Footer />
    <AdminEditToggle />

</template>

<style scoped lang="scss">
.main-body {
    padding-top: 9vh;
    // padding-bottom:2vh;
}
</style>