<template>
  <div class="bg-vermelho w-screen h-screen gap-2 justify-center items-center text-white flex">
        <div class="w-6/12" v-for="product in products2" :key="product.id">
            <ProductItem class="m-auto" :product="product" />
            {{ products2 }}
        </div>
  </div>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import { products } from '../lib/product';

export default {
    components: {
        ProductItem
    },
    data() {
        return {
            products2: null
        };
    },
    async mounted() {
        try {
            this.products2 = await products()
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }
}
</script>
