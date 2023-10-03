<template>
    <div class="flex lg:ml-6">
        <a href="#" class="p-2 text-gray-700 hover:text-black flex relative">
            <span class="sr-only">Search</span>
            <div :class="{'hidden' : !search}" class="opacity-100 absolute right-16 top-1">
                <input type="text" class="bg-gray-100 focus:outline-none focus:bg-gray-200 text-gray-600 p-1.5 pl-3 rounded-lg" placeholder="Digite aqui...">
            </div>
            <MagnifyingGlassIcon @click="search =! search" class="h-6 w-6" aria-hidden="true" />
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
const search = ref(false)
</script>