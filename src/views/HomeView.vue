<template>
  <div>
    <section class="w-screen h-screen flex justify-center items-center" v-if="hidden == true">
      <div class="text-center">
        <h2 class="font-bold pb-4 text-red text-xl">ERRO AO CARREGAR DADOS</h2>
        <p>
          VERIFIQUE SUA CONEXÃO COM A INTERNET - VERIFIQUE SE O SERVIDOR ESTÁ ONLINE - VERIFIQUE SE O TOKEN ESTÁ CORRETO
        </p>
        <button @click="hidden = false" class="mt-10 p-5 bg-dark text-white rounded-lg">
          continuar mesmo assim
        </button>
      </div>
    </section>
    <TemplateView :class="{'w-0 h-0 hidden': hidden}">
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

// PROVISORIO ATE LIGAR AO BANCO DE DADOS
import middle_1 from '@/assets/img/middle_1.png';
import middle_2 from '@/assets/img/middle_2.png';
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
    data() {
        return {
            products_all: null,
            url_middle_1: null,
            url_middle_2: null,
            urls1: null,
            urls2: null,
            hidden: false,
        };
    },
    async mounted() {
        try {
            this.products_all = await products()
            this.url_middle_1 = middle_1
            this.url_middle_2 = middle_2
            this.urls1 = [
            { url: urlImagem1_m },
            { url: urlImagem2_m }
        ]
            this.urls2 = [
            { url: urlImagem1 },
            { url: urlImagem2 },
        ]
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            this.hidden = true;
        }
    }
}
</script>