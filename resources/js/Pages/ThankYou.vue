<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { usePage } from '@inertiajs/vue3';
import { computed, provide } from 'vue';
import PageMeta from '@/Components/Admin/PageMeta.vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ThankYouSection from '@/Components/ThankYou/ThankYouSection.vue';

const props = defineProps<{
  type: 'contact' | 'apply' | 'request-service';
}>();

const meta: Record<string, { title: string; description: string }> = {
  contact: {
    title: 'Message Sent | TNY Staffing',
    description: "Thanks for reaching out to TNY Staffing. We've received your message and will be in touch shortly.",
  },
  apply: {
    title: 'Application Received | TNY Staffing',
    description: 'Thank you for applying to TNY Staffing. Our recruitment team will review your profile and reach out soon.',
  },
  'request-service': {
    title: 'Request Submitted | TNY Staffing',
    description: 'Thank you for your staffing request. Our team will review your requirements and reach out within one business day.',
  },
};

const currentMeta = computed(() => meta[props.type] ?? meta.contact);

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <PageMeta :page="`thank-you-${type}`" :path="`/thank-you/${type}`"
    :default-title="currentMeta.title"
    :default-description="currentMeta.description" />

  <LayoutV2>
    <ThankYouSection :type="type" />
  </LayoutV2>
</template>
