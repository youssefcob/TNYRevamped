<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import AboutMissionSection from '@/Components/About/AboutMissionSection.vue';
import CoreValuesSection from '@/Components/About/CoreValuesSection.vue';
import TeamSection from '@/Components/About/TeamSection.vue';
import AboutCTASection from '@/Components/About/AboutCTASection.vue';

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta page="about" path="/about"
    default-title="About TNY Staffing | NYC Therapy Staffing Agency"
    default-description="Learn how TNY Staffing creates meaningful connections between rehab professionals and NYC healthcare organizations. Proudly serving all five boroughs." />

  <LayoutV2>
    <AboutMissionSection />
    <CoreValuesSection />
    <!-- <TeamSection /> -->
    <AboutCTASection />
  </LayoutV2>
</template>
