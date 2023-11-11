import { fetchData } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('allProducts', {
  state: () => ({
    allProducts: ref([])
  }),
  actions: {
    async fetchProducts() {
      try {
        this.allProducts = await fetchData('products')
      } catch (error) {
        console.error('Erro ao buscar os products:', error)
        return error
      }
    }
  },
  getters: {
    typeProducts: (state) => (type) => {
      const allProducts = state.allProducts
      if (type == 'offer')
        return Object.values(allProducts).filter((product) => product.offer === true)
      if (type == 'new') return Object.values(allProducts).filter((product) => product.new === true)
      return Object.values(allProducts).filter((product) => product.type === type)
    },
    CatregoryProducts: (state) => (category) => {
      // Use Array.filter para obter apenas os produtos da categoria especificada.
      const allProducts = state.allProducts
      return Object.values(allProducts).filter((product) => product.category.title === category)
    }
  }
})
