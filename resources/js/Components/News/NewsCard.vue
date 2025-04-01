<script setup lang="ts">
import { News } from '@/interface/Types';

const props = defineProps({
    news: {
        type: Object as () => News
    }
});

</script>

<template>
    <div class="card" :style="`background-image:url(${news?.image})`">
        <h2>{{ news?.title }}</h2>
    </div>
</template>

<style scoped lang="scss">
.card {
    // width:40vw;
    height: 40vh;
    background-size: cover;
    background-position: center;
    border-radius: $border-radius;
    padding: 2rem;
    display: flex;
    justify-content: center;

    h2 {
        @extend h1;
        color: $white;

    }
}
</style>