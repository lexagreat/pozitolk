<template>
   <div class="wrapper lock-padding">
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>
<style lang="scss">
@import "@/assets/scss/style";
.notification { 
   width: 240px !important; 
   margin-top: 10px; 
   text-align: left; 
   display: flex; 
   align-items: center; 
   justify-content: center; 
   gap: 10px; 
   padding: 18px 16px; 
   box-shadow: 0px 1px 4px -1px #00000014; 
   button { 
      display: none; 
   } 
   &.is-error { 
      background-color: #ffe3e6; 
      color: #ff1919; 
   } 
   &.is-success { 
      background-color: #00a09933; 
   } 
}
</style>

<script setup>
import { useClientStore } from './stores/client/store';

const clientStore = useClientStore()
onMounted(() => {
   // clientStore.init()
})
</script>