<script setup lang="ts">
import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import { Employer, User } from '@/interface/Types';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    employer: {
        type: Object as () => Employer,
        required: true,
    },
    user: {
        type: Object as () => User,
        required: true,
    },

});




</script>

<template>
    <MainOverlay>
        <main>
            <div class="container" :style="`background-image: url('/images/profile.jpg');`">
                <!-- <h1>Profile</h1> -->
                <div class="profile">

                    <div class="grid-wrapper">

                        <p>Name: <span>{{ user.name }}</span></p>
                        <p>Email: <span>{{ user.email }}</span></p>
                        <p>Phone No: <span>{{ employer.phone_number }}</span></p>
                        <p v-if="employer.borough">Borough: <span>{{ employer.borough }}</span></p>
                        <p>Facility Name: <span>{{ employer.facility_name }}</span></p>
                    </div>
                    <Link href="/profile/edit" class="btn">update profile</Link>
                </div>

            </div>
        </main>
    </MainOverlay>
</template>


<style scoped lang="scss">
main .container {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: center;
    padding: 10rem;

    @media screen and (max-width: 1010px) {
        padding: 10rem 3rem;

    }

    @media screen and (max-width: 500px) {
        padding: 1rem;

    }

    .profile {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 6rem 4rem;
        border-radius: 1rem;
        border: 2px solid $navy;

        @media screen and (max-width: 1010px) {
            width: 100%;

        }

        @media screen and (max-width: 500px) {
            padding: 1rem;
            width: 100%;
            border-radius: 0.5rem;
        }

        .grid-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;

            @media screen and (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            p {
                font-size: 1.2rem;
                font-weight: 600;
                margin: 0.5rem 0;
                color: $navy;

                span {
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: #333;
                }

                @media screen and (max-width: 500px) {
                    font-size: 1rem;

                    span {
                        display: block;
                        font-size: 1rem;
                    }

                }


            }
        }

        .btn{
            width:30%;
            margin: 2rem;
            margin-left:auto;
            padding:1rem;

            @media screen and (max-width: 500px) {
                width: 100%;
                margin: 1rem auto;
                
            }

        }
    }
}
</style>