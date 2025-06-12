<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import NavList from '@/Components/NavBar/NavList.vue';
import NavListResponsive from '@/Components/NavBar/NavListResponsive.vue';



</script>

<template>
    <nav>
        <Link href="/#home"><img src="@/Svg/logo.svg" alt=""></Link>
        <div class="navlist-desktop">
            <NavList />
        </div>
        <!-- <Link href="/apply" class="btn">Apply Now</Link> -->
<!-- 
        <div class="auth-btns-wrapper">
            <Link href="/login" class="btn">Login</Link>
            <Link href="/register" class="btn">Sign up</Link>
        </div> -->

        JobSeeker lol
        <div class="navlist-mobile">
            <NavListResponsive />
        </div>

    </nav>
</template>

<style scoped lang="scss">
nav {
    width: 100%;
    // gap:3rem;
    position: fixed;
    background-color: white;
    border-bottom: 2px solid $blue;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;

    .navlist-mobile {
        display: none;
    }

    img {
        width: clamp(100px, 7vw, 300px);
    }

    .auth-btns-wrapper{
        display:flex;
        gap:1rem;
    }
    @include media-max(desktop) {

        .navlist-desktop,
        .auth-btns-wrapper {
            display: none;
        }

        .navlist-mobile {
            display: block;
        }
    }

}
</style>