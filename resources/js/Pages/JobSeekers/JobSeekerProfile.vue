<script setup lang="ts">
import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import { JobSeeker, User } from '@/interface/Types';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    job_seeker: {
        type: Object as () => JobSeeker,
        required: true,
    },
    user: {
        type: Object as () => User,
        required: true,
    },

});

const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};


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
                        <p>Position: <span>{{ job_seeker.position.title }}</span></p>
                        <p>Phone No: <span>{{ job_seeker.phone_number }}</span></p>
                        <p>Borough: <span>{{ job_seeker.borough }}</span></p>
                        <p>Shift Type: <span>{{ job_seeker.shift_type }}</span></p>
                        <p>Salary/hr: <span>{{ job_seeker.rate_per_hour }}</span></p>
                        <p>Age: <span>{{ calculateAge(job_seeker.dob) }} years</span></p>
                        <p>Facility Type: <span>{{ job_seeker.facility_type }}</span></p>
                        <p>Availability to Start: <span>{{ job_seeker.availability_to_start }}</span></p>
                        <p>Payment Type: <span>{{ job_seeker.payment_type }}</span></p>
                        <p>Employment Status: <span>{{ job_seeker.is_employed ? "Employed" : "Unemployed" }}</span></p>
                        <p>Experience: <span>{{ job_seeker.experience }}</span></p>
                        <p>Resume: <span>
                                <a v-if="job_seeker.resume" :href="job_seeker.resume">Downloaded</a>
                                <span v-else>No Resume Uploaded</span>
                            </span>
                        </p>
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

    .profile {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 6rem 4rem;
        border-radius: 1rem;
        border: 2px solid $navy;

        .grid-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;

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
            }
        }
    }
}
</style>