<template>
    <div>
        <h1>Welcome to Laravel 11 with Inertia.js and Vue.js</h1>

        {{message}}
        <Link href="/about" method="get">Click here to go to the about page</Link>

    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    message: {
        type: String
    },
});


</script>