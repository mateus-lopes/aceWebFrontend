<template lang="">
  <main>
    <SectionTitle :dark="dark" :title="title" />
    <ProductSlider :dark="dark" :type="getProducts" />
  </main>
</template>

<script>
import SectionTitle from '@/components/SliderTitle.vue'
import ProductSlider from '@/components/products/ProductSlider.vue'

import { ref, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

export default {
  components: {
    SectionTitle,
    ProductSlider
  },
  setup(props) {
    const productsStore = useProductsStore()
    const getProducts = ref([])
    const productType = props.type

    const fetchProducts = async () => {
      await productsStore.fetchProducts()
      getProducts.value = productsStore.typeProducts(productType)
    }

    onMounted(() => {
      fetchProducts()
    })

    return {
      getProducts
    }
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      backgroundLine: this.dark == true ? '#fff' : '#000'
    }
  }
}
</script>
<style lang="css">
@media screen and (min-width: 768px) {
  .detail-line {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    display: flex;
  }

  .detail-line::before {
    content: '';
    height: 1px;
    width: 100%;
    background-color: v-bind(backgroundLine);
    margin-bottom: 20px;
    width: 15%;
    display: inline-block;
    margin: 0 40px 0 0;
  }

  .detail-line::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: v-bind(backgroundLine);
    margin-top: 20px;
    width: 15%;
    display: inline-block;
    margin: 0 0 0 40px;
  }
}
</style>
