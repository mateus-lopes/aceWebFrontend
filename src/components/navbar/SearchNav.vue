<template>
  <div class="mr-2 flex justify-between items-center text-zinc-600 cursor-pointer">
    <MagnifyingGlassIcon @click="toogleSearch()" class="h-6 w-6" aria-hidden="true" />
    <input :class="{ show: !search }" type="text" v-model="input" placeholder="Pesquisar..." />
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

let input = ref('')

const search = ref(true)

function toogleSearch() {
  if (input.value == '') {
    search.value = !search.value
  } else {
    input.value = ''
  }
}
</script>

<style scoped>
input {
  animation: normal 0.5s ease-in-out 0s 1 fadeOut;
  display: block;
  width: 0px;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  /* color: rgb(55 65 81 / var(1)); */
  border-bottom: 1px solid #a3a3a3;
}

input:hover {
  border-bottom: 1px solid #000;
}

input:focus,
input:active {
  border-bottom: 1px solid #000;
  outline: none;
}

input.show {
  width: 250px;
  margin-left: 10px;
  padding: 10px 16px;
  animation: normal 0.5s ease-in-out 0s 1 fadeIn;
}

@keyframes fadeIn {
  from {
    width: 0px;
    margin-left: 10px;
    padding: 10px 0px;
  }
  to {
    width: 250px;
    margin-left: 10px;
    padding: 10px 16px;
  }
}

@keyframes fadeOut {
  from {
    width: 250px;
    margin-left: 10px;
    padding: 10px 16px;
  }
  to {
    width: 0px;
    margin-left: 10px;
    padding: 10px 0px;
  }
}
</style>
