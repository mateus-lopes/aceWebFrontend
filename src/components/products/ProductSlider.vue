<template>
  <div class="slider-product">
    <swiper
      class="w-full h-full md:w-0 md:h-0"
      :slides-per-view="1"
      :space-between="25"
      :modules="modules"
      :pagination="{
        clickable: true
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="true"
    >
      <swiper-slide v-for="product in type" :key="product.id">
        <ProductItem class="m-auto" :product="product" />
      </swiper-slide>
    </swiper>
    <swiper
      class="w-0 h-0 md:w-full md:h-full lg:w-0 lg:h-0"
      :slides-per-view="2"
      :space-between="25"
      :modules="modules"
      :pagination="{
        clickable: true
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="true"
    >
      <swiper-slide v-for="product in type" :key="product.id">
        <ProductItem class="m-auto" :product="product" />
      </swiper-slide>
    </swiper>
    <swiper
      class="w-0 h-0 lg:w-full lg:h-full xl:w-0 xl:h-0"
      :slides-per-view="3"
      :space-between="25"
      :modules="modules"
      :pagination="{
        clickable: true
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="true"
    >
      <swiper-slide v-for="product in type" :key="product.id">
        <ProductItem class="m-auto" :product="product" />
      </swiper-slide>
    </swiper>
    <swiper
      class="w-0 h-0 xl:w-full xl:h-full min-[2560px]:w-0 min-[2560px]:h-0"
      :slides-per-view="4"
      :space-between="25"
      :modules="modules"
      :pagination="{
        clickable: true
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="true"
    >
      <swiper-slide v-for="product in type" :key="product.id">
        <ProductItem class="m-auto" :product="product" />
      </swiper-slide>
    </swiper>
    <swiper
      class="w-0 h-0 min-[2560px]:w-full min-[2560px]:h-full"
      :slides-per-view="5"
      :space-between="25"
      :modules="modules"
      :pagination="{
        clickable: true
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="true"
    >
      <swiper-slide v-for="product in type" :key="product.id">
        <ProductItem class="m-auto" :product="product" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Grid, Pagination } from 'swiper/modules'
import ProductItem from './ProductItem.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductItem
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: Array,
      required: true
    }
  },
  setup() {
    const progressCircle = ref(null)
    const progressContent = ref(null)

    return {
      progressCircle,
      progressContent,
      modules: [Pagination, Navigation, Grid]
    }
  },
  data() {
    return {
      backgroundLine: this.dark == true ? '#fff' : '#000'
    }
  }
}
</script>

<style>
.slider-product .swiper-pagination-bullet {
  background-color: #004aad !important;
}
.slider-product .swiper-button-next::after {
  color: #fff;
}

.slider-product .swiper-button-prev::after {
  color: #fff;
}

.slider-product .swiper-button-next {
  background-color: rgba(0, 0, 0, 0.6);
  width: 32px;
  height: 32px;
  border-radius: 100%;
}
.slider-product .swiper-button-next::after {
  font-size: 1em;
  color: #fff;
}
.slider-product .swiper-button-prev {
  background-color: rgba(0, 0, 0, 0.6);
  width: 32px;
  height: 32px;
  border-radius: 100%;
}
.slider-product .swiper-button-prev::after {
  font-size: 1em;
  color: #fff;
}
</style>
