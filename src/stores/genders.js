import { fetchData } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGendersStore = defineStore('allGenders', {
  state: () => ({
    allGenders: ref([])
  }),
  actions: {
    async fetchGenders() {
      try {
        this.allGenders = await fetchData('genders')
      } catch (error) {
        console.error('Erro ao buscar os Genders:', error)
        return error
      }
    }
  },
})