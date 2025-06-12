<script setup lang="ts">
import NavBar from '@/Components/NavBar/NavBar.vue';
import Footer from '@/Components/Footer/Foot.vue';


</script>

<template>
    <NavBar />
    <main>
        <slot></slot>
    </main>
    <Footer />


</template>