<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { Head, usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import AboutMissionSection from '@/Components/About/AboutMissionSection.vue';
import CoreValuesSection from '@/Components/About/CoreValuesSection.vue';
import TeamSection from '@/Components/About/TeamSection.vue';
import AboutCTASection from '@/Components/About/AboutCTASection.vue';

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <Head>
    <title>About TNY Staffing | NYC Therapy Staffing Agency</title>
    <meta name="description" content="Learn how TNY Staffing creates meaningful connections between rehab professionals and NYC healthcare organizations. Proudly serving all five boroughs." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/about" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/about" />
    <meta property="og:title" content="About TNY Staffing | NYC Therapy Staffing Agency" />
    <meta property="og:description" content="Learn how TNY Staffing creates meaningful connections between rehab professionals and NYC healthcare organizations. Proudly serving all five boroughs." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/about" />
    <meta name="twitter:title" content="About TNY Staffing | NYC Therapy Staffing Agency" />
    <meta name="twitter:description" content="Learn how TNY Staffing creates meaningful connections between rehab professionals and NYC healthcare organizations. Proudly serving all five boroughs." />
  </Head>

  <LayoutV2>
    <AboutMissionSection />
    <CoreValuesSection />
    <!-- <TeamSection /> -->
    <AboutCTASection />
  </LayoutV2>
</template>
