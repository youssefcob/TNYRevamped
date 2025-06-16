<script setup lang="ts">

const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    token: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <p>Employers Home</p>
    {{ user }}
    {{ token }}
</template>
