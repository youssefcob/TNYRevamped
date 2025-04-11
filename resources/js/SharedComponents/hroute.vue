<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const location = window.location.pathname;

const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    on: {
        type: String,
    },
    active: {
        type: Boolean,
        default: false,
    },
});

// Parse the path and hash
const [path, hash] = props.to.split('#');
const targetPath = `/${path}`;
const href = computed(() => `/${props.to}`);

// Check if we're on the same page
const isSamePage = computed(() => targetPath === location);

// Function to scroll to hash
const scrollToHash = (hashValue:any) => {
    
  if (hashValue) {
    setTimeout(() => {
      const element = document.getElementById(hashValue);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
//   window.history.pushState(null, '', `${location}#${hash}`);

};

// For navigating to different pages
const handleFinish = () => {
//   if (hash) {
//     scrollToHash(hash);
//   }
};

// Handle click for same-page navigation
const handleClick = (e:any) => {
  if (isSamePage.value && hash) {
    // Prevent default behavior and Inertia navigation
    e.preventDefault();
    
    // Scroll to the element
    scrollToHash(hash);
    
    // Update URL without page reload
    // window.history.pushState(null, '', `${location}#${hash}`);
    
    return false; // Stop propagation
  }
};
</script>

<template>
    <!-- Use a regular anchor for same-page navigation -->
    <a v-if="isSamePage && hash" 
       :href="`#${hash}`"
       @click.prevent="scrollToHash(hash)"
       :class="{ active: active }">
        <slot></slot>
    </a>
    
    <!-- Use Inertia Link for different-page navigation -->
    <Link v-else 
          :href="href" 
          :class="{ active: active }" 
          @finish="handleFinish">
        <slot></slot>
    </Link>
</template>

<style scoped lang="scss">
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
        display: block;
        width: 0%;
        height: 2px;
        background: $blue;
        transition: width .3s;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }

    &.active {
        color: $blue;

        &::after {
            width: 100%;
        }
    }
}
</style>