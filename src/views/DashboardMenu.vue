<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import Cart from "@/components/Cart.vue";
import {closeCart, alertAddress, restaurantOpen, finishOrder} from "@/script/script.js";
import AlertRed from "@/components/AlertRed.vue";


export default {
  name: "DashboardMenu",
  components: {AlertRed, Cart, Footer, Menu, Header},
  methods: {
    closeCart,
  },
  mounted() {
    this.menu = document.getElementById("menu");
    this.cartBtn = document.getElementById("cart-btn");
    this.addCartBtn = document.querySelector(".add-cart-btn");
    this.cartModal = document.getElementById("cart-modal");
    this.cartItemsContainer = document.getElementById("cart-items");
    this.cartTotal = document.getElementById("cart-total");
    this.checkoutBtn = document.getElementById("checkout-bnt");
    this.closeModalBtn = document.getElementById("close-modal-btn");
    this.cartCounter = document.getElementById("cart-count");
    this.addressInput = document.getElementById("address");
    this.addressWarn = document.getElementById("address-warn");
    alertAddress(this);
    finishOrder(this);
    restaurantOpen();
  }
}
</script>

<template>
  <Header/>
  <h1 class="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">Conheça Nosso Cardápio</h1>
  <Menu id="menu"/>
  <Footer class="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center"/>
  <Cart id="cart-modal" @click="closeCart"/>
  <AlertRed />
</template>
