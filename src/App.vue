<script setup>
import NavBar from './components/navbar/NavBar.vue';

</script>

<template>
  <div class="w-full box-border overflow-hidden">
    <NavBar />
    <main class="mt-16">
      <RouterView />
    </main>
  </div>
</template>

