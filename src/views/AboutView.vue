<template>
  <div class="bg-vermelho p-44 text-white">
    {{ products2 }}
    <!-- <ProductItem class="m-auto" :product="products2[0]" /> -->
  </div>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import { fetchData } from '@/plugins/axios';

export default {
    components: {
        // ProductItem
    },
    data() {
        return {
            products2: null
        };
    },
    async mounted() {
        try {
            // Fetch products and category concurrently using Promise.all
            const [products, categories, genders] = await Promise.all([
                fetchData('products'),
                fetchData('categories'),
                fetchData('genders')
            ]);

            this.products2 = products;

            // Map through products and assign categories based on category id
            this.products2.forEach((el) => {
                el.category = categories.filter((cat) => cat.id === el.category);
                el.gender = genders.filter((cat) => cat.id === el.gender);
            });

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }
}
</script>
