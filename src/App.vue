<!-- <script>
import { fetchData } from '@/plugins/axios';

export default {
  async mounted() {
    try {
      this.jones = await fetchData('categories');
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  },
  data() {
    return {
      jones: null
    };
  }
};
</script> -->

<template>
  <RouterView />
</template>

