<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import CandidateHeroSection from '@/Components/ForCandidates/CandidateHeroSection.vue';
import JobListingsSection from '@/Components/ForCandidates/JobListingsSection.vue';

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
  <Head>
    <title>Therapy Jobs in NYC | PT, OT & SLP Careers | TNY Staffing</title>
    <meta name="description" content="Explore flexible therapy jobs in NYC. TNY Staffing hires PTs, OTs, SLPs, Medical Assistants, and Exercise Physiologists for top healthcare facilities. Apply today." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/candidates" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/candidates" />
    <meta property="og:title" content="Therapy Jobs in NYC | PT, OT & SLP Careers | TNY Staffing" />
    <meta property="og:description" content="Explore flexible therapy jobs in NYC. TNY Staffing hires PTs, OTs, SLPs, Medical Assistants, and Exercise Physiologists for top healthcare facilities. Apply today." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/candidates" />
    <meta name="twitter:title" content="Therapy Jobs in NYC | PT, OT & SLP Careers | TNY Staffing" />
    <meta name="twitter:description" content="Explore flexible therapy jobs in NYC. TNY Staffing hires PTs, OTs, SLPs, Medical Assistants, and Exercise Physiologists for top healthcare facilities. Apply today." />
  </Head>

  <LayoutV2>
    <CandidateHeroSection />
    <JobListingsSection :positions="positions" />
  </LayoutV2>
</template>
