<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import NavList from './NavList.vue';
import NavListResponsive from './NavListResponsive.vue';
import user from '@/mixins/user';
import ProfileDropDown from './ProfileDropDown.vue';
import { ref } from 'vue';

const userIsLoggedIn = ref(user.loggedIn());
const userData = ref(user.get());
</script>

<template>
    <nav>
        <Link href="/#home"><img src="@/Svg/logo.svg" alt=""></Link>
        <div class="navlist-desktop">
            <NavList />
        </div>

        <div class="nav-btns">
            <div v-if="!userIsLoggedIn" class="auth-btns-wrapper">
                <Link href="/login" class="btn">Login</Link>
                <Link href="/register" class="btn">Sign up</Link>
            </div>
            <div v-if="userIsLoggedIn && userData && userData.user_type == 'job_seeker'" class="auth-btns-wrapper">
                <Link href="/apply" class="btn">Apply Now</Link>
            </div>
            <div class="navlist-mobile">
                <NavListResponsive :userIsLoggedIn="userIsLoggedIn" :userData="userData" />
            </div>
            <div v-if="userIsLoggedIn && userData" class="profile"><ProfileDropDown/></div>
            
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

    .nav-btns {
        display: flex;
        gap: 1rem;

        .auth-btns-wrapper {
            display: flex;
            gap: 1rem;


        }

        .profile {
            // background-color: red;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }


    @include media-max(desktop) {

        .navlist-desktop,
        .nav-btns .auth-btns-wrapper {
            display: none;
        }

        .navlist-mobile {
            display: block;
        }
    }

}
</style>