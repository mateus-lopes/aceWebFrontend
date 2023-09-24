<template>
    <swiper
        :spaceBetween="0"
        :centeredSlides="true"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        @autoplayTimeLeft="onAutoplayTimeLeft"
        class="mySwiper"
    >
        <swiper-slide v-for="(item, index) in urls" :key="index">
            <SliderImg :url="getUrl(item.url)" />
        </swiper-slide>
        <template #container-end>
            <div class="autoplay-progress">
            <svg viewBox="0 0 48 48" ref="progressCircle">
                <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref="progressContent"></span>
            </div>
    </template>
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

    import SliderImg from './SliderImg.vue';
    import urlImagem1 from '@/assets/img/slider/1.jpg';
    import urlImagem2 from '@/assets/img/slider/2.jpg';

    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';

    export default {
    components: {
        Swiper,
        SwiperSlide,
        SliderImg,
    }, 
    data() {
        return {
            urls: [
                { url: urlImagem1 },
                { url: urlImagem2 },
                { url: urlImagem1 },
                { url: urlImagem2 }
            ],
        };
    },
    methods: {
        getUrl(x) {
            return x;
        },
    },
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);
        // const onAutoplayTimeLeft = (s, time, progress) => {
        //     progressCircle.value.style.setProperty('--progress', 1 - progress);
        //     progressContent.value.textContent = `${Math.ceil(time / 500)}`;
        // };
        
        return {
            // onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    };
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

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