<template lang="">
    <button class="border border-white bg-primary p-2 text-white hover:bg-primary-dark cursor-pointer transition-all">
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