<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { teamState } from '@/state/state';


let showmore = ref(false);
let showMore = () => {
    let teams = document.querySelector('.teams');
    let arrow = document.querySelector('.arrow');
    teams?.classList.toggle('show-more');
    // teams?.classList.toggle('some-hidden');
    showmore.value = !showmore.value;
    arrow?.classList.toggle('flip-arrow');
}
</script>

<template>
    <div class="teamContainer">
        <h1 class="title">Team photos</h1>

        <br>
        <br>
        <br>
        <div class="teams some-hidden">

            <!-- <div v-for="n in 40" :key="n"> -->
                <div class="single-team" v-for="teamMember in teamState" :key="teamMember.id">
                    <div class="img" :style="`background-image:url(${teamMember.image})`" alt=""></div>
                    <div class="name"><span>{{ teamMember.name }}</span></div>
                    <div class="position"><span>{{ teamMember.position }}</span></div>

                </div>
            <!-- </div> -->



        </div>
        <div class="more" @click="showMore()">
            <template v-if="!showmore">Show More</template>
            <template v-else>Show Less</template>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1L6 6L11 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>

    </div>
</template>
<style scoped lang="scss">
.teamContainer {
    @include pagePadding();

    // @media screen and (max-width: 500px) {
    //     @include pageNoPadding;
    // }
    .title{
        text-align: center;
        color:$navy;
    }
    >.more {
        margin-top: 1.25rem;
        cursor: pointer;
        // @extend .btnfont;
        text-align: end;
        >svg {
            margin-left: 0.625rem;

            width:1.1rem;
            height:1.1rem;

            >path {
                stroke: $blue;
            }
        }
    }

    >.teams {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12.375rem, 1fr));
        gap: 1.25rem;
        transition: all 0.5s ease-in-out;
        max-height: 28.2rem;
        overflow: hidden;


        .single-team {
            width: 13.375rem;
            height: 13.375rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            // gap: .75rem;
            // margin-right:1.25rem;

            >.name {
                margin-top: 0.75rem;
                text-align: center;
            }
            >.position{
                text-align: center;
                color: $grey;
                >span{
                font-size: 0.75rem;

                }
            }

            >.img {
                width: 90%;
                height: 90%;
                // @include image()
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
            }

            >span {
                display: block;
            }

        }
    }

    .some-hidden {

        transition: all 0.5s ease-in-out;
    }

    .show-more {
        max-height: 160rem;
        transition: all 0.5s ease-in-out;


    }

    .flip-arrow {
        transform: rotate(180deg);
    }

    @media screen and (max-width: 500px) {
        br{
            display: none;
        }

        .teams {
            display: flex;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            /* Smooth scrolling on touch devices */
            scrollbar-width: thin;
            height: fit-content;
            align-items: first baseline;

            /* For Firefox */
            &::-webkit-scrollbar {
                height: 4px;
                /* For WebKit browsers */
            }

            &::-webkit-scrollbar-thumb {
                background: #ccc;
                /* Scrollbar thumb color */
            }

            .single-team {
                flex: 0 0 auto;
                width: 110px;

                // height: 85px;
                >.img {
                    height: 85px;
                }

                >.title {
                    text-align: center;
                }
            }


        }

        .show-btn {
            display: none;
        }


    }

}
</style>