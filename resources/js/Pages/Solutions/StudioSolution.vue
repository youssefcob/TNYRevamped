<script setup lang="ts">
import type { SolutionDetail, StudioDocument as StudioService } from '@/interface/Types';
import StudioDocument from '@/Components/Studio/StudioDocument.vue';

// A service page published in Studio (the headless CMS), which replaces the
// config/solutions.php page for the same slug. `solution` is that config
// entry, if there is one, and only fills in head tags Studio leaves out.
const props = defineProps<{ service: StudioService; solution: SolutionDetail | null; path: string }>();

const fallbackTitle = props.solution?.meta_title ?? 'TNY Staffing';
</script>

<template>
  <StudioDocument :document="service" :path="path"
    :fallback-title="fallbackTitle"
    :fallback-description="solution?.meta_description"
    :image="solution?.image" />
</template>
