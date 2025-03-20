<script setup lang="ts">
import ApplicationForm from '@/Components/Applications/ApplicationForm.vue';

</script>

<template>
    <div class="container">
        <div class="form">
            <ApplicationForm />
        </div>
        <div class="img" :style="`background-image:url(/images/applications.png)`"></div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    @include pagePadding();
    padding-top: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:2rem;
    @include media-max(tablet) {
        grid-template-columns: 1fr;
    }

    .form {
        border: 1px solid $navy;
        border-radius: $border-radius;
        padding: 2rem;
    }

    .img {
        background-size: cover;
        background-position: center;
        border-radius: $border-radius;
        

    }
}
</style>