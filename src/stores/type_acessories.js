import { fetchData } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTypeAcessoryStore = defineStore('allTypeAcessory', {
  state: () => ({
    allTypeAcessory: ref([])
  }),
  actions: {
    async fetchTypeAcessory() {
      try {
        this.allTypeAcessory = await fetchData('type_accessories')
      } catch (error) {
        console.error('Erro ao buscar os TypeAcessory:', error)
        return error
      }
    }
  },
})
