import { fetchData } from '@/plugins/axios'
import { defineStore } from 'pinia';
import { ref } from 'vue'


export const useItemsStore = defineStore('items', {
  state: () => ({
    items: ref(),
  }),
  actions: {
    async fetchItems() {
      try {
        const products = await Promise.all(await fetchData('products')); 
        return products
      } catch (error) {
        console.error('Erro ao buscar os itens:', error);
      }
    },
  },
});


// export const products = async () => {
//   try {
//     const [products] = await Promise.all([fetchData('products')])
//     return products
//   } catch (error) {
//     console.error('(lib.products) Erro ao buscar dados:', error)
//     throw error
//   }
// }