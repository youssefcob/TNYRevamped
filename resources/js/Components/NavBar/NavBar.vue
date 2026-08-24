<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import NavList from './NavList.vue';
import NavListResponsive from './NavListResponsive.vue';
import user from '@/mixins/user';
import ProfileDropDown from './ProfileDropDown.vue';
import EditableImage from '@/Components/Admin/EditableImage.vue';
import { computed,ref } from 'vue';
import logoUrl from '@/Svg/logo.svg';


// const userIsLoggedIn = ref(user.loggedIn());
// const userData = ref(user.get());

const userIsLoggedIn = computed(() => {
    // Check if user data exists either in page props or localStorage
    return !!(page.props.user || user.get());
});

// function updateUserState() {
//     userIsLoggedIn = user.loggedIn();
// }

const page = usePage();

// Make userData reactive
const userData = computed(() => {
    // First check page props (for SSR/initial load)
    if (page.props.user) {
        console.log('User data from page props:', page.props.user);
        return page.props.user; 

    }
    // Then check localStorage (for client-side navigation)
    return user.get();
});


defineExpose({
    userIsLoggedIn,
    userData
});

</script>

<template>
    <nav>
        <Link href="/#home">
            <EditableImage content-key="global.logo" page="global" :default-src="logoUrl" default-alt="TNY Staffing Corporation" />
        </Link>
        <div class="navlist-desktop">
            <NavList :userIsLoggedIn="userIsLoggedIn" :userData="userData"/>
        </div>

        <div class="nav-btns">
            <div v-if="!userIsLoggedIn" class="auth-btns-wrapper">
                <Link href="/login" class="btn secondary">Login</Link>
                <Link href="/register" class="btn">Sign up</Link>
            </div>
            <div v-if="userIsLoggedIn && userData" class="auth-btns-wrapper">
                <Link v-if="userData.user_type == 'job_seeker'" href="/vacancies" class="btn">Apply Now</Link>
                <Link v-if="userData.user_type == 'employer'" href="/post-vacancy" class="btn">Post a Job</Link>
                <Link v-if="userData.user_type == 'employer'" href="/talents" class="btn secondary">Find Talents</Link>

            </div>
            <div class="navlist-mobile">
                <NavListResponsive :userIsLoggedIn="userIsLoggedIn" :userData="userData" />
            </div>
            <div v-if="userIsLoggedIn && userData" class="profile">
                <ProfileDropDown :userData="userData"/>
            </div>

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