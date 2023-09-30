<template lang="">
    <Container>
        <div class="w-full px-6 py-16 lg:p-0">
            <img src="@/assets/img/logo.png" class='w-2/6 m-auto' alt="">
            <p class="text-center text-white py-4">
                Fundada em 1997 na cidade de São Paulo, estado Paulista, a intenção original da marca era criar calçados
                casuais e baratos, para pequenas cidades da região. Ao longo do tempo, a marca tornou-se mais próxima do esporte.
            </p>
            <p class="text-center text-gray-500">
                "Se você não arriscar nunca será capaz de saber aonde poderia chegar."
            </p>
            <ul class="flex justify-center items-center gap-3 py-4">
                <li>
                    <router-link to="#" class="text-primary">
                        <GetImg :src="facebook" class="w-8" alt="" />
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="text-primary">
                        <GetImg :src="instagram" class="w-8" alt="" />
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="text-primary">
                        <GetImg :src="twitter" class="w-8" alt="" />
                    </router-link>
                </li>
            </ul>
        </div>
    </Container>
</template>
<script>
import Container from '@/components/Container.vue';
import GetImg from '@/components/GetImg.vue';

// icons
import iconTwitter from '@/assets/img/icons/twitter.png';
import iconFfacebook from '@/assets/img/icons/facebook.png';
import iconInstagram from '@/assets/img/icons/instagram.png';

export default {
    components: {
        Container,
        GetImg,
    },
    data() {
        return {
            twitter: iconTwitter,
            facebook: iconFfacebook,
            instagram: iconInstagram,
        }
    }
}
</script>
<style lang="">
    
</style>