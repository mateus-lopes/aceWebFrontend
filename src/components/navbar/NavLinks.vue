<template>
  <div class="center">
    <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
      <div class="flex h-full space-x-8 items-center">
        <!-- links q possuem popover -->
        <Popover
          v-for="category in navigation.categories"
          :key="category.name"
          class="flex"
          v-slot="{ open }"
        >
          <div class="relative flex">
            <PopoverButton
              :class="[open ? css_linkCategoryHover : css_linkCategory]"
              class="relative z-10 -mb-px flex items-center pt-px font-light transition-colors duration-200 ease-out focus:border-none focus:outline-none"
            >
              <!-- nome do link (popover) -->
              {{ category.name }}
              <svg
                :class="[open ? css_linkCategoryHover : css_linkCategory]"
                class="-mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </PopoverButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">
              <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
              <div class="relative bg-white">
                <div class="mx-auto max-w-7xl px-8">
                  <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                    <div class="col-start-2 grid grid-cols-2 gap-x-8">
                      <!-- div promotion no navbar -->
                      <div
                        v-for="item in category.featured"
                        :key="item.name"
                        class="group relative text-base sm:text-sm"
                      >
                        <div
                          class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
                        >
                          <img
                            :src="item.imageSrc"
                            :alt="item.imageAlt"
                            class="object-cover object-center w-full"
                          />
                        </div>
                        <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true" />
                          {{ item.name }}
                        </a>
                        <p aria-hidden="true" class="mt-1">Compre Agora</p>
                      </div>
                    </div>
                    <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                      <NavLinksListVue :list="section_categories" />
                      <NavLinksListVue :list="section_acessories" />
                      <NavLinksListVue :list="section_genders" />
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <!-- links fora do popover -->
        <a
          v-for="page in navigation.pages"
          :key="page.name"
          :href="page.href"
          :class="css_link"
          class="flex items-center font-light text-gray-700 hover:text-black"
        >
          {{ page.name }}
        </a>
      </div>
    </PopoverGroup>
  </div>
</template>
<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { useCategoriesStore } from '@/stores/categories'
import { useGendersStore } from '@/stores/genders'
import { useTypeAcessoryStore } from '@/stores/type_acessories'
import { ref, onMounted } from 'vue'
import NavLinksListVue from './NavLinksList.vue'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    NavLinksListVue
  },
  setup() {
    const css_linkCategory = 'border-transparent text-gray-700 hover:text-black'
    const css_linkCategoryHover = 'text-black font-medium'
    const css_link = 'focus:font-medium'

    const categoriesStore = useCategoriesStore()
    const gendersStore = useGendersStore()
    const typeAcessoryStore = useTypeAcessoryStore()


    const section_categories = ref({
      id: 'categories',
      name: 'Categorias',
      items: []
    })
    const section_genders = ref({
      id: 'models',
      name: 'Gêneros',
      items: []
    })
    const section_acessories = ref({
      id: 'acessories',
      name: 'Acessórios',
      items: []
    })

    const fetchCategories = async () => {
      await categoriesStore.fetchCategories()
      await gendersStore.fetchGenders()
      await typeAcessoryStore.fetchTypeAcessory()
      section_categories.value.items = categoriesStore.allCategories
      section_genders.value.items = gendersStore.allGenders
      section_acessories.value.items = typeAcessoryStore.allTypeAcessory
    }

    onMounted(() => {
      fetchCategories()
    })

    const navigation = {
      categories: [
        {
          id: 'produtcs_navbar',
          name: 'Produtos',
          featured: [
            {
              name: 'ZOOMX',
              href: '#',
              imageSrc:
                'https://res.cloudinary.com/drr2pxeyc/image/upload/v1695964438/media/images/zk0l2c2nlziemawhsdxe.png',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
            },
            {
              name: 'CUT MACHINES',
              href: '#',
              imageSrc:
                'https://res.cloudinary.com/drr2pxeyc/image/upload/v1695964438/media/images/b9ntcrfegmsal21ic2l7.png',
              imageAlt:
                'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
            }
          ],
          sections: [
            section_categories,
            section_acessories,
            section_genders,
          ]
        }
      ],
      pages: [
        { name: 'Lançamentos', href: '#' },
        { name: 'Ofertas', href: '#' },
        { name: 'SNKRS', href: '#' }
      ]
    }
    return {
      navigation,
      css_linkCategory,
      css_linkCategoryHover,
      css_link,
      section_acessories,
      section_categories,
      section_genders
    }
  },
  props: {
    // provisorio
    open: {
      type: Boolean,
      required: true
    },
  },
}
</script>
