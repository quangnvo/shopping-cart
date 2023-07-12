<template>
    <div class="select-none mb-6 w-full">
        <div class="relative pb-64">
            <a href="#" class="cursor-pointer">
                <img class="absolute w-full h-full rounded-lg object-cover border-b shadow-md cursor-pointer grayscale"
                    :src="productItem.image" :alt="productItem.name" />
            </a>
        </div>

        <div class="px-4 -mt-16 relative">
            <div class="bg-white rounded-lg shadow-lg border">
                <div class="p-5">
                    <div class="flex justify-between items-center">
                        <div class="opacity-75 text-xs">
                            <a class="hover:underline" href="#">
                                Brand
                            </a>
                        </div>

                        <!-- Button add to cart -->
                        <button class="rounded-lg bg-green-200 px-4 py-1 font-semibold"
                            @click="$emit('handle-buy', productItem)">
                            Add to cart
                        </button>
                    </div>

                    <a class="text-gray-800 block mt-2 truncate hover:underline font-medium text-lg" href="#">
                        {{ productItem.name }}
                    </a>
                </div>

                <div class="flex justify-between items-center pb-3 px-4">
                    <div>
                        <div class="text-gray-800 text-lg">
                            <span class="font-medium">
                                ${{ productItem.price }}
                            </span>
                        </div>
                    </div>

                    <div>
                        <button class="btn-link flex items-center text-xs text-indigo-600 hover:underline font-bold"
                            @click="handleOpenModalDetail">
                            Detail &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <teleport to="#app">
        <app-modal :isOpen="isOpenModalDetail" :handleCloseModal="handleCloseModalDetail">
            <section>
                <product-detail :productDetail="productItem" />
            </section>
        </app-modal>>
    </teleport>
</template>

<script>
import ProductDetail from "./ProductDetail.vue"

export default {
    components: {
        ProductDetail
    },
    data() {
        return {
            isOpenModalDetail: false
        }
    },
    props: {
        productItem: {
            type: Object
        }
    },
    methods: {
        handleCloseModalDetail() {
            this.isOpenModalDetail = false
        },
        handleOpenModalDetail() {
            this.isOpenModalDetail = true
        }
    }
}
</script>

<style></style>