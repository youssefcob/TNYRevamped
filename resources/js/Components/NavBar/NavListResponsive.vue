<script setup lang="ts">
import { isVNode, onMounted, onUnmounted, Ref, ref } from 'vue';
import Hamburger from './Hamburger.vue';

import { useRoute } from 'vue-router';
import { Link } from '@inertiajs/vue3';
import Hroute from '@/SharedComponents/hroute.vue';

const route = useRoute();

const isActive = (link: string) => {
    return false;
    return route.hash === link;
};

const isOpen = ref(false);

const hamburger: Ref<InstanceType<typeof Hamburger> | null> = ref(null);

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
            <Hamburger @update="isOpen = $event" ref="hamburger" />
        </div>

        <div id="responsiveMenu" class="menu" :class="{ active: isOpen }">

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
                <li role="menuitem" :class="{ active: isActive('/employers') }">
                    <Link href="/employers">Employers</Link>
                </li>
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
    transform: scale(0, 0);
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

            &.active {
                a {
                    color: $blue;
                }
            }
        }

    }

    &.active {
        transition: all 0.5s ease-in-out;

        transform: scale(1, 1);
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