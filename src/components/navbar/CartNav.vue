<template>
  <div class="ml-4 flow-root lg:ml-6">
    <a href="#" class="group -m-2 flex items-center p-2">
      <ShoppingBagIcon
        class="h-6 w-6 flex-shrink-0 text-zinc-600 hover:text-black"
        aria-hidden="true"
      />
      <span class="ml-2 text-sm font-light text-zinc-600 group-hover:text-black">0</span>
      <span class="sr-only">items in cart, view bag</span>
    </a>
  </div>
</template>
<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'
</script>
