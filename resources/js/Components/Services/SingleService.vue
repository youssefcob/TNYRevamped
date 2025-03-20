<script setup lang="ts">
import { Service } from '@/interface/Types';


const props = defineProps({
    service: {
        type: Object as () => Service
    }
}
)

</script>

<template>
    <div class="service">
        <div class="img-wrapper">
            <img :src="service?.image" alt="Service Image" />

        </div>
        <div class="content">
            <h2>{{ service?.title }}</h2>
            <p>{{ service?.description }}</p>
            <button class="btn"><span class="btnFont">Request Service</span></button>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.service {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    // min-width: 100%;
    @include media-max(tablet) {
        flex-direction: column;
    }

    .img-wrapper {
        padding: 1.5rem;
        height: 8rem;
        width: 8rem;
        background-color: $service-blue;
        border-radius: 100vh;

        >img {
            height: 100%;
            // width: 100%;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.1);
        padding: 1rem 2rem;
        border-radius: 1rem;
        flex-grow: 1;

        >h2 {
            color: $blue;
            text-align: center;


        }

        >p {
            color: $grey;
            font-weight: $medium;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            @include media-max(tablet) {
                -webkit-line-clamp: 3;
            }

            @include media-max(phone) {
                -webkit-line-clamp: 4;
            }
        }

        >button {
            width: fit-content;
            margin-left: auto;
            margin-right: 1rem;
        }
    }
}
</style>