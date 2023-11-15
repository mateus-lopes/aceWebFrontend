<template>
  <div class="ml-2 flow-root lg:ml-4">
    <div v-if="conected == true">
      <!-- CONECTED -->
      <button 
        class="flex items-center text-zinc-600"
        id="user-menu"
        aria-haspopup="true"
        aria-hidden="true"
      >
        <span class="sr-only">Open user menu</span>
        <ShoppingBagIcon @mouseover="open = true" class="h-6 w-6 flex-shrink-0 hover:text-black" aria-hidden="true" />
        <PopUpNav 
          :open="open"
          @mouseleave="open = false"
        >
          <p class="font-semibold pb-2">
            Seu carrinho na ace.com
          </p>
          <hr>
          <p class="py-2">
            Você ainda não tem produtos no carrinho
          </p>
          <!-- carrinho vazio ?? se n mostra btn de limpar -->
          <div v-if="false">
            <BtnLinkSmStroke2 title="Limpar Carrinho" />
          </div>
        </PopUpNav>
      </button>
    </div>
    <div v-else>
      <!-- NO CONECTED -->
      <button 
        class="flex items-center text-zinc-600"
        id="user-menu"
        aria-haspopup="true"
        aria-hidden="true"
        >
        <span class="sr-only">Open user menu</span>
        <ShoppingBagIcon @mouseover="open = true" class="h-6 w-6 flex-shrink-0 hover:text-black" aria-hidden="true" />
        <PopUpNav 
          :open="open"
          @mouseleave="open = false"
          class="w-96"
        >
          <p class="font-semibold pb-2">
            Seu carrinho na ace.com
          </p>
          <p class="py-2">Você não está conectado a uma conta, conecte-se para poder usar o carrinho</p>
          <BtnLinkSm title="Faça Login" />
        </PopUpNav>
      </button>
    </div>
    <span class="sr-only">view profile</span>
  </div>
</template>
<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import BtnLinkSm from '@/components/BtnLinkSm.vue'
import PopUpNav from './PopUpNav.vue';
import BtnLinkSmStroke2 from '../BtnLinkSmStroke2.vue';
const conected = true
const open = ref(false)
</script>