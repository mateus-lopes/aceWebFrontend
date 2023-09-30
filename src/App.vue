<script setup>
import NavBar from './components/navbar/NavBar.vue';
import FooterContainer from './components/footer/FooterContainer.vue';
</script>

<template>
  <div class="w-full box-border overflow-hidden bg-white">
    <header>
      <NavBar />
    </header>
    <main class="mt-24">
      <RouterView />
    </main>
    <footer>
      <FooterContainer />
    </footer>
  </div>
</template>

