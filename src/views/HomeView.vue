<template lang="">
  <TemplateView>
    <Carousel :urls1="urls1" :urls2="urls2" />
    <Container>
      <SectionSlider title="Melhores Ofertas" :products="products_all" />
    </Container>
    <Container class="my-16">
      <SectionSlider title="Mais Vendidos" :products="products_all" />
    </Container>
    <Container class="my-16">
      <SectionSlider title="Acessórios" :products="products_all" />
    </Container>
    <Container class="mt-16 lg:my-16">
      <SectionPromotion :url1="url_middle_1" :url2="url_middle_2" />
    </Container>
    <section class="bg-dark w-full lg:py-16">
      <Container>
        <SectionHistory />
      </Container>
    </section>
  </TemplateView>
  <div class="bg-vermelho p-44 text-white">
  </div>
</template>

<script>
import TemplateView from '@/components/TemplateContainer.vue';
import Carousel from '@/components/carousel/Carousel.vue';
import Container from '@/components/Container.vue';
import SectionPromotion from '@/components/SectionPromotion.vue';
import SectionHistory from '@/components/SectionHistory.vue';
import SectionSlider from '@/components/SectionSlider.vue';
import { products } from '../lib/product';

// card promotion
import middle_1 from '@/assets/img/middle_1.png';
import middle_2 from '@/assets/img/middle_2.png';

// carousel (pc e mobile)
import urlImagem1 from '@/assets/img/slider/1.jpg';
import urlImagem2 from '@/assets/img/slider/2.jpg';
import urlImagem1_m from '@/assets/img/slider/1 - moblie.jpg';
import urlImagem2_m from '@/assets/img/slider/2 - moblie.jpg';

export default {
    components: {
        TemplateView,
        Carousel,
        SectionSlider,
        Container,
        SectionPromotion,
        SectionHistory,
    },
    setup() {
        const url_middle_1 = middle_1;
        const url_middle_2 = middle_2;
        const urls1 = [
            { url: urlImagem1_m },
            { url: urlImagem2_m }
        ]
        const urls2 = [
            { url: urlImagem1 },
            { url: urlImagem2 },
        ]
        return {
            url_middle_1,
            url_middle_2,
            urls1,
            urls2,
        }
    },
    data() {
        return {
            products_all: null
        };
    },
    async mounted() {
        try {
            this.products_all = await products()
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }
}
</script>