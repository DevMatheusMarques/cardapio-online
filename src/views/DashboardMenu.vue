<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "DashboardMenu",
  components: {Menu, Header}
}
</script>

<template>
  <Header/>
  <h1 class="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">Conheça Nosso Cardápio</h1>
  <Menu/>
</template>

<style scoped>

</style>