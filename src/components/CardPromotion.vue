<template>
    <main class="transition-all hover:opacity-75 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg cursor-pointer">
        <router-link :to="link">
            <GetImg :src="src" class="w-full" alt="" />
        </router-link>
    </main>
</template>
<script>
import GetImg from './GetImg.vue';
export default {
    components: {
        GetImg,
    },
    props: {
        src: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        }
    },
}
</script>