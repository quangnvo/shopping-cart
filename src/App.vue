<template>
	<header>
		<the-header :cartList="cartList" @handle-delete-cart="handleDelete"
			@handle-up-or-down-amount="handleUpOrDownAmount" />
	</header>
	<main>
		<product-list @handle-buy="handleBuy" />
	</main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import ProductList from "./components/ProductList.vue"

export default {
	name: "App",
	components: {
		TheHeader,
		ProductList
	},
	data() {
		return {
			cartList: []
		}
	},
	methods: {
		handleBuy(productItem) {
			const index = this.cartList.findIndex(cart => cart.id === productItem.id)
			if (index !== -1) {
				this.cartList[index].amount += 1
			} else {
				const newProductItem = { ...productItem, amount: 1 }
				this.cartList.push(newProductItem)
			}
		},

		handleDelete(cart) {
			this.cartList = this.cartList.filter(cartItem => cartItem.id !== cart.id)
		},

		handleUpOrDownAmount(params) {
			const { status, cart } = params
			const index = this.cartList.findIndex(item => item.id === cart.id)
			if (index !== -1) {
				if (status) {
					this.cartList[index].amount += 1
				} else {
					if (this.cartList[index].amount > 1) {
						this.cartList[index].amount -= 1
					}
				}
			}
		}
	}
}
</script>

<style></style>