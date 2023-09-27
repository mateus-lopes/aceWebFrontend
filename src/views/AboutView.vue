<template>
  <div class="about">
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
