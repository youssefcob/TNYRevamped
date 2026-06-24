<script setup lang="ts">
import { ref, watch } from 'vue';
import { vMaska } from 'maska/vue';

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: boolean;
  disabled?: boolean;
  height?: string;
  mask?: string;
  modelValue?: string;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), { type: 'text' });

const emit = defineEmits<{
  input: [value: string];
  'update:modelValue': [value: string];
}>();

const inputValue = ref(props.modelValue ?? '');

watch(() => props.modelValue, (v) => {
  if (v !== undefined && v !== inputValue.value) inputValue.value = v;
});

watch(inputValue, (v) => {
  emit('input', v);
  emit('update:modelValue', v);
});

const clear = () => { inputValue.value = ''; };

defineExpose({ clear });
</script>

<template>
  <div class="v2-input">
    <label v-if="label" class="v2-input__label">
      {{ label }}<span v-if="required" class="v2-input__req">&thinsp;*</span>
    </label>

    <textarea
      v-if="height"
      v-model="inputValue"
      class="v2-input__field v2-input__field--area"
      :class="{ 'v2-input__field--error': error }"
      :style="{ height, resize: 'none' }"
      :placeholder="placeholder"
      :disabled="disabled"
    />

    <input
      v-else
      v-model="inputValue"
      v-maska="mask"
      class="v2-input__field"
      :class="{ 'v2-input__field--error': error }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<style scoped lang="scss">
.v2-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

  &__field {
    width: 100%;
    height: 3.75rem;
    padding: 0 1.25rem;
    border: 1px solid rgba($color-dark, 0.2);
    border-radius: 0.75rem;
    font-family: $font-body;
    font-size: 1.0625rem;
    color: $color-dark;
    background: $color-white;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder {
      color: rgba($color-dark, 0.4);
    }

    &:focus {
      border-color: $color-blue;
      box-shadow: 0 0 0 3px rgba($color-blue, 0.12);
    }

    &:disabled {
      background: rgba($color-dark, 0.05);
      color: rgba($color-dark, 0.4);
      cursor: not-allowed;
    }

    &--area {
      height: auto;
      padding: 1rem 1.25rem;
    }

    &--error {
      border-color: #ef4444;

      &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
      }
    }
  }
}
</style>
