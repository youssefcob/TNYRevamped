<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { provide } from 'vue';
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

const props = defineProps<{ news?: NewsItem[]; pageContent?: Record<string, string | null> }>();
provide('pageContent', props.pageContent ?? {});
</script>

<template>
  <Head>
    <title>Therapy Staffing Agency in NYC | TNY Staffing Corporation</title>
    <meta name="title" content="Therapy Staffing Agency in NYC | TNY Staffing Corporation" />
    <meta name="description" content="TNY Staffing connects NY healthcare facilities with credentialed therapy professionals (PT, OT, SLP). Fast 24h placements for hospitals, schools, and clinics." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/" />
    <meta property="og:title" content="Therapy Staffing Agency in NYC | TNY Staffing Corporation" />
    <meta property="og:description" content="TNY Staffing connects NY healthcare facilities with credentialed therapy professionals (PT, OT, SLP). Fast 24h placements for hospitals, schools, and clinics." />
    <meta property="og:image" content="https://www.tnystaffingco.com/images/tnylogo.png" />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/" />
    <meta name="twitter:title" content="Therapy Staffing Agency in NYC | TNY Staffing Corporation" />
    <meta name="twitter:description" content="TNY Staffing connects NY healthcare facilities with credentialed therapy professionals (PT, OT, SLP). Fast 24h placements for hospitals, schools, and clinics." />
    <meta name="twitter:image" content="https://www.tnystaffingco.com/images/tnylogo.png" />
  </Head>

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
