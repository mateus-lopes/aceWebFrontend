<template lang="">
    <div>
        <p :id="`${list.name}-heading`" class="font-medium text-gray-900">
            {{ list.name }}
        </p>
        <ul
            role="list"
            :aria-labelledby="`${list.name}-heading`"
            class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
        >
            <li v-for="item in list.items" :key="item" class="flex">
            <a :href="item" class="hover:text-black">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>