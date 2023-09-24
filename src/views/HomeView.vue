<template lang="">
  <div>
    <header>
      <TopLine />
      NAVMENU
      <Carousel />
    </header>
  </div>
</template>
<script>
import Carousel from '../components/carousel/Carousel.vue';
import TopLine from '../components/TopLine.vue';

export default {
  components: {
    Carousel,
    TopLine
  }
}
</script>
<style lang="">
  
</style>