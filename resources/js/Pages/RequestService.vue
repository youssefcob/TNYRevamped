<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
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
  <Head>
    <title>Request Qualified Healthcare Staff | TNY Staffing</title>
    <meta name="description" content="Need immediate coverage or long-term rehab staff? Submit your staffing request to TNY Staffing and get matched with qualified PTs, OTs, and SLPs in NYC." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/requestService" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/requestService" />
    <meta property="og:title" content="Request Qualified Healthcare Staff | TNY Staffing" />
    <meta property="og:description" content="Need immediate coverage or long-term rehab staff? Submit your staffing request to TNY Staffing and get matched with qualified PTs, OTs, and SLPs in NYC." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/requestService" />
    <meta name="twitter:title" content="Request Qualified Healthcare Staff | TNY Staffing" />
    <meta name="twitter:description" content="Need immediate coverage or long-term rehab staff? Submit your staffing request to TNY Staffing and get matched with qualified PTs, OTs, and SLPs in NYC." />
  </Head>

  <LayoutV2>
    <HireStaffHeroSection />
    <HireStaffFormSection :services="props.services" :preselected="props.service ?? ''" />
  </LayoutV2>
</template>
