<template>
    <div class="flex lg:ml-6">
        <a href="#" class="p-2 text-gray-700 hover:text-black flex lg:relative">
            <span class="sr-only">Search</span>
            <div :class="{'jones' : !search}" class="jones-div flex justify-center items-center absolute right-0 -bottom-6 lg:top-5 lg:bottom-auto lg:right-16">
                <div class="flex w-full justify-center">
                    <input 
                        type="text" 
                        class="
                            w-10/12 
                            lg:w-auto 
                            bg-gray-600 
                            text-gray-200 
                            focus:outline-none 
                            focus:border 
                            focus:border-gray-500 
                            p-2 
                            pl-3 
                            rounded-l-lg
                        " 
                        placeholder="Digite aqui..."
                    />
                    <button class="w-auto flex items-center justify-center bg-gray-900 px-2 lg:px-4 text-white rounded-r-lg">
                        <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <MagnifyingGlassIcon @click="search =! search" class="h-6 w-6" aria-hidden="true" />
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
const search = ref(true)
</script>
<style scoped>
.jones-div.jones {
    width: 100vw;
    animation-name: fadeIn;
    animation-duration: .3s;
    opacity: 1;
}

.jones-div {
    opacity: 0;
    width: 0px;
    height: 0px;
    animation-name: fadeOut;
    animation-duration: .3s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        width: 100vw;
        opacity: 1;
    }
    to {
        width: 100vw;
        opacity: 0;
    }
}

@media screen and (min-width: 1024px) {
    .jones-div.jones {
        width: auto; 
    }

    @keyframes fadeOut {
    from {
        width: auto;
        opacity: 1;
    }
    to {
        width: auto;
        opacity: 0;
    }
}
}   

</style>