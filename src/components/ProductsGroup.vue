<template lang="">
    <main>
        <SectionTitle :dark="dark" :title="title" />
        <div class="flex w-full justify-center border-box" :class="{ 'text-white': dark }">
            <div v-for="(item, index) in products" :key="index">
                <ProductCard :product="item" />
            </div>
        </div>
    </main>
</template>
<script>
import ProductCard from './ProductCard.vue';
import SectionTitle from './SectionTitle.vue';

export default {
    components: {
        ProductCard,
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
                        },
                        {
                            title: 'Feminino',
                            color: 'bg-rosa',
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
                        },
                        {
                            title: 'Masculino',
                            color: 'bg-azul-escuro',
                        },
                    ],
                    price: 699.99,
                    img: '',
                    n_colors: 1,
                },
                {
                    title: 'Tênis ACE Raybow Dash',
                    categories: [
                        {
                            title: 'Caminhada',
                            color: 'bg-vermelho',
                        },
                        {
                            title: 'Masculino',
                            color: 'bg-azul-escuro',
                        },
                    ],
                    price: 249.99,
                    descont: 19,
                    img: '',
                    n_colors: 4,
                    promotion: 100,
                },
                {
                    title: 'Tênis ACE Joyride Run',
                    categories: [
                        {
                            title: 'Corrida',
                            color: 'bg-azul-claro',
                        },
                        {
                            title: 'Unissex',
                            color: 'bg-verde',
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
.detail-line {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.5em;
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
</style>