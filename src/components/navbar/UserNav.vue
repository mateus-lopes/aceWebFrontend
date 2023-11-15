<template>
  <div class="ml-2 flow-root lg:ml-4">
    <a href="#" class="group -m-2 flex items-center p-2">
      <div v-if="conected == true">
        <!-- CONECTED -->
        <button class="flex items-center">
          <span class="sr-only">Open user menu</span>
          <img
            src="../../assets/img/test.jpg"
            class="h-7 w-7 flex-shrink-0 hover:opacity-75 rounded-full"
            alt=""
          />
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
          <UserIcon @mouseover="open = true" class="h-6 w-6 flex-shrink-0 hover:text-black" aria-hidden="true" />
          <PopUpNav 
            :open="open"
            @mouseleave="open = false"
          >
            <MessageUser :conected="false" />
            <BtnLinkSm title="Login" />
            <BtnLinkSmStroke title="Criar Conta" />
          </PopUpNav>
        </button>
      </div>
      <span class="sr-only">view profile</span>
    </a>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { UserIcon } from '@heroicons/vue/24/outline'
import BtnLinkSm from '@/components/BtnLinkSm.vue'
import BtnLinkSmStroke from '@/components/BtnLinkSmStroke.vue'
import MessageUser from './MessageUser.vue'
import PopUpNav from './PopUpNav.vue';
const conected = false
const open = ref(false)
</script>
