<script setup lang="ts">
import NavList from './NavList.vue';

</script>

<template>
    <nav>
        <img src="@/Svg/logo.svg" alt="">
        <NavList/>
    </nav>
</template>

<style scoped lang="scss">
nav{
    width:100%;
    gap:3rem;
    display:flex;
    align-items: center;
    padding:1rem 2rem;
    img{
        width:clamp(100px, 12vw, 300px);
    }

}
</style>