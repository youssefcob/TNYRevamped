<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ContactHeroSection from '@/Components/Contact/ContactHeroSection.vue';
import ContactFormSection from '@/Components/Contact/ContactFormSection.vue';
import FaqSection from '@/Components/Contact/FaqSection.vue';

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta page="contact" path="/contact"
    default-title="Contact TNY Staffing | NYC Therapy Staffing Agency"
    default-description="Contact TNY Staffing today. Call (347) 441-4283 to hire rehab professionals or find therapy jobs in NYC. Urgent staffing support available." />

  <LayoutV2>
    <ContactHeroSection />
    <ContactFormSection />
    <FaqSection />
  </LayoutV2>
</template>
