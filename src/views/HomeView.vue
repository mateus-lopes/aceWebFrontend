<template lang="">
  <div>
    <header>
      <Carousel />
    </header>
    <main>
      <Container>
        <ProductsGroup />
      </Container>
    </main>
  </div>
</template>

<script>
import Carousel from '@/components/carousel/Carousel.vue';
import ProductsGroup from '@/components/ProductsGroup.vue';
import Container from '@/components/Container.vue';

export default {
  components: {
    Carousel,
    ProductsGroup,
    Container,
  }
}
</script>
<style lang="">
  
</style>