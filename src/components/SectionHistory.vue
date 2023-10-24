<template>
  <Container>
    <div class="w-full px-6 py-16 lg:p-0">
      <img src="@/assets/img/logo.png" class="w-2/6 m-auto" alt="" />
      <p class="text-center text-white py-4">
        Fundada em 1997 na cidade de São Paulo, estado Paulista, a intenção original da marca era
        criar calçados casuais e baratos, para pequenas cidades da região. Ao longo do tempo, a
        marca tornou-se mais próxima do esporte.
      </p>
      <p class="text-center text-gray-500">
        "Se você não arriscar nunca será capaz de saber aonde poderia chegar."
      </p>
      <IconsList />
    </div>
  </Container>
</template>
<script>
import Container from '@/components/Container.vue'
import IconsList from '@/components/IconsList.vue'

export default {
  components: {
    Container,
    IconsList
  }
}
</script>
