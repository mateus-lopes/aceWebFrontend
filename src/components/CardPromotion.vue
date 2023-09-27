<template>
    <main class="card-promotion">
        <GetImg :src="src" class="w-full" alt="" />
        <router-link :to="link" class="text-white">
            <span class="card-promotion-text">
                VEJA AGORA!
            </span>
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
<style lang="css">

    .card-promotion {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: all .3s ease-in-out;
    }

    .card-promotion-text {
        position: absolute;
        font-size: 1em;
        top: 0;
        left: 0;
        right: 0;
        background-color: #00000070; 
        opacity: 1;
        width: 100%;    
        height: 100%;
        font-weight: 100;
        display: flex;
        margin: 0 auto;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        transition: all .3s ease-in-out;
    }

    .card-promotion-text {
        opacity: 0;
    }

    .card-promotion:hover .card-promotion-text {
        opacity: 1;
    }

</style>