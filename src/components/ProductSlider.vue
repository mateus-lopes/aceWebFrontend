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
import SectionTitle from './SectionTitle.vue';

export default {
    components: {
        ProductItem,
        SectionTitle,
    },
    data() {
        return {
            products: [
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
            ],
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