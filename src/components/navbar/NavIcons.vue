<template>
  <div class="ml-auto flex items-center z-10 mr-10">
    <!-- Search -->
    <SearchIcon />
    <!-- User -->
    <UserNav />
    <!-- Cart -->
    <CartNav />
  </div>
</template>
<script>
import SearchIcon from '@/components/navbar/SearchNav.vue'
import UserNav from '@/components/navbar/UserNav.vue'
import CartNav from '@/components/navbar/CartNav.vue'

export default {
  components: {
    SearchIcon,
    UserNav,
    CartNav
  }
}
</script>
