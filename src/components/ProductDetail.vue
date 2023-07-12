<template>
    <section>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4">
                <img class="rounded-md" :src="productDetail.image" :alt="productDetail.name">
            </div>
            <div class="col-span-8 bg-gray-100">Column 2</div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        productDetail: Object
    }
}
</script>

<style></style>