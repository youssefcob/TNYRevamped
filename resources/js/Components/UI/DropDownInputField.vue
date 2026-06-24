<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

interface Props {
  label?: string;
  placeholder?: string;
  list?: string[];
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  modelValue?: string;
  default?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  input: [value: string];
  'update:modelValue': [value: string];
}>();

const containerRef = ref<HTMLElement | null>(null);
const selected = ref(props.modelValue ?? props.default ?? '');
const searchQuery = ref('');
const isOpen = ref(false);

const filteredList = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q || !props.list) return props.list ?? [];
  return props.list.filter(item => item.toLowerCase().includes(q));
});

const openDropdown = () => {
  if (!props.disabled) {
    searchQuery.value = '';
    isOpen.value = true;
  }
};

const selectItem = (item: string) => {
  selected.value = item;
  isOpen.value = false;
  emit('input', item);
  emit('update:modelValue', item);
};

const clearSelection = (e: MouseEvent) => {
  e.stopPropagation();
  selected.value = '';
  emit('input', '');
  emit('update:modelValue', '');
};

const onClickOutside = (e: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
};

watch(() => props.modelValue, (v) => {
  if (v !== undefined) selected.value = v;
});

onMounted(() => {
  document.addEventListener('mousedown', onClickOutside);
  if (props.default && !selected.value) {
    selected.value = props.default;
    emit('input', props.default);
    emit('update:modelValue', props.default);
  }
});

onUnmounted(() => {
  document.removeEventListener('mousedown', onClickOutside);
});

const clear = () => {
  selected.value = '';
  emit('input', '');
  emit('update:modelValue', '');
};

const defaultValue = (value: string) => {
  selected.value = value;
  emit('input', value);
  emit('update:modelValue', value);
};

defineExpose({ clear, defaultValue });
</script>

<template>
  <div ref="containerRef" class="v2-select">
    <label v-if="label" class="v2-select__label">
      {{ label }}<span v-if="required" class="v2-select__req">&thinsp;*</span>
    </label>

    <div
      class="v2-select__control"
      :class="{
        'v2-select__control--open': isOpen,
        'v2-select__control--error': error,
        'v2-select__control--disabled': disabled,
      }"
      @click="openDropdown"
    >
      <input
        v-if="isOpen"
        v-model="searchQuery"
        class="v2-select__search"
        :placeholder="selected || placeholder"
        autofocus
        @click.stop
      />
      <span
        v-else
        class="v2-select__value"
        :class="{ 'v2-select__value--placeholder': !selected }"
      >
        {{ selected || placeholder }}
      </span>

      <div class="v2-select__icons">
        <button
          v-if="selected && !disabled"
          type="button"
          class="v2-select__clear"
          @click="clearSelection"
          tabindex="-1"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <svg
          class="v2-select__chevron"
          :class="{ 'v2-select__chevron--open': isOpen }"
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round" stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>

    <Transition name="v2-drop">
      <div v-if="isOpen" class="v2-select__dropdown">
        <div
          v-for="item in filteredList"
          :key="item"
          class="v2-select__option"
          :class="{ 'v2-select__option--selected': item === selected }"
          @mousedown.prevent="selectItem(item)"
        >
          <svg v-if="item === selected" class="v2-select__option-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {{ item }}
        </div>
        <div v-if="filteredList.length === 0" class="v2-select__empty">
          No options found
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.v2-select {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  &__label {
    font-family: $font-body;
    font-weight: $fw-medium;
    font-size: 0.9375rem;
    color: $color-dark;
    padding-left: 0.25rem;
  }

  &__req {
    color: #ef4444;
    font-weight: $fw-semibold;
  }

  &__control {
    width: 100%;
    height: 3.75rem;
    padding: 0 1rem 0 1.25rem;
    border: 1px solid rgba($color-dark, 0.2);
    border-radius: 0.75rem;
    background: $color-white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
    user-select: none;

    &--open {
      border-color: $color-blue;
      box-shadow: 0 0 0 3px rgba($color-blue, 0.12);
    }

    &--error {
      border-color: #ef4444;

      &:not(.v2-select__control--open) {
        box-shadow: none;
      }
    }

    &--disabled {
      background: rgba($color-dark, 0.05);
      cursor: not-allowed;
    }
  }

  &__search {
    flex: 1;
    border: none;
    outline: none;
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    background: transparent;
    min-width: 0;

    &::placeholder {
      color: rgba($color-dark, 0.4);
    }
  }

  &__value {
    flex: 1;
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &--placeholder {
      color: rgba($color-dark, 0.4);
    }
  }

  &__icons {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  &__clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: rgba($color-dark, 0.4);
    transition: color 0.15s, background 0.15s;

    &:hover {
      color: $color-dark;
      background: rgba($color-dark, 0.07);
    }
  }

  &__chevron {
    color: rgba($color-dark, 0.45);
    transition: transform 0.2s, color 0.2s;

    &--open {
      transform: rotate(180deg);
      color: $color-blue;
    }
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 0.375rem);
    left: 0;
    width: 100%;
    background: $color-white;
    border: 1px solid rgba($color-dark, 0.1);
    border-radius: 0.75rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    z-index: 50;
    max-height: 14rem;
    overflow-y: auto;
    padding: 0.375rem;

    &::-webkit-scrollbar { width: 5px; }
    &::-webkit-scrollbar-track { border-radius: 1rem; }
    &::-webkit-scrollbar-thumb {
      background: rgba($color-dark, 0.15);
      border-radius: 1rem;
    }
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
      background: rgba($color-blue, 0.07);
    }

    &--selected {
      background: rgba($color-blue, 0.1);
      color: $color-blue;
      font-weight: $fw-medium;
    }
  }

  &__option-check {
    flex-shrink: 0;
    color: $color-blue;
  }

  &__empty {
    padding: 0.875rem 1rem;
    font-family: $font-body;
    font-size: 1rem;
    color: rgba($color-dark, 0.4);
    text-align: center;
  }
}

.v2-drop-enter-active,
.v2-drop-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}
.v2-drop-enter-from,
.v2-drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
