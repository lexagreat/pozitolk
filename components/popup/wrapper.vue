<template>
   <div class="popup">
      <slot />
   </div>
</template>
<script setup>
onMounted(() => {
   const closes = document.querySelectorAll('.popup-close')
   closes.forEach(item => {
      item.onclick = () => {
         document.querySelector('.popup.active').classList.remove("active")
         document.querySelector('html').classList.remove('hidden')
      }
   })
})
</script>