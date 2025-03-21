<script setup lang="ts">
import { ref, type Ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    placeHolder: String,
    required: Boolean,
    label: String
});

const makeid = (length:number)=> {
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

let id = makeid(5);

const input: Ref<HTMLElement | null> = ref(null);
let initialFileName = props.placeHolder || '';

let fileName = ref(props.placeHolder || '');

const checkName = () => {
    return fileName.value === initialFileName;
}
const openFileDialog = () => {
    if (input.value) {
        input.value.click();
    }
}

const emit = defineEmits(['input']);
const HandleFileUpload = (e: Event) => {
   const  files = ((e.target as HTMLInputElement).files)
   if (files && files.length > 0) {
        const formData = new FormData();
        let file = files[0].name;
        formData.append('file', files[0]); 
        if (file) {
        fileName.value = file.split('\\').pop() as string;
    }
        emit('input',formData);

    }

}
</script>


<template>
<div>
    <input type="file" ref="input" :class="`real-file-input ${id}`" @change="HandleFileUpload">
        <label :for="label" class="label ">{{ label }}</label>

    <div :class="`file-input ${id} big-screen`" @click="openFileDialog">

        <div class="file-placeHolder">
            <label>
                {{ fileName }}
            </label>
            <span v-if="required && checkName()" style="color:red;">*</span>
        </div>
        
    </div>
</div>

    
</template>
<style scoped lang="scss">
.real-file-input {
    display: none;
}
.label {
    margin-left: 0.5rem;
    margin-bottom:0.5rem;
    display: block;
    @extend p;
    font-size:1rem;
    font-weight:400;
}

.file-input {




        height: 4rem;

        display: flex;
        justify-content: space-between;
        overflow: hidden;
        align-items: center;
        cursor: pointer;

        @extend .input-field;

        // @media screen and (max-width: 800px) {
        //     display: none;
        // }

        .file-btn {
            height: 100%;
            width: 40%;
            background-color: $blue;
            display: flex;
            align-items: center;
            justify-content: center;
            // @extend .btnfont;
            pointer-events: none;
            text-align: center;
            color: $black;
            // border-radius: $border-radius;


        }

        .file-placeHolder {
            color: rgba(0, 0, 0, 0.6);
            font-size: 1rem;
        }

    }
</style>