<template lang="">
  <main class="product w-max-80 pb-12 px-14 md:px-4 lg:px-0">
    <GetImg :src="getCapa()" />
    <router-link to="#">
      <button
        class="shadow-xl uppercase mt-2 opacity-1 lg:opacity-0 bg-primary hover:bg-primary-dark text-white w-full flex items-center justify-center py-4"
      >
        Comprar
      </button>
    </router-link>
    <h1 class="text-xl my-4">{{ product.title }}</h1>
    <div class="flex justify-start items-center">
      <ButtonTag
        :url="product.category.url"
        :color="product.category.color"
        :title="product.category.title"
      />
      <ButtonTag
        :url="product.gender.url"
        :color="product.gender.color"
        :title="product.gender.title"
      />
      <div v-if="product.type_accessory !== null">
        <ButtonTag
          :url="product.type_accessory.url"
          :color="product.type_accessory.color"
          :title="product.type_accessory.title"
        />
      </div>
    </div>
    <p class="text-xl font-medium pt-2">
      <span v-if="product.promotion > 0">
        <div class="text-sm text-muted text-gray-500 font-normal block">
          De <span class="line-through">R$ {{ getPrice(product.price) }}</span>
        </div>
        <div class="font-semibold inline-block">
          R$ {{ getPromotion }}
        </div>
      </span>
      <span v-else>
        <div class="font-semibold pt-4">
          R$ {{ getPrice(product.price) }}
        </div>
      </span>
      <span v-if="product.promotion > 0" class="ml-2 text-base text-red-500">
        {{ product.promotion }}% OFF
      </span>
    </p>
    <p class="pb-2 text-gray-700">até 10x de R$ {{ getCreditPrice }}</p>
    <small>
      <p class="text-gray-500">{{ getColors }}</p>
    </small>
  </main>
</template>
<script>
import GetImg from '@/components/GetImg.vue'
import ButtonTag from '@/components/products/ButtonTag.vue'

export default {
  components: {
    GetImg,
    ButtonTag
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPrice(price) {
      if (price > 9999) {
        return price.toString().slice(0, 10)
      } else if (price > 999) {
        return price.toString().slice(0, 8)
      } else if (price > 99) {
        return price.toString().slice(0, 6)
      } else {
        return price.toString().slice(0, 5)
      }
    },
    getCapa() {
      return this.product.images[0].file
    }
  },
  computed: {
    getTagColor() {
      return this.product.category.color
    },
    getCreditPrice() {
      return Math.floor((this.getPromotion / 10) * 100) / 100
    },
    getColors() {
      let colors = this.product.colors.split(', ').length
      let text = colors > 1 ? ' cores' : ' cor'
      return colors + text
    },
    getPromotion() {
      if (this.product.promotion) {
        let price = this.product.price - this.product.price * (this.product.promotion / 100)
        return this.getPrice(price)
      } else {
        return this.getPrice(this.product.price)
      }
    }
  }
}
</script>
<style lang="css">
@media screen and (min-width: 768px) {
  .product:hover button {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
}
</style>
