<template>
  <div>
    <!-- Renderize os produtos da categoria "Corrida" usando o getter -->
    {{ allProducts }}
    <br />
    ola
    <br />
    {{ produtosDaCategoria }}
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

export default defineComponent({
  setup(props) {
    const productsStore = useProductsStore()
    const allProducts = ref([])
    const produtosDaCategoria = ref([])
    const categoriaDesejada = props.category

    const fetchProducts = async () => {
      await productsStore.fetchProducts()
      allProducts.value = productsStore.allProducts
      produtosDaCategoria.value = productsStore.categoryProducts(categoriaDesejada)
    }

    onMounted(() => {
      fetchProducts()
    })

    return {
      allProducts,
      produtosDaCategoria
    }
  },
  props: {
    category: {
      type: String,
      required: true
    }
  }
})
</script>
