<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import SolutionsHeroSection from '@/Components/Solutions/SolutionsHeroSection.vue';
import StaffingCategoriesSection from '@/Components/Solutions/StaffingCategoriesSection.vue';
import EmployersMidCTA from '@/Components/Solutions/EmployersMidCTA.vue';
import IndustriesWeServeSection from '@/Components/Solutions/IndustriesWeServeSection.vue';
import ForCandidatesCTA from '@/Components/Solutions/ForCandidatesCTA.vue';

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta page="solutions" path="/solutions"
    default-title="Healthcare Staffing Solutions in NYC | TNY Staffing"
    default-description="Explore specialized healthcare staffing solutions in NYC. We connect facilities with qualified PTs, OTs, SLPs, and specialized therapists for per diem and permanent roles." />

  <LayoutV2>
    <SolutionsHeroSection />
    <StaffingCategoriesSection />
    <EmployersMidCTA />
    <IndustriesWeServeSection />
    <ForCandidatesCTA />
  </LayoutV2>
</template>
