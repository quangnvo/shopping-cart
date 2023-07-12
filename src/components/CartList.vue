<template>
    <table class="w-full table-auto">
        <thead>
            <tr>
                <th class="text-left">No.</th>
                <th class="text-left">Name</th>
                <th class="text-left">Price (USD)</th>
                <th class="text-left">
                    <span>Quantity</span>
                </th>
                <th class="text-left">Total (USD)</th>
                <th class="text-left"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart, index) in cartList" :key="index">
                <td scope="row">{{ index + 1 }}</td>
                <td>{{ cart.name }}</td>
                <td>{{ cart.price }}</td>
                <td>
                    <!-- Button increase amount -->
                    <button class="px-3 py-1 border border-black rounded-md" @click="handleUpOrDownAmount(true, cart)">
                        <font-awesome-icon :icon="['fas', 'up-long']" />
                    </button>

                    <span class="mx-3">
                        {{ cart.amount }}
                    </span>

                    <!-- Button decrease amount -->
                    <button class="px-3 py-1 border border-black rounded-md" @click="handleUpOrDownAmount(false, cart)">
                        <font-awesome-icon :icon="['fas', 'down-long']" />
                    </button>
                </td>
                <td>
                    {{ cart.price * cart.amount }}
                </td>
                <td>
                    <!-- Button delete -->
                    <button @click="handleDelete(cart)">
                        <font-awesome-icon :icon="['fas', 'trash']" />
                    </button>
                </td>
            </tr>
            <tr>
                <td scope="row" class="font-bold">Tổng tiền</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{{ sumMoney }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        cartList: {
            type: Array
        }
    },
    computed: {
        sumMoney() {
            return this.cartList.reduce((sum, cart) => sum += cart.price * cart.amount, 0)
        }
    },
    methods: {
        handleDelete(cart) {
            this.$emit("handle-delete-cart", cart)
        },
        handleUpOrDownAmount(status, cart) {
            this.$emit("handle-up-or-down-amount", { status, cart })
        }
    }
}
</script>

<style></style>