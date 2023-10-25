<template>
  <div>
      <!-- Renderize os produtos da categoria "Corrida" usando o getter -->
      {{ items }}
      <br />
      ola
      <br />
      {{ corridaProducts }}
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue';
import { useItemsStore } from '@/stores/products';

export default defineComponent({
  setup() {
    const items = ref([]);
    const corridaProducts = ref([]);
    const itemsStore = useItemsStore();

    const fetchItems = async () => {
      await itemsStore.fetchItems();
      items.value = itemsStore.items; // Obtenha os itens diretamente do store
      corridaProducts.value = itemsStore.corridaProducts; // Obtenha os produtos de corrida
    };

    onMounted(() => {
      fetchItems();
    });

    return {
      items,
      corridaProducts,
      fetchItems,
    };
  },
});
</script>
