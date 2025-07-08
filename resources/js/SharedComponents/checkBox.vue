<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps({
    label: String,
    value: Boolean,
    trueText: String,
    falseText: String
});

const emit = defineEmits(['update:value']);

const handleChange = () => {
    emit('update:value', !props.value);
    currentValue.value = !currentValue.value;
}
const currentValue = ref(props.value ? true : false);
console.log(currentValue.value);
</script>

<template>
    <div class="checkbox-container" @click="handleChange">
        <label class="label">{{ label }}</label>
        <div class="checkbox-wrapper input-field">
            <input type="checkbox" v-model="currentValue"  class="checkbox-input"
                id="custom-checkbox" />
            <span class="custom-checkbox" >
                <svg v-if="currentValue" width="20" height="20" viewBox="0 0 20 20">
                    <polyline points="4,11 9,16 16,6" stroke="#fff" stroke-width="2.5" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <label class="asterisk" ref="asterisk">{{ currentValue ? trueText || "yes" : falseText || "no" }}</label>
        </div>
    </div>
</template>
<style scoped lang="scss">
.label {
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    display: block;
    @extend p;
    font-size: 1rem;
    font-weight: 400;
}




>.input-field {
    height: 4rem;
    transition: all 0.3s ease-in-out;

    &[disabled] {
        background-color: #959494;
    }

    // @media screen and (max-width: 800px) {
    //     height: 6rem;
    //     // padding: 18px;
    // }

}



.asterisk {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    pointer-events: none;
    transition: all 0.3s ease-in-out;

    span {
        position: absolute;
        top: -40%;

        // right:-1rem;

    }


    &.active {
        // top: -1.5rem !important;
        // left: .7rem;
        // background-color: white;
        // transition: all 0.3s ease-in-out;
        // font-size: 0.9rem;
        display: none;
    }

    @media screen and (max-width: 800px) {
        left: 18px;
    }

    @media screen and (max-width: 800px) {
        font-size: 13px;
    }
}



.checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.checkbox-input {
    display: none;
}

.custom-checkbox {
    width: 1.5rem;
    height: 1.5rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    background: #fff;
    border-radius: 0.3rem;
    border: 2px solid rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.2s;
}

.custom-checkbox svg {
    display: block;
}

.checkbox-input:checked+.custom-checkbox {
    border-color: #19A7CE;
    background-color: #19A7CE;
}
</style>