<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="#pablo">
                    Logo
                </a>

                <button
                    class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button" @click="toggleNavbar()">
                    Show
                </button>

            </div>
            <div :class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <button @click="handleOpenModalCart">
                            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-white mr-2" />

                            <!-- Total amount -->
                            <span class="text-white">
                                {{ sumAmountProductsInCart }}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Modal -->
    <teleport to="#app">
        <app-modal :isOpen="isOpenModalCart" :handleCloseModal="handleCloseModalCart">
            <section>
                <cart-list :cartList="cartList" @handle-delete-cart="handleDelete"
                    @handle-up-or-down-amount="handleUpOrDownAmount" />
            </section>
        </app-modal>>
    </teleport>
</template>
  
<script>
import CartList from "./CartList.vue"

export default {
    props: {
        cartList: {
            type: Array
        }
    },
    components: {
        CartList
    },
    data() {
        return {
            showMenu: false,
            isOpenModalCart: false
        }
    },
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu;
        },
        handleOpenModalCart() {
            this.isOpenModalCart = true
        },
        handleCloseModalCart() {
            this.isOpenModalCart = false
        },
        handleDelete(cart) {
            this.$emit("handle-delete-cart", cart)
        },
        handleUpOrDownAmount(params) {
            this.$emit('handle-up-or-down-amount', params)
        }
    },
    computed: {
        sumAmountProductsInCart() {
            return this.cartList.reduce((sum, cart) => sum += cart.amount, 0)
        }
    }
}
</script>