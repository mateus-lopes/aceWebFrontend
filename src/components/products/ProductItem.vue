<template lang="">
    <main class="product w-max-80 pb-12 px-14 md:px-4 lg:px-0">
            <GetImg :src="getCapa()" />
            <router-link to="#">
                <button class="shadow-xl uppercase mt-2 opacity-1 lg:opacity-0 bg-primary hover:bg-black text-white w-full flex items-center justify-center py-4">
                    Comprar
                </button>
            </router-link>
            <h1 class="text-xl my-4">{{ product.title }}</h1>
            <div class="flex justify-start items-center">
                <button class="mr-2">
                    <router-link :to="product.category.url">
                        <small class="p-1 text-white bg-primary" :class="getTagColor">
                            {{ product.category.title }}
                        </small>
                    </router-link>
                </button>
                <button class="mr-2">
                    <router-link :to="product.gender.url">
                        <small class="p-1 text-white bg-primary" :class="product.gender.color">
                            {{ product.gender.title }}
                        </small>
                    </router-link>
                </button>
            </div>
            <p class="text-xl font-bold pt-2">
                R$ {{ getPromotion }}
                <span v-if="product.promotion > 0" class="text-base text-danger"> {{ product.promotion }}% OFF </span>
            </p>
            <p class="pb-2 text-gray-700">
                até 10x de R$ {{ getCreditPrice }}
            </p>
            <small>
                <p class="text-gray-500"> {{ getColors }} </p>
            </small>
    </main>
</template>
<script>
import GetImg from '@/components/GetImg.vue';    

export default {
    components: {
        GetImg,
    },
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getPrice(price) {
            if(price > 9999) {
                return  price.toString().slice(0,10)
            } else if(price > 999) {
                return  price.toString().slice(0,8)
            } else if(price > 99){
                return  price.toString().slice(0,6)
            } else {
                return  price.toString().slice(0,5)
            }
        },
        getCapa() {
            return this.product.images[0].file
        },
    },
    computed: {
        getCreditPrice() {
            return Math.floor((this.getPromotion / 10) * 100) / 100
        },
        getColors() {
            
            let colors = this.product.colors.split(', ').length
            let text = colors > 1 ? ' cores' : ' cor'
            return colors + text
        },
        getPromotion() {
            if(this.product.promotion){
                let price = this.product.price - (this.product.price * (this.product.promotion / 100))
                return this.getPrice(price)
            } else {
                return this.getPrice(this.product.price)
            }
        },
        getTagColor() {
            return this.product.category.color
        }
    },
}
</script>
<style lang="css">
@media screen and (min-width: 768px) {
    .product:hover button {
        opacity: 1;
        transition: all .5s ease-in-out;
    }
}
</style>