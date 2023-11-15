<template lang="">
    <button class="border border-white bg-white p-2 hover:text-primary-dark hover:border-primary-dark cursor-pointer transition-all">
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