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
    

    export default {
    components: {
        Swiper,
        SwiperSlide,
        GetImg,
    }, 
    props: {
        urls1: {
            type: Array,
            required: true,
        },
        urls2: {
            type: Array,
            required: true,
        },
    },
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);
    
        return {        
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