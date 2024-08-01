<script>
import {openCart} from "@/script/script.js";

export default {
  name: "Footer",
  methods: {
    openCart,
  },
  mounted() {
    this.cartModal = document.getElementById("cart-modal");
  }
}
</script>

<template>
  <button class="flex items-center gap-2 text-white font-bold" id="cart-btn" @click="openCart">
    (<span id="cart-count">0</span>)
    Ver Meu Carrinho
    <font-awesome-icon
        icon="fa fa-cart-plus"
        class="text-lg text-white"/>
  </button>
</template>
