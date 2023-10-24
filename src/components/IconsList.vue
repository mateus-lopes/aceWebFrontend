<template>
  <ul class="flex justify-center items-center gap-3 py-4">
    <li>
      <router-link to="#" class="text-primary">
        <GetImg :src="facebook" class="w-8" alt="" />
      </router-link>
    </li>
    <li>
      <router-link to="#" class="text-primary">
        <GetImg :src="instagram" class="w-8" alt="" />
      </router-link>
    </li>
    <li>
      <router-link to="#" class="text-primary">
        <GetImg :src="twitter" class="w-8" alt="" />
      </router-link>
    </li>
  </ul>
</template>
<script>
// icons
import GetImg from '@/components/GetImg.vue'
import iconTwitter from '@/assets/img/icons/twitter.png'
import iconFfacebook from '@/assets/img/icons/facebook.png'
import iconInstagram from '@/assets/img/icons/instagram.png'

export default {
  components: {
    GetImg
  },
  data() {
    return {
      twitter: iconTwitter,
      facebook: iconFfacebook,
      instagram: iconInstagram
    }
  }
}
</script>
