<script setup lang="ts">
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import CandidateHeroSection from '@/Components/ForCandidates/CandidateHeroSection.vue';
import JobListingsSection from '@/Components/ForCandidates/JobListingsSection.vue';

interface Position {
  id: number;
  title: string;
  description: string;
  available: boolean;
}

defineProps<{ positions: Position[] }>();
</script>

<template>
  <LayoutV2>
    <CandidateHeroSection />
    <JobListingsSection :positions="positions" />
  </LayoutV2>
</template>
