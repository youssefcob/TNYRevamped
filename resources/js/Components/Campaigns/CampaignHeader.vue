<template>
  <header class="topbar">
    <div class="topbar__inner">
      <div class="crumb"><a href="#top">TNY Staffing</a><span>/</span><span>Therapy &amp; Healthcare Jobs · NYC</span></div>
      <a class="topbar__phone" href="tel:+13474414283"><span class="phone-icon" aria-hidden="true">⌕</span> Talk to a recruiter <span>(347) 441-4283</span></a>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.topbar { height: 55px; color: #f6f7f9; background: linear-gradient(105deg,#06264b 0%,#29445e 55%,#747873 100%); border-bottom: 1px solid rgba(255,255,255,.17); }
.topbar__inner { width: min(1200px, calc(100% - 48px)); height: 100%; margin: auto; display: flex; justify-content: space-between; align-items: center; font-size: 14px; letter-spacing: .1px; }
.crumb, .topbar__phone { display: flex; gap: 12px; align-items: center; text-decoration: none; }
.crumb a { text-decoration: none; }
.crumb a:hover, .topbar__phone:hover { color: #79d5ff; }
.phone-icon { font-size: 24px; line-height: 1; transform: rotate(-40deg); }

@media (max-width: 700px) {
  .topbar { height: auto; min-height: 54px; }
  .topbar__inner { width: calc(100% - 36px); padding: 12px 0; align-items: flex-start; gap: 8px; flex-direction: column; font-size: 12px; }
  .crumb { gap: 8px; }
  .topbar__phone { gap: 7px; }
}
</style>
