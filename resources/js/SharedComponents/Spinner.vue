<script setup lang="ts">

const props = defineProps({
    balls:{
        type: Number,
        default: 4
    }
});
</script>

<template>
    <div class="spinner">

        <div v-for="ball in balls" class="spinner__circle"></div>

    </div>
</template>

<style scoped lang="scss">
$spinner-delay: 0.2s;

.spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 0.3rem;

    position: relative;

    .spinner__circle {
        width: 0.7rem;
        height: 0.7rem;
        background-color: $grey;
        border-radius: 50%;
        animation: spinner 1.8s infinite;
        // position: absolute;


        @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
                animation-delay: calc(#{$spinner-delay} * #{$i - 1});
            }
        }

    }

}





@keyframes spinner {

    0% {
        transform: translate(0, 0.3rem) scale(0.8);
        // opacity:0.3;

    }

    20%{
        opacity:1;

    }
    50% {
        transform: translate(0, -0.3rem) scale(1.2);
        opacity:0.3;


    }
    80%{
        opacity:1;
    }



    100% {
        transform: translate(0, 0.3rem) scale(0.8);
        // opacity:0.3;


    }


}
</style>