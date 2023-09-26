<template lang="">
  <div>
    <header>
      <Carousel />
    </header>
    <main>
      <ProductsGroup />
    </main>
  </div>
</template>

<script>
import Carousel from '@/components/carousel/Carousel.vue';
import ProductsGroup from '@/components/ProductsGroup.vue';

export default {
  components: {
    Carousel,
    ProductsGroup,
  }
}
</script>
<style lang="">
  
</style>