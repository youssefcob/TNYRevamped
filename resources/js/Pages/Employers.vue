<script setup lang="ts">
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import EmployerHeroSection from '@/Components/ForEmployers/EmployerHeroSection.vue';
import ChallengesSection from '@/Components/ForEmployers/ChallengesSection.vue';
import WhyTNYSection from '@/Components/ForEmployers/WhyTNYSection.vue';
import HowItWorksSection from '@/Components/ForEmployers/HowItWorksSection.vue';
import EmployerCtaBanner from '@/Components/ForEmployers/EmployerCtaBanner.vue';
</script>

<template>
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
