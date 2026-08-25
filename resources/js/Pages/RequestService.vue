<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import HireStaffHeroSection from '@/Components/RequestService/HireStaffHeroSection.vue';
import HireStaffFormSection from '@/Components/RequestService/HireStaffFormSection.vue';

interface ServiceItem { id: number; title: string; }

const props = defineProps<{
  services?: ServiceItem[];
  service?: string;
}>();

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta page="request_service" path="/requestService"
    default-title="Request Qualified Healthcare Staff | TNY Staffing"
    default-description="Need immediate coverage or long-term rehab staff? Submit your staffing request to TNY Staffing and get matched with qualified PTs, OTs, and SLPs in NYC." />

  <LayoutV2>
    <HireStaffHeroSection />
    <HireStaffFormSection :services="props.services" :preselected="props.service ?? ''" />
  </LayoutV2>
</template>
