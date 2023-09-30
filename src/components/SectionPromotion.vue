<template>
    <main class="w-full lg:flex lg:flex-row items-center justify-between gap-16">
        <div>
            <CardPromotion link="#" :src="this.url1"  />
        </div>
        <div>
            <CardPromotion link="#" :src="this.url2"  />
        </div>
    </main>
</template>
<script>
import middle_1 from '@/assets/img/middle_1.png';
import middle_2 from '@/assets/img/middle_2.png';
import CardPromotion from './CardPromotion.vue';

export default {
    components: {
        CardPromotion,
    },
    data() {
        return {
            url1: middle_1,
            url2: middle_2,
        }
    }
}
</script>