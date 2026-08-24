<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import SolutionsHeroSection from '@/Components/Solutions/SolutionsHeroSection.vue';
import StaffingCategoriesSection from '@/Components/Solutions/StaffingCategoriesSection.vue';
import EmployersMidCTA from '@/Components/Solutions/EmployersMidCTA.vue';
import IndustriesWeServeSection from '@/Components/Solutions/IndustriesWeServeSection.vue';
import ForCandidatesCTA from '@/Components/Solutions/ForCandidatesCTA.vue';

provide('pageContent', (usePage().props.pageContent as Record<string, string | null>) ?? {});
</script>

<template>
  <Head>
    <title>Healthcare Staffing Solutions in NYC | TNY Staffing</title>
    <meta name="description" content="Explore specialized healthcare staffing solutions in NYC. We connect facilities with qualified PTs, OTs, SLPs, and specialized therapists for per diem and permanent roles." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/solutions" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/solutions" />
    <meta property="og:title" content="Healthcare Staffing Solutions in NYC | TNY Staffing" />
    <meta property="og:description" content="Explore specialized healthcare staffing solutions in NYC. We connect facilities with qualified PTs, OTs, SLPs, and specialized therapists for per diem and permanent roles." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/solutions" />
    <meta name="twitter:title" content="Healthcare Staffing Solutions in NYC | TNY Staffing" />
    <meta name="twitter:description" content="Explore specialized healthcare staffing solutions in NYC. We connect facilities with qualified PTs, OTs, SLPs, and specialized therapists for per diem and permanent roles." />
  </Head>

  <LayoutV2>
    <SolutionsHeroSection />
    <StaffingCategoriesSection />
    <EmployersMidCTA />
    <IndustriesWeServeSection />
    <ForCandidatesCTA />
  </LayoutV2>
</template>
