<template>
    <button class="mr-2">
        <router-link :to="url">
            <small class="p-1 text-white" :class="color">
                {{ title }}
            </small>
        </router-link>
    </button>
</template>
<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>


