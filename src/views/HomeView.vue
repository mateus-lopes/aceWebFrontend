<template lang="">
  <div>
    <Carousel :urls1="urls1" :urls2="urls2" />
    <Container class="my-16">
      <ProductSlider title="Melhores Ofertas" :products="products" />
    <Container>
      <ProductSlider title="Mais Vendidos" :products="products" />
    </Container>
    <Container class="my-16">
      <ProductSlider title="Acessórios" :products="products" />
    </Container>
    </Container>
    <Container class="mt-16 lg:my-16">
      <SectionPromotion :url1="url_middle_1" :url2="url_middle_2" />
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
    Carousel,
    ProductSlider,
    Container,
    SectionPromotion,
    SectionHistory,
  },
  setup() {
    const products = [
      {
          title: 'Tênis ACE Zoom Pegasus',
          categories: [
              {
                  title: 'Corrida',
                  color: 'bg-azul-claro',
                  url: '#',
              },
              {
                  title: 'Feminino',
                  color: 'bg-rosa',
                  url: '#',
              },
          ],
          price: 899.99,
          img: '',
          n_colors: 3,
      },
      {
          title: 'Tênis ACE Joyride Run',
          categories: [
              {
                  title: 'Corrida',
                  color: 'bg-azul-claro',
                  url: '#',
              },
              {
                  title: 'Masculino',
                  color: 'bg-azul-escuro',
                  url: '#',
              },
          ],
          price: 1099.99,
          img: '',
          n_colors: 1,
          promotion: 100,
      },
      {
          title: 'Tênis ACE Raybow Dash',
          categories: [
              {
                  title: 'Caminhada',
                  color: 'bg-vermelho',
                  url: '#',
              },
              {
                  title: 'Masculino',
                  color: 'bg-azul-escuro',
                  url: '#',
              },
          ],
          price: 249.99,
          descont: 19,
          img: '',
          n_colors: 4,
          promotion: 80,
      },
      {
          title: 'Tênis ACE Joyride Run',
          categories: [
              {
                  title: 'Corrida',
                  color: 'bg-azul-claro',
                  url: '#',
              },
              {
                  title: 'Unissex',
                  color: 'bg-verde',
                  url: '#',
              },
          ],
          price: 699.99,
          img: '',
          n_colors: 1,
      }
    ]
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
        products,
        url_middle_1,
        url_middle_2,
        urls1,
        urls2,
    }
  }
}
</script>