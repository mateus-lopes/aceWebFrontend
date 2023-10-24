<template>
  <img :src="getUrl(url)" alt="" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    getUrl(x) {
      return x
    }
  }
}
</script>
