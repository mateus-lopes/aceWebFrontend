<template>
  <main class="w-full fixed top-0 left-0 z bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                      <button :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900', 'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-light']">{{ category.name }}</button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel v-for="category in navigation.categories" :key="category.name" class="space-y-10 px-4 pb-8 pt-10">
                    <div class="grid grid-cols-2 gap-x-4">
                      <div v-for="item in category.featured" :key="item.name" class="group relative text-sm">
                        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                          <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center" />
                        </div>
                        <a :href="item.href" class="mt-6 block font-light text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true" />
                          {{ item.name }}
                        </a>
                        <p aria-hidden="true" class="mt-1">Shop now</p>
                      </div>
                    </div>
                    <div v-for="section in category.sections" :key="section.name">
                      <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-light text-gray-900">{{ section.name }}</p>
                      <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading-mobile`" class="mt-6 flex flex-col space-y-6">
                        <li v-for="item in section.items" :key="item.name" class="flow-root">
                          <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{ item.name }}</a>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-light text-gray-900">{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-light text-gray-900">Sign in</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-light text-gray-900">Create account</a>
                </div>
              </div>

              <div class="border-t border-gray-200 px-4 py-6">
                <a href="#" class="-m-2 flex items-center p-2">
                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                  <span class="ml-3 block text-base font-light text-gray-900">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <!-- top line promotion -->
      <TopLine  />
      <!-- nav menu -->
      <div class="w-full">
        <nav aria-label="Top" class="w-full">
          <div class="block">
            <div class="flex h-16 items-center relative">
              <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden" @click="open = true">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>
              
              <!-- primeira parte Logo -->
              <div class="cursor-pointer mr-auto z-10 ml-10">
                <router-link class="" to="/">
                  <span class="sr-only">Ace</span>
                  <img class="h-12 w-auto" src="@/assets/img/logo-dark.png" alt="" />
                </router-link>
              </div>
              
              <!-- Flyout menus -->
              <div class="center">
                <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div class="flex h-full space-x-8 items-center">
                    <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                      <div class="relative flex">
                        <PopoverButton :class="[open ?  css_linkCategoryHover : css_linkCategory  ]" class="relative z-10 -mb-px flex items-center pt-px font-light transition-colors duration-200 ease-out focus:border-none focus:outline-none">
                          <!-- link da categoria -->
                          {{ category.name }}
                        </PopoverButton>
                      </div>

                      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">
                          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                          <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                          <div class="relative bg-white">
                            <div class="mx-auto max-w-7xl px-8">
                              <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                  <div v-for="item in category.featured" :key="item.name" class="group relative text-base sm:text-sm">
                                    <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center w-full" />
                                    </div>
                                    <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                      <span class="absolute inset-0 z-10" aria-hidden="true" />
                                      {{ item.name }}
                                    </a>
                                    <!-- menssagem em baixo da imagem -->
                                    <p aria-hidden="true" class="mt-1">Compre Agora</p>
                                  </div>
                                </div>
                                <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                  <div v-for="section in category.sections" :key="section.name">
                                    <p :id="`${section.name}-heading`" class="font-medium text-gray-900">{{ section.name }}</p>
                                    <ul role="list" :aria-labelledby="`${section.name}-heading`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li v-for="item in section.items" :key="item.name" class="flex">
                                        <a :href="item.href" class="hover:text-black hover:underline">{{ item.name }}</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </transition>
                    </Popover>
                    <a v-for="page in navigation.pages" :key="page.name" :href="page.href" :class="css_link" class="flex items-center font-light text-gray-700 hover:text-black">
                      {{ page.name }}
                    </a>
                  </div>
                </PopoverGroup>
              </div>

              <div class="ml-auto flex items-center z-10 mr-10">
                <!-- Search -->
                <div class="flex lg:ml-6">
                  <a href="#" class="p-2 text-gray-700 hover:text-black flex">
                    <span class="sr-only">Search</span>
                    <div :class="{'hidden' : !search}" class="transition-all opacity-100 w-full">
                        <input type="text" class="bg-gray-200 border-r-xl border-2">
                    </div>
                    <MagnifyingGlassIcon @click="search =! search" class="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Cart -->
                <div class="ml-4 flow-root lg:ml-6">
                  <a href="#" class="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon class="h-6 w-6 flex-shrink-0 text-zinc-600 hover:text-black" aria-hidden="true" />
                    <span class="ml-2 text-sm font-light text-zinc-600 group-hover:text-black">0</span>
                    <span class="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </main>
</template>

<script setup>
import TopLine from './TopLine.vue';
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const css_linkCategory = 'border-transparent text-gray-700 hover:text-black'
const css_linkCategoryHover = 'text-black font-medium'
const css_link = 'focus:font-medium'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Tênis',
      featured: [
        {
          name: 'ZOOMX',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/drr2pxeyc/image/upload/v1695964438/media/images/zk0l2c2nlziemawhsdxe.png',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'CUT MACHINES',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/drr2pxeyc/image/upload/v1695964438/media/images/b9ntcrfegmsal21ic2l7.png',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'destaques',
          name: 'Destaques',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'corrida',
          name: 'Masculino',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'acessorios',
          name: 'Feminino',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Acessórios',
      featured: [
        {
          href: '#',
          name: 'CUT MACHINES',
          imageSrc: 'https://res.cloudinary.com/drr2pxeyc/image/upload/v1695964438/media/images/b9ntcrfegmsal21ic2l7.png',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          href: '#',
          name: 'ZOOMX',
          imageSrc: 'https://res.cloudinary.com/drr2pxeyc/image/upload/v1695964438/media/images/zk0l2c2nlziemawhsdxe.png',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'destaques',
          name: 'Destaques',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'corrida',
          name: 'Masculino',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'acessorios',
          name: 'Feminino',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Lançamentos', href: '#' },
    { name: 'Ofertas', href: '#' },
    { name: 'SNKRS', href: '#' },
  ],
}

const open = ref(false)

const search = ref(false)

</script>
<style scoped>
  .z {
    z-index: 9999;
  }
  .center {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .left {
      position: absolute;
      top: .5em;
      bottom: 0;
      left: 2em;
      margin: auto;
      display: block;
      z-index: 9999;
  }
</style>