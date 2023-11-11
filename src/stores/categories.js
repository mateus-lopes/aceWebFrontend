import { fetchData } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoriesStore = defineStore('allCategories', {
  state: () => ({
    allCategories: ref([])
  }),
  actions: {
    async fetchCategories() {
      try {
        this.allCategories = await fetchData('categories')
      } catch (error) {
        console.error('Erro ao buscar os Categories:', error)
        return error
      }
    }
  },
})
