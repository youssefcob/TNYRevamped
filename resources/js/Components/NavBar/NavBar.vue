<script setup lang="ts">
import NavList from './NavList.vue';
import NavListResponsive from './NavListResponsive.vue';

</script>

<template>
    <nav>
        <img src="@/Svg/logo.svg" alt="">
        <div class="navlist-desktop">
            <NavList />
        </div>
        <div class="btn">Apply Now</div>

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
        width: clamp(100px, 12vw, 300px);
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