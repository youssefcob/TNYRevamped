<script setup lang="ts">
import type { PageContentMap } from '@/interface/Types';
import { Head, usePage } from '@inertiajs/vue3';
import { provide } from 'vue';
import LayoutV2 from '@/Components/HomeV2/LayoutV2.vue';
import ContactHeroSection from '@/Components/Contact/ContactHeroSection.vue';
import ContactFormSection from '@/Components/Contact/ContactFormSection.vue';
import FaqSection from '@/Components/Contact/FaqSection.vue';

provide('pageContent', (usePage().props.pageContent as PageContentMap) ?? {});
</script>

<template>
  <Head>
    <title>Contact TNY Staffing | NYC Therapy Staffing Agency</title>
    <meta name="description" content="Contact TNY Staffing today. Call (347) 441-4283 to hire rehab professionals or find therapy jobs in NYC. Urgent staffing support available." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.tnystaffingco.com/contact" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.tnystaffingco.com/contact" />
    <meta property="og:title" content="Contact TNY Staffing | NYC Therapy Staffing Agency" />
    <meta property="og:description" content="Contact TNY Staffing today. Call (347) 441-4283 to hire rehab professionals or find therapy jobs in NYC. Urgent staffing support available." />
    <meta property="og:site_name" content="TNY Staffing Corporation" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.tnystaffingco.com/contact" />
    <meta name="twitter:title" content="Contact TNY Staffing | NYC Therapy Staffing Agency" />
    <meta name="twitter:description" content="Contact TNY Staffing today. Call (347) 441-4283 to hire rehab professionals or find therapy jobs in NYC. Urgent staffing support available." />
  </Head>

  <LayoutV2>
    <ContactHeroSection />
    <ContactFormSection />
    <FaqSection />
  </LayoutV2>
</template>
