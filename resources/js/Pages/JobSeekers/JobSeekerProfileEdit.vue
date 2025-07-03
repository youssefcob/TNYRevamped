<script setup lang="ts">
import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import InputField from '@/SharedComponents/InputField.vue';
import FileInputField from '@/SharedComponents/FileInputField.vue';
import { Job, JobSeeker, User } from '@/interface/Types';
import DropDownInputField from '@/SharedComponents/DropDownInputField.vue';
import { ref } from 'vue';
import CheckBox from '@/SharedComponents/checkBox.vue';
import WorkDays from '@/SharedComponents/workDays.vue';
import { router } from '@inertiajs/vue3'
import userMixin from '@/mixins/user';

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

const languages = ref(['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Bengali', 'Marathi', 'Telugu', 'Tamil', 'Urdu', 'Punjabi', 'Gujarati', 'Kannada', 'Malayalam', 'Odia', 'Punjabi', 'Sindhi', 'Thai', 'Turkish', 'Vietnamese', 'Other']);
const form = ref({
    name: props.user.name,
    phone_number: props.job_seeker?.phone_number,
    dob: props.job_seeker?.dob,
    facility_type: props.job_seeker?.facility_type,
    position: props.job_seeker?.position.title,
    rate_per_hour: props.job_seeker?.rate_per_hour,
    availability_to_start: props.job_seeker?.availability_to_start,
    payment_type: props.job_seeker?.payment_type,
    language: props.job_seeker?.language,
    is_licensed: props.job_seeker?.is_licensed || false,
    is_employed: props.job_seeker?.is_employed || false,
    legal_status: props.job_seeker?.legal_status,
    work_days: props.job_seeker?.work_days || [],
    shift_type: props.job_seeker?.shift_type,
    experience: props.job_seeker?.experience,
    gender: props.job_seeker?.gender,
    preferred_location: props.job_seeker?.preferred_location,
});

const resume = new FormData();

const modifyForm = () => {



resume.append('name', form.value.name);
resume.append('phone_number', form.value.phone_number || '');
resume.append('dob', form.value.dob || '');
resume.append('facility_type', form.value.facility_type || '');
resume.append('position', form.value.position || '');
resume.append('rate_per_hour', form.value.rate_per_hour || '');
resume.append('availability_to_start', form.value.availability_to_start || '');
resume.append('payment_type', form.value.payment_type || '');
resume.append('language', form.value.language || '');
resume.append('is_licensed', JSON.stringify(form.value.is_licensed || false) );
resume.append('is_employed', JSON.stringify(form.value.is_employed || false) );
resume.append('legal_status', form.value.legal_status || '');
resume.append('work_days', JSON.stringify(form.value.work_days || []));
resume.append('shift_type', form.value.shift_type || '');
resume.append('experience', JSON.stringify(form.value.experience || 0));
resume.append('gender', form.value.gender || '');
resume.append('preferred_location', form.value.preferred_location || '');

return resume;
}

const handleSubmit = async() => {
    // Merge form and resume as a FormData
    const formData = modifyForm();
    const token = localStorage.getItem('token');
    console.log(token);

    console.log();
    router.post('/job-seeker/profile/update', formData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

}

</script>

<template>
    <MainOverlay>
        <main>
            <div class="container" :style="`background-image: url('/images/profile.jpg');`">
                <div class="form-container">
                    <div class="form-wrapper">
                        <h3>Edit Profile </h3>
                        <br>

                        <form action="" class="form" @submit.prevent="handleSubmit">
                        <div class="flex-container">
                            <div class="left-flex">
                                <InputField label="Your Name" placeHolder="Enter your name" type="text"
                                    :value="user.name"
                                    v-model="form.name"
                                     />
                                <div class="split">
                                    <InputField label="Salary/Hour" placeHolder="Enter salary per hour" type="number"
                                        :value="job_seeker?.rate_per_hour?.toString()"
                                        v-model="form.rate_per_hour"
                                         />
                                    <InputField label="Availability to start" placeHolder="days" type="number"
                                        :value="job_seeker?.availability_to_start?.toString()"
                                        v-model="form.availability_to_start"
                                         />
                                </div>
                                <div class="split">
                                    <DropDownInputField label="Payment Type" placeHolder="Select payment type"
                                        type="text" :list="['W2', '1099 with Corp']"
                                        :value="job_seeker?.payment_type"
                                        v-model="form.payment_type"
                                         />
                                    <DropDownInputField label="Language" placeHolder="Select language" type="text"
                                        :list="languages" :value="job_seeker?.language"
                                        v-model="form.language"
                                         />

                                </div>
                                <div class="split">
                                    <CheckBox label="License Required" :value="job_seeker?.is_licensed"
                                        trueText="Licensed" falseText="Not Licensed"
                                        v-model="form.is_licensed"
                                         />
                                    <CheckBox label="Employment Status" :value="job_seeker?.is_employed"
                                        trueText="Employed" falseText="Not Employed"
                                        v-model="form.is_employed"
                                         />
                                </div>
                                <WorkDays label="Work Days" v-model="form.work_days" />
                                <DropDownInputField label="Legal Status" placeHolder="Select legal status" type="text"
                                    :list="['US Citizen', 'Green Card Holder', 'H-1B', 'F1 CPT', 'F1 OPT', 'F1 no EAD', 'B1B2']"
                                    :value="job_seeker?.legal_status"
                                    v-model="form.legal_status"
                                     />

                            </div>
                            <div class="right-flex">
                                <InputField label="Mobile Number" placeHolder="Enter your mobile number" type="tel"
                                    :value="job_seeker?.phone_number"
                                    v-model="form.phone_number"
                                     />
                                <InputField label="Date of Birth" placeHolder="00/00/0000" type="date" mask="##/##/####"
                                    :value="job_seeker?.dob"
                                    v-model="form.dob"
                                     />
                                <div class="split">
                                    <InputField label="Facility Type" placeHolder="Enter facility type" type="text"
                                        :value="job_seeker?.facility_type"
                                        v-model="form.facility_type"
                                         />
                                    <DropDownInputField label="Position" placeHolder="Enter position" type="text"
                                        :list="positions" :value="job_seeker?.position.title"
                                        v-model="form.position"
                                         />
                                </div>
                                <div class="split">
                                    <DropDownInputField label="Shift Type" placeHolder="Enter shift type" type="text"
                                        :list="['Hours', 'Full Time', 'Part Time', 'Coverage', 'Per Diem', 'Coverage', 'Ongoing']"
                                        :value="job_seeker?.shift_type"
                                        v-model="form.shift_type"
                                         />
                                    <InputField label="Experience (Months)" placeHolder="Enter experience in months"
                                        type="number" :value="job_seeker?.experience.toString()"
                                        v-model="form.experience"
                                         />

                                </div>

                                <div class="split">
                                    <DropDownInputField label="Gender" placeHolder="Select gender" type="text"
                                        :list="['Male', 'Female', 'Other']" :value="job_seeker?.gender"
                                        v-model="form.gender"
                                         />
                                    <DropDownInputField label="Borough" placeHolder="Select borough" type="text"
                                        :list="['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']"
                                        :value="job_seeker?.preferred_location"
                                        v-model="form.preferred_location"
                                         />
                                </div>
                                <FileInputField label="Resume" accept=".pdf,.doc,.docx"
                                    placeHolder="Upload your resume"
                                    v-model="resume"
                                     />

                                <p class="ps">Resume Must include Contact Info such as Phone/Mobile Number and Email.
                                    Clear
                                    details of previous experience is required</p>

                            </div>
                        </div>
                            <div class="btn-container"> 
                                <button type="submit" class="btn">Save</button>
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
        width: 90%;
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
                flex-direction: column;
                gap: 2rem;

                .flex-container{
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

                    @include media-max(tablet) {
                        flex-direction: column;

                        >div {
                            width: 100%;
                        }
                    }
                }

                @include media-max(tablet) {
                    flex-direction: column;
                }
                }

               
                .btn-container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2rem;
                    .btn{
                        width: 15rem;
                    }
                }
            }
        }

        @include media-max(tablet) {
            width: 90%;
        }
    }
}
</style>