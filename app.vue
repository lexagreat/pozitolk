<template>
   <div class="wrapper lock-padding">
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>
<style lang="scss">
@import "@/assets/scss/style";
</style>

<script setup>
import { useClientStore } from './stores/client/store';

const clientStore = useClientStore()
onMounted(() => {
   // clientStore.init()
})
</script>