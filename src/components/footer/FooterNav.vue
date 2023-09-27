<template>
    <main class="flex justify-center py-16 gap-24 items-start relative w-full">
        <div>
            <FooterLinks title="Instirucional" :links="info_corp" />
        </div>
        <div>
            <FooterLinks title="Produtos" :links="categorias" />
        </div>
        <div>
            <FooterLinks title="Coleções" :links="colections" />
        </div>
        <div>
            <FooterLinks title="Suporte" :links="suporte" />
        </div>
        <div>
            <FooterLinks title="Lojas" :links="categorias" />
        </div>
        <div>
            <FooterLinks title="Siga-nos" :links="social_media" />
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

