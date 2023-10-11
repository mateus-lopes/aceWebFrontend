<template lang="">
    <main>
        <SectionTitle :dark="dark" :title="title" />
        <ProductSlider :dark="dark" :products="products" />
    </main>
</template>

<script>
import SectionTitle from '@/components/SliderTitle.vue';
import ProductSlider from '@/components/products/ProductSlider.vue';

export default {
    components: {
        SectionTitle,
        ProductSlider,
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
    },
    data() {
        return {
            backgroundLine: (this.dark == true) ? '#fff' : '#000',
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
    height: 1px;
    width: 100%;
    background-color: v-bind(backgroundLine);
    margin-bottom: 20px;
    width: 15%;
    display: inline-block;
    margin: 0 40px 0 0;
}

.detail-line::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: v-bind(backgroundLine);
    margin-top: 20px;
    width: 15%;
    display: inline-block;
    margin: 0 0 0 40px;
}   
}
</style>