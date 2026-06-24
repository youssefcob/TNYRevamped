<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label?: string;
  placeholder?: string;
  accept?: string;
  error?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Upload file',
});

const emit = defineEmits<{
  input: [value: FormData];
  'update:modelValue': [value: FormData];
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const fileName = ref('');
const hasFile = ref(false);

const openDialog = () => inputRef.value?.click();

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    fileName.value = files[0].name;
    hasFile.value = true;
    const fd = new FormData();
    fd.append('file', files[0]);
    emit('input', fd);
    emit('update:modelValue', fd);
  }
};

const clear = () => {
  fileName.value = '';
  hasFile.value = false;
  if (inputRef.value) inputRef.value.value = '';
};

defineExpose({ clear });
</script>

<template>
  <div class="v2-file">
    <label v-if="label" class="v2-file__label">
      {{ label }}<span v-if="required" class="v2-file__req">&thinsp;*</span>
    </label>

    <input
      ref="inputRef"
      type="file"
      class="v2-file__native"
      :accept="accept"
      @change="handleChange"
    />

    <button
      type="button"
      class="v2-file__btn"
      :class="{
        'v2-file__btn--filled': hasFile,
        'v2-file__btn--error': error,
      }"
      @click="openDialog"
    >
      <span
        class="v2-file__text"
        :class="{ 'v2-file__text--filled': hasFile }"
      >
        {{ hasFile ? fileName : placeholder }}
      </span>

      <span class="v2-file__icon">
        <svg v-if="!hasFile" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.v2-file {
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

  &__native {
    display: none;
  }

  &__btn {
    width: 100%;
    height: 3.75rem;
    padding: 0 1.25rem;
    border: 1.5px dashed rgba($color-dark, 0.25);
    border-radius: 0.75rem;
    background: rgba($color-sand, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;

    &:hover {
      border-color: $color-blue;
      background: rgba($color-blue, 0.04);

      .v2-file__icon { color: $color-blue; }
    }

    &--filled {
      border-style: solid;
      border-color: rgba($color-dark, 0.2);
      background: $color-white;

      .v2-file__icon { color: #22c55e; }
    }

    &--error {
      border-color: #ef4444;
    }
  }

  &__text {
    flex: 1;
    font-family: $font-body;
    font-size: 1.0625rem;
    color: rgba($color-dark, 0.4);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &--filled {
      color: $color-dark;
    }
  }

  &__icon {
    color: rgba($color-dark, 0.35);
    display: flex;
    align-items: center;
    flex-shrink: 0;
    transition: color 0.2s;
  }
}
</style>
