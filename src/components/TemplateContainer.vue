<template>
    <TeamplateView>
        <div class="w-full box-border overflow-hidden bg-white">
            <header>
                <NavBar />
            </header>
        <main class="mt-24">
            <slot></slot>
        </main>
        <footer>
            <FooterContainer />
        </footer>
        </div>
    </TeamplateView>
</template>

<script setup>
import NavBar from '@/components/navbar/NavBar.vue';
import FooterContainer from '@/components/footer/FooterContainer.vue';
</script>
