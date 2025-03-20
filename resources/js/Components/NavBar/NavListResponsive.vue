<script setup lang="ts">
import { isVNode, onMounted, onUnmounted, Ref, ref } from 'vue';
import Hamburger from './Hamburger.vue';

import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (link: string) => {
    return route.hash === link;
};

const isOpen = ref(false);

const hamburger:Ref<InstanceType<typeof Hamburger>|null> = ref(null);

    const handleClickOutside = (event: MouseEvent) => {
  if (hamburger.value && !hamburger.value.$el.contains(event.target as Node)) {
    hamburger.value.closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});


</script>

<template>
    <div class="container">
        <div class="hamburger">
            <Hamburger @update="isOpen = $event" ref="hamburger"/>
        </div>

        <div id="responsiveMenu" class="menu" :class="{ active: isOpen }">

            <ul role="menubar">
                <li role="menuitem" :class="{ active: isActive('#home') }">
                    <router-link to="/#home">Home</router-link>
                </li>
                <li role="menuitem" :class="{ active: isActive('#about') }">
                    <router-link to="/#about">About us</router-link>
                </li>
                <li role="menuitem" :class="{ active: isActive('#services') }">
                    <router-link to="/#services">Services</router-link>
                </li>
                <li role="menuitem" :class="{ active: isActive('#employers') }">
                    <router-link to="/#employers">Employers</router-link>
                </li>
                <li role="menuitem" :class="{ active: isActive('#jobs') }">
                    <router-link to="/#jobs">Job Seekers</router-link>
                </li>
                <li role="menuitem" :class="{ active: isActive('#news') }">
                    <router-link to="/#news">News</router-link>
                </li>
                <li role="menuitem" :class="{ active: isActive('#contact') }">
                    <router-link to="/#contact">Contact Us</router-link>
                </li>
            </ul>

        </div>
    </div>
</template>


<style scoped lang="scss">
.container {
    position: relative;
    // background-color: white;
}

.hamburger {
    z-index: 1;
}

.menu {
    display: flex;
    // align-items: center;
    justify-content: center;
    padding: 2rem 6rem;
    transform-origin: top right;
    transition: all 0.5s ease-in-out;
    transform: scale(0,0);
    opacity: 0;
    background-color: white;
    pointer-events: none;
    overflow: hidden;
    right: 0;
    position: absolute;
    gap: 1rem;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 12rem;


        li {

            a {
                text-decoration: none;
                color: black;
                font-size: 1.2rem;
                position: relative;
                font-weight: $medium;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: -3px;
                    // margin-top:5px;
                    display: block;
                    width: 0;
                    height: 2px;
                    // background-color: $primary;
                    transition: width 0.3s;
                }

                &:hover::after {
                    width: 100%;
                }
            }

            &.active{
                a{
                    color:$blue;
                }
            }
        }

    }

    &.active {
        transition: all 0.5s ease-in-out;

        transform: scale(1,1);
        opacity: 1;
        pointer-events: all;
    }

    @include media-max(phone) {
        // padding-left:10rem;
        // padding-top:6rem;
        // right:-3rem;
        // width:110vw;
        // height:100vh;
    }
}
</style>