<template lang="">
    <main class="product w-96">
            <!-- <GetImg :src="product.img" /> -->
            <img src="../assets/img/boots/F4.png" alt="">
            <router-link to="#">
                    <button class="shadow-xl uppercase mt-2 opacity-0 bg-primary text-white w-full flex items-center justify-center py-4">
                        Comprar
                    </button>
                </router-link>
            <h1 class="text-2xl font-bold pt-4">{{ product.title }}</h1>
            <div class="flex justify-start items-center">
                <button class="mr-2"  v-for="(item, index) in product.categories" :key="index">
                    <small class="p-1 text-white" :class="item.color">{{ item.title }}</small>
                </button>
            </div>
            <p class="text-xl font-bold">R$ {{ product.price }}</p>
            <p>até 10x de R$ {{ getCreditPrice }}</p>
    </main>
</template>
<script>
// import GetImg from './GetImg.vue';    

export default {
    components: {
        // GetImg,
    },
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    computed: {
        getCreditPrice() {
            return Math.floor((this.product.price / 10) * 100) / 100
        }
    },
}
</script>
<style lang="css">
    .product:hover button {
        opacity: 1;
        transition: all .5s ease-in-out;
    }
</style>