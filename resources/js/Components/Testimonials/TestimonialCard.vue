<script setup lang="ts">
import { Testimonial } from '@/interface/Types';


const props = defineProps({
    testimonial: {
        type: Object as () => Testimonial
    }
});

</script>
<template>

    <div class="card">
        <div class="image-wrapper">
            <div class="image">
                <img :src="testimonial?.image" />

            </div>
        </div>
        <br>
        <h3>{{ testimonial?.name }}</h3>
        <br>
        <span>{{ testimonial?.position }}</span>
        <br>
        <br>

        <p class="big">{{ testimonial?.review }}</p>
    </div>



</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: red;
    color:$grey;
>p{
    color:$grey;
    text-align: center;
}
    .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px dashed $navy;
        border-radius: 100vh;
        width: 9rem;
        height: 9rem;

        .image {
            width: 8rem;
            height: 8rem;
            border-radius: 100vh;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    
}
</style>