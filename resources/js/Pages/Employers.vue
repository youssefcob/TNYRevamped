<script setup lang="ts">
import MainOverLay from '@/Components/Overlays/MainOverLay.vue';
import { Employer } from '@/interface/Types';
import { assignEmployer } from '@/state/state';
import Employers from '@/Views/Employers.vue';
import { onMounted } from 'vue';


const props = defineProps({
    employers: {
        type: Object as () => Employer[]
    },
});

onMounted(() => {

    if (props.employers) {
        assignEmployer(props.employers);
    }
});

</script>

<template>
    <MainOverLay>
        <Employers :employers="employers" />
    </MainOverLay>
</template>