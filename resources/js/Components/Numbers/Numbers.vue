<script setup lang="ts">
import {  ref } from 'vue';


const numbers = ref([
    {
        title: 'Candidates',
        number: 56974,
        img: "images/numbers/candidates.png"
    },

    {
        title: 'Candidates',
        number: 56974,
        img: "images/numbers/candidates.png"
    },
    {
        title: 'Candidates',
        number: 56974,
        img: "images/numbers/candidates.png"
    },
    {
        title: 'Candidates',
        number: 56974,
        img: "images/numbers/candidates.png"
    }
])

</script>

<template>
    <div class="container">
        <h2>Rapidly provision one to thousands of droplets in seconds</h2>
        <div class="numbers-wrapper">
            <div class="number" v-for="number in numbers">
                <div class="img-wrapper">
                    <img :src="number.img" />

                </div>
                <span class="title">{{ number.title }}</span>
                <span class="nmbr">{{ number.number }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    background-color: $light-blue;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    h2{
        color:$navy;
        text-align: center;
    }

    .numbers-wrapper {
        display: grid;
        gap: 5rem;


        @include media-min(phone) {
            grid-template-columns: repeat(1, 1fr);

        }


        @include media-min(500) {
            grid-template-columns: repeat(2, 1fr);

        }

        @include media-min(desktop) {
            grid-template-columns: repeat(4, 1fr);

        }

        .number {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            .img-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 100vh;
                background-color: $off-white;
                padding: 2rem;
                width: 10rem;
                height: 10rem;

                img {
                    width: 100%;
                    height: 100%;
                }


            }

            .title {
                @extend h3;
                
            }

            .nmbr {
                @extend h2;
                color: $navy;
            }
        }



    }
}
</style>