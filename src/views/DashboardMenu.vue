<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DashboardMenu",
  components: {Footer, Menu, Header}
}
</script>

<template>
  <Header/>
  <h1 class="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">Conheça Nosso Cardápio</h1>
  <Menu/>
  <Footer class="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center"/>
</template>
