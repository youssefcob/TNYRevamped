<script setup lang="ts">

import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (link: string) => {
    return route.hash === link;
};

</script>

<template>
    <ul role="menubar">
        <li role="menuitem" :class="{ active: isActive('#home') }">
            <router-link to="#home">Home</router-link>
        </li>
        <li role="menuitem" :class="{ active: isActive('#about') }">
            <router-link to="#about">About us</router-link>
        </li>
        <li role="menuitem" :class="{ active: isActive('#services') }">
            <router-link to="#services">Services</router-link>
        </li>
        <li role="menuitem" :class="{ active: isActive('#employers') }">
            <router-link to="#employers">Employers</router-link>
        </li>
        <li role="menuitem" :class="{ active: isActive('#jobs') }">
            <router-link to="#jobs">Job Seekers</router-link>
        </li>
        <li role="menuitem" :class="{ active: isActive('#news') }">
            <router-link to="#news">News</router-link>
        </li>
        <li role="menuitem" :class="{ active: isActive('#contact') }">
            <router-link to="#contact">Contact Us</router-link>
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