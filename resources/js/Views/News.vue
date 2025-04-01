<script setup lang="ts">
import { News } from '@/interface/Types';
import { newsState } from '@/state/state';
import { onMounted, ref, Ref } from 'vue';

const props = defineProps({
    id: String,
});

let news: Ref<News | undefined> = ref(undefined);

onMounted(() => {
    if (!props.id) return;
    const newsId = parseInt(props.id);
    if (newsId) {
        const foundNews = newsState.value.find((item) => item.id === newsId);
        if (foundNews) {
            news.value = foundNews;
        }
    }
});
</script>

<template>
    <div class="container">
        <h1 class="title">{{ news?.title }}</h1>
        <br>
        <div class="image" :style="`background-image:url(${news?.image})`"></div>
        <br>
        <br>

        <div v-html="news?.content"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    @include pagePadding;
    padding-top: 16vh;

    .title {
        text-align: center;
        color: $navy;
    }

    .image{
        width:100%;
        height:40vh;
        background-size: cover;
        background-position: center;
        border-radius: $border-radius;

    }
}
</style>