<script setup lang="ts">
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ApplyHeroSection from '@/Components/Apply/ApplyHeroSection.vue';
import ApplyFormSection from '@/Components/Apply/ApplyFormSection.vue';

interface Job { id: number; title: string; }

const props = defineProps<{
  jobs?: Job[];
  position?: string;
}>();
</script>

<template>
  <LayoutV2>
    <ApplyHeroSection />
    <ApplyFormSection :jobs="props.jobs" :preselected="props.position ?? ''" />
  </LayoutV2>
</template>
