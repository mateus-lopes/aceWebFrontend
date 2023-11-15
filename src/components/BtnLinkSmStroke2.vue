<template lang="">
    <button class="border hover:text-white hover:bg-primary p-2 text-primary-dark border-primary-dark cursor-pointer transition-all">
        {{ title }}
    </button>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>