<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
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
  <Head>
    <title>Apply for Healthcare & Therapy Jobs in NYC | TNY Staffing</title>
    <meta name="description" content="Ready for your next healthcare role? Apply online today with TNY Staffing. We hire PTs, OTs, SLPs, massage therapists, and acupuncturists in NYC." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/apply" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/apply" />
    <meta property="og:title" content="Apply for Healthcare & Therapy Jobs in NYC | TNY Staffing" />
    <meta property="og:description" content="Ready for your next healthcare role? Apply online today with TNY Staffing. We hire PTs, OTs, SLPs, massage therapists, and acupuncturists in NYC." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/apply" />
    <meta name="twitter:title" content="Apply for Healthcare & Therapy Jobs in NYC | TNY Staffing" />
    <meta name="twitter:description" content="Ready for your next healthcare role? Apply online today with TNY Staffing. We hire PTs, OTs, SLPs, massage therapists, and acupuncturists in NYC." />
  </Head>

  <LayoutV2>
    <ApplyHeroSection />
    <ApplyFormSection :jobs="props.jobs" :preselected="props.position ?? ''" />
  </LayoutV2>
</template>
