<script>
import Card from "@/components/Card.vue";

export default {
  name: "Menu",
  components: {Card}
}
</script>

<template>
  <main class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-5 mb-16">
    <Card
        src="/public/assets/hamb-1.png"
        alt="Burguer Smash"
        data-name="Burguer Smash"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="18.90"
    />
    <Card
        src="/public/assets/hamb-2.png"
        alt="Burguer Duplo"
        data-name="Burguer Duplo"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="32.90"/>
    <Card
        src="/public/assets/hamb-3.png"
        alt="Burguer da Casa"
        data-name="Burguer da Casa"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="35.90"/>
    <Card
        src="/public/assets/hamb-4.png"
        alt="Burguer Salada"
        data-name="Burguer Salada"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="30.00"/>
    <Card
        src="/public/assets/hamb-5.png"
        alt="Burguer da Galera"
        data-name="Burguer da Galera"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="26.00"/>
    <Card
        src="/public/assets/hamb-6.png"
        alt="Burguer Saboroso"
        data-name="Burguer Saboroso"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="23.00"/>
    <Card
        src="/public/assets/hamb-7.png"
        alt="Burguer Tradicional"
        data-name="Burguer Tradicional"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="22.00"/>
    <Card
        src="/public/assets/hamb-8.png"
        alt="Burguer Especial"
        data-name="Burguer Especial"
        data-description="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa."
        :data-price="30.00"/>
  </main>

  <h1 class="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">Bebidas</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
    <Card
        src="/public/assets/refri-1.png"
        alt="Refrigerante Coca-Cola Lata 350ml"
        data-name="Coca-Cola Lata 350ml"
        data-description="Refrigerante Coca-Cola Lata 350ml"
        :data-price="6.00" class="w-full flex gap-2"/>
    <Card
        src="/public/assets/refri-2.png"
        alt="Refrigerante Guaraná Antartica Lata 350ml"
        data-name="Guaraná Antartica Lata 350ml"
        data-description="Refrigerante Guaraná Antartica Lata 350ml"
        :data-price="6.00"/>
  </div>

</template>

<style scoped>

</style>