<script setup lang="ts">
defineEmits<{ fill: [] }>();

const isDev = import.meta.env.DEV || (typeof localStorage !== 'undefined' && localStorage.getItem('test') === '1');
</script>

<template>
  <button
    v-if="isDev"
    type="button"
    class="dev-fill-btn"
    title="Fill form with test data (dev only, hidden in production)"
    @click="$emit('fill')"
  >
     Fill Test Data
  </button>
</template>

<style scoped lang="scss">
.dev-fill-btn {
  align-self: center;
  padding: 0.375rem 0.875rem;
  border: 1px dashed rgba(#000, 0.3);
  border-radius: 2rem;
  background: rgba(255, 200, 0, 0.12);
  color: rgba(#000, 0.6);
  font-family: monospace;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(255, 200, 0, 0.22);
    border-color: rgba(#000, 0.45);
  }
}
</style>
