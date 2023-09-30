<template>
    <main class="flex justify-center items-center py-16 relative w-full">
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            <FooterLinks title="Instirucional" :links="info_corp" />
            <FooterLinks title="Produtos" :links="categorias" />
            <FooterLinks title="Coleções" :links="colections" />
            <FooterLinks title="Lojas" :links="categorias" class="md:pt-16 xl:p-0" />
            <FooterLinks title="Siga-nos" :links="social_media" class="md:pt-16 xl:p-0 xl:hidden 2xl:block" />
            <FooterLinks title="Suporte" :links="suporte" class="md:pt-16 xl:p-0" />
        </div>
    </main>
</template>
<script>
import FooterLinks from './FooterLinks.vue'
export default {
  components: { FooterLinks },
    data() {
        return {
            suporte: [
                {title: 'Podemos Ajudar?', link: '#'},
                {title: 'Atendimento ao Cliente', link: '#'},
                {title: 'Dúvidas Frequentes', link: '#'},
                {title: 'Tabela de Tamanhos', link: '#'},
                {title: 'Como Comprar', link: '#'},
                {title: 'Entregas e Frete', link: '#'},
                {title: 'Opções de Pagamento', link: '#'},
                {title: 'Troca e Devolução', link: '#'},
            ],
            colections: [
                {title: 'Lançamentos', link: '#'},
                {title: 'Zoom', link: '#'},
                {title: 'Joyride', link: '#'},
                {title: 'Stan Smith', link: '#'},
                {title: 'Farm', link: '#'},
                {title: 'Tracker', link: '#'},
            ],
            info_corp: [
                {title: 'Sobre Nós', link: '#'},
                {title: 'Carreiras', link: '#'},
                {title: 'Imprensa', link: '#'},
                {title: 'Produtos', link: '#'},
            ],
            categorias: [
                {title: 'Corrida', link: '#'},
                {title: 'Caminhada', link: '#'},
                {title: 'Futebol', link: '#'},
                {title: 'Basquete', link: '#'},
                {title: 'Skateboard', link: '#'},
                {title: 'Acessórios', link: '#'},
                {title: 'Outlet', link: '#'},
            ],
            social_media: [
                {title: 'Facebook', link: '#'},
                {title: 'Instagram', link: '#'},
                {title: 'Twitter', link: '#'},
                {title: 'Youtube', link: '#'},
            ]
        }
    }
}
</script>
<style lang="">
    
</style>

