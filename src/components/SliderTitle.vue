<template>
  <div>
    <h1
      class="uppercase detail-line pt-10 flex justify-center items-center text-2xl"
      :class="{ 'text-white': dark }"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
