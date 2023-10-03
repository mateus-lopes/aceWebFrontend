<template>
    <div class="text-gray-700">
        <Container>
            <FooterNav />
            <QuickLinks />
            <LastFooter />
        </Container>
    </div>
</template>
<script>
import Container from '@/components/Container.vue';
import FooterNav from '@/components/footer/FooterNav.vue';
import QuickLinks from '@/components/footer/QuickLinks.vue';
import LastFooter from '@/components/footer/LastFooter.vue';

export default {
    components: {
        Container,
        FooterNav,
        QuickLinks,
        LastFooter,
    }
}
</script>