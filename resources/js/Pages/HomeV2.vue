<script setup lang="ts">
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
</script>

<template>
  <LayoutV2>
    <HeroSection />
    <ForSection />
    <JoinNetworkSection />
    <SolutionsSection />
    <WhyTNYSection />
    <IndustriesSection />
    <TestimonialsSection />
    <!-- <TrustedBy /> -->
    <ResourcesSection />
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
