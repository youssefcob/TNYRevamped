<script setup lang="ts">

import { jobState } from '@/state/state';
import JobCard from './JobCard.vue';
import Carousel from '@/SharedComponents/Carousel.vue';
import { onMounted, onUnmounted, Ref, ref } from 'vue';

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

const carousel: Ref<InstanceType<typeof Carousel> | null> = ref(null)

const scroll = (direction: number) => {
    if (carousel.value) {
        carousel.value.scroll(direction)
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
    <div class="container">
        <h2 class="title">Job Seekers</h2>
        <br>
        <h2 class="subtitle">TNY Staffing Corporation  ... Navigating Careers, Fulfilling Dreams</h2>
        <br>
        <br>

        <p>At TNY Staffing Corporation , we prioritize your success. Access tailored opportunities and expert matching with
            top employers. Benefit from personalized support and prepare to excel in your physical therapy career
            journey. Partner with us for confidence in unlocking growth opportunities.</p>
        <br>
        <br>
        <span>From Job Seeker to Job Success: Let's Make It Happen!</span>
        <br>
        <br>
        <h2 class="subtitle blue">The Available Positions</h2>
        <br>
        <br>

        <div class="employers-container">
            <Carousel ref="carousel" snap :numberOfItems="numberOfCarouselItems">
                <JobCard class="jobCard" v-for="job in jobState" :job="job" />
            </Carousel>
        </div>

        <div class="scroll-btns">
            <div class="left" @click="scroll(-1)">
                <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5001 35.34C16.1201 35.34 15.7401 35.2 15.4401 34.9L2.40006 21.86C0.280059 19.74 0.280059 16.26 2.40006 14.14L15.4401 1.10004C16.0201 0.520039 16.9801 0.520039 17.5601 1.10004C18.1401 1.68004 18.1401 2.64004 17.5601 3.22004L4.52006 16.26C3.56006 17.22 3.56006 18.78 4.52006 19.74L17.5601 32.78C18.1401 33.36 18.1401 34.32 17.5601 34.9C17.2601 35.18 16.8801 35.34 16.5001 35.34Z"
                        fill="#969696" />
                </svg>
            </div>
            <div class="right" @click="scroll(1)">
                <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5001 35.34C16.1201 35.34 15.7401 35.2 15.4401 34.9L2.40006 21.86C0.280059 19.74 0.280059 16.26 2.40006 14.14L15.4401 1.10004C16.0201 0.520039 16.9801 0.520039 17.5601 1.10004C18.1401 1.68004 18.1401 2.64004 17.5601 3.22004L4.52006 16.26C3.56006 17.22 3.56006 18.78 4.52006 19.74L17.5601 32.78C18.1401 33.36 18.1401 34.32 17.5601 34.9C17.2601 35.18 16.8801 35.34 16.5001 35.34Z"
                        fill="#969696" />
                </svg>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">
.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;
    // width: 100vw;
    background-color: $light-grey;

 

    .title,
    .subtitle {
        align-self: center;
    }

    .subtitle.blue {
        color: $blue;
        align-self: center;
    }

    .scroll-btns {
        display: flex;
        justify-content: space-between;
        // align-items: center;
        margin-top:1rem;
        padding:0 15vw;
        .right{
            transform:rotate(180deg);
        }
        >div{
            cursor: pointer;
            &:hover>svg>path{
                fill: $black;
            }
        }
    }



}
</style>