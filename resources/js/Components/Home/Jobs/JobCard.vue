<script setup lang="ts">
import { Job } from '@/interface/Types';
import { Link } from '@inertiajs/vue3';


const props = defineProps({
    job: {
        type: Object as () => Job,
        required: true
    }
});

</script>

<template>
    <div class="job-card">
        <div class="job-wrapper">
        <div class="info">
            <h2 class="title blue">{{ job?.title }}</h2>
            <p class="big">{{ job?.description }}</p>
            <Link :href="`/apply/${job?.title}`" class="btn">Apply Now</Link>
        </div>
    </div>
    </div>
</template>

<style scoped lang="scss">
.job-card {

    display:flex;
    height:60vh;

    @include media-min(tablet){
        // height:40vh;
    }

    .job-wrapper{
        width:90%;
        height:90%;
        margin:auto;
        background-color: $undefined-grey;

        box-shadow: -10px 10px 20px 0 rgba(0,0,0,0.1);
    }

    .info {
        display: flex;
        flex-direction: column;
        padding:2rem;
        padding-bottom:4rem;
        height:100%;
        gap:2rem;
        .btn{
            width:40%;
            min-width:150px;
            align-self: center;
            margin-top:auto;
            display:inline;
        }



        

     



    }

}
</style>