<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue';

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    default: () => [],
  },
  value: {
    type: Array as () => string[],
    default: () => [],
  },
});
const emit = defineEmits(['update:modelValue']);



const selected = ref<string[]>([...props.value]);

watch(
  () => props.modelValue,
  (val) => {
    selected.value = [...val];
  }
);

console.log(props.value);

function toggleDay(day: string) {
  if (selected.value.includes(day)) {
    selected.value = selected.value.filter((d) => d !== day);
  } else {
    selected.value.push(day);
  }
  console.log(selected.value);
  emit('update:modelValue', selected.value);
}
</script>



<template>
  <div class="workdays-container">
    <div class="workdays-label">Work Days</div>
    <div class="workdays-box input-field">
      <div class="workdays-list">
        <button
          v-for="day in days"
          :key="day"
          :class="['workday-btn', { selected: selected.includes(day) }]"
          @click="toggleDay(day)"
          type="button"
        >
          {{ day }}
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.workdays-container {
  width: 100%;
}
.workdays-label {
    @extend p;
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
}
.workdays-box {
  padding: 0.7rem;
}
.workdays-title {
  font-size: 1.6rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #111;
}
.workdays-list {
  display: flex;
  justify-content: space-around;
//   gap: 2rem;
  width: 100%;
  @include media-max(phone){
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 0.5rem;
  }
}
.workday-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100vh;
  border: 2px solid rgba(0, 0, 0, 0.6);
  background: #fff;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8rem;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.workday-btn.selected {
  background: #19A7CE;
  color: #fff;
  border: 2px solid #19A7CE;
}
@media (max-width: 800px) {
  .workdays-list {
    gap: 1.2rem;
  }
  .workday-btn {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
}
</style>
