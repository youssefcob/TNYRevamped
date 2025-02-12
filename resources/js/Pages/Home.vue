<template>
    <div>
        <Navbar/>
        <h1>Welcome to Laravel 11 with Inertia.js and Vue.js</h1>

        <Link href="/about" method="get">Click here to go to the about page</Link>

    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import Navbar from '@/Components/NavBar/Navbar.vue';


</script>