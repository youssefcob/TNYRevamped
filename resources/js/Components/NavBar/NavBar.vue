<script setup lang="ts">
import NavList from './NavList.vue';
import NavListResponsive from './NavListResponsive.vue';

</script>

<template>
    <nav>
        <router-link to="/#home"><img src="@/Svg/logo.svg" alt=""></router-link>
        <div class="navlist-desktop">
            <NavList />
        </div>
        <router-link to="/apply" class="btn">Apply Now</router-link>

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

    @include media-max(desktop) {
        .navlist-desktop,.btn {
            display:none;
        }
        .navlist-mobile {
            display:block;
        }
    }

}
</style>