<script setup lang="ts">
import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import InputField from '@/SharedComponents/InputField.vue';
import FileInputField from '@/SharedComponents/FileInputField.vue';
import { Job, JobSeeker, Language, User } from '@/interface/Types';
import DropDownInputField from '@/SharedComponents/DropDownInputField.vue';
import { ref } from 'vue';
import CheckBox from '@/SharedComponents/checkBox.vue';
import WorkDays from '@/SharedComponents/workDays.vue';
import userMixin from '@/mixins/user';
import { snack } from '@/mixins/toast';
import { Link, router } from '@inertiajs/vue3';


const props = defineProps({
    job_seeker: {
        type: Object as () => JobSeeker,
    },
    user: {
        type: Object as () => User,
        required: true,
    },
    positions: {
        type: Array as () => Job[],
        required: true,
    },
    languages: {
        type: Array as () => Language[],
        required: true,
    },
    errors: {
        type: Object
    },
});

// const languages = ref(['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Bengali', 'Marathi', 'Telugu', 'Tamil', 'Urdu', 'Punjabi', 'Gujarati', 'Kannada', 'Malayalam', 'Odia', 'Punjabi', 'Sindhi', 'Thai', 'Turkish', 'Vietnamese', 'Other']);
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

const assignResume = (event: FormData) => {
    event.forEach((value, key) => {
        resume.append('resume', value);
    });
};

const positionId = () => {
    const position = props.positions.find(p => p.title === form.value.position);
    return position ? position.id : null;
}

const languageId = () => {
    const language = props.languages.find(l => l.name === form.value.language);
    console.log(language);
    return language ? language.id : null;
}

const appendToFormData = (formData: FormData, key: any, value: any) => {
    if (value === null || value === undefined) {
        formData.append(key, '');
    } else if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value));
    } else {
        formData.append(key, value.toString());
    }
};
const modifyForm = () => {
    let l = [];
    l.push(languageId());

    const formFields = {
        name: form.value.name,
        phone_number: form.value.phone_number || '',
        dob: form.value.dob || '',
        facility_type: form.value.facility_type || '',
        position_id: positionId(),
        experience: form.value.experience || 0,
        rate_per_hour: form.value.rate_per_hour || 0,
        availability_to_start: form.value.availability_to_start || 0,
        payment_type: form.value.payment_type || '',
        is_licensed: form.value.is_licensed || false,
        is_employed: form.value.is_employed || false,
        legal_status: form.value.legal_status || '',
        // work_days: form.value.work_days || [],
        shift_type: form.value.shift_type || '',
        gender: form.value.gender?.toLowerCase() || '',
        preferred_location: form.value.preferred_location || ''
    };

    Object.entries(formFields).forEach(([key, value]) => {
        appendToFormData(resume, key, value);
    });

    // Append languages array separately
    l.forEach((languageId:any) => {
        resume.append('languages[]', languageId);
    });

    form.value.work_days.forEach((day) => {
        resume.append('work_days[]', day);
    });

    return resume;
}
const loading = ref(false);

const handleSubmit = async () => {
  
    // Merge form and resume as a FormData
    const formData = modifyForm();
    console.log(formData);
    const token = localStorage.getItem('token');
    // console.log(token);

    // console.log();
    // router.post('/job-seeker/profile/update', formData, {
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     }
    // });
    router.post('/job-seeker/profile/update', formData, {
        headers: {
            // 'Accept': 'application/json',
            // Add other headers as needed, e.g. Authorization
            'Authorization': `Bearer ${token}`
        },
        onStart: () => {
            loading.value = true;
        },
        onFinish: () => {
            loading.value = false;
            if (props.errors && Object.keys(props.errors).length > 0) {
                if (props.errors) {
                    const firstError = Object.values(props.errors)[0];
                    if (Array.isArray(firstError)) {
                        snack.error(firstError[0]);
                    } else if (typeof firstError === 'string') {
                        snack.error(firstError);
                    }
                }
            }
        },
        preserveState: true,
        preserveScroll: true,
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
                                        :value="user.name" v-model="form.name" />
                                    <div class="split">
                                        <InputField label="Salary/Hour" placeHolder="Enter salary per hour"
                                            type="number" :value="job_seeker?.rate_per_hour?.toString()"
                                            v-model="form.rate_per_hour" />
                                        <InputField label="Availability to start" placeHolder="days" type="number"
                                            :value="job_seeker?.availability_to_start?.toString()"
                                            v-model="form.availability_to_start" />
                                    </div>
                                    <div class="split">
                                        <DropDownInputField label="Payment Type" placeHolder="Select payment type"
                                            type="text" :list="['W2', '1099 with Corp']"
                                            :value="job_seeker?.payment_type" v-model="form.payment_type" />
                                        <DropDownInputField label="Language" placeHolder="Select language" type="text"
                                            :list="languages.map(l => l.name)" :value="job_seeker?.languages[0]?.name"
                                            v-model="form.language" />

                                    </div>
                                    <div class="split">
                                        <CheckBox label="License Required" :value="job_seeker?.is_licensed"
                                            trueText="Licensed" falseText="Not Licensed" v-model="form.is_licensed" />
                                        <CheckBox label="Employment Status" :value="job_seeker?.is_employed"
                                            trueText="Employed" falseText="Not Employed" v-model="form.is_employed" />
                                    </div>
                                    <WorkDays label="Work Days" v-model="form.work_days" :value="job_seeker?.work_days" />
                                    <DropDownInputField label="Legal Status" placeHolder="Select legal status"
                                        type="text"
                                        :list="['US Citizen', 'Green Card Holder', 'H-1B', 'F1 CPT', 'F1 OPT', 'F1 no EAD', 'B1B2']"
                                        :value="job_seeker?.legal_status" v-model="form.legal_status" />

                                </div>
                                <div class="right-flex">
                                    <InputField label="Mobile Number" placeHolder="Enter your mobile number" type="tel"
                                        :value="job_seeker?.phone_number" v-model="form.phone_number" />
                                    <InputField label="Date of Birth" placeHolder="00/00/0000" type="date"
                                        mask="##/##/####" :value="job_seeker?.dob" v-model="form.dob" />
                                    <div class="split">
                                        <DropDownInputField label="Facility Type" placeHolder="Enter Facility type"
                                            type="text" :list="['Outpatient', 'Inpatient', 'SNF', 'Home Therapy']"
                                            :value="job_seeker?.facility_type" v-model="form.facility_type" />
                                        <DropDownInputField label="Position" placeHolder="Enter position" type="text"
                                            :list="positions.map(p => p.title)" :value="job_seeker?.position.title"
                                            v-model="form.position" />
                                    </div>
                                    <div class="split">
                                        <DropDownInputField label="Shift Type" placeHolder="Enter shift type"
                                            type="text"
                                            :list="['Hours', 'Full Time', 'Part Time', 'Coverage', 'Per Diem', 'Coverage', 'Ongoing']"
                                            :value="job_seeker?.shift_type" v-model="form.shift_type" />
                                        <InputField label="Experience (Months)" placeHolder="Enter experience in months"
                                            type="number" :value="job_seeker?.experience.toString()"
                                            v-model="form.experience" />

                                    </div>

                                    <div class="split">
                                        <DropDownInputField label="Gender" placeHolder="Select gender" type="text"
                                            :list="['Male', 'Female', 'Other']" :value="job_seeker?.gender"
                                            v-model="form.gender" />
                                        <DropDownInputField label="Borough" placeHolder="Select borough" type="text"
                                            :list="['Manhattan', 'The Bronx', 'Brooklyn', 'Queens', 'Staten Island', 'Long Island', 'New Jersey', 'Jersey City']"
                                            :value="job_seeker?.preferred_location" v-model="form.preferred_location" />
                                    </div>
                                    <FileInputField label="Resume" accept=".pdf,.doc,.docx"
                                        placeHolder="Upload your resume" @input="assignResume($event)" />

                                    <p class="ps">Resume Must include Contact Info such as Phone/Mobile Number and
                                        Email.
                                        Clear
                                        details of previous experience is required</p>

                                </div>
                            </div>
                            <div class="btn-container">
                                <button type="submit" class="btn" :disabled="loading">
                                    {{ loading ? 'Loading...' : 'Save' }}
                                </button>
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
    padding: 4rem 0;

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

                .flex-container {
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


                .btn-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2rem;

                    .btn {
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