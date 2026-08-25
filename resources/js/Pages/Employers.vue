<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import EmployerHeroSection from '@/Components/ForEmployers/EmployerHeroSection.vue';
import ChallengesSection from '@/Components/ForEmployers/ChallengesSection.vue';
import WhyTNYSection from '@/Components/ForEmployers/WhyTNYSection.vue';
import HowItWorksSection from '@/Components/ForEmployers/HowItWorksSection.vue';
import EmployerCtaBanner from '@/Components/ForEmployers/EmployerCtaBanner.vue';

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta page="employers" path="/employers"
    default-title="Reliable Healthcare Staffing in NYC | TNY Staffing"
    default-description="TNY Staffing provides reliable healthcare staffing in NYC. We supply credentialed PTs, OTs, and SLPs for emergency coverage and long-term workforce solutions." />

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
