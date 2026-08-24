<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { provide } from 'vue';
import { usePage } from '@inertiajs/vue3';
import NavBarV2 from './NavBarV2.vue';
import FooterV2 from './FooterV2.vue';
import AdminEditToggle from '@/Components/Admin/AdminEditToggle.vue';
import StyleToolbarHost from '@/Components/Admin/StyleToolbarHost.vue';

// NavBarV2/FooterV2 are direct (non-slot) children here, so they need this
// component itself to provide pageContent — a page's own provide() only
// reaches its slotted section components, not these.
provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <div class="layout-v2">
    <NavBarV2 />
    <main class="layout-v2__body">
      <slot />
    </main>
    <FooterV2 />
    <AdminEditToggle />
    <StyleToolbarHost />
  </div>
</template>

<style scoped lang="scss">
.layout-v2 {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // width:100vw;
  overflow-x: hidden;

  &__body {
    flex: 1;
  }
}
</style>
