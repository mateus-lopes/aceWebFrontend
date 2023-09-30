<template>
    <!-- pc slider -->
    <swiper
        :spaceBetween="0"
        :centeredSlides="true"
        :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        @autoplayTimeLeft="onAutoplayTimeLeft"
        class="mySwiper w-0 h-0 lg:w-full lg:h-full"
    >
        <swiper-slide v-for="(item, index) in urls2" :key="index">
            <GetImg :url="item.url" />
        </swiper-slide>
    </swiper>
    <!-- mobile slider -->
    <swiper
        :spaceBetween="0"
        :centeredSlides="true"
        :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        @autoplayTimeLeft="onAutoplayTimeLeft"
        class="mySwiper w-full h-full lg:w-0 lg:h-0"
    >
        <swiper-slide v-for="(item, index) in urls1" :key="index">
            <GetImg :url="item.url" />
        </swiper-slide>
    </swiper>
</template>

<script>
    import { ref } from 'vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';

    // (provisorio até linkar cm o banco)
    import GetImg from '../GetImg.vue';
    import urlImagem1 from '@/assets/img/slider/1.jpg';
    import urlImagem2 from '@/assets/img/slider/2.jpg';
    import urlImagem1_m from '@/assets/img/slider/1 - moblie.jpg';
    import urlImagem2_m from '@/assets/img/slider/2 - moblie.jpg';

    export default {
    components: {
        Swiper,
        SwiperSlide,
        GetImg,
    }, 
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);
        const urls2 = [
            { url: urlImagem1 },
            { url: urlImagem2 },
        ]
        const urls1 = [
            { url: urlImagem1_m },
            { url: urlImagem2_m }
        ]
        return {
            urls1,
            urls2,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>

<style lang="css">

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #004AAD;
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: #004AAD;
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}

.swiper-pagination-bullet {
    background: #fff !important;
}

.swiper-pagination-bullet-active {
    background: #004AAD !important;
}


</style>