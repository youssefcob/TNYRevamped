<script setup lang="ts">
const props = defineProps(
    {
        animationDuration: {
            type: Number,
            default: 10,
        },
    }
);
</script>


<template>
    <div class="infinite-carousel">
        <div class="carousel-inner" :style="{animationDuration: `${props.animationDuration}s`}">
            <slot></slot>
            <slot></slot>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.infinite-carousel {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;

    .carousel-inner {
        display: flex;
        flex-wrap: nowrap;
        animation: move 10s linear infinite;

       

        @keyframes move {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(calc(-50%));
            }
        }
    }
}
</style>