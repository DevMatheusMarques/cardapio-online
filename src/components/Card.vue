<script>
export default {
  name: "CardBurger",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    dataName: {
      type: String,
      required: true,
    },
    dataDescription: {
      type: String,
      required: true,
    },
    dataPrice: {
      type: Number,
      required: true
    }
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.dataPrice);
    }
  }
}
</script>

<template>
  <div class="flex gap-2 box-border shadow-md p-4 rounded-2xl">
    <img
        :src="src"
        :alt="alt"
        class="w-28 h-28 rounded-md mt-5 sm:mt-0.5 md:mt-5 lg:mt-0.5 2xl:mt-5 hover:scale-110 hover:-rotate-2 duration-300">

    <div class="w-full">
      <p class="font-bold">{{ dataName }}</p>
      <p class="text-sm">{{ dataDescription }}</p>

      <div class="flex items-center gap-2 justify-between mt-3">
        <p class="font-bold text-lg">{{ formattedPrice }}</p>
        <button class="bg-gray-900 px-5 py-2 rounded text-white hover:bg-gray-700">
          <font-awesome-icon
              icon="fa fa-cart-plus"
              class="text-lg"/>
        </button>
      </div>
    </div>
  </div>
</template>

