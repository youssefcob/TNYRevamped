<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import HeroSection from '@/Components/HomeV2/HeroSection.vue';
import ForSection from '@/Components/HomeV2/ForSection.vue';
import JoinNetworkSection from '@/Components/HomeV2/JoinNetworkSection.vue';
import SolutionsSection from '@/Components/HomeV2/SolutionsSection.vue';
import WhyTNYSection from '@/Components/HomeV2/WhyTNYSection.vue';
import IndustriesSection from '@/Components/HomeV2/IndustriesSection.vue';
import TestimonialsSection from '@/Components/HomeV2/TestimonialsSection.vue';
import TrustedBy from '@/Components/HomeV2/TrustedBy.vue';
import ResourcesSection from '@/Components/HomeV2/ResourcesSection.vue';
import CtaBanner from '@/Components/HomeV2/CtaBanner.vue';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  content: string | null;
  created_at: string;
}

const props = defineProps<{ news?: NewsItem[]; pageContent?: PageContentMap }>();
provide('pageContent', props.pageContent ?? {});
</script>

<template>
  <PageMeta page="home" path="/"
    default-title="Therapy Staffing Agency in NYC | TNY Staffing Corporation"
    default-description="TNY Staffing connects NY healthcare facilities with credentialed therapy professionals (PT, OT, SLP). Fast 24h placements for hospitals, schools, and clinics."
    default-og-image="https://www.tnystaffingco.com/images/tnylogo.png" />

  <LayoutV2>
    <HeroSection />
    <ForSection />
    <JoinNetworkSection />
    <SolutionsSection />
    <WhyTNYSection />
    <IndustriesSection />
    <TestimonialsSection />
    <!-- <TrustedBy /> -->
    <ResourcesSection :articles="news ?? []" />
    <CtaBanner />
  </LayoutV2>
</template>

<style lang="scss">
.home-v2 {
  * {
    font-family: $font-body;
  }

  h1, h2, h3, h4 {
    font-family: $font-heading;
  }
}
</style>
