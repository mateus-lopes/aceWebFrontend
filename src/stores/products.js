import { fetchData } from '@/plugins/axios'
import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: ref({}),
  }),
  actions: {
    async fetchItems() {
      try {
        const products = await fetchData('products');
        this.items = products; // Atualize o estado com os produtos
      } catch (error) {
        console.error('Erro ao buscar os itens:', error);
      }
    },
  },
  getters: {
    corridaProducts(state) {
      // Use Array.filter para obter apenas os produtos da categoria "Corrida".
      const items = state.items;
      console.log(items);
      return Object.values(items).filter(product => product.id === 14);
    },
  },
});