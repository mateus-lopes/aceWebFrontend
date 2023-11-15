<template lang="">
    <div :class="[open ? 'flex openAnimation' : 'hidden leaveAnimation']" class="absolute bg-white p-4 pr-8 text-sm font-light flex-col gap-2 text-left top-16 right-0 z-50">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<!-- <style scoped>
.openAnimation {
    animation: open 0.5s ease-in-out;
}

@keyframes open {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.leaveAnimation {
    animation: leave 0.5s ease-in-out;
}

@keyframes leave {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style> -->