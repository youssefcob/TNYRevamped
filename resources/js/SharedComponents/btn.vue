<script setup lang="ts">

import Spinner from '@/SharedComponents/Spinner.vue';
const props = defineProps({
    class: {
        type: String,
        default: 'btn'
    },
    loading: {
        type: Boolean,
        default: false
    },
    balls:{
        type: Number,
        default: 4
    }
});

const emit = defineEmits(['click']);

</script>

<template>
    <button :class="'btn ' + props.class" @click="emit('click')" :disabled="props.loading">
        <slot v-if="!props.loading"></slot>
        <Spinner :balls="balls" v-if="props.loading" ></Spinner>
    </button>
</template>

<style lang="scss" scoped>

.btn {
  @extend .btn;
  overflow: hidden;

  &.delete {
      background-color: red;
  }

  &.cancel {
      background-color: $grey;
      color: black;
  }

  &.add {
      background-color: green;
  }

  &[disabled] {
    position:relative;
    cursor:not-allowed;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.4;
        background-color: black;
        // border-radius: ;
    }
    //   background-color: black;
    //   cursor: not-allowed;
  }


}



</style>
