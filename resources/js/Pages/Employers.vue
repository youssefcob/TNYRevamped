<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import EmployerHeroSection from '@/Components/ForEmployers/EmployerHeroSection.vue';
import ChallengesSection from '@/Components/ForEmployers/ChallengesSection.vue';
import WhyTNYSection from '@/Components/ForEmployers/WhyTNYSection.vue';
import HowItWorksSection from '@/Components/ForEmployers/HowItWorksSection.vue';
import EmployerCtaBanner from '@/Components/ForEmployers/EmployerCtaBanner.vue';

provide('pageContent', (usePage().props.pageContent as Record<string, string | null>) ?? {});
</script>

<template>
  <Head>
    <title>Reliable Healthcare Staffing in NYC | TNY Staffing</title>
    <meta name="description" content="TNY Staffing provides reliable healthcare staffing in NYC. We supply credentialed PTs, OTs, and SLPs for emergency coverage and long-term workforce solutions." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/employers" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/employers" />
    <meta property="og:title" content="Reliable Healthcare Staffing in NYC | TNY Staffing" />
    <meta property="og:description" content="TNY Staffing provides reliable healthcare staffing in NYC. We supply credentialed PTs, OTs, and SLPs for emergency coverage and long-term workforce solutions." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/employers" />
    <meta name="twitter:title" content="Reliable Healthcare Staffing in NYC | TNY Staffing" />
    <meta name="twitter:description" content="TNY Staffing provides reliable healthcare staffing in NYC. We supply credentialed PTs, OTs, and SLPs for emergency coverage and long-term workforce solutions." />
  </Head>

  <LayoutV2>
    <EmployerHeroSection />
    <ChallengesSection />
    <WhyTNYSection />
    <HowItWorksSection />
    <EmployerCtaBanner />
  </LayoutV2>
</template>

<style lang="scss">
.layout-v2 {
  * { font-family: $font-body; }
  h1, h2, h3, h4 { font-family: $font-heading; }
}
</style>
