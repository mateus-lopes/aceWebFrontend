<template>
  <main class="w-full lg:flex lg:flex-row items-center justify-between gap-16">
    <div class="basis-2/4">
      <CardPromotion link="#" :src="url1" />
    </div>
    <div class="basis-2/4">
      <CardPromotion link="#" :src="url2" />
    </div>
  </main>
</template>
<script>
import CardPromotion from '@/components/products/CardPromotion.vue'
import { useHighlightsStore } from '../stores/images'
import { ref, onMounted } from 'vue'

export default {
  components: {
    CardPromotion
  },
  setup() {
    const highlightsStore = useHighlightsStore()
    const middles = ref([])
    const type = 'small'
    const url1 = ref('')
    const url2 = ref('')

    function sortedMiddles(array) {
      let first_value = Math.floor(Math.random() * array.length)
      let second_value = Math.floor(Math.random() * array.length)

      while (second_value === first_value) {
        second_value = Math.floor(Math.random() * array.length)
      }

      return [array[first_value], array[second_value]]
    }

    const fetchHighlights = async () => {
      await highlightsStore.fetchHighlights()
      middles.value = highlightsStore.typeHighlights(type).map((item) => {
        return item.image.file
      })
      ;[url1.value, url2.value] = sortedMiddles(middles.value)
    }

    onMounted(() => {
      fetchHighlights()
    })

    return {
      url1,
      url2
    }
  }
}
</script>
