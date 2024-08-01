<script>
export default {
  name: "Header",
}
</script>

<template>
  <header class="w-full h-[420px] bg-zinc-900 bg-backgroundBanner bg-cover bg-center">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <img src="/public/assets/hamb-1.png"
           alt="Logotipo"
           class="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200">
      <h1 class="text-2xl mt-4 mb-2 font-bold text-white px-2 sm:text-4xl">Império Hamburgueria</h1>
      <span class="text-white font-medium text-xs sm:text-base">Rua das Flores, 89, Centro - Presidente Prudente/SP</span>
      <div class="bg-green-600 px-4 py-1 rounded-lg mt-5" id="date-span">
        <span class="text-white font-medium sm:text-lg">Segunda a Domingo - 18:00 as 23:00</span>
      </div>
    </div>
  </header>
</template>
