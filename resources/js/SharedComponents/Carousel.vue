<script setup lang="ts">

import { ref, onMounted, type Ref, nextTick, watch } from 'vue';

const wheel: Ref<HTMLElement | null> = ref(null);

let currentIndex = ref(0);
let carouselItemsNo = ref(0);


const props = defineProps({
    NoIndicator: Boolean,
    NoButtons: Boolean,
    behavior: String,
    numberOfItems: {
        type: Number,
        default: 1
    },
    snap: Boolean,
});



const updateCurrentIndexBasedOnScroll = () => {
    if (!wheel.value) return;
    const el = wheel.value;
    const totalScroll = el.scrollWidth - el.clientWidth;
    const currentScroll = el.scrollLeft;
    // Update currentIndex based on the scroll position
    // For simplicity, dividing the scrollable area into equal parts based on the number of services
    const parts = carouselItemsNo.value;
    if (!parts) return;
    const scrollPerPart = totalScroll / parts;
    currentIndex.value = Math.min(parts - 1, Math.floor(currentScroll / scrollPerPart));

    //   console.log(currentIndex.value);
};

const scroll = (direction: number) => {
    if (wheel.value) {
        const el = wheel.value as HTMLElement;
        if (el) {
            // console.log(el.scrollLeft, el.clientWidth, el.scrollWidth)
            const width = el.clientWidth;

            const threshold = 100;
            const isNearEnd = el.scrollLeft + threshold >= el.scrollWidth - el.clientWidth;

            if (direction === 1 && (isNearEnd || el.scrollLeft + el.clientWidth >= el.scrollWidth)) {
                currentIndex.value = 0;
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                if (direction === -1 && currentIndex.value === 0) {
                    currentIndex.value = 0;
                } else if (direction === 1 && carouselItemsNo.value && currentIndex.value === carouselItemsNo.value - 1) {
                    currentIndex.value = 0;
                } else {
                    currentIndex.value += direction;
                }
                el.scrollTo({
                    left: el.scrollLeft + ((width * direction) - width / 4),
                    behavior: 'smooth'
                });

            }
        }
    }
};

defineExpose({
    scroll,
})

watch(() => props.numberOfItems, () => {
        defineStyle();
});

const defineStyle = () => {
    const carouselItems = wheel.value;
        if (carouselItems) {
            const children = Array.from(carouselItems.children);
            
            const percentage = props.numberOfItems === 1 
                ? 100 
                : 100 / props.numberOfItems;
            const margin = props.numberOfItems === 1 ? 0 : 1;

            children.forEach((el) => {
                const htmlEl = el as HTMLElement;
                htmlEl.style.scrollSnapAlign = props.snap ? 'start' : 'none';
                htmlEl.style.flex = `0 0 calc(${percentage}% - ${margin}rem)`;
            });
        }
}

onMounted(() => {
    if (wheel.value) {
        wheel.value.addEventListener('scroll', updateCurrentIndexBasedOnScroll);
    }
    carouselItemsNo.value = wheel.value?.childElementCount || 0;
    nextTick(() => {
        defineStyle();
    });
});
</script>

<template>
    <div class="carousel-wrapper">
        <div class="carousel">
            <div class="carousel-items" ref="wheel">
                <slot></slot>
            </div>
        </div>
        <div class="indicator-container" v-if="!NoIndicator">
            <div class="indicator" v-for="i in carouselItemsNo" :key="i" :class="{ active: i - 1 === currentIndex }">
            </div>

        </div>
    </div>
</template>




<style scoped lang="scss">
.carousel-wrapper {
    display: flex;
    flex-direction: column;

    .indicator-container {
        align-self: center;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1rem;

        .indicator {
            width: 0.5rem;
            height: 0.5rem;
            margin-top: 0.5rem;
            border-radius: 50%;
            background-color: $darkgrey;
            transition: background-color 0.3s ease-in-out;

            &.active {
                background-color: $blue;
            }
        }
    }

    >.carousel {
        height: 100%;
        display: flex;
        justify-content: space-between;


        >.carousel-items {
            width: fit-content;
            width: 100%;
            display: flex;
            scroll-snap-type: x mandatory;
            overflow-x: auto;
            justify-content: flex-start;

            @include scrollBar;

            gap: 1rem;

            &::-webkit-scrollbar {
                @media screen and (min-width: 800px) {
                    display: none;
                }
            }

            // >* {
            // scroll-snap-align: start;

            //     $percentage: calc(100% / 4);
            //     $margin: calc(1rem / 1);

            //     $percentage: 100%;
            //     $margin: 0rem;

            //     flex: 0 0 calc($percentage - $margin);


            // }

        }


    }
}
</style>