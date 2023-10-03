<template>
    <div class="ml-2 flow-root lg:ml-4">
        <a href="#" class="group -m-2 flex items-center p-2">
            <div v-if="(conected == true)">
                <img src="../../assets/img/test.jpg" class="h-7 w-7 flex-shrink-0 hover:opacity-75 rounded-full" alt="">             </div>
            <div v-else>
                <UserIcon class="h-6 w-6 flex-shrink-0 text-zinc-600 hover:text-black" aria-hidden="true" />
            </div>
            <span class="sr-only">view profile</span>
        </a>
    </div>
</template>
<script setup>
import { UserIcon } from '@heroicons/vue/24/outline'
const conected = false;
</script>