<template lang="">
  <div>
    <header>
      <Carousel />
    </header>
    <main>
      <Container>
        <ProductsGroup title="Destaques Masculino" />
      </Container>
      <Container class="my-16">
        <SectionParallax />
      </Container>
      <div class="bg-gray-800 w-full pb-16">
        <Container>
          <ProductsGroup title="Destaques Femininos" :dark=true />
        </Container>
      </div>
      <div class="bg-dark w-full pb-16">
        <Container>
          <SectionHistory />
        </Container>
      </div>
    </main>
  </div>
</template>

<script>
import Carousel from '@/components/carousel/Carousel.vue';
import ProductsGroup from '@/components/ProductsGroup.vue';
import Container from '@/components/Container.vue';
import SectionParallax from '@/components/SectionParallax.vue';
import SectionHistory from '@/components/SectionHistory.vue';

export default {
  components: {
    Carousel,
    ProductsGroup,
    Container,
    SectionParallax,
    SectionHistory
  }
}
</script>
<style lang="">
  
</style>