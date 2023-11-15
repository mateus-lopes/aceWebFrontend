<template>
    <div>
        <div v-if="conected" class="w-72">
            <p class="font-semibold pb-2">
                Boas vindas Mateus
            </p>
        </div>
        <div v-else class="w-96">
            <p class="font-semibold pb-2">
                Boas vindas à ACE
            </p>
            <p>
                Minha conta
            </p>
            <ul class="list-disc pl-4 py-2">
                <li>Faça pedidos de forma rápida e simples</li>
                <li>Visualize os pedidos e acompanhe o status de envio</li>
                <li>Crie e acesse uma lista dos seus produtos</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        conected: {
            type: Boolean,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>