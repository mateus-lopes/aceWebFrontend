<template lang="">
    <main>
        <SectionTitle :dark="dark" :title="title" />
        <div class="flex w-full justify-center border-box" :class="{ 'text-white': dark }">
            <div v-for="(item, index) in products" :key="index">
                <ProductItem :product="item" />
            </div>
        </div>
    </main>
</template>

<script>
import ProductItem from './ProductItem.vue';
import SectionTitle from './SliderTitle.vue';

export default {
    components: {
        ProductItem,
        SectionTitle,
    },
    data() {
        return {
            backgroundLine: (this.dark == true) ? '#fff' : '#000',
        }
    },
    props: {
        dark: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            required: true,
        },
        products: {
            type: Array,
            required: true,
        }
    }
};

</script>
<style lang="css">
@media screen and (min-width: 768px) {
    .detail-line {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    display: flex;
}

.detail-line::before {
    content: '';
    height: 1.6px;
    width: 100%;
    background-color: v-bind(backgroundLine);
    margin-bottom: 20px;
    width: 15%;
    display: inline-block;
    margin: 0 40px 0 0;
}

.detail-line::after {
    content: '';
    height: 1.6px;
    width: 100%;
    background-color: v-bind(backgroundLine);
    margin-top: 20px;
    width: 15%;
    display: inline-block;
    margin: 0 0 0 40px;
}   
}
</style>