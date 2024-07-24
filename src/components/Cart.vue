<script>
export default {
  name: "Cart"
}
</script>

<template>
  <div class="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] hidden items-center justify-center">
      <div class="bg-white p-5 rounded-2xl min-w-[90%] md: min-w-[600px]:">
        <h2 class="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
        <div id="cart-items" class="flex justify-between mb-2 flex-col"></div>
        <p class="font-bold">Total: <span id="cart-total">0.00</span></p>
        <p class="font-bold mt-4">Endereço de Entrega:</p>
        <input
            type="text"
            name="address"
            id="address"
            placeholder="Digite seu endereço"
            class="w-full border-2 p-1 rounded my-1"
            required>
      </div>

      <p class="font-bold mt-4">Observação:</p>
      <input
          type="text"
          name="observation"
          id="observation"
          placeholder="Digite seu endereço"
          class="w-full border-2 p-1 rounded my-1" required>

      <p class="text-red-500 hidden" id="address-warn">Digite seu endereço completo!</p>

      <div class="flex items-center justify-between mt-5 w-full">
        <button id="close-btn">Fechar</button>
        <button id="checkout-bnt" class="bg-green-500 text-white px-4 py-1 rounded">Finalizar Pedido</button>
      </div>
  </div>
</template>

<style scoped>

</style>