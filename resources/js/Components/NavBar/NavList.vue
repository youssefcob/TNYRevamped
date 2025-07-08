<script setup lang="ts">

import Hroute from '@/SharedComponents/hroute.vue';
import { Link } from '@inertiajs/vue3';
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (link: string) => {
    return false;
    return window.location.hash === link || window.location.pathname === link;

};

</script>

<template>
    <ul role="menubar">
        <li role="menuitem" :class="{ active: isActive('#home') }">
            <Hroute on="/" to="#home" :active="isActive('#home')">Home</Hroute>
        </li>
        <li role="menuitem" :active="isActive('#about')">
            <Hroute on="/" to="#about" :active="isActive('#about')">About us</Hroute>

        </li>
        <li role="menuitem" :class="{ active: isActive('/services') }">
            <Link href="/services">Services</Link>
        </li>
        <!-- <li role="menuitem" :class="{ active: isActive('/employers') }">
            <Link href="/employers">Employers</Link>
        </li> -->
        <li role="menuitem" :active="isActive('#jobs')">
            <Hroute on="/" to="#jobs" :active="isActive('#jobs')">Job Seekers</Hroute>
        </li>
        <li role="menuitem" :active="isActive('#news')">
            <Hroute on="/" to="#news" :active="isActive('#news')">News</Hroute>
        </li>
        <li role="menuitem" :active="isActive('#contact')">
            <Hroute on="/" to="#contact" :active="isActive('#contact')">Contact Us</Hroute>
        </li>
    </ul>
</template>



<style scoped lang="scss">
ul {
    display: flex;
    gap: 1rem;
    list-style: none;

    li {
        a {
            text-decoration: none;
            color: black;
            font-size: 1rem;
            position: relative;
            font-weight: $medium;

            &::after {
                content: '';
                position: absolute;
                bottom: -3px;
                // margin-top:5px;
                display: block;
                width: 0%;
                height: 2px;
                background: $blue;
                transition: width .3s;
                // @include blue;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }


        }

        &.active {
            a {
                color: $blue;

                &::after {
                    width: 100%;
                }
            }
        }
    }
}
</style>