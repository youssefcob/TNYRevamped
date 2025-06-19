<script setup lang="ts">
import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import InputField from '@/SharedComponents/InputField.vue';
import FileInputField from '@/SharedComponents/FileInputField.vue';
import { Job, JobSeeker, User } from '@/interface/Types';
import DropDownInputField from '@/SharedComponents/DropDownInputField.vue';

const props = defineProps({
    job_seeker: {
        type: Object as () => JobSeeker,
    },
    user: {
        type: Object as () => User,
        required: true,
    },
    positions: {
        type: Array as () => string[],
        required: true,
    },
});

</script>

<template>
    <MainOverlay>
        <main>
            <div class="container" :style="`background-image: url('/images/profile.jpg');`">
                <div class="form-container">
                    <div class="form-wrapper">
                        <h3>Edit Profile </h3>
                        <form action="" class="form">
                            <div class="left-flex">
                                <InputField label="Your Name" placeHolder="Enter your name" type="text"
                                    :value="user.name" />
                                <InputField label="Email" placeHolder="Enter your email" type="email"
                                    :value="user.email" />

                                <InputField label="Mobile Number" placeHolder="Enter your mobile number" type="tel"
                                    :value="job_seeker?.phone_number" />
                                <FileInputField label="Resume" accept=".pdf,.doc,.docx"
                                    placeHolder="Upload your resume" />

                                <p class="ps">Resume Must include Contact Info such as Phone/Mobile Number and Email.
                                    Clear
                                    details of previous experience is required</p>
                            </div>
                            <div class="right-flex">
                                <div class="split">
                                    <InputField label="Facility Type" placeHolder="Enter facility type" type="text"
                                        :value="job_seeker?.facility_type" />
                                    <DropDownInputField label="Position" placeHolder="Enter position" type="text"
                                        :list="positions" :value="job_seeker?.position.title" />
                                </div>
                                <div class="split">
                                <DropDownInputField label="Shift Type" placeHolder="Enter shift type" type="text"
                                    :list="['Day', 'Night', 'Rotating']" :value="job_seeker?.shift_type" />
                                <InputField label="Experience (Months)" placeHolder="Enter experience in months" type="number"
                                    :value="job_seeker?.experience.toString()" />

                                </div>
                                <div class="split">
                                <InputField label="Salary/Hour" placeHolder="Enter salary per hour" type="number"
                                    :value="job_seeker?.rate_per_hour?.toString()" />
                                <InputField label="Availaiblity to start" placeHolder="days" type="number"
                                    :value="job_seeker?.availability_to_start?.toString()" />
                                </div>
                                <div class="split">
                                <DropDownInputField label="Gender" placeHolder="Select gender" type="text"
                                    :list="['Male', 'Female', 'Other']" :value="job_seeker?.gender" />
                                <DropDownInputField label="Borough" placeHolder="Select borough" type="text"
                                    :list="['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']" :value="job_seeker?.preferred_location" />
                                </div>
                                <div class="split">
                                <DropDownInputField label="Legal Status" placeHolder="Select legal status" type="text"
                                    :list="['US Citizen', 'Green Card Holder', 'H-1B', 'F1 CPT', 'F1 OPT', 'F1 no EAD', 'B1B2']" :value="job_seeker?.legal_status" />
                                </div>
                                <div class="split"></div>
                                <div class="split"></div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    </MainOverlay>
</template>

<style scoped lang="scss">
.container {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .form-container {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 2rem;
        border-radius: 1rem;
        width: 80%;
        margin: 0 auto;

        .form-wrapper {
            padding: 2rem;
            border-radius: 1rem;
            width: 100%;
            border: 3px solid $navy;

            h3 {
                text-align: center;
                font-size: 1.5rem;
                font-weight: 600;
                color: $navy;
            }

            .form {
                display: flex;
                gap: 1rem;

                .left-flex,
                .right-flex {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    @include media-max(tablet) {
                        width: 100%;
                    }
                }

                .split {
                    width: 100%;
                    display: flex;
                    gap: 1rem;

                    >div {
                        width: 50%;
                    }
                }

                @include media-max(tablet) {
                    flex-direction: column;
                }
            }
        }

        @include media-max(tablet) {
            width: 90%;
        }
    }
}
</style>