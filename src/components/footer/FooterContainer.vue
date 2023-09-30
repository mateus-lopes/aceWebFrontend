<template lang="">
    <div class="text-gray-700">
        <Container>
            <FooterNav />
            <div>
                <QuicklyLinks />
            </div>
        </Container>
        <div class="flex flex-col lg:flex-row gap-4 justify-center items-center pt-16 pb-8">
            <small class="flex gap-2">
                <img src="@/assets/img/icons/Bandeira-do-Brasil.png" class="w-6" alt=""> 
                BRASIL
            </small>
            <small class="block">desenvolvido por 
                <span class="text-red-600 hover:underline">
                    <router-link to="https://github.com/mateus-lopes">
                        mateus-lopes
                    </router-link>
                </span>
            </small>
            <small class="block">
                © 2020 ACE Joinville SC - Todos os direitos reservados.
            </small>    
        </div>
    </div>
</template>
<script>
import Container from '@/components/Container.vue';
import FooterNav from './FooterNav.vue';
import QuicklyLinks from './QuicklyLinks.vue';
export default {
    components: {
        Container,
        FooterNav,
        QuicklyLinks
    }
}
</script>
<style lang="">
    
</style>