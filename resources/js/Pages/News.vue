<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { News } from '@/interface/Types';
import NewsPage from '@/Views/News.vue';

const props = defineProps({
    news: {
        type: Object as () => News
    },
});

</script>

<template>
    <MainOverLay>
        <NewsPage :news="news" />
    </MainOverLay>
</template>