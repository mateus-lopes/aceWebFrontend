<template>
    <div class="carousel">
        <!-- pc slider -->
        <swiper
            :spaceBetween="0"
            :centeredSlides="true"
            :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            class="mySwiper w-0 h-0 lg:w-full lg:h-full"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :navigation="true"
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
                delay: 3000,
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
    </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

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
.carousel .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel .swiper-pagination-bullet {
    background: #fff !important;
}

.carousel .swiper-pagination-bullet-active {
    background: #004AAD !important;
}

.carousel .swiper-button-next::after {
    color: #fff;
    margin-right:20px;
}
.carousel .swiper-button-prev::after {
    color: #fff;
    margin-left:20px;
}
</style>