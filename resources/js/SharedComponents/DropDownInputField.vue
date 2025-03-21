<script setup lang="ts">

import { ref, watch, onMounted, onUnmounted, type Ref } from 'vue';

const props = defineProps({
    required: Boolean,
    list: Array as () => string[],
    placeHolder: String,
    watch: Boolean,
    disabled: Boolean,
    error: Boolean,
    default: String,
    background:String,
    label: String,
});
let filteredList = ref(props.list);
const makeid = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

let inputField = ref(null);
let id = makeid(5);
const input: Ref<string> = ref('');
const show: Ref<boolean> = ref(false);

const clear = () => {
    input.value = '';
    emit(`update:modelValue`, input.value);
    emit(`input`, input.value);
}

const defaultValue = (value : string) => {
    input.value = value;
    if (input.value.length > 0) {
    asterisk.value?.classList.add('active');
} else {
    asterisk.value?.classList.remove('active');
}
    emit(`update:modelValue`, input.value);
    emit(`input`, input.value);
}

const showDropDown = () => {
    filteredList.value = props.list;
    show.value = true;
}

const hideDropDown = () => {
    setTimeout(() => {
        show.value = false;
    }, 200);
}


const emit = defineEmits([`input`,'update:modelValue']);

const changeInput = (insurance: string) => {
    input.value = insurance;
    emit(`update:modelValue`, input.value);
    emit(`input`, input.value);
    if (input.value.length > 0) {
    asterisk.value?.classList.add('active');
}
    show.value = false;

}

const asterisk: Ref<HTMLElement | null> = ref(null);

const filterList = () => {
    
    if (input.value.length > 0) {
        asterisk.value?.classList.add('active');
    } else {
        asterisk.value?.classList.remove('active');
    }
    if (props.list) {
        filteredList.value = props.list.filter(listItem => listItem.toLowerCase().startsWith(input.value.toLowerCase()));
    }

    emit(`input`, input.value);


}


let handleClickOutside: (e: Event) => void;

onMounted(() => {
    handleClickOutside = (e: Event) => {
        const dropdownElement = document.querySelector(`.drpdown-btn.${id}`);
        if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
            // if (e.target !== dropdownElement) {
            show.value = false;

            // console.log(show.value);
            // }

        }
    };
    document.addEventListener('click', handleClickOutside);

    if(props.default){
        input.value = props.default;
    }


});
onMounted(() => {

if (input.value.length > 0) {
    asterisk.value?.classList.add('active');
} else {
    asterisk.value?.classList.remove('active');
}
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});

defineExpose({
    clear,
    defaultValue
});
</script>

<template>
<div>
    <label :for="label" class="label ">{{ label }}</label>
    <div :class="`drpdown-btn ${id}`" @click="showDropDown" >

        <div class="required">
            <input :name="label"  :disabled="props.disabled" ref="inputField" class="input-field " @input="filterList()" @focus="showDropDown"  @focusout="hideDropDown"
                v-model="input" :style="`width:100%;$;${($props.error) ? 'border-color:red' : ''};${background? `background-color:${background}`:'white'}`" type="text">


            <label ref="asterisk" :class="`asterisk `" >{{ $props.placeHolder }}<span v-if="props.required" style="color:red">&nbsp;*</span></label>
            <label :class="`arrowdown `" ref="arrowdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="0.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </label>



        </div>
        <div class="dropdown-wrapper {{ id }}" v-if="show && filteredList?.length && !$props.disabled">
            <div class="dropdown-list {{ identifier }}">
                <div class="dropdown-item "  v-for="insurance in filteredList" :key="insurance"
                    @click="changeInput(insurance)">{{ insurance }}</div>

            </div>
        </div>

    </div>
</div>

</template>

<style scoped lang="scss">
.label {
    margin-left: 0.5rem;
    margin-bottom:0.5rem;
    display: block;
    @extend p;
    font-size:1rem;
    font-weight:400;
}

.drpdown-btn {
    >.required {
        >.input-field {
            transition: all 0.3s ease-in-out;
            height:4rem;

            // @media screen and (max-width: 800px) {
            //     height: 6rem;
            //     padding: 18px;
            // }

            &[disabled] {
                background-color: $grey;
            }

        }
    }

    position: relative;

    @media screen and (min-width: 500px) {
        .dropdown-wrapper {
            position: absolute;
            // top: calc(100%);
            border-radius: 1.125rem;
            border: 1px solid $blue;
            width: 100%;
            background-color: $white;
            z-index: 1;
            // @include flex();
            display:flex;
            justify-content: flex-start;
            align-items: flex-start;
            max-height: 10.5rem;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 10px;
                background-color: white;
                // border-radius:rem;
            }

            /* Track */
            &::-webkit-scrollbar-track {
                border-radius: 1.125rem;
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: $navy;
                border-radius: 1.125rem;
            }


            .dropdown-list {
                width: 98%;

                .dropdown-item {
                    cursor: pointer;
                    padding: 1rem 1rem;
                    border-radius: 1.25rem;
                    border: none;

                    &:hover {
                        background-color: lighten($blue, 30%);
                        // color: $white;
                    }

                }
            }
        }
    }

    @media screen and (max-width: 500px) {
        .dropdown-wrapper {
            // position: absolute;
            border-radius: 1.125rem;
            border: 1px solid $blue;
            width: 100%;
            height: fit-content;
            max-height: 150px;
            overflow-y: scroll;
            background-color: $white;
            z-index: 1;
            // @include flex();
            display:flex;
            justify-content: flex-start;
            align-items: flex-start;

 
            .dropdown-list {
                height: 95%;
                width: 98%;
                



                .dropdown-item {
                    padding: 10px;
                    font-size: 13px;
                    margin-left: 6px;

                    &:hover {
                        background-color: $blue;
                    }
                    
                }
            }
        }

    }
    

}

.required {
    position: relative;

    .arrowdown,
    .asterisk {
        position: absolute;
        display: flex;

     
    }

 
    .asterisk {
        left: 1.25rem;
        top: 35%;
        color: rgba(0, 0, 0, 0.793);
        font-size: 1.3rem;
        pointer-events: none;
        transition: all 0.3s ease-in-out;

        span{
            position: absolute;
            top: -40%;
            right:-1rem;
        }


        &.active {
            top: -1.5rem;
            left:.7rem;
            // background-color: white;
            transition: all 0.3s ease-in-out;
            font-size: 0.9rem;
            display:none;
        }

        @media screen and (max-width: 800px) {
            left: 18px;
        }

        @media screen and (max-width: 800px) {
            font-size: 13px;
        }
    }
    .arrowdown {
        right: 3%;
        top: 34%;
        &.rtl {
            left: 3%;
        }
    }
}
</style>