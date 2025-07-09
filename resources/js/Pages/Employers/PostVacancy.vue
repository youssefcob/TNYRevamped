<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Job } from '@/interface/Types';
import InputField from '@/SharedComponents/InputField.vue';

const props = defineProps({
    positions: {
        type: Array as () => Job[],
        required: true
    },
});

const form = {
    borough: '',
    address: '',
    shift_details: '',
    experience: '',
    facility_type: '',
    payment_type: '',
    rate_per_hour: '',
    license_required: '',
    legal_status: '',
    status: '',
    gender_pref: '',
    work_days: '',
    email: '',
    
}
</script>

<template>
    <MainOverLay>
        <div class="container">
            <div class="box-wrapper-border">
                <h2 class="title">Welcome</h2>
               
                <InputField type="text" name="email" label="Email" placeHolder="Enter your email"
                    value="jobSeeker@example.com" v-model="form.email" />

            </div>

        </div>
    </MainOverLay>
</template>


<style scoped lang="scss">
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

        // align-items: center;

        .title {
            align-self: center;
        }

    }

}
</style>