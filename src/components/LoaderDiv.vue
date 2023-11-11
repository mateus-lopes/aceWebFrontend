<template>
  <div
    v-if="time > 0"
    class="show w-screen h-screen bg-white flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-50"
  >
    <div class="custom-loader"></div>
  </div>
</template>

<style scoped>
.custom-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 3px;
  background:
    radial-gradient(farthest-side, #000000 95%, #0000) 50% 0/12px 12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 5px), #000000 calc(100% - 4px)) content-box;
  animation: s6 1s infinite;
}
@keyframes s6 {
  to {
    transform: rotate(1turn);
  }
}

div.show {
  opacity: 1;
  animation: normal 3s ease-in-out 0s 1 fadeIn;
}

@keyframes fadeIn {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

<script setup>
import { ref } from 'vue'

const time = ref(3)

setInterval(() => {
  time.value--
}, 1000)
</script>
