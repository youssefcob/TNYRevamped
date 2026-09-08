<script setup lang="ts">
import type { PageContentMap, SolutionDetail } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import SolutionDetailHero from '@/Components/Solutions/detail/SolutionDetailHero.vue';
import SolutionOverviewSection from '@/Components/Solutions/detail/SolutionOverviewSection.vue';
import SolutionRolesSection from '@/Components/Solutions/detail/SolutionRolesSection.vue';
import SolutionFocusSection from '@/Components/Solutions/detail/SolutionFocusSection.vue';
import SolutionSettingsSection from '@/Components/Solutions/detail/SolutionSettingsSection.vue';
import SolutionWhySection from '@/Components/Solutions/detail/SolutionWhySection.vue';
import SolutionDetailCTA from '@/Components/Solutions/detail/SolutionDetailCTA.vue';

const props = defineProps<{
  solution: SolutionDetail;
  pageKey: string;
  path: string;
}>();

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta :page="props.pageKey" :path="props.path"
    :default-title="props.solution.meta_title"
    :default-description="props.solution.meta_description"
    :default-og-image="props.solution.image" />

  <LayoutV2>
    <SolutionDetailHero :solution="props.solution" :page-key="props.pageKey" />
    <SolutionOverviewSection :solution="props.solution" :page-key="props.pageKey" />
    <SolutionRolesSection v-if="props.solution.roles?.length" :solution="props.solution" :page-key="props.pageKey" />
    <SolutionFocusSection v-if="props.solution.focus?.length" :solution="props.solution" :page-key="props.pageKey" />
    <SolutionSettingsSection v-if="props.solution.settings?.length" :solution="props.solution" :page-key="props.pageKey" />
    <SolutionWhySection v-if="props.solution.why?.length" :solution="props.solution" :page-key="props.pageKey" />
    <SolutionDetailCTA :solution="props.solution" :page-key="props.pageKey" />
  </LayoutV2>
</template>
