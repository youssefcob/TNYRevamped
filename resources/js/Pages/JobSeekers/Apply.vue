<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ApplyHeroSection from '@/Components/Apply/ApplyHeroSection.vue';
import ApplyFormSection from '@/Components/Apply/ApplyFormSection.vue';

interface Job { id: number; title: string; }

const props = defineProps<{
  jobs?: Job[];
  position?: string;
}>();

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta page="apply" path="/apply"
    default-title="Apply for Healthcare & Therapy Jobs in NYC | TNY Staffing"
    default-description="Ready for your next healthcare role? Apply online today with TNY Staffing. We hire PTs, OTs, SLPs, massage therapists, and acupuncturists in NYC." />

  <LayoutV2>
    <ApplyHeroSection />
    <ApplyFormSection :jobs="props.jobs" :preselected="props.position ?? ''" />
  </LayoutV2>
</template>
