<template>
    <button 
      class="hamburger" 
      :class="{ 'is-active': isOpen }" 
      @click="toggleMenu"
      :aria-label="isOpen ? 'Close Menu' : 'Open Menu'"
    >
      <span class="hamburger-line line-1"></span>
      <span class="hamburger-line line-2"></span>
      <span class="hamburger-line line-3"></span>
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['update']);
  const isOpen = ref(false);
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    emit('update', isOpen.value);
  };

  const closeMenu = () => {
    isOpen.value = false;
    emit('update', isOpen.value);
  };

  defineExpose({ closeMenu });

  </script>
  
  <style lang="scss" scoped>
  .hamburger {
    position: relative;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    
    &:focus {
      outline: none;
    }
  }
  
  .hamburger-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 2px;
    background-color: currentColor;
    transition: all 0.3s ease-in-out;
    
    &.line-1 {
      top: 12px;
    }
    
    &.line-2 {
      top: 19px;
    }
    
    &.line-3 {
      top: 26px;
    }
  }
  
  .hamburger.is-active {
    .line-1 {
      transform: translateX(-50%) rotate(45deg);
      top: 19px;
    }
    
    .line-2 {
      opacity: 0;
    }
    
    .line-3 {
      transform: translateX(-50%) rotate(-45deg);
      top: 19px;
    }
  }
  </style>