<template>
  <main class="transition-all hover:opacity-75 overflow-hidden lg:rounded-lg cursor-pointer w-full">
    <router-link :to="link">
      <GetImg :src="src" class="w-full" alt="" />
    </router-link>
  </main>
</template>
<script>
import GetImg from '@/components/GetImg.vue'
export default {
  components: {
    GetImg
  },
  props: {
    src: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
