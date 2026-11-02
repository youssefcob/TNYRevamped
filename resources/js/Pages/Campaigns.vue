<template>
  <Head title="Therapy &amp; Healthcare Jobs NYC · TNY Staffing" />

  <div class="site-shell">
    <CampaignHeader />

    <main id="top">
      <CampaignHero :form="form" />

      <CampaignOpenRoles @select-role="selectRole" />

      <CampaignWorkSettings
        :workplaces="form.workplaces"
        @toggle-workplace="toggleWorkplace"
      />

      <CampaignHowItWorks />

      <CampaignWhyUs />
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Head } from '@inertiajs/vue3'
import CampaignHeader from '@/Components/Campaigns/CampaignHeader.vue'
import CampaignHero from '@/Components/Campaigns/CampaignHero.vue'
import CampaignOpenRoles from '@/Components/Campaigns/CampaignOpenRoles.vue'
import CampaignWorkSettings from '@/Components/Campaigns/CampaignWorkSettings.vue'
import CampaignHowItWorks from '@/Components/Campaigns/CampaignHowItWorks.vue'
import CampaignWhyUs from '@/Components/Campaigns/CampaignWhyUs.vue'

const form = reactive({
  role: 'Rehab Aide',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  workplaces: [],
  schedule: '',
  experience: '',
})

function selectRole(role) {
  form.role = role
}

function toggleWorkplace(place) {
  form.workplaces = form.workplaces.includes(place)
    ? form.workplaces.filter((item) => item !== place)
    : [...form.workplaces, place]
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
:root { font-family: 'DM Sans', 'Avenir Next', Avenir, Arial, sans-serif; color: #242426; font-synthesis: none; text-rendering: optimizeLegibility; font-smooth: always; --navy: #092749; --ink: #102f43; --blue: #20a8df; --orange: #ff9932; --muted: #6d7886; --line: #d9dce0; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-width: 320px; }
button, input, select { font: inherit; }
a { color: inherit; }
.site-shell { width: 100%; overflow: hidden; }

@media (prefers-reduced-motion: reduce) { *,*::before,*::after { scroll-behavior:auto!important; transition:none!important; } }
</style>
