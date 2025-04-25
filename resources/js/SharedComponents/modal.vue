<template>

    <div>
        <!-- <button ref="open" @click="openModal">Open</button> -->
        <div class="modal-container">
            <dialog ref="modal">
                <div ref="container">
                    <slot></slot>
                </div>
            </dialog>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

const modal: Ref<HTMLDialogElement | null> = ref(null);

// const open: Ref<HTMLButtonElement | null> = ref(null);
let modalState = ref(false);
const container: Ref<HTMLElement | null> = ref(null);
const openModal = () => {
    if (modal.value) modal.value.showModal();
    setTimeout(() => {
        modalState.value = true;

    }, 100);

}
const closeModal = () => {
    if (modal.value) modal.value.close();
    modalState.value = false;

}

document.addEventListener("click", (e) => {

    if (modalState.value == true && !container.value?.contains(e.target as Node)) {
        modalState.value = false;
        closeModal();
    }
});
defineExpose({
    openModal,
    closeModal
});

</script>

<style scoped lang="scss">
dialog {

    background-color: rgba(44, 50, 51, 0.40);
    // position: fixed;
    border: none;
    // top: 10%;
    // left: 15%;
    user-select: none;
    margin:auto;

    @media screen and (max-width: 800px) {
        // top: 5%;
        // left: 5%;

    }

    // z-index: 4;
    &::backdrop {
        background-color: rgba(44, 50, 51, 0.80);
        user-select: none;

    }

    .container {
        overflow: hidden;
        user-select: none;

    }
}
</style>
