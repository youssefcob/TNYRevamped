<script setup lang="ts">

const props = defineProps<{
    service: {
        title: string;
        description: string;
        img: string;
        isMain: boolean;
    }
}>()

</script>

<template>
    <div class="service">
        <div class="img-wrapper">
            <img :src="service.img" alt="Service Image" />

        </div>
        <div class="content">
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <button class="btn"><span class="btnFont">Request Service</span></button>
        </div>
        

    </div>
</template>

<style lang="scss" scoped>

    .service {
        display:flex;
        align-items: center;
        gap:0.5rem;
        @include media-max(tablet){
            flex-direction: column;
        }
        .img-wrapper{
            padding:2rem;
            height:9rem;
            width:9rem;
            background-color: $light-blue;
            border-radius: 100vh;
            >img{
                height:100%;
                // width: 100%;
            }
        }
        .content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.1);
            padding:1rem 2rem;
            border-radius: 1rem;
            >h2{
                color:$blue;


            }
            >p{
                color:$grey;
                font-weight:$medium;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                @include media-max(tablet){
                    -webkit-line-clamp: 3;
                }
                @include media-max(phone){
                    -webkit-line-clamp: 4;
                }
            }
            >button{
                width:fit-content;
                margin-left:auto;
                margin-right:1rem;
            }
        }
    }

</style>