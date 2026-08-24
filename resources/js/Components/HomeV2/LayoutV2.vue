<script setup lang="ts">
import NavBarV2 from './NavBarV2.vue';
import FooterV2 from './FooterV2.vue';
import AdminEditToggle from '@/Components/Admin/AdminEditToggle.vue';
</script>

<template>
  <div class="layout-v2">
    <NavBarV2 />
    <main class="layout-v2__body">
      <slot />
    </main>
    <FooterV2 />
    <AdminEditToggle />
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
