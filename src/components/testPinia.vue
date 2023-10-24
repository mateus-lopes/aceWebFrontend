<template>
    <div>
      <h1>Itens</h1>
      <button @click="fetchItems">Buscar Itens</button>
      {{ items }}
    </div>
  </template>
  
  <script>
  import { ref, defineComponent } from 'vue';
  import { useItemsStore } from '@/stores/products';
  
  export default defineComponent({
    setup() {
      const items = ref([]);
      
      const fetchItems = async () => {
        items.value = await useItemsStore().fetchItems();
      };

      fetchItems()

      return {
        items,
        fetchItems,
      };
    },
  });
  </script>
  