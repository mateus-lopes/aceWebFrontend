<template>
  <div>
    <Loader />
    <TemplateView>
      <Carousel />
      <Container>
        <SectionSlider title="Melhores Ofertas" type="offer" />
      </Container>
      <Container class="my-16">
        <SectionSlider title="Lançamentos" type="new" />
      </Container>
      <Container class="my-16">
        <SectionSlider title="Acessórios" type="accessories" />
      </Container>
      <Container class="mt-16 lg:my-16">
        <SectionPromotion />
      </Container>
      <section class="bg-dark w-full lg:py-16">
        <Container>
          <SectionHistory />
        </Container>
      </section>
    </TemplateView>
  </div>
</template>

<script>
import TemplateView from '@/components/TemplateContainer.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Container from '@/components/Container.vue'
import SectionPromotion from '@/components/SectionPromotion.vue'
import SectionHistory from '@/components/SectionHistory.vue'
import SectionSlider from '@/components/SectionSlider.vue'
import Loader from '@/components/LoaderDiv.vue'

export default {
  components: {
    TemplateView,
    Carousel,
    SectionSlider,
    Container,
    SectionPromotion,
    SectionHistory,
    Loader
  }
}
</script>
