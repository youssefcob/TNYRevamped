<script setup lang="ts">
import NavBar from '../NavBar/NavBar.vue';
import Footer from '../Footer/Foot.vue';


</script>

<template>
    <NavBar />
    <main>
        <slot></slot>
    </main>
    <Footer />


</template>