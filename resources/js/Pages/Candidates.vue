<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import CandidateHeroSection from '@/Components/ForCandidates/CandidateHeroSection.vue';
import JobListingsSection from '@/Components/ForCandidates/JobListingsSection.vue';

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});

interface Position {
  id: number;
  title: string;
  description: string;
  available: boolean;
  address?: string | null;
}

defineProps<{ positions: Position[] }>();
</script>

<template>
  <PageMeta page="candidates" path="/candidates"
    default-title="Therapy Jobs in NYC | PT, OT & SLP Careers | TNY Staffing"
    default-description="Explore flexible therapy jobs in NYC. TNY Staffing hires PTs, OTs, SLPs, Medical Assistants, and Exercise Physiologists for top healthcare facilities. Apply today." />

  <LayoutV2>
    <CandidateHeroSection />
    <JobListingsSection :positions="positions" />
  </LayoutV2>
</template>
