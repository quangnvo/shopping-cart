<template>
    <section class="product-list px-10">
        <h1 class="text-center font-bold text-3xl my-10">
            Special products
        </h1>

        <div class="pro-list grid grid-cols-1 lg:grid-cols-4 gap-10 my-10">
            <div v-for="(productItem, index) in productList" :key="index">
                <product-item :productItem="productItem" @handle-buy="$emit('handle-buy', productItem)" />
            </div>
        </div>
    </section>
</template>

<script>
import ProductItem from "./ProductItem.vue"
import sp1 from "../assets/images/sp1.webp"
import sp2 from "../assets/images/sp2.webp"
import sp3 from "../assets/images/sp3.webp"
import sp4 from "../assets/images/sp4.webp"
import sp5 from "../assets/images/sp5.webp"
import sp6 from "../assets/images/sp6.webp"
import sp7 from "../assets/images/sp7.webp"
import sp8 from "../assets/images/sp8.webp"

export default {
    components: {
        ProductItem
    },
    data() {
        return {
            productList: [
                {
                    id: 1,
                    name: "Keyboard",
                    image: sp1,
                    price: 100,
                    sale: 10 / 100,
                    quantityInStock: 10,
                },
                {
                    id: 2,
                    name: "Mouse Marvel",
                    image: sp2,
                    price: 145,
                    sale: 5 / 100,
                    quantityInStock: 15,
                },
                {
                    id: 3,
                    name: "Laptop Gaming",
                    image: sp3,
                    price: 11,
                    sale: 0 / 100,
                    quantityInStock: 5,
                },
                {
                    id: 4,
                    name: "Mousepad",
                    image: sp4,
                    price: 45,
                    sale: 5 / 100,
                    quantityInStock: 35,
                },
                {
                    id: 5,
                    name: "Tai Nghe",
                    image: sp5,
                    price: 78,
                    sale: 10 / 100,
                    quantityInStock: 10,
                },
                {
                    id: 6,
                    name: "Sony",
                    image: sp6,
                    price: 97,
                    sale: 5 / 100,
                    quantityInStock: 15,
                },
                {
                    id: 7,
                    name: "Monitor View Sonic",
                    image: sp7,
                    price: 200,
                    sale: 10 / 100,
                    quantityInStock: 10,
                },
                {
                    id: 8,
                    name: "Microphone",
                    image: sp8,
                    price: 169,
                    sale: 0 / 100,
                    quantityInStock: 7,
                },
            ],
        }
    },
    methods: {}
}
</script>

<style></style>