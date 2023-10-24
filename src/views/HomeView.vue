<template>
  <div>
    <Loader />
    <TemplateView>
      <div v-if="hidden == true">
        <h1 class="text-red text-center">ERRO AO CONECTAR AO BANCO DE DADOS</h1>
      </div>
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
      <testPinia />
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
import testPinia from '../components/testPinia.vue'
import { products } from '../lib/product'
import { useCounterStore } from '@/stores/counter.js'

// PROVISORIO ATE LIGAR AO BANCO DE DADOS
import middle_1 from '@/assets/img/middle_1.png'
import middle_2 from '@/assets/img/middle_2.png'
import urlImagem1 from '@/assets/img/slider/1.jpg'
import urlImagem2 from '@/assets/img/slider/2.jpg'
import urlImagem1_m from '@/assets/img/slider/1 - moblie.jpg'
import urlImagem2_m from '@/assets/img/slider/2 - moblie.jpg'

export default {
  components: {
    TemplateView,
    Carousel,
    SectionSlider,
    Container,
    SectionPromotion,
    SectionHistory,
    Loader,
    testPinia
  },
  setup() {
    const counter = useCounterStore()
    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
    function add() {
      counter.count++
    }
    return { counter, add }
  },
  data() {
    return {
      products_all: null,
      url_middle_1: null,
      url_middle_2: null,
      urls1: null,
      urls2: null,
      hidden: false
    }
  },
  async mounted() {
    try {
      this.products_all = await products()
      this.url_middle_1 = middle_1
      this.url_middle_2 = middle_2
      this.urls1 = [{ url: urlImagem1_m }, { url: urlImagem2_m }]
      this.urls2 = [{ url: urlImagem1 }, { url: urlImagem2 }]
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
      this.hidden = true
    }
  }
}
</script>
