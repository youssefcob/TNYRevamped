<script setup lang="ts">
import MainOverlay from '@/Components/Overlays/MainOverLay.vue';
import InputField from '@/SharedComponents/InputField.vue';
import FileInputField from '@/SharedComponents/FileInputField.vue';
import { Job, Employer, Language, User } from '@/interface/Types';
import DropDownInputField from '@/SharedComponents/DropDownInputField.vue';
import { ref } from 'vue';
import CheckBox from '@/SharedComponents/checkBox.vue';
import WorkDays from '@/SharedComponents/workDays.vue';
import userMixin from '@/mixins/user';
import { snack } from '@/mixins/toast';
import { Link, router } from '@inertiajs/vue3';


const props = defineProps({
    employer: {
        type: Object as () => Employer,
    },
    user: {
        type: Object as () => User,
        required: true,
    },
    errors: {
        type: Object
    },
});

// const languages = ref(['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Bengali', 'Marathi', 'Telugu', 'Tamil', 'Urdu', 'Punjabi', 'Gujarati', 'Kannada', 'Malayalam', 'Odia', 'Punjabi', 'Sindhi', 'Thai', 'Turkish', 'Vietnamese', 'Other']);
const form = ref({
    name: props.user.name,
    phone_number: props.employer?.phone_number,
    facility_name: props.employer?.facility_name,
    borough: props.employer?.borough,
});


const modifyForm = () => {



    const formFields = {
        name: form.value.name,
        phone_number: form.value.phone_number || '',
        facility_name: form.value.facility_name || '',
        borough: form.value.borough || '',
    };

    return formFields;

}
const loading = ref(false);

const handleSubmit = async () => {
    // Merge form and resume as a FormData
    const formData = modifyForm();
    const token = localStorage.getItem('token');
    // console.log(token);

    // console.log();
    // router.post('/job-seeker/profile/update', formData, {
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     }
    // });
    router.post('/employer/profile/update', formData, {
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
                            <InputField label="Your Name" placeHolder="Enter your name" type="text" :value="user.name"
                                v-model="form.name" />
                            <InputField label="Phone Number" placeHolder="Enter your phone number" type="number"
                                :value="employer?.phone_number?.toString()" v-model="form.phone_number" />
                            <InputField label="Facility Name" placeHolder="Facility name" type="number"
                                :value="employer?.facility_name?.toString()" v-model="form.facility_name" />
                            <DropDownInputField label="Borough" placeHolder="Select borough" type="text"
                                :list="['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']"
                                :value="employer?.borough || undefined" v-model="form.borough" />

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
    padding:3rem 0;

    .form-container {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 2rem;
        border-radius: 1rem;
        width: 50%;
        margin: 0 auto;
        @include media-max(desktop) {
            width: 90%;
        }

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

                justify-content: center;
                align-items: center;
                width: 100%;

             >*{
                    width: 100%;
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