<template>
    <div v-if="isOpen" class="modal" @click="handleClose">
        <div class="modal__container" @click.stop>

            <!-- Header -->
            <div class="modal__header flex justify-between items-center mb-3">
                <h3 class="modal__title font-bold text-2xl">Cart</h3>
                <div class="modal__close" @click="handleClose">
                    <font-awesome-icon :icon="['fas', 'xmark']"
                        class="border border-black p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer" />
                </div>
            </div>
            <hr>

            <!-- Body -->
            <div class="modal__body mt-3">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        isOpen: {
            type: Boolean
        },
        handleCloseModal: {
            type: Function
        }
    },
    methods: {
        handleClose() {
            this.handleCloseModal()
        }
    }
}
</script>

<style>
.modal {
    position: fixed;
    z-index: 5;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal__container {
    width: 70vw;
    margin: auto;
    background: white;
    border: 1px solid #888;
    padding: 20px;
    border-radius: 8px;
}
</style>