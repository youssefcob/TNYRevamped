<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Job, Language } from '@/interface/Types';
import DropDownInputField from '@/SharedComponents/DropDownInputField.vue';
import InputField from '@/SharedComponents/InputField.vue';
import { onMounted, ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { snack } from '@/mixins/toast';
import WorkDays from '@/SharedComponents/workDays.vue';


const props = defineProps({
    positions: {
        type: Array as () => Job[],
        required: true
    },
    languages: {
        type: Array as () => Language[],
        required: true
    },
    errors: {
        type: Object as () => Record<string, string[]>,
        default: () => ({})
    }
});

const form = {
    borough: '',
    address: '',
    shift_details: '',
    position: '',
    experience: '',
    facility_type: '',
    payment_type: '',
    rate_per_hour: '',
    license_required: '',
    legal_status: '',
    gender_pref: '',
    work_days: [],
    availability_to_start: '',
    language_pref: '',
    position_id: 0,


}

const loading = ref(false);

const csrfToken = ref<null | string | undefined>('');

const submit = async () => {

    const token = localStorage.getItem('token');
    if (!token) {
        snack.error('You are not authenticated. Please log in again.');
        
        return;
    }
    form.position_id = props.positions.find(p => p.title === form.position)?.id || 0;
      router.post('/post-vacancy', form, {
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

onMounted(() => {
    csrfToken.value = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
});
</script>

<template>
    <MainOverLay>
        <div class="container">
            <div class="box-wrapper-border">
                <h2 class="title">Welcome</h2>

                <form method="POST" @submit.prevent="submit()">
                    <input type="hidden" name="_token" :value="csrfToken">
                    <InputField type="text" name="address" label="Address" placeHolder="Enter address"
                        v-model="form.address" />
                    <div class="split">
                        <DropDownInputField name="facility_type" label="Facility Type"
                            placeHolder="Choose Your Facility Type" v-model="form.facility_type"
                            :list="['Outpatient', 'Inpatient', 'SNF', 'Home Therapy']" />
                        <DropDownInputField label="Role" placeHolder="Enter Position" type="text"
                            :list="positions.map(p => p.title)" name="position" v-model="form.position" />

                    </div>
                    <div class="split">
                        <InputField label="Availability to start" placeHolder="days" type="number"
                            name="availability_to_start" v-model="form.availability_to_start" />
                        <DropDownInputField label="Gender" placeHolder="Select gender" type="text"
                            :list="['Male', 'Female', 'Any']" v-model="form.gender_pref" />


                    </div>
                    <div class="split">
                        <DropDownInputField label="Shift Type" placeHolder="Enter shift type" type="text"
                            :list="['Hours', 'Full Time', 'Part Time', 'Coverage', 'Per Diem', 'Coverage', 'Ongoing']"
                            name="shift_details" v-model="form.shift_details" />

                        <InputField label="Minimum Experience (Months)" placeHolder="Enter experience in months"
                            type="number" name="experience" v-model="form.experience" />
                    </div>
                    <div class="split">
                        <DropDownInputField label="Borough" placeHolder="Select borough" type="text"
                            :list="['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']"
                            v-model="form.borough" />

                        <DropDownInputField label="Language" placeHolder="Select language" type="text"
                            :list="languages.map(l => l.name)" v-model="form.language_pref" />

                    </div>
                    <div class="split">
                        <DropDownInputField label="Payment Type" placeHolder="Select payment type" type="text"
                            :list="['W2', '1099 with Corp']" v-model="form.payment_type" />

                        <DropDownInputField label="Legal Status" placeHolder="Select legal status" type="text"
                            :list="['US Citizen', 'Green Card Holder', 'H-1B', 'F1 CPT', 'F1 OPT', 'F1 no EAD', 'B1B2']"
                            v-model="form.legal_status" />
                    </div>
                    <WorkDays v-model="form.work_days" />

                    <div class="btn-container">
                        <button type="submit" class="btn" :disabled="loading">
                            {{ loading ? 'Loading...' : 'Save' }}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </MainOverLay>
</template>


<style scoped lang="scss">
$form-gap: 1rem;

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/images/login-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .box-wrapper-border {


        .title {
            align-self: center;
            font-size: 2rem;
        }

        >form {
            display: flex;
            flex-direction: column;
            gap: $form-gap;

            .split {
                display: flex;
                gap: $form-gap;

                >* {
                    width: 50%;

                    @include media-max(tablet) {
                        width: 100%;
                    }
                }
            }

            .btn-container {
                width:40%;
                margin-left:auto;
                @include media-max(tablet) {
                    width: 100%;
                }
                button{
                    width:100%;
                }
            }
        }
    }


}
</style>
