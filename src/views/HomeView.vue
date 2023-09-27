<template lang="">
  <div>
    <header>
      <Carousel />
    </header>
    <main>
      <Container>
        <ProductsGroup />
      </Container>
      <Container class="my-16">
        <SectionParallax />
      </Container>
    </main>
  </div>
</template>

<script>
import Carousel from '@/components/carousel/Carousel.vue';
import ProductsGroup from '@/components/ProductsGroup.vue';
import Container from '@/components/Container.vue';
import SectionParallax from '@/components/SectionParallax.vue';
export default {
  components: {
    Carousel,
    ProductsGroup,
    Container,
    SectionParallax
  }
}
</script>
<style lang="">
  
</style>