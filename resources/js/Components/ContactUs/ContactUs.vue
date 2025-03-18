<script setup lang="ts">
import InputField from '@/SharedComponents/InputField.vue';
import ContactForm from './ContactForm.vue';
import ContactInfo from './ContactInfo.vue';

</script>

<template>
    <div class="container">
        <!-- <div class="box"></div>
        <div class="box"></div> -->
        <div class="box form">
            <h1 class="title">Get in touch with us</h1>
            <ContactForm />
        </div>
        <div class="box">
            <h1 class="title">Contact info</h1>
            <ContactInfo/>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    @include pagePadding();
    background-color: $undefined-grey;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    @include media-max(tablet) {
        grid-template-columns: 1fr;
    }

    .box {
        height: 100%;
        background-color: $light-grey;
        border-radius: $border-radius;
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;

        @include media-min(desktop) {
            padding: 2rem 4rem;

        }

        .title {
            text-align: center;
            color: $navy;
            margin-bottom: 2rem;
        }

        &.form {

            gap: 1.5rem;
        }


    }
}
</style>