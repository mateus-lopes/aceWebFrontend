<template lang="">
    <div>
        <h2 class="text-xl font-bold pb-2 text-black">
            {{title}}
        </h2>
        <ul>
            <li v-for="(item, index) in links" :key="index" class="py-1">
                <router-link :to="item.link" class="hover:text-black text-sm">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        links: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style lang="">
    
</style>