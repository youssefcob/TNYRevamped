<script setup lang="ts">
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import HireStaffHeroSection from '@/Components/RequestService/HireStaffHeroSection.vue';
import HireStaffFormSection from '@/Components/RequestService/HireStaffFormSection.vue';

interface ServiceItem { id: number; title: string; }

const props = defineProps<{
  services?: ServiceItem[];
  service?: string;
}>();
</script>

<template>
  <LayoutV2>
    <HireStaffHeroSection />
    <HireStaffFormSection :services="props.services" :preselected="props.service ?? ''" />
  </LayoutV2>
</template>
