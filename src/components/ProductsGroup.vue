<template lang="">
    <main>
        <h1 class="uppercase">
            Destaque Masculino
        </h1>
        <div clas="flex" v-for="(item, index) in products" :key="index">
            <ProductCard />
        </div>
    </main>
</template>
<script>
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            products: ['','',''],
        }
    }
};
</script>
<style lang="">
    
</style>