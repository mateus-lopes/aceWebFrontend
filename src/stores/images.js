import { fetchData } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHighlightsStore = defineStore('Highlights', {
  state: () => ({
    highlights: ref([])
  }),
  actions: {
    async fetchHighlights() {
      try {
        this.highlights = await fetchData('highlights')
      } catch (error) {
        console.error('Erro ao buscar os highlights:', error)
        throw error
      }
    }
  },
  getters: {
    typeHighlights: (state) => (type) => {
      const highlights = state.highlights
      return Object.values(highlights).filter((highlight) => highlight.type_img === type)
    }
  }
})
