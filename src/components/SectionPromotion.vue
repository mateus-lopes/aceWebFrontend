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
import CardPromotion from './CardPromotion.vue';

export default {
    components: {
        CardPromotion,
    },
    props: {
        url1: {
            type: String,
            required: true,
        },
        url2: {
            type: String,
            required: true,
        },
    },
}
</script>