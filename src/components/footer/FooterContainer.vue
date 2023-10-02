<template lang="">
    <div class="text-gray-700">
        <Container>
            <FooterNav />
            <QuicklyLinks />
            <LastFooter />
        </Container>
    </div>
</template>
<script>
import Container from '@/components/Container.vue';
import FooterNav from '@/components/footer/FooterNav.vue';
import QuicklyLinks from '@/components/footer/QuicklyLinks.vue';
import LastFooter from '@/components/footer/LastFooter.vue';

export default {
    components: {
        Container,
        FooterNav,
        QuicklyLinks,
        LastFooter,
    }
}
</script>
<style lang="">
    
</style>