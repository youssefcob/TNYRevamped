<script setup lang="ts">
import FileInputField from './FileInputField.vue';

const resume = new FormData();
</script>

<template>
    <div class="container">
        <!-- <FileInputField label="Resume" accept=".pdf,.doc,.docx" placeHolder="Upload your resume"
            @input="assignResume($event)" /> -->
    </div>
</template>
<style lang="scss" scoped>
.container {
    background-color: $white;
    padding: 1rem;
    border-radius: 1rem;
}
</style>