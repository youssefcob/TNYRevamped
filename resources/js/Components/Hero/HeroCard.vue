<script setup lang="ts">
import { Hero } from '@/interface/Types';


const props = defineProps({
    hero: {
        type: Object as () => Hero
    },
});

</script>
<template>
    <div class="hero-container" :style="{backgroundImage: `url(${hero?.image})`}">
        <h1 class="card-title">{{ hero?.title }}</h1>
        <div class="buttons-wrapper">
            <template v-for="button in hero?.buttons" :key="button.id">
                <router-link :to="button.link" :class="`btn ${button.color}` ">{{ button.text }}</router-link>
            </template>
        </div>

    </div>
</template>

<style scoped lang="scss">
.hero-container{
    // height:80vh;
    padding:10rem 1rem;
    padding-top:10rem;
    min-height:80vh;
    background-color: #007dfa;
    width:100%;
    background-position: center;
    background-size: cover;
    position: relative;
    display:flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    gap:3rem;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(220, 220, 220,0.5);
    }
    >*{
        z-index: 1;
    }
    .card-title{
        color:$navy;
        font-size: 4rem;
        text-align: center;
        @media screen and (min-width: 768px){
            margin-top:4rem;
            
        }
    }
    .buttons-wrapper{
        display:flex;
        gap: 5rem;
        margin-top: 1rem;
    }

    @include media-max(phone){
        .card-title{
            font-size: 2rem;
        }
        .buttons-wrapper{
        flex-direction: column;
        gap:1rem;
    }
    }
}
</style>