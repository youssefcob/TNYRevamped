<script setup lang="ts">

import Carousel from '@/SharedComponents/Carousel.vue';
import { newsState } from '@/state/state';
import { onMounted, onUnmounted, ref } from 'vue';
import NewsCard from './NewsCard.vue';


const numberOfCarouselItems = ref(1);
const updateCarouselItems = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches

    if (isMobile) {
        numberOfCarouselItems.value = 1
    } else if (isDesktop) {
        numberOfCarouselItems.value = 2
    } else {
        numberOfCarouselItems.value = 2
    }
}


onMounted(() => {
    updateCarouselItems()
    window.addEventListener('resize', updateCarouselItems)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateCarouselItems)
})


</script>

<template>

    <div class="carousel-container">
        <Carousel ref="carousel" snap :numberOfItems="numberOfCarouselItems">
            <NewsCard v-for="news in newsState" :key="news.id" :news="news" />
        </Carousel>
    </div>


</template>