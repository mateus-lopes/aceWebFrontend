<template lang="">
  <div>
    <Carousel />
    <Container>
      <ProductSlider title="Destaques Masculino" />
    </Container>
    <Container class="my-16">
      <ProductSlider title="Destaques Femininos" />
    </Container>
    <Container class="mt-16 lg:my-16">
      <SectionPromotion />
    </Container>
    <section class="bg-dark w-full lg:py-16">
      <Container>
        <SectionHistory />
      </Container>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/carousel/Carousel.vue';
import ProductSlider from '@/components/ProductSlider.vue';
import Container from '@/components/Container.vue';
import SectionPromotion from '@/components/SectionPromotion.vue';
import SectionHistory from '@/components/SectionHistory.vue';
export default {
  components: {
    Carousel,
    ProductSlider,
    Container,
    SectionPromotion,
    SectionHistory,
  }
}
</script>
<style lang="">
  
</style>