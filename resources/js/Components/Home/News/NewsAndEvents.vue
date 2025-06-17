<script setup lang="ts">
import News from './News.vue';

</script>

<template>
    <div class="container">
        <h2 class="title">TNY News</h2>
        <br>
        <br>
        <div class="news-container">
            <News />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    @include pagePadding();
    display: flex;
    flex-direction: column;

    .title {
        align-self: center;
    }
}
</style>