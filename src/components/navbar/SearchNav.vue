<template>
  <div class="ml-2 flow-root lg:ml-4">
    <div>
      <!-- CONECTED -->
      <button class="flex items-center">
        <span class="sr-only">Open user menu</span>
        <MagnifyingGlassIcon @mouseover="search = true" class="h-6 w-6 flex-shrink-0 hover:text-black" aria-hidden="true" />
      </button>
    </div>
    <PopUpNav 
      :open="search"
      class="w-96"
      @mouseleave="search = false"
    >
      <div class="flex">
        <input class="bg-slate-50 border" type="text" v-model="input" placeholder="Digite o texto aqui..." />
        <BtnLinkSm class="border-primary" title="Buscar" @click="toogleSearch()" />
      </div>
      <hr>
      <p class="text-slate-500">Você ainda não tem pesquisas recentes</p>
      <!-- <p class="text-slate-500">Ultimas Pesquisas...</p> -->
    </PopUpNav>
    <span class="sr-only">view profile</span>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import BtnLinkSm from '@/components/BtnLinkSm.vue'
import PopUpNav from './PopUpNav.vue';

const search = ref(false)

let input = ref('')
function toogleSearch() {
  input.value = ''
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 10px 16px;
}

input:hover {
  border-bottom: 1px solid #000;
}

input:focus,
input:active {
  border-bottom: 1px solid #000;
  outline: none;
}
</style>
