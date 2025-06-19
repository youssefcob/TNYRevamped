<script setup lang="ts">
import NavBar from '../NavBar/NavBar.vue';
import Footer from '../Footer/Foot.vue';


</script>

<template>
        <NavBar />
        <main class="main-body">
            <slot></slot>
        </main>
        <Footer />

</template>

<style scoped lang="scss">
.main-body {
    padding-top:9vh;
    // padding-bottom:2vh;
}
</style>