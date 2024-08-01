<script>
export default {
  name: "AlertRed"
}
</script>

<template>
  <!-- Alert Container -->
  <div id="alert" class="fixed top-5 right-5 bg-red-500 text-white p-4 rounded-lg shadow-lg z-[99] hidden">
    <span class="font-semibold mr-2 flex align-center justify-center" id="duration">Aviso!</span><p id="alert-message">Mensagem</p>
  </div>

</template>

<style scoped>
</style>